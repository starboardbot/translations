const { parse, TYPE } = require("@formatjs/icu-messageformat-parser")
const { writeFileSync } = require("fs")
const messages = require("../languages/en-GB")
let res = [] // `export = {}`
const parseNode = node => {
  switch (node.type) {
    case TYPE.argument:
      return `${node.value}: string,`
    case TYPE.number:
    case TYPE.plural:
      return `${node.value}: number,`
    case TYPE.date:
    case TYPE.time:
      return `${node.value}: Date,`
    case TYPE.select:
      const expl = Object.keys(node.options).filter(k => k !== "other")
      const notOther = expl[0]
      let value
      if (expl.length > 1) value = expl.map(v => isNaN(v) ? `"${v}"` : v).join(" | ")
      else if (!isNaN(notOther)) value = "number"
      else if (notOther === "null") value = "string | null"
      else if (notOther === "true" || notOther === "false") value = "boolean"
      else if (notOther === "channel") value = `"channel" | "server"`
      return `${node.value}: ${value},`
  }
}

const flattenAST = ast => {
  for (const node of ast)
    if (node.type === TYPE.select || node.type === TYPE.plural)
      for (const option of Object.values(node.options))
        for (const child of option.value) {
          const temp = [child]
          flattenAST(temp)
          ast.push(...temp)
        }
}

const iterate = (obj, key = "") => {
  for (const i in obj) {
    const str = Array.isArray(obj[i]) ? obj[i].join("\n") : obj[i]
    if (typeof str === "object") iterate(str, key + i + ".")
    else if (typeof str === "string" && str.includes("{")) {
      let obj = []
      let keys = []
      console.log("writing types for", key + i)
      const ast = parse(str, { ignoreTag: true })
      flattenAST(ast)
      // console.log(ast)

      for (const node of ast) {
        if (keys.includes(node.value)) continue
        const field = parseNode(node)
        if (!field) continue
        obj.push(field)
        keys.push(node.value)
      }
      res.push(
        `"${key + i}": {\n    ${obj.join("\n    ")}\n  },`
      )
    }
  }
}
iterate(messages)

writeFileSync("./types.d.ts", `
declare type MessageParameters = {
  ${res.join("\n  ")}
}
export = MessageParameters
`.trim())