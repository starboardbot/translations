const { readdirSync } = require("fs")

const checkCommandDescriptions = function* (obj, key = "") {
  for (const i in obj) {
    const str = Array.isArray(obj[i]) ? obj[i].join("") : obj[i]
    if (typeof str === "object") yield * checkCommandDescriptions(str, key + i + ".")
    else if (typeof str === "string") {
      if ((key.startsWith("COMMANDS.")) && str.length > 100) yield [key + i, str.length]
    }
  }
}

const length = function* (obj, key = "") {
  if (typeof obj === "string") yield [key, obj.length]
  else {
    let n = 0
    for (const i in obj) {
      const str = Array.isArray(obj[i]) ? obj[i].join("") : obj[i]
      for (const [_, len, isTotal] of length(str, (key && (key + ".")) + i)) {
        yield [_, len, isTotal]
        if (!isTotal) n += len
      }
    }
    yield [key, n, true]
  }
}

for (const messages of readdirSync(`${__dirname}/../translations`)
  .filter(f => f.endsWith(".json"))
  .map(locale => require(`../translations/${locale}`))) {
  console.log("COMMANDS:")
  for (const [key, len] of length(messages)) {
    if (key.startsWith("COMMANDS.") && key.split(".").length === 2) {
      const id = key.split(".")[1]
      if (len > 4000) {
        console.log(`WARNING: ${messages.name} ${id} command translations exceed the Discord limit of 4000 chatacters. (${len})`)
        for (const [subKey, len] of length(messages.COMMANDS[id], key)) {
          if (subKey.split(".").length !== 3) continue
        console.log(`  !!!    ${subKey} is of length ${len}.`)
        }
      }
      else
        console.log(`   -     ${messages.name} ${id} command contains ${len} characters.`)
    }
    else if (key === "") console.log(`${"--".repeat(40)}\n${messages.name} has ${len.toLocaleString()} characters across ${Object.keys(messages).length - 2} translations!`)
  }

  console.log("")
  for (const [key, length] of checkCommandDescriptions(messages))
    console.log("WARNING:", `${messages.name} translation ${key} is over 100 characters in length. (${length})`)
}

console.log("")