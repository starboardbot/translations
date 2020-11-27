module.exports = {
  name: "English (US)",
  HELLO_WORLD: "Hello world!",
  
  // miscellaneous
  IMAGE: num => `Image${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `GIF Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Media${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred message embed
  CLICK_TO_JUMP: deleted =>
    !deleted ? "Click to jump to message!" : "Context (message was deleted)",
  SHORT_CLICK_TO_JUMP: deleted =>
    !deleted ? "Click!" : "Context",
  REFERENCED_MESSAGE: isReply =>
    isReply ? "Replying to this message" : "Referenced Message",
  TWEET: (authorName, number) => `Tweet${number && typeof number === "number" ? ` ${number}` : ""} from ${authorName}`,

  // languages
  ENGLISH: "English",
  LITHUANIAN: "Lithuanian",
  TURKISH: "Turkish",
}