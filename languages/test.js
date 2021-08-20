const LOCALE = "test"

module.exports = {
  name: 'Test',
  HELLO_WORLD: 'hello world lol',
  TWEET: authorName => `tweet from ${authorName}`,
  FROM_SERVER: server => `from ${server}`,
  GET_STARTED: 'get started',
  GET_STARTED_EMBED: (req, prefix) => `i found a channel named \`#starboard\` so i'm throwing all starred messages here now lol deal with it but you can change it later tho so like idk
  right now messages need ${req} star reactions to get posted in this channel, and go set up the server with \`${prefix}setup\`
  also have fun or whatever lol`,
  GET_STARTED_FOOTER: 'yooOO you used my bot'
}