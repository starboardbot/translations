module.exports = {
  name: "English (GB)",
  HELLO_WORLD: "Hello world!",

  // miscellaneous - could be used anywhere
  IMAGE: num => `Image${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `GIF Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Media${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred message embed - stuff that shows up in starboard message embeds
  CLICK_TO_JUMP: deleted =>
    !deleted ? "Click to jump to message!" : "Context (message was deleted)",
  SHORT_CLICK_TO_JUMP: deleted =>
    // if for whatever reason there are 25 fields and content over 1928 and less than 1947 chars
    !deleted ? "Click!" : "Context",
  REFERENCED_MESSAGE: (isReply, deleted) =>
    isReply ? `Replying to this message${deleted ? " (deleted)" : ""}` : "Referenced Message",
  TWEET: (authorName, number) => `Tweet${number && typeof number === "number" ? ` ${number}` : ""} from ${authorName}`,
  UNKNOWN: tag => `Unknown${tag ? "#0000" : ""}`,
  FROM_SERVER: server => `From ${server}`,
  TRASHED_EMBED: (reason, userList, removeTrashCommand) => 
  `This message has been trashed/removed by a moderator.
  ${reason ? `**Reason**: ${reason}\n` : ""}
  If my calculations are correct, the first few people to star this message should've been:
  ${userList}

  Feel free to delete this message after punishing these people if you need to.
  This message can no longer be starred, ever. However, if you want this message to get starred again, you can remove it from the trash with \`${removeTrashCommand}\``
  .stripIndents(),

  // upon joining a server
  GET_STARTED: "Get Started",
  GET_STARTED_EMBED: (req, prefix) => `I've detected a channel named \`#starboard\`, so this is now where all starred messages will go. You can change this later.
  Currently in this server, messages need to have ${req} star reactions to get posted in this channel, which can be changed.
  You can set the server up properly with \`${prefix}setup\`, this will walk you through all the settings.
  And most importantly, have fun!`,
  GET_STARTED_FOOTER: "Thank you for using Starboard!",

  // languages
  LANGUAGES: {
    ENGLISH: "English",
    LITHUANIAN: "Lithuanian",
    TURKISH: "Turkish",
  }
}
