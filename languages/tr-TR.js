module.exports = {
  name: "Turkish",
  HELLO_WORLD: "Merhaba dünya!",
  
  // miscellaneous
  IMAGE: num => `Resim${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `GIF Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Medya${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred message embed
  CLICK_TO_JUMP: deleted =>
    !deleted ? "Mesaja gitmek için tıklayın!" : "Kaynak (mesaj silinmiş)",
  SHORT_CLICK_TO_JUMP: deleted =>
    !deleted ? "Tıkla!" : "Kaynak",
  REFERENCED_MESSAGE: isReply =>
    isReply ? "Bu mesajı yanıtlıyor" : "Referans Mesaj",
  TWEET: (authorName, number) => `Tweet${number && typeof number === "number" ? ` ${number}` : ""} ${authorName} tarafından`,

  // languages
  LANGUAGES: {
    EN_GB: "İngilizce",
    EN_US: "İngilizce",
    LT_LT: "Litvanyaca",
    TR_TR: "Türkçe",
    FUWWY: "Fuwwy",
  }
}