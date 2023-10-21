const { readdirSync } = require("fs")

const check = function* (obj, key = "") {
  for (const i in obj) {
    const str = Array.isArray(obj[i]) ? obj[i].join(" ") : obj[i]
    if (typeof str === "object") yield * check(str, key + i + ".")
    else if (typeof str === "string") {
      if ((key.startsWith("COMMANDS.")) && str.length > 100) yield [key + i, str.length]
    }
  }
}

for (const messages of readdirSync(`${__dirname}/../translations`)
  .filter(f => f.endsWith(".json"))
  .map(locale => require(`../translations/${locale}`))) {
  for (const [key, length] of check(messages))
    console.log("WARNING:", `${messages.name} translation ${key} is over 100 characters in length. (${length})`)
}