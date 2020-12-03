module.exports = {
  name: "Bosnian",
  HELLO_WORLD: "Zdravo svijete!",

  // misc
  IMAGE: num => `Image${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `GIF Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Media${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred
  CLICK_TO_JUMP: deleted =>
    !deleted ? "Kliknite da skoci na poruku!" : "Kontekst (poruka je izbrisana)",
  SHORT_CLICK_TO_JUMP: deleted =>
    // longpost
    !deleted ? "Kliknite!" : "Kontekst",
  REFERENCED_MESSAGE: isReply =>
    isReply ? "Odgovaranje na ovu poruku" : "Referencirana Poruka",
  TWEET: (authorName, number) => `Tweet${number && typeof number === "number" ? ` ${number}` : ""} od ${authorName}`,
  UNKNOWN: tag => `Unknown${tag ? "#0000" : ""}`,
  FROM_SERVER: server => `Od ${server}`,
  TRASHED_EMBED: (reason, userList, removeTrashCommand) => 
  `Ovu poruku je uklonio zbog Moderator.
  ${reason ? `**Razlog**: ${reason}\n` : ""}
  Ako sam siguran,  prvi ljudi ko su prikvačili ovu poruku su:
  ${userList}

  Ako je potrebno, uklonite ovu poruku kad završite sa problema.
  Ovu poruku više nemoguće da označiti, ikad. Ako želite označiti ovu poruku, možete da vratiti sa \`${removeTrashCommand}\``
  .stripIndents(),

  // languages
  LANGUAGES: {
    ENGLISH: "Engleski",
    LITHUANIAN: "Litvanski",
    TURKISH: "Turski",
    BOSNIAN: "Bosanski",
  }
}
