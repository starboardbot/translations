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
  REFERENCED_MESSAGE: isReply =>
    isReply ? "Replying to this message" : "Referenced Message",
  TWEET: (authorName, number) => `Tweet${number && typeof number === "number" ? ` ${number}` : ""} from ${authorName}`,
  UNKNOWN: tag => `Unknown${tag ? "#0000" : ""}`,
  FROM_SERVER: server => `From ${server}`,
  TRASHED_EMBED: (reason, userList, removeTrashCommand) => ``, // will do later (todo)

  // languages
  LANGUAGES: {
    ENGLISH: "English",
    LITHUANIAN: "Lithuanian",
    TURKISH: "Turkish",
  }
}
