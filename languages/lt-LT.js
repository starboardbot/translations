module.exports = {
  name: "Lithuanian",
  HELLO_WORLD: "Sveikas pasauli!",
  
  // miscellaneous
  IMAGE: num => `Nuotrauka${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `GIF Filmukas${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Filmukas${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Medija${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred message embed
  CLICK_TO_JUMP: deleted =>
    !deleted ? "Paspausk kad pamatytum žinutę!" : "Kontekstas (žinutė buvo ištrinta)",
  SHORT_CLICK_TO_JUMP: deleted =>
    !deleted ? "Paspausk!" : "Kontekstas",
  REFERENCED_MESSAGE: isReply =>
    isReply ? "Atsakoma į šią žinutę" : "Nurodoma žinutė",
  TWEET: (authorName, number) => `Tweetinti${number && typeof number === "number" ? ` ${number}` : ""} nuo ${authorName}`,

  // languages
  LANGUAGES: {
    EN_GB: "Lietuvių kalba",
    EN_US: "Lietuvių kalba",
    LT_LT: "Turkų kalba",
    TR_TR: "Anglų kalba",
  }
}