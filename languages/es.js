const LOCALE = "es"

module.exports = {
  name: "Español",
  HELLO_WORLD: "¡Hola Mundo!",

  // miscellaneous - could be used anywhere
  IMAGE: num => `Imagen${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `Vídeo GIF${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Vídeo${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Multimedia${typeof num === "number" && num ? ` ${num}` : ""}`,
  FILE: num => `Archivo${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred message embed - stuff that shows up in starboard message embeds
  CLICK_TO_JUMP: deleted =>
    !deleted ? "¡Haz clic para ir al mensaje!" : "Contexto (el mensaje fue eliminado)",
  SHORT_CLICK_TO_JUMP: deleted =>
    // if for whatever reason there are 25 fields and content over 1928 and less than 1947 chars
    !deleted ? "¡Haz clic!" : "Contexto",
  REFERENCED_MESSAGE: (isReply, deleted, user) =>
    isReply ? `Respondiendo a ${user || "este mensaje"}${deleted ? " (eliminado)" : ""}` : "Mensaje Referenciado",
  TWEET: authorName => `Tweet from ${authorName}`,
  UNKNOWN: tag => `Desconocido${tag ? "#0000" : ""}`,
  FROM_SERVER: server => `De ${server}`,
  TRASH_EMBED: (reason, userList, removeTrashCommand) => 
  `Este mensaje fue eliminado/agregado a la basura por un moderador..
  ${reason ? `**Razón**: ${reason}\n` : ""}
  Si mis cálculos son correctos, las primeras pocas personas que marquen este mensaje con una estrella deberían ser:
  ${userList}

  Siéntete libre de eliminar este mensaje después de sancionar a estas personas si lo necesitas.
  Este mensaje ya no puede ser marcado con una estrella, nunca. Sin embargo, si quieres que este mensaje sea marcado de nuevo, puedes eliminarlo de la basura con \`${removeTrashCommand}\``
  .stripIndents(),

  // upon joining a server
  GET_STARTED: "Empezar",
  GET_STARTED_EMBED: (req, prefix) => `He detectado un canal llamado \`#starboard\`, así que este será al cual todos los mensajes marcados con una estrella iran. Puedes modificar esto después.
  Actualmente en este servidor, los mensajes deben tener ${req} reacciones de estrella para ser publicados en este canal, lo cual puede ser modificado.
  Puedes configurar el servidor adecuadamente con \`${prefix}setup\`, esto te guiará por todos los ajustes.
  Y sobre todo, ¡pasala bien!`.stripIndents(),
  GET_STARTED_FOOTER: "¡Gracias por usar Starboard!",

  // message event
  CANT_SPEAK: "¡No puedo hablar en ese canal! Por favor haz que un moderador cambie mis permisos en ese canal, o intenta usarme en otro canal.",
  PREFIX_INFO: (prefixes = ["star "]) => `Mi prefijo en este servidor es${prefixes.length > 1 ? " cualquiera de" : ""} \`${prefixes.join("`, `")}\`, pero mi mención también funciona como un prefijo.`,
  HELP: "Ayuda",

  NEED_VOTE: doThis => `Para ${doThis}, debes **[votar por el bot](https://top.gg/bot/655390915325591629/vote)**. Una vez hayas votado, debes esperar unos minutos para que reciba tu voto.`,
  NEED_PREMIUM: doThis => `Para ${doThis}, tu servidor debe ser un **[Servidor Premium](https://patreon.com/TheNoob27)**.`,
  STAR_REQ_FEAT: "cambiar los requisitos para que diferentes emojis de estrella aparezcan",
  EMOJIS_FEAT: "cambiar los emojis",
  DOWNVOTE_FEAT: "votar en contra de mensajes marcados con una estrella",
  MULTIPLE_EMOJIS_FEAT: "tener varios emojis a la vez",
  CHANNEL_SETTINGS_FEAT: "tener más de 10 sets de ajustes de canales",
  AUTO_STAR_FEAT: "habilitar marcado automatico con una estrella",

  FIND_USER_MORE_SPECIFIC: users => `Por favor sea más específico, encontré ${users} usuarios correspondientes a su entrada.`,
  FIND_USER_PROMPT: list => `Encontré múltiples usuarios correspondientes a su entrada:
  ${list}
  Por favor responda con el número del usuario que desea.`.stripIndents(),

  SETTINGS: { // prefix, isPremium, channelSettingName
    STARBOARD_ID: (p, _prm, name) => `Aquí es donde aparecen los mensajes marcados con una estrella irán. Si deseas remover el starboard establecido, ejecuta \`${p}changesetting${name && ` ${name}`} ningún starboard\`.`,
    NSFW_STARBOARD_ID: "Aquí es donde los mensajes marcados con una estrella de canales NSFW irán. Si no está establecido, los mensajes de canales NSFW irán al starboard normal, con las imágenes marcadas como spoiler.",
    REQUIRED: "Esta es la cantidad de estrellas que un mensaje necesita para llegar al starboard.",
    REQUIRED_TO_REMOVE: "Cuando un mensaje en el starboard desciende a este número, será eliminado de el starboard.",
    LANGUAGE: (_p, _pm, name) => `El idioma del ${name && name !== "server" ? "canal" : "servidor"}. Los idiomas actualmente disponibles son ${Object.values(module.exports.LANGUAGES).join(", ")}.`,
    PERMISSION: `Este es el permiso que los usuarios necesitan antes de realizar múltiples acciones, como agregar mensajes a la basura, cambiar ajustes y agregar usuarios a la lista negra.
    Al cambiar el permiso, puedes introducir algo como \`MANAGE_MESSAGES\`, \`Manage Messages\`, \`Manage-Messages\` o \`8192\`. Para múltiples permisos, usa una calculadora de permisos.`.stripIndents(),
    ON_DELETION: "Esto es lo que debe suceder cuando un moderador elimina un mensaje en el starboard. Repost significa que el mensaje de el starboard será publicado de nuevo automáticamente, freeze significa que el mensaje marcado con una estrella se congela y trash significa que el mensaje marcado con una estrella es agregado a la basura.",

    LINK_DELETES: "Si un mensaje es eliminado, el mensaje en la starboard será automáticamente eliminado.",
    FILTER_BOTS: "Si los bots deberían o no ser filtrados fuera del starboard.",
    STAR_SELF: "Si los usuarios pueden marcar con una estrella sus propios mensajes.",
    WATCHING: `Esto es si quieres todas las características de Starboard sin publicar mensajes a un starboard.
    Supongo que esto es útil si tienes un servidor con otro bot Starboard, aunque este ajuste solo fue hecho para el servidor de Discord de Discord Bot List, en el cual el bot ya no se encuentra. Este ajuste podría ser eliminado en el futuro.`,
    VISIBLE: (p, _prm, name) => `Esto determina si los usuarios pueden o no encontrar los mensajes del ${name && name !== "server" ? "canal" : "servidor"} en \`${p}explore\`, y si este servidor aparece o no en la tabla de mejores servidores (\`${p}leaderboard servers\`).`,
    CLEAN: "Con esto habilitado, **[¡Haz clic para ir al mensaje!](https://www.youtube.com/watch?v=KvxteMk0e84)** y otros links/multimedia no aparecerán en la parte inferior de los mensajes de el starboard.",
    DOWNVOTE: "Si los usuarios pueden votar en contra de mensajes del starboard. Cuando un mensaje es votado en contra del starboard, es automáticamente congelado así no puede volver a ser agregado a él starboard.",
    BOTS_ON_LB: "Si los bots pueden aparecer en la tabla de clasificaciones.",
    ATTACHMENTS: "Si multimedia como videos debería ser adjuntada al mensaje del starboard en vez de solo ser links anexados.",
    NO_EXPLORE: p => `Si el comando \`${p}explore\` debería ser deshabilitado del servidor. Tus mensajes aun aparecerán en este comando si el ajuste **Visible** está habilitado.`,
    FILTER_BLACKLISTED: `Si los usuarios de la lista negra deberían o no ser filtrados fuera del starboard.`,
    REMOVE_REACTIONS: "Si las reacciones deberían ser eliminadas si un usuario reacciona mal, como que reaccione a un mensaje de un usuario de la lista negra.",
    NO_LEADERBOARD: (_p, _prm, name) => !name || name === "server" ? "Si los comandos relacionados a la tabla de clasificaciones deberían ser deshabilitados del servidor." : "Si las estadísticas de la tabla de clasificaciones deberían ser registradas para este canal.",
    KEEP_ROLES: "Si los usuarios deberían mantener roles de recompensa antiguos al conseguir uno nuevo.",
    MENTION_AUTHOR: "Si el autor de un mensaje debería ser mencionado en sus mensajes del starboard.",
    QUICK_ACTIONS: `Al habilitar esto, los usuarios pueden realizar acciones en un mensaje marcado con una estrella al reaccionar en el mensaje del starboard con emojis específicos.
    __Moderadores:__
    **Agregar a la basura**: 🗑️
    **Bloquear**: 🔒
    **Desbloquear**: 🔓
    **Congelar**: 🧊 o ❄️
    **Descongelar**: 🔥
    **Actualizar**: 🔄 o 🔁
    **Agregar al Salón de la Fama**: 🏆 o 🏅
    **Forzar**: 📌 o 📍 - solo en el mensaje original
    __Cualquiera:__
    **Guardar**: 📥 o 💾
    **Eliminar**: ❌ o 🇽 - solo en mensajes marcados con una estrella de ellos
    `.stripIndents(),
    LINK_EDITS: "Si el mensaje es editado, el mensaje del starboard será actualizado con el nuevo contenido del mensaje.",
    DISPLAY_NICKNAME: "Si el apodo del autor debería ser o no mostrado en vez de su tag de Discord",
    NO_COMMANDS: "Si el bot debería responder a comandos ejecutados por usuarios los cuales no son moderadores, así el bot más o menos \"funciona en segundo plano\".",
    AUTO_STAR: "Si el bot debería automáticamente marcar con una estrella mensajes en estos canales.",
    DELETE_INVALID: "Si el bot debería eliminar mensajes en un canal con marcado automático con una estrella que no pasen los filtros o fueron enviados por un usuario de la lista negra.",

    DOWNVOTE_EMOJI: "El emoji usado para votar en contra de mensajes marcados con una estrella.",
    EMOJIS: {
      REACTION: (p, prm, name) => `El/Los emoji${prm ? "s" : ""} que los usuarios reaccionan con para agregar un mensaje a el starboard. ${
        prm
          ? `Puedes agregar/eliminar más emojis con ${p}changesetting${name && ` ${name}`} emoji reaction <add/remove> <[emoji]>`
          : "Los **[Servidores Premium](https://patreon.com/TheNoob27)** pueden agregar hasta **5** emojis diferentes."
      }`,
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `Además del contador de estrellas en un mensaje del starboard, este emoji aparecerá cuando el mensaje tenga menos de ${r.first} estrellas.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `Además del contador de estrellas en un mensaje del starboard, este emoji aparecerá cuando el mensaje tenga ${r.first}-${r.second - 1} estrellas.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `Además del contador de estrellas en un mensaje del starboard, este emoji aparecerá cuando el mensaje tenga ${r.second}-${r.third - 1} estrellas.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `Además del contador de estrellas en un mensaje del starboard, este emoji aparecerá cuando el mensaje tenga ${r.third} estrellas o más.`
    },
    STAR_REQUIREMENTS: {
      FIRST: "La cantidad de estrellas las cuales un mensaje necesita antes de que la estrella junto al contador cambie a la segunda estrella.",
      SECOND: "La cantidad de estrellas las cuales un mensaje necesita antes de que la estrella junto al contador cambie a la tercera estrella.",
      THIRD: "La cantidad de estrellas las cuales un mensaje necesita antes de que la estrella junto al contador cambie a la cuarta estrella.",
    },
    COLORS: {
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `Este será el color del mensaje del starboard cuando el mensaje tenga menos de ${r.first} estrellas.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `Este será el color del mensaje del starboard cuando el mensaje tenga ${r.first}-${r.second - 1} estrellas.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `Este será el color del mensaje del starboard cuando el mensaje tenga ${r.second}-${r.third - 1} estrellas.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `Este será el color del mensaje del starboard cuando el mensaje tenga ${r.third} estrellas o más.`,
    },
    TYPES: {
      NOT_SET: "No Establecido",
      NONE: "Ninguno",
      STARS: "estrellas",
      CHANNEL: "canal",
      NUMBER: "número",
      LANGUAGE: "idioma",
      PERMISSION: "permiso",
      EMOJI: "emoji",
      COLOR: "rol/aleatorio/[color]",
      RANDOM: "aleatorio",
      ROLE: "el color del rol más alto del autor"
    }
  },

  // languages
  LANGUAGES: {
    EN_GB: "Inglés (Reino Unido)",
    EN_US: "Inglés (Estados Unidos)",
    ES: "Español",
    LT_LT: "Lituano",
    TR_TR: "Turco",
    FUWWY: "Fuwwy",
  }
}
