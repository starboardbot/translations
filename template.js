module.exports = {
  name: "Language",
  HELLO_WORLD: "Hello world!",
  
  // miscellaneous
  IMAGE: num => ``,
  GIF_VIDEO: num => ``,
  VIDEO: num => ``,
  MEDIA: num => ``,
  
  // starred message embed
  CLICK_TO_JUMP: deleted =>
    !deleted ? "" : "",
  SHORT_CLICK_TO_JUMP: deleted =>
    !deleted ? "" : "",
  REFERENCED_MESSAGE: isReply =>
    isReply ? "" : "",
  TWEET: (authorName, number) => ``,
}