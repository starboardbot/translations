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
  UNKNOWN: tag => `Bilinmeyen${tag ? "#0000" : ""}`,
  FROM_SERVER: server => `${server}'dan`,
  TRASHED_EMBED: (reason, userList, removeTrashCommand) => 
  `Bu mesaj bir moderatör tarafından kaldırılmıştır/çöpe atılmıştır.
  ${reason ? `**Sebep**: ${reason}\n` : ""}
  Eğer hesaplamalarım doğruysa bu mesajı ilk yıldızlayan kişi:
  ${userList}
  İşiniz bittiğinde bu mesajı silmekten çekinmeyin.
  Bu mesaj artık yıldızlanamaz. Ancak, bu mesajın tekrar yıldızlanabilmesini istiyorsanız, mesajı çöpten şu komutla çıkarabilirsiniz: \`${removeTrashCommand}\``
  .stripIndents(),

  // upon joining a server
  GET_STARTED: "Başla",
  GET_STARTED_EMBED: (req, prefix) => `\`#starboard\` isimli bir kanal tespit ettim, bu yüzden yıldızlanan mesajlar artık oraya gidecek. Bunu sonra değiştirebilirsiniz.
  Şu anda bu sunucuda mesajların bu kanala atılabilmesi için ${req} tane yıldız tepkisi alması gerekmektedir. Bunu sonra değiştirebilirsiniz.
  Bu sunucuyu tam olarak kurmak için \`${prefix}setup\` komutunu çalıştırabilirsiniz. Bu komut tüm ayarları kurmanıza yardımcı olacaktır.
  Ve en önemlisi, eğlenin!`,
  GET_STARTED_FOOTER: "Starboard'ı kullandığınız için teşekkürler!",

  // languages
  LANGUAGES: {
    EN_GB: "İngilizce",
    EN_US: "İngilizce",
    LT_LT: "Litvanyaca",
    TR_TR: "Türkçe",
    FUWWY: "Fuwwy",
  }
}
