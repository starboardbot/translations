const LOCALE = "es-ES"

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
    STARBOARD_ID: (p, _prm, name) => `Aquí es donde aparecen los mensajes marcados con una estrella irán. Si deseas eliminar el starboard establecido, ejecuta \`${p}changesetting${name && ` ${name}`} ningún starboard\`.`,
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
      REACTION: (p, prm, name) => `El/Los emoji${prm ? "s" : ""} que los usuarios reaccionan con para agregar un mensaje a el starboard. ${prm
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

  COMMANDS: {
    COOLDOWN_MESSAGE: time => `¡Estás usando este comando muy seguido! Por favor espera ${time} antes de usarlo de nuevo.`,
    WAIT_SUGGESTIONS: (hasVoted) => {
      return [
        "**[únete al servidor de soporte](https://discord.gg/rZgxfbH)** y diviértete hablándonos, participa en encuestas las cuales considerablemente  determinan que se agrega al bot, posibles sorteos y mucho más",
        `**[vota por el bot](https://top.gg/bot/655390915325591629/vote)** ${hasVoted ? "por puntos extra de facha" : "para acabar con este tiempo de espera por la mitad"}`,
        "**[vuélvete un patron](https://patreon.com/TheNoob27)** y desbloquea algunas maravillosas características exclusivas para donadores, y un rol exclusivo de donador en nuestro servidor de discord",
        "**[sígueme en twitter](https://twitter.com/DaNoob27)** por ninguna razón alguna",
        "échale un vistazo a la **[página de Github](https://github.com/TheNoob27/starboard-issues/issues)** de Starboard en donde puedes publicar bugs/sugerencias en vez de usar los comandos"
      ]
    },
    COOLDOWN: "Tiempo de espera",
    COOLDOWN_EMBED: (cooldownMessage, cooldown, waitSuggestions) =>
      `${cooldownMessage}
    El tiempo de espera de este comando es **${cooldown}**. 
    Mientras esperas, porque no ${waitSuggestions.join(" o ")}!`
        .stripIndents(),
    /** @param {import("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_HELP_EMBED: (command, Embed, prefix, color, cooldown, requiredPermissions) => {
      const l = LOCALE
      const c = command.language(l).get()
      const embed = Embed
        .setTitle("Ayuda")
        .setColor(command.enabled ? color : command.client.colors.error)
        .addField(
          `Comando: ${prefix}${command.language(l).name.get() || command.name}`,
          `**Alias**: ${(command.language(l).aliases.get() || command.aliases).join(", ") || "ningún"}
          **Descripción**: ${command.language(l).description || "ninguna"}
          **Uso**: ${prefix}${command.language(l).usage}
          ${command.example ? `**Ejemplo${Array.isArray(command.example) ? "s" : ""}**: ${Array.isArray(command.example) ? `\n\`${command.example.map(c => `${prefix}${c}`).join("`\n`")}\`` : `${prefix}${command.example}`}` : ""}`
            .stripIndents()
        )
        .addField(
          "Extra",
          `**Categoría**: ${command.language(l).base.categories(command.category).get() || command.category}
          **Tiempo de espera**: ${cooldown}
          **Habilitado**: ${command.client.config.emojis[command.enabled ? "yes" : "no"]}
          **Permisos Necesarios del Bot**: ${command.client.util.readablePermissions(command.botPermissions || 0)}
          **Permisos Necesarios del Usuario**: ${command.client.util.readablePermissions(requiredPermissions || 0)}`
            .stripIndents()
        )
        .setFooter("() = argumentos opcionales, <> = argumentos necesarios, [] un valor provisional, – = marcador opcional")
      if (command.notices) embed.addField(
        "Avisos",
        `${command.errorMessage
          ? `Algo anda mal actualmente con este comando: **${command.errorMessage}**.\n`
          : ""
        }${command.disableMessage
          ? `Este comando está deshabilitado: **${command.disableMessage}**`
          : ""
        }`
      )

      return embed
    },

    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_DISABLED_EMBED: (command, Embed) =>
      Embed
        .setTitle("Comando Deshabilitado")
        .setDescription(`Este comando está actualmente deshabilitado. ${command.disableMessage ? `La razón de esto es: **${command.disableMessage}**.` : "Fue probablemente deshabilitado porque algo no estaba funcionando correctamente, si no es así fue por otra razón."}
     Por favor inténtalo de nuevo luego, o **[únete a nuestro servidor de soporte]** para saber más.`.stripIndents())
        .setColor(command.client.colors.error)
        .setTimestamp(),
    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_ERROR_EMBED: (command, Embed, e, owner, prefix) =>
      Embed
        .setTitle("¡Un Error Ocurrió!")
        .setColor(command.client.colors.error)
        .setDescription(
          `¡Algo salió mal al intentar ejecutar este comando! Esto no debería pasar. ${command.errorMessage
            ? `\nNota: **${command.errorMessage}**`
            : `Si esto persiste, por favor **[únete a nuestro servidor de soporte](${command.client.config.links.support})** y explica tu problema allí.`}

       **Error**: \`\`\`js
       ${e[owner ? "stack" : "message"]}
       \`\`\``.stripIndents()
        )
        .setFooter(`No se logró ejecutar ${prefix}${command.name}.`)
        .setTimestamp(),
    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed  @param {[("ENUM" | "MATCH" | "TYPE" | "RANGE" | "PARSE")]} e */
    COMMAND_INVALID_ARGS: (command, Embed, e) => {
      let m, esc = command.client.util.discordUtil.escapeMarkdown
      switch (e[0]) {
        case "ENUM": {
          const [, name, raw, en] = e
          m = `El argumento **${name}** ${raw ? `(provisto: \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\`) ` : ""
            }tiene que ser parte de \`${en.join("`, `")}\`.`
          break
        }
        case "MATCH": {
          const [, name, raw, match] = e
          m = `El argumento **${name}** ${raw ? `(provisto: \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\`) ` : ""
            }tiene que ser igual a la expresión regular (regex) \`${match.toString().split("/")[1] || match}\`.`
          break
        }
        case "MISSING": {
          const [, name] = e
          m = `El argumento necesario **${name}** falta.`
          break
        }
        case "PARSE": {
          const [, raw, toParse] = e
          m = `No se logró analizar un ${toParse} ${typeof raw === "number" ? "para el argumento" : "del argumento proporcionado"} \`${esc(String(raw || "")).replace(/([^]{20}).+/, "$1...")}\``
          break
        }
        case "RANGE": {
          const [, raw, greater, boundary] = e
          m = `El argumento proporcionado \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\` no puede ser ${greater ? "mayor" : "menor"} que \`${boundary.toLocaleString(LOCALE)}\`.`
          break
        }
        case "TYPE": {
          const [, name, raw, type] = e
          m = `El argumento **${name}** ${raw ? `(provisto: \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\`) ` : ""
            }tiene que ser \`${type}\`.`
          break
        }
      }
      return Embed
        .setTitle("Argumentos Inválidos")
        .setDescription(`Los argumentos provistos no fueron válidos: ${m}`)
        .addField("Uso", `\`${command.language(LOCALE).usage}\``)
        .setColor(command.client.colors.error)
    },
    MISSING_PERMISSIONS: (perms, bot) => `${bot ? "Al bot le" : "Te"} faltan los permisos ${perms}, necesarios para ejecutar este comando.`,
    NO_CHANNEL_SETTINGS: (c) => `No hay ajustes específicos para ${c ? c : "este canal"}.`,

    EVAL: {
      DESCRIPTION: "Analiza un poco de código.",
      USAGE: "eval <código>"
    },
    HELP: {
      DESCRIPTION: "Mira todos los comandos que ofrece el bot, o mira información específica de un comando.",
      USAGE: "help ([comando])",
      EMBED_DESCRIPTION: (command, owner, categories, prefix, guide) => `Comandos: ${owner
          ? command.client.commands.size
          : Object.values(categories) // { "Categoría": "...\n..." }
            .reduce((p, c) => c.split("\n").length + p, 0)
        }
     Si es tu primera vez usando el bot, puedes configurar usando \`${prefix}setup\`.
     Para obtener más información de una variedad de características, puedes leer la **[guia](${guide})**.
     Si aún necesitas ayuda, porfavor unete a nuestro **[servidor de soporte](${command.client.config.links.support})**.`.stripIndents(),
      EMBED_FOOTER: "() = opcional, <> = necesario, [] provisional, -- = marcadores opcionales - no los incluyas al usar comandos."
    },
    PING: {
      DESCRIPTION: "Revisa el ping, tiempo de respuesta y velocidad de edición del bot.",
      USAGE: "ping",
      PINGING: "Calculando…",
      CLUSTER: n => `Cluster ${n}`,
      SHARD: n => `Shard ${n}`,
      PING: "Ping",
      LATENCY: "Latencia",
      EDIT: "Editar"
    },
    RELOAD: {
      DESCRIPTION: "Recarga comandos, eventos o un archivo.",
      USAGE: "reload <[comando]/evento/archivo> ([evento]/[archivo])"
    },
    CHANGESETTING: {
      DESCRIPTION: "Cambia un ajuste del canal o servidor, como la cantidad de estrellas necesarias para alcanzar el starboard. Todos los ajustes están en el comando de ajustes, así puedes ver tus opciones allí.",
      USAGE: "changesetting ([canal]) <[ajuste]> <[valor]>",

      UPDATED_SETTINGS: "Ajustes Actualizados.",
      ERRORS: "Errores",
      CHANNEL_SETTINGS: "Ajustes de Canal",
      NONE: "Ninguno",

      INVALID_CHANNEL_SETTING: s => `**${s}** no es un ajuste válido para canales, solo está disponible como un ajuste de servidor.`,
      INVALID_GUILD_SETTING: s => `**${s}** no es un ajuste válido para servidores, solo está disponible como un ajuste de canal.`,

      INVALID_LANGUAGE: l => `**${l}** no es un idioma válido.`,
      LANGUAGE_SET: l => `El idioma fue establecido a ${l}`, // passing l because other languages may not be finished and will use this translation

      NO_STARBOARD: (c, nsfw) => `No hay un starboard ${nsfw ? "NSFW " : ""} establecido${c ? " para este canal" : ""}.`,
      INVALID_CHANNEL: "Ese canal no existe.",
      INVALID_CHANNEL_TYPE: "El canal debe ser un canal de texto o anuncios.",
      CANT_SPEAK: embeds => `No puedo enviar ${embeds ? "embeds" : "mensajes"} en ese canal`,
      NOT_NSFW: "El starboard NSFW debe ser establecido como un canal NSFW.",
      MISSING_PERMISSIONS: "Al bot le falta el permiso `Gestionar Canales`, necesario para crear canales.",
      CREATE_STARBOARD_FAIL: "Algo salió mal al crear un canal de starboard.",
      CREATE_STARBOARD_SUCCESS: (c, nsfw) => `Se ha creado un canal de starboard ${nsfw ? "NSFW" : ""}: ${c}`,
      STARBOARD_DELETE: (c, nsfw) => `Se ha eliminado el starboard ${nsfw ? "NSFW " : ""}establecido ${c ? " para este canal" : ""}.`,
      STARBOARD_SET: (c, channel, nsfw) => `Se ha establecido el starboard ${nsfw ? "NSFW " : ""}${c ? "para este canal " : ""}a ${channel}.`,

      REQUIRED_TOO_BIG: "La cantidad de estrellas necesarias para alcanzar el starboard no puede ser tan alta.",
      REQUIRED_TOO_SMALL: "La cantidad de estrellas necesarias para alcanzar el starboard tiene que ser un número mayor a 0.",
      REQUIRED_SET: (n, c) => `Se ha establecido la cantidad necesaria de estrellas para alcanzar el starboard ${c ? "para este canal " : ""}a ${n}.`,
      REQUIRED_SET_BOTH: (n, c) => `Se ha establecido la cantidad necesaria de estrellas para alcanzar el starboard ${c ? "para este canal " : ""}a ${n}, y se ha disminuido **RequiredToRemove** a ${n - 1}.`,
      RTR_TOO_BIG: "La cantidad de estrellas necesarias para ser eliminado del starboard no puede ser tan alta.",
      RTR_TOO_SMALL: "La cantidad de estrellas necesarias para ser eliminado del starboard tiene que ser un número mayor a 0.",
      RTR_SET: (n, c) => `Se ha establecido la cantidad necesaria de estrellas para ser eliminado del starboard ${c ? "para este canal " : ""}a ${n}.`,
      RTR_SET_BOTH: (n, c) => `Se ha establecido la cantidad necesaria de estrellas para ser eliminado del starboard ${c ? "para este canal " : ""}a ${n}, y se ha aumentado **Required** a ${n + 2}.`,

      INVALID_PERMISSIONS: "Los permisos provistos no son válidos.",
      PERMISSIONS_SET: p => `Se han establecido los permisos necesarios para ejecutar varias acciones a ${p}.`,
      COLOR_SET: (c, r) => `Se ha establecido el color para los mensajes del starboard sobre ${r} estrellas a ${c}.`,

      REQUIREMENT_TOO_HIGH: t => `El requisito **${t}** no puede ser tan alto.`,
      REQUIREMENT_TOO_LOW: t => `El requisito **${t}** tiene que ser un número mayor a 0.`,
      REQUIREMENT_BOUNDARY: (t, next, n, higher) => `El requisito **${t}** tiene que ser un número ${higher ? "mayor" : "menorq"} a ${n}, lo cual es lo que **${next}** está establecido actualmente.`,
      REQUIREMENT_SET: (type, emoji, n) => `Se ha establecido la cantidad de estrellas necesarias para el **${type}** emoji${emoji ? ` (${emoji})` : ""} para aparecer en el starboard a ${n}.`,

      EMOJI_NOT_FOUND: "Ese emoji no logró ser encontrado, o es invalido.",
      CANNOT_USE_EMOJI: "No puedo usar este emoji, tiene que ser un emoji de un servidor en el que este.",
      EMOJIS_SAME: "El emoji para votar a favor y en contra de mensajes marcados con una estrella no puede ser el mismo.",
      RESERVED_EMOJI: "Perdón, pero este emoji no puede ser usado.",
      MAX_EMOJIS: "Has alcanzado el límite máximo de cantidad de emojis permitidos en 1 servidor.",
      ALREADY_AN_EMOJI: "Tu emoji ya está guardado como uno en la lista de emojis.",
      NOT_AN_EMOJI: "Tu emoji no está guardado como uno en la lista de emojis.",
      EMOJI_ADD_SET: e => `Se ha agregado ${e} a la lista de emojis.`,
      EMOJI_REMOVE_SET: e => `Se ha eliminado ${e} de la lista de emojis.`,
      EMOJI_SET: e => `Se ha establecido el emoji con el cual se reacciona a los mensajes a ${e}.`,
      STAR_SET: (e, type) => `Se ha cambiado la estrella **${type}** a ${e}.`,
      DV_EMOJI_SET: e => `Se ha establecido el emoji para votar en contra de mensajes a ${e}.`,

      ON_DELETION_NOTHING: "Los mensajes del starboard no serán publicados de nuevo, congelados o agregados a la basura cuando sean eliminados.",
      ON_DELETION_REPOST: "Los mensajes del starboard serán automáticamente publicados de nuevo cuando sean eliminados por un moderador.",
      ON_DELETION_FREEZE: "Los mensajes marcados con una estrella serán automáticamente congelados si el mensaje del starboard es eliminado por un moderador.",
      ON_DELETION_TRASH: "Los mensajes marcados con una estrella serán automáticamente agregados a la basura si el mensaje del starboard es eliminado por un moderador.",

      LINK_DELETES: b => `Cuando un mensaje es eliminado, el mensaje del starboard ${b ? "ahora" : "ya no"} será eliminado.`,
      FILTER_BOTS: b => `Los bots ${b ? "ya no" : "ahora"} pueden aparecer en el starboard.`,
      STAR_SELF: b => `Los usuarios ${b ? "ahora" : "ya no"} pueden marcar con una estrella sus propios mensajes.`,
      WATCHING: b => b ? "Ahora nada va al starboard, pero las estadísticas aún se guardan." : "El starboard ahora será usado al igual que se guardaran las estadísticas.",
      VISIBLE: b => `La gente ${b ? "ahora" : "ya no"} pueden encontrar mensajes de este servidor en el comando de explorar.`,
      CLEAN: b => `El **¡Haz clic para ir al mensaje!** y otros links ${!b ? "ahora" : "ya no"} serán mostrados en los mensajes del starboard.`,
      DOWNVOTE: b => `Los usuarios ${b ? "ahora" : "ya no"} pueden votar en contra de mensajes marcados con una estrella.`,
      BOTS_ON_LB: b => `Los bots ${b ? "ahora" : "ya no"} saldrán en la tabla de clasificaciones.`,
      ATTACHMENTS: b => `Los archivos adjuntos ${b ? "ahora" : "ya no"} serán adjuntados en el mensaje del starboard.`,
      NO_EXPLORE: b => `Los usuarios ${b ? "ya no" : "ahora"} pueden usar el comando de explorar.`,
      FILTER_BLACKLISTED: b => `Los usuarios en la lista negra ${b ? "ahora" : "ya no"} podrán ser filtrados fuera del starboard.`,
      REMOVE_REACTIONS: b => `Las reacciones ${b ? "ahora" : "ya no"} serán eliminadas si el usuario reacciona mal, como en un canal en la lista negra.`,
      NO_LEADERBOARD: (b, cs) => cs
        ? `La tabla de clasificaciones de este canal ${b ? "ya no" : "ahora"} será guardada.`
        : `La tabla de clasificaciones y sus comandos relacionados fueron ${b ? "deshabilitadas" : "habilitadas"}.`,
      KEEP_ROLES: b => `Los usuarios ${b ? "ahora" : "ya no"} guardarán roles recompensados anteriormente al conseguir uno nuevo.`,
      MENTION_AUTHOR: b => `Los usuarios ${b ? "ahora" : "ya no"} serán mencionados en sus mensajes del starboard.`,
      QUICK_ACTIONS: b => `${b ? "Ahora" : "Ya no"} puedes reaccionar en mensajes del starboard para ejecutar acciones rápidas en estos.`,
      LINK_EDITS: b => `Los mensajes del starboard ${b ? "ahora" : "ya no"} serán actualizados cuando su mensaje original es editado.`,
      DISPLAY_NICKNAME: b => `Los mensajes del starboard ahora mostrarán el ${b ? "apodo del servidor" : "tag de Discord"} del autor del mensaje.`,
      NO_COMMANDS: b => `Los comandos ${b ? "ahora" : "ya no"} funcionarán solo para moderadores.`,
      AUTO_STAR: b => `Los mensajes de estos canales ${b ? "ahora" : "ya no"} serán marcados con una estrella automáticamente por mi.`,
      DELETE_INVALID: b => `Los mensajes enviados mientras que el marcado automático de estrellas esté habilitado que no pasen los filtros o fueron enviados por un usuario en la lista negra ${b ? "ahora" : "ya no"} serán eliminados.`
    },
    LOCK: {
      DESCRIPTION: "Bloquea un mensaje marcado con una estrella al starboard, así siempre estará aún si llega a 0 estrellas.",
      USAGE: "lock <[ID del mensaje]>",
      SUCCESS: "Se ha bloqueado ese mensaje al starboard.",
      FAILED: "Ese mensaje ya está bloqueado."
    },
    UNLOCK: {
      DESCRIPTION: "Desbloquea un mensaje marcado con una estrella del starboard, así puede ser eliminado",
      USAGE: "unlock <[ID del mensaje]>",
      SUCCESS: "Se ha desbloqueado ese mensaje del starboard.",
      FAILED: "Ese mensaje no está bloqueado."
    },
    FREEZE: {
      DESCRIPTION: "Congela un mensaje marcado con una estrella, así nadie puede agregar o quitar estrellas.",
      USAGE: "freeze <[ID del mensaje]>",
      SUCCESS: "Se ha congelado ese mensaje.",
      FAILED: "Ese mensaje ya está congelado."
    },
    UNFREEZE: {
      DESCRIPTION: "Descongela un mensaje marcado con una estrella, así cualquiera puede agregar o quitar estrellas.",
      USAGE: "unfreeze <[ID del mensaje]>",
      SUCCESS: "Se ha descongelado ese mensaje.",
      FAILED: "Ese mensaje no está congelado."
    },
    PREFIXES: {
      DESCRIPTION: "Agrega o elimina prefijos del servidor, o mira la lista de estos.",
      USAGE: "prefixes (add/remove) ([prefijo])",
      ALREADY_PREFIX: "Eso ya es un prefijo del servidor.",
      TOO_MANY_PREFIXES: "Hay muchos prefijos establecidos para este servidor.",
      PREFIX_TOO_LONG: "Ese prefijo es muy largo.",
      NOT_PREFIX: "Eso no es un prefijo de este servidor..",
      PREFIX_ADD: p => `Se ha agregado \`${p}\` a la lista de prefijos.`,
      PREFIX_REMOVE: p => `Se ha eliminado \`${p}\` de la lista de prefijos.`,
      PREFIX_SET: p => `Se ha establecido el prefijo del servidor a \`${p}\``,
      LIST_PREFIXES: prefixes => `${prefixes.length > 1 ? `Los prefijos`: `El prefijo`} de este servidor
      ${prefixes.length > 1 ? `son: \n\`${prefixes.join("`,\n`")}\``: `es \`${prefixes}\`.`}`.stripIndents(),
      FOOTER: "Mi mención también funciona como prefijo."
    },
    LINKS: {
      DESCRIPTION: "Obten los links relacionados al bot, como el link de invitación.",
      USAGE: "links",
      LINKS: "Links",
      DONATION: "Donación",
      OTHER: "Otro",
      DISCORD_LINKS: (i, s) => `**[¡Invítame!](${i})**\n**[Servidor de Soporte](${s})**`,
      PATREON_LINK: p => `**[¡Vuélvete un Patron!](${p})**`,
      OTHER_LINKS: (v, gh, g) => `**[¡Vota por el bot!](${v})**\n**[Issues en GitHub](${gh})**\n**[Guia de Starboard](${g})**`
    },
    BLACKLIST: {
      DESCRIPTION: "Obtén detalles acerca de los usuarios, roles o canales en la lista negra, o modifica la lista.",
      USAGE: "blacklist (add/remove) ([usuario/rol/canal]) --channel ([channelSettings])",
      BLACKLIST: "Lista Negra",
      EMBED_DESCRIPTION: (blsb, c, nothing, prefix) => `Los siguientes ${c ? `usuarios y roles` : `usuarios, roles y canales`} están en la lista negra y no pueden interactuar con el starboard${c ? " en este canal" : ""}.${blsb
          ? " Los usuarios en la lista negra aún pueden aparecer en el starboard."
          : ""
        }${nothing ? `\n**Aún nada está en la lista negra**\n Para agregar/eliminar a la lista, ejecuta \`${prefix}blacklist <add/remove> <[usuario/rol${c ? "" : "/canal"}]>\`.` : ""}`,
      USERS: "Usuarios",
      ROLES: "Roles",
      CHANNELS: "Canales",
      NOT_FOUND: c => `No logre encontrar un ${c ? "usuario o rol" : "usuario, rol o canal"} basado en tu entrada.`,
      ALREADY_BLACKLISTED: s => `**${s}** ya está en la lista negra.`,
      NOT_BLACKLISTED: s => `**${s}** no está en la lista negra.`,
      TOO_MANY_BLACKLISTED: "Hay muchos elementos en la lista negra.",
      NOTHING_BLACKLISTED: "No hay nada en la lista negra.",
      BLACKLIST_ADD: s => `Se ha agregado a **${s}** a la lista negra.`,
      BLACKLIST_ADD_CHANNELS: n => `Se han agregado a la lista negra ${n} canales.`,
      REMOVE_ALL: "Se ha eliminado todo de la lista negra.",
      BLACKLIST_REMOVE: s => `Se ha eliminado a **${s}** de la lista negra.`
    },
    WHITELIST: {
      DESCRIPTION: "Obtén detalles acerca de los usuarios, roles o canales en la lista blanca, o modifica la lista.",
      USAGE: "whitelist (add/remove) ([usuario/rol]) --channel ([channelSettings])",
      WHITELIST: "Lista Blanca",
      EMBED_DESCRIPTION: (c, nothing, prefix) => `Los siguientes usuarios y roles están en la lista blanca y son ignorados por la lista negra ${c ? "en este canal " : ""} si están en esta.${nothing
          ? `\n**Aún nada está en la lista blanca**\n Para agregar/eliminar a la lista, ejecuta \`${prefix}whitelist <add/remove> <[usuario/rol]>.\``
          : ""
        }`,
      USERS: "Usuarios",
      ROLES: "Roles",
      NOT_FOUND: "No logre encontrar un usuario o rol en tu entrada.",
      ALREADY_WHITELISTED: s => `**${s}** ya está en la lista blanca.`,
      NOT_WHITELISTED: s => `**${s}** no está en la lista blanca.`,
      TOO_MANY_WHITELISTED: "Hay muchos elementos en la lista blanca.",
      NOTHING_WHITELISTED: "No hay nada en la lista blanca.",
      WHITELIST_ADD: s => `Se ha agregado a **${s}** a la lista blanca.`,
      REMOVE_ALL: "Se ha eliminado todo de la lista blanca.",
      WHITELIST_REMOVE: s => `Se ha eliminado a **${s}** de la lista blanca.`
    },
    REWARDROLES: {
      DESCRIPTION: "Obtén detalles acerca de los roles agregados a los usuarios una vez sobrepasen una cantidad de estrellas, o agrega/elimina roles de recompensa.",
      USAGE: "rewardroles ([channelSettings]) (add/remove) ([rol]) ([estrellas])",
      NO_LEADERBOARD: "La tabla de clasificaciones está deshabilitada para el servidor, esto incluye los roles de recompensa.",
      REWARD_ROLES: "Roles de Recompensa",
      ROLE: "Rol",
      STARS_NEEDED: "Estrellas Necesarias",
      PROGRESS: u => `${u ? `El progreso de ${u}` : "Tu progreso"}`,
      EMBED_DESCRIPTION: (c, showThisBit) => `Los roles de recompensa son una manera divertida de recompensar a los usuarios al tener sus mensajes marcados con una estrella. Los usuarios obtendrán un rol basado en la cantidad de estrellas que consiguen en este ${c ? "canal" : "servidor"}.
      ${showThisBit
          ? `Puedes sumar/restar la cantidad de estrellas necesarias para obtener un rol de recompensa al crearlo de nuevo, pero agregando un +/- antes del argumento de estrellas. (+50, -50 etc)
          Al ver los roles de recompensa, puedes opcionalmente **mencionar a un usuario** para ver su progreso.
          Si deseas que los usuarios solo puedan **tener un rol de recompensa a la vez**, deshabilita el ajuste **KeepRoles**.\n`
          : ""}
          Aquí están los roles de recompensa establecidos para este ${c ? "canal" : "servidor"}:`.stripIndents(),
      NO_REWARD_ROLES: (p, c) => `**No hay roles de recompensa establecidos para este ${c ? "canal" : "servidor"}.**
      Para agregar un rol de recompensa, ejecuta \`${p}rewardroles add <[rol]> ([estrellas])\``.stripIndents(),
      RR_FEAT: "personaliza roles de recompensa",
      ROLE_NOT_FOUND: "Eso no es un rol válido.",
      HIGHER_POSITION: "Ese rol es mayor que mi rol más alto, así que no puedo dar este rol a los usuarios.",
      ROLE_MANAGED: "Este rol es controlado automáticamente por una integración o no puede ser manualmente asignado a los miembros.",
      HIGHER_THAN_USER: "No puedes agregar este rol ya que es mayor o igual a tu rol más alto.",
      TOO_HIGH: "Ese número es muy alto.",
      TOO_LOW: "Ese número es muy bajo.",
      NOT_A_NUMBER: "La cantidad de estrellas debe ser un número.",
      ADD_TOO_MANY: "Estás sumando muchas estrellas a este rol de recompensa.",
      SUBTRACT_TOO_MANY: "Estás restando muchas estrellas a este rol de recompensa.",
      HIT_MAX: c => `Este ${c ? "canal" : "servidor"} ha llegado al límite de 25 roles de recompensa.`,
      NOT_RR: `Ese rol no está establecido como un rol de recompensa.`,
      RR_SET: (name, stars) => `Se ha establecido la cantidad de estrellas necesarias para el rol de recompensa **${name}** a ${stars.toLocaleString(LOCALE)}`,
      RR_ADD: (name, stars, c) => `Se ha agregado al rol **${name}** como un rol de recompensa, dado a los usuario luego de conseguir un total de **${stars.toLocaleString(LOCALE)}** estellas${c ? " en este canal" : ""}.`,
      RR_REMOVE_ALL: c => `Se han eliminado todos los roles de recompensa${c ? " de este canal" : ""}.`,
      RR_REMOVE: (name, c) => `Se ha eliminado **${name}** de los roles de recompensa de este ${c ? "canal" : "servidor"}.`
    },
    FORCE: {
      DESCRIPTION: "Fuerza o recarga un mensaje en el starboard.",
      USAGE: "force ([canal]) <[ID de mensaje]>",
      NO_STARBOARDS: c => `No hay ningún starboard establecido para este ${c ? "canal" : "servidor"}.`,
      NO_MESSAGE_ID: "Por favor provee un ID de mensaje. Si no sabes como obtenerlo, tienes que habilitar **Modo Desarrollador** en ajustes, da clic en los 3 puntos en un mensaje y da clic en **Copiar ID**.",
      INVALID_TYPE: "El canal debe ser un canal de texto.",
      TRASHED: "Ese mensaje está en la basura y no puede ser forzado.",
      FROZEN: "Ese mensaje está congelado y no puede ser forzado o recargado hasta que sea descongelado.",
      NOT_FOUND: "No pude encontrar un mensaje basado en tu entrada.",
      MISSING_PERMISSIONS: c => `Me faltan permisos para leer mensajes en ${c || "este canal"}.`,
      IS_STARBOARD_MESSAGE: "Este mensaje parece ser un mensaje del starboard, así que no puede ser forzado.",
      IS_EXPLORE_MESSAGE: "This message seems to be a message from the explore command, so it can't be forced.",
      CHANNEL_BLACKLISTED: "Ese canal está en la lista negra, así que este mensaje no puede ser forzado.",
      STARS_RECOUNTED: url => `Se han recontado las estrellas de este mensaje${url ? `, el mensaje del starboard está **[aquí](${url})**` : ""}.`,
      FORCE_SUCCESS: "¡Se ha forzado este mensaje al starboard!",
      POST_SUCCESS: "¡Se ha publicado este mensaje al starboard!"
    },
    PURGE: {
      DESCRIPTION: "Depura y congela un número de mensajes fuera del starboard.",
      USAGE: "purge ([canal]) <[mensajes]> --before <[ID del mensaje]> --after <[ID del mensaje]>",
      NOT_STARBOARD: "Ese canal no es un canal de starboard.",
      MISSING_PERMISSIONS: sb => `No tengo permiso de eliminar mensajes a montón en ${sb}.`,
      MIGRATING: "No puedo depurar mensajes de starboards ahora mismo.",
      ARE_YOU_SURE: "¿Estás seguro?",
      CONFIRMATION_EMBED: (n, starboard, before, after) =>
        `¿Estás seguro de que quieres depurar y congelar los últimos ${n} mensajes del starboard${before ? ` antes ${before}${after ? " y" : ""}` : ""}${after ? ` después ${after}` : ""} de ${starboard}? Solo puedo depurar los mensajes del starboard de los últimos 14 días. Si los mensajes originales son eliminados, podrían ser perdidos por siempre.
      Dí **yes** para continuar.`.stripIndents(),
      NOT_PURGED: "Se ha cancelado el depurado del starboard.",
      NOTHING_TO_DELETE: (before, after) => `No hay mensajes del starboard${before ? ` antes ${before}${after ? " y" : ""}` : ""}${after ? ` despúes ${after}` : ""} para eliminar.`,
      SUCCESS: (n, sb) => `Se han eliminado y congelado ${n} mensaje de ${sb}.`
    },
    TRASH: {
      DESCRIPTION: "Agrega a la basura un mensaje del starboard y muestra las primeras 5 personas que reaccionaron a este, mira si el mensaje existe en la lista de mensajes en la basura, elimina un mensaje de la lista de mensajes en la basura, despeja la lista, o mira IDs de los primeros 100 mensajes en la lista.",
      USAGE: "trash (add/remove/exists/clear/list) ([ID del mensaje])",
      REASON_TOO_LONG: "Tu razón es muy extensa.",
      NOT_MESSAGE_ID: "Por favor provee un ID del mensaje.",
      NOT_FOUND: "No logre encontrar un mensaje del starboard basado en tu entrada.",
      ALREADY_TRASHED: "Ese mensaje ya está en la basura.",
      NOT_TRASHED: "Ese mensaje no está en la basura.",
      TRASHED_MESSAGES: "Mensajes en la Basura",
      AND_MORE: n => `\n\n...Y ${n} más.`,
      NO_TRASHED: "No hay mensajes en la basura.",
      LIST_FOOTER: n => `Cantidad: ${n}${n > 100 ? ` - Mostrando los primeros 100` : ""}`,
      TRASH_SUCCESS: "Se ha agregado ese mensaje a la basura.",
      UNTRASH_SUCCESS: "Se ha eliminado de la basura ese mensaje. Ahora puede ser marcado con una estrella de nuevo.",
      IS_TRASHED: (b, id, p) => b
        ? `Tu mensaje con el ID \`${id}\` está en la lista de los mensajes en la basura. Puedes eliminarlo de la basura con \`${p}trash remove ${id}\``
        : `Tu mensaje con el ID \`${id}\` no está en la basura.`,
      CLEAR_TRASH: n => `Se han eliminado ${n} ítems de la basura.`
    },
    STARWORTHY: {
      DESCRIPTION: "Verifica si un mensaje merece ser marcado con una estrella o no :)",
      USAGE: "starworthy <[ID del mensaje]>",
      NOT_ID: "Por favor provee un ID del mensaje.",
      WORTHY: p => `Ese mensaje es merecedor por un ${p}% de ser marcado con una estrella.`
    },
    CHANNELSETTINGS: {
      DESCRIPTION: "Obtén detalles acerca los Ajustes de Canales, o crea/clona colecciones de ajustes de canales.",
      USAGE: "channelsettings (list/create/edit/delete) ([nombre]) (...[canales]) --channel ([channelSettings])",
      NO_CHANNEL_SETTINGS: (prefix, guide) => `**Este servidor no tiene ajustes de canales.**
      Para crear una nueva colección de ajustes de canales, ejecuta \`${prefix}channnelsettings create ([nombre]) <...[canales]>\`

      Ajustes de Canales son ajustes que solo se aplican a un grupo de canales.
      Pueden tener su propio starboard, emojis, roles de recompensa, filtros, y casi todo lo demás que los ajustes del servidor tienen.
      
      **[Aprender Más](${guide})**`.stripIndents(),
      EMBED_DESCRIPTION: (p, guide, help) => 
        `Aquí están los ajustes de canales de este servidor.
        ${
          help
            ? `
            Nota: Al proveer el argumento \`[channelSettings]\` en comandos, puedes proveer el nombre del ajuste del canal si el nombre no tiene espacio, o un canal de la lista de canales.

              • Si quieres clonar uno de estos, puedes ejecutar \`${p}channelsettings create ([nombre]) <...[canales]> --channel ([channelSettings])\` donde \`([channelSettings])\` son los ajustes del canal que serán clonados de.

              • Si quieres editar una colección de ajustes de canales para agregar/eliminar canales o cambiar el nombre, puedes ejecutar \`${p}channelsettings edit ([channelSettings]) ([nombre]) (...[canales])\` donde \`([channelSettings])\` son los ajustes de canales que se editaran. Pon al principio de los canales + o - para agregar o eliminarlos de la lista (ej. \`+#general\`, \`-#memes\`).

              • Si necesitas eliminar una colección de ajustes de canaes, puede ejecutar \`${p}channelsettings delete <[nombre]>\`

              • Para editar los ajustes de uno, ejecuta \`${p}changesetting ([channelSettings]) <[ajuste]> <[valor]>\`
              \n`
            : `Ejecuta \`${p}channelsettings --help\` para ver más detalles, o `
        }**[Aprender Más](${guide})**`.stripIndents(),
      CHANNEL_SETTINGS: "Ajustes de Canales",
      CHANNELS: "Canales",
      STARBOARD: "Starboard",
      AUTO_STAR: "AutoStar",
      NONE: "No Establecido",
      NAME_TOO_LONG: "El nombre no puede ser más largo de 64 caracteres.",
      HIT_MAX: "Has alcanzado la cantidad máxima de ajustes de canales para un servidor.",
      PROVIDE_CHANNELS: "Por favor provee algunos canales para esta colección de ajustes de canales.",
      INVALID_CHANNELS: "No proveíste canales válidos.",
      DUPLICATE_CHANNELS: "Los canales proveídos no deben tener ajustes de canales. Un canal debe solo tener una colección de ajustes de canales.",
      ARE_YOU_SURE: "¿Estás seguro?",
      CONFIRMATION_EMBED: name => `¿Estás seguro de que quieres eliminar los ajustes de canales **${name}**?
      Perderás todos los roles de recompensa, listas negras/blancas, filtros y otros ajustes guardados, y se irán por siempre.
      Di **yes** para continuar.`.stripIndents(),
      NOT_DELETED: "Los ajustes no serán eliminados.",
      SUCCESS_CREATE: (n, size) => `Se ha creado una nueva colección de ajustes de canales para ${size} canal${size !== 1 ? "s" : ""}: **${n}**.`,
      NOTHING_PROVIDED: "Por favor provee el nombre de la colección de ajustes.",
      NOTHING_MODIFIED: "Por favor provee los cambios para hacer.",
      MODIFIED_NAME: n => `cambió el nombre a **${n}**`,
      MODIFIED_CHANNELS: n => `cambiado los canales a los que se le aplicaban estos ajustes de canales a ${n} canales${n !== 1 ? "s" : ""}`,
      MODIFIED: modifications => `Se ha ${modifications.join(" y ")}.`,
      SUCCESS_DELETE: n => `Se ha eliminado **${n}**.`
    },
    SETTINGS: {
      DESCRIPTION: "Observa los ajustes del servidor/canal(es), o observa más detalles de un ajuste específico.",
      USAGE: "settings ([channelSettings]) ([ajuste])",
      SETTINGS: "Ajustes",
      CHANNEL_SETTINGS: "Ajustes de Canales",
      MAIN: "Ajustes Principales",
      FILTERING: "Filtrado",
      CUSTOMISATION: "Personalización",
      EVENTS: "Eventos",
      DOWNVOTING: "Votar en contra",
      AUTO_STAR: "Marcado Automático con una Estrella",
      MISCELLANEOUS: "Diverso",
      STARS: "Estrellas",
      REQUIREMENTS: "Requisitos",
      COLORS: "Colores",
      EMBED_FOOTER: prefix => `Para ver información acerca de un ajuste específico, ejecuta ${prefix}settings <ajuste>`,
      INVALID_SETTING: s => `**${s}** no es un ajuste válido.`,
      INVALID_CHANNEL_SETTING: s => `**${s}** no es un ajuste válido para los canales, solo está disponible como un ajuste de servidor.`,
      INVALID_GUILD_SETTING: s => `**${s}** no es un ajuste válido para los servidores, solo está disponible como un ajuste de canales.`,
      EMBED_DESCRIPTION: (lock, name, desc) => `${lock} **Ajuste**: ${name}\n${desc}`,
      DATA: "Datos",
      VALUE: "Valor",
      DEFAULT: "Predeterminado",
      PERMISSION: "Permiso",
      SETTING_ALIASES: "Alias",
      NONE: "Ninguno",
      CAN_CHANGE: (prefix, name, sub, value) => `Puedes cambiar este ajuste con \`${prefix}changesetting ${name}${sub && ` ${sub}`} <${value.includes("/") ? value : `[${value}]`}>\`.`,
      MISSING_PERMISSIONS: p => `Necesitas tener los permisos ${p} para cambiar estos ajustes.`,
      CANT_CHANGE: reason => `No puedes cambiar este ajuste: ${reason}`,
      USE_ALIASES: "También puedes usar cualquiera de estos para cambiar/ver el ajuste."
    },
    SETUP: {
      DESCRIPTION: "Configura el bot en un servidor o canal guiándote por algunos ajustes básicos.",
      USAGE: "setup ([canal])",
      SETUP: "Setup",
      EMBED_DESCRIPTION: c => `Aquí te guiaré por **algunos** de los ajustes para ayudarte a configurarme en este ${c ? "canal" : "servidor"}.
      Di \`cancel\` o \`stop\` para cancelar el setup, \`skip\` o \`next\` para saltar al siguiente ajuste, y \`end\` para saltar al final.`.stripIndents(),
      EMBED_FOOTER: (n, total) => `Puedes parar, saltar o saltar al final en cualquier momento. Ajuste ${n}/${total}`,
      SETTING: "Ajuste",
      PLEASE_INPUT: item => `Por favor introduce ${item.includes("/") ? "" : "un(a) "}\`${item}\`.`,
      SETTING_SKIPPED: "Se saltó el ajuste.",
      MISSING_PERMISSIONS: "Al bot le falta el permiso `Gestionar Canales`, necesario para crear canales.",
      CREATE_CHANNEL_FAIL: "Algo salió mal al crear el canal de starboard.",
      CREATE_CHANNEL_SUCCESS: c => `Se ha creado un canal de starboard: ${c}`,
      REQUIRED_NAN: "La cantidad necesaria de estrellas para alcanzar el starboard tiene que ser un número.",
      RTR_NAN: "La cantidad de estrellas que un mensaje necesita para ser eliminado del starboard tiene que ser un número.",
      STARBOARD_ID: "Si deseas que cree un canal de starboard para ti, introduce `create`, opcionalmente seguido por el nombre del canal, como \`create museo-de-mensajes\` (será \"starboard\" por defecto).",
      LANGUAGE: "Ten en cuenta que no todos los idiomas están completos, solo Inglés y Español lo están.",
      REQUIRED: s => `Actualmente, si ${s.required} diferentes personas marcan con una estrella un mensaje, este será publicado en el starboard.`,
      REQUIRED_TO_REMOVE: s => `Actualmente, si un mensaje del starboard baja a menos de ${s.requiredToRemove} estrellas, este será eliminado del starboard.`,
      EMOJIS: "Este es el emoji el cual los usuarios deben reaccionar con a un mensaje del starboard. También puedes reaccionar a este mensaje con el emoji que quieras.",
      FILTER_BOTS: "Si quieres que los bots puedan aparecer en el starboard, no habilites esto.",
      VISIBLE: "Si marcas con una estrella a cosas personales/privadas, debes definitivamente deshabilitar esto. Si esto está habilitado, un 🌍 aparecerá en mensajes marcados con una estrella que han sido encontrados en el comando de explorar, seguido por el número de veces que se encontró.",
      CANCELLED_BY_MISTAKES: "Cancelado debido a muchos errores.",
      WAS_INACTIVE: "Detenido debido a inactividad.",
      CANCELLED: "El setup fue cancelado, ningún ajuste fue cambiado.",
      CONFIRMATION: del => `¿Estás feliz con estos resultados? Responde con yes o no. ${
        del
          ? "También puedes agregar `delete` al final de tu respuesta (ej. yes delete`) para despejar todos los embeds que envíe durante este setup."
          : ""
      }`,
      SOMETHING_WRONG: "Algo salió mal.",
      BULK_DELETE_FAIL: "Algo salió mal al intentar eliminar mis embeds.",
      RESULT: (b, p, c, v) => `${
        b
          ? `Se han actualizado los ajustes para este ${c ? "canal" : "servidor"}`
          : `Los ajustes para este ${c ? "canal" : "servidor"} no fueron actualizados`
      }. Si quieres cambiar más ajustes, puedes ver todos con ${p}settings${
        v ? "" : `, y si deseas cambiar el emoji, debes primero votar por el bot y luego ejecutar este comando de nuevo o ejecutar \`${p}changesetting emoji <[emoji]>\``
      }.`
    },
    MESSAGEINFO: {
      DESCRIPTION: "Obtén más detalles sobre un mensaje marcado con una estrella.",
      USAGE: "messageinfo <[ID del mensaje]>",
      NO_MESSAGE_ID: "Por favor provee un ID de un mensaje.",
      NOT_FOUND: "No logre encontrar un mensaje marcado con una estrella basado en tu entrada.",
      STARRED_MESSAGE_INFO: "Detalles",

      CONTEXT: "Contexto",
      AUTHOR: "Autor",
      CHANNEL: "Canal",
      STARBOARD: "Starboard",
      STARRED_AT: "Marcado",

      STATS: "Estadísticas",
      STARS: "Estrellas",
      UPVOTES: "Votos a Favor",
      DOWNVOTES: "Votos En Contra",
      GLOBAL: "Puntos Globales",

      OTHER: "Otro",
      DELETED: "Mensaje Eliminado",
      AT_DATE: d => `(${d})`,
      SAVED: "Mensaje Guardado",
      WILL_DELETE: d => `(será eliminado en ${d})`,
      ON_STARBOARD: "En el Starboard",
      ON_STARBOARD_BEFORE: "Estuvo en el Starboard Antes",
      ATTRIBUTES: "Atributos",
      NONE: "Ninguno",

      LINKS: "Links",
      MESSAGE: "Mensaje",
      CONVERSATION: "Conversación",
      STARBOARD_MESSAGE: "Mensaje del Starboard"
    },
    MIGRATE: {
      DESCRIPTION: "Escanea hasta los últimos 1000 mensajes del starboard para buscar posts de otros bots de starboard y conviertelos en mensajes marcados con una estrella para este bot. Puedes opcionalmente proveer un ID para que starboard escanee antes o después.",
      USAGE: "migrate ([starboard]) ([limite]) --after <[ID del mensaje]> --before <[ID del mensaje]>", // these usages are getting too long :( --Sí D:
      NO_STARBOARD: "No hay starboards establecidos para este servidor.",
      // NOT_STARBOARD: "Ese canal no es un canal de starboard.",
      MISSING_PERMISSIONS: sb => `No tengo permiso de eliminar mensajes en ${sb}. Toma en cuenta que no eliminare un mensaje hasta que se haya migrado con éxito.`,
      NOTHING_TO_MIGRATE: (sb, bots) => `No pude encontrar ningún mensaje para migrar en ${sb}. Actualmente, solo puedo migrar mensajes del starboard por <@${bots.join(">, <@")}>.`,
      MIGRATE: "Migrar",
      CONFIRMATION_EMBED: (n, bots, c, before, after) => `He encontrado ${n} mensajes${before ? ` antes ${before}${after ? " y" : ""}` : ""}${after ? ` después ${after}` : ""} por <@${bots.join(">, <@")}> en ${c} que puedan ser mensajes marcados con una estrella. ¿Quieres que continúe?
      Intentaré convertir estos mensajes a mensajes marcados con una estrella para mi, y los publicaré al starboard. Mientras avanzo, eliminar los mensajes que he reemplazado con éxito, o aquellos que ya existen en el starboard.
      • Al migrar ignora mensajes que fueron eliminados del starboard.
      • Al migrar ignora mensajes que fueron enviados en un canal que no tiene starboard.
      Di **yes** para continuar.`.stripIndents(),
      ETA: t => `ETA: acerca de ${t}`,
      CANCELLED: "Se ha cancelado la migración del starboard.",
      ALREADY_MIGRATING: "Parece ser que este servidor está actualmente migrando mensajes.",
      STATUS: (n, total, sb, typing) => `${typing} Migrando mensajes de ${sb} - ${n}/${total} \`[${"#".repeat((n / total) * 10).padEnd(10, " ")}]\``,
      SUCCESS: n => `Se han migrado ${n} mensajes.`
    },
    EXPLORE: {
      DESCRIPTION: "¡Muestra un mensaje del starboard random de un usuario, tu servidor o cualquier servidor! Para que un mensaje de cualquier servidor aparezca, debe tener 5+ estrellas y el servidor debe tener el ajuste **Visible** habilitado.",
      USAGE: "explore ([estrellas]) (me/user/server/global) ([usuario])",
      NOT_FOUND: "No se encontraron mensajes marcados con una estrella visibles. Los mensajes deben tener 5+ estrellas para aparecer, ¡así que ve y marca con una estrella mensajes graciosos!",
      NOT_FOUND_STARS: stars => `No se encontraron mensajes marcados con ${stars}+ estrellas. Intenta buscar por una menor cantidad.`,
      TYPE_NOT_FOUND: (stars, type) => `No se encontraron mensajes ${stars ? `con ${stars}+ estrellas` : ""} de ${type}.`,
      COULD_NOT_FETCH: id => `No pude determinar un mensaje de un starboard con una entrada random con el ID \`${id}\``,
      THIS_SERVER: "este servidor",
      THIS_USER: "este usuario",
      YOU: "tu"
    },
    LEADERBOARD: {
      DESCRIPTION: "Muestra una lista de clasificaciones de las personas con las mejores estadísticas. Puedes insertar un usuario para ver su posición en la lista, o un canal para filtrar estadísticas de solo ese canal.",
      USAGE: "leaderboard (messages/stars/starboarded/global/trashed/downvotes/channels/servers/reset) ([página]) ([usuario]) ([canal]) --before <[fecha]> --after <[fecha]>",
      NO_LEADERBOARD: "La lista de clasificaciones está deshabilitada en este servidor.",
      NOT_ON_LEADERBOARD: "No está en la lista de clasificaciones.",
      TITLE: title => `Lista de Clasificaciones - ${title}`,
      STARS: c => `Estrellas Totales ${c ? `en #${c}` : ""}`,
      STARBOARDED: c => `Veces En El Starboard ${c ? `en #${c}` : ""}`,
      TRASHED: c => `Mensajes en la Basura ${c ? `en #${c}` : ""}`,
      DOWNVOTES: c => `Votos En Contra ${c ? `en #${c}` : ""}`,
      GLOBAL: c => `Puntos Globales ${c ? `en #${c}` : ""}`,
      MOST_STARRED_MESSAGES: (c, u) => `Mensajes con más Estrellas${u ? ` de ${u}` : ""}${c ? ` en #${c}` : ""}`,
      CHANNELS: u => `Canal con más Estrellas${u ? ` de ${u}` : ""}`,
      SERVERS: "Servidores",
      STARS_LINE: (medal, isYou, place, name, stars, star) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Estrellas: ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      STARBOARDED_LINE: (medal, isYou, place, name, times) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Veces En El Starboard: ${times.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      TRASHED_LINE: (medal, isYou, place, name, trashed) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Mensajes en la Basura: ${trashed.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      DOWNVOTES_LINE: (medal, isYou, place, name, downvotes) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Votos En Contra: ${downvotes.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      GLOBAL_LINE: (medal, isYou, place, name, g) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Puntos Globales: ${g.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      CHANNEL_LEADERBOARD_LINE: (medal, isYou, place, channel, star, stars) =>
        `${isYou ? "**" : ""}${medal} ${place}: ${channel} - ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      MESSAGE_LEADERBOARD_LINE: (medal, isYou, place, messageID, name, url, star, stars) =>
        `${isYou ? "**" : ""}${medal} ${place}: ${isYou ? `[${messageID}](${url})` : `**[${messageID}](${url})**`}${name && ` de ${name}`} - ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      SERVER_LEADERBOARD_LINE: (isYou, medal, place, name, stars, star) =>
        `${isYou ? "**" : ""}${medal} ${place}: ${isYou ? name : `**${name}**`} - Estellas: ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      NOTHING_TO_DISPLAY: "Nada para mostrar.",
      EMBED_FOOTER: (user, place, page, totalPages) =>
        `${user ? `El Lugar de ${user}` : "Tu Lugar"}: ${place} | Página ${page}/${totalPages}`,

      ARE_YOU_SURE: "¿Estás seguro?",
      CONFIRMATION_EMBED: `¿Estás seguro de que quieres borrar tu lista de clasificaciones?
      Por favor ten en cuenta que esto no restablece todas las listas de clasificaciones, solo las listas del servidor de **Estrellas**, **Global**, **Basurero** y **Veces En El Starboard.
      Para otras listas de clasificaciones como la de mensajes, puedes usar los flags --before o --after, ej. \`--after 14/09/2021\`.
      Di **yes** para continuar.`.stripIndents(),
      NOT_RESET: "Se ha cancelado el restablecimiento de la lista de clasificaciones.",
      SUCCESS_RESET: "Se ha restablecido la lista de clasificaciones."
    },
    HALLOFFAME: {
      DESCRIPTION: "Muestra el Salón de la Fama del servidor, o agrega/elimina mensajes de este. También puedes agregar mensajes usando la acción rápida 🏆.",
      USAGE: "halloffame (add/remove/[página]) ([ID del mensaje])",
      TITLE: "Salón de la Fama",
      LINE: (id, url, name, stars, star) => `• **[${id}](${url})** de ${name} - ${star} ${stars.toLocaleString(LOCALE)}`,
      NOTHING: p => `Nada para mostrar.\nLos moderadores pueden agregar un mensaje al salón de la fama usando \`${p}halloffame add <[ID del mensaje]>\`, o usando la acción rápida 🏆.`,
      EMBED_DESCRIPTION: `Este es el Salón de la Fama, los mensajes que "pertenecen a un museo" -  los mejores mensajes en el servidor. Estos mensajes fueron escogidos por varios moderadores, así que aparecer aquí es un gran logro. Aquí está el listado:`,
      PAGE: (p, t) => `Página ${p}/${t}`,
      NOT_FOUND: "No logré encontrar un mensaje marcado con una estrella basado en tu entrada.",
      ALREADY_ON: "Ese mensaje ya está en el Salón de la Fama.",
      MAX: "Has llegado al máximo de 100 mensajes en el Salón de la Fama.",
      NOT_ON: "Ese mensaje no está en el Salón de la Fama.",
      ARE_YOU_SURE: "¿Estás seguro?",
      CONFIRMATION_EMBED: "¿Estás seguro de que quieres eliminar cada mensaje del Salón de la Fama?\nDi **yes** para continuar.",
      CANCELLED: "Se ha dejado de eliminar cada mensaje del Salón de la Fama.",
      SUCCESS_ADD: "Se ha agregado ese mensaje al Salón de la Fama.",
      SUCCESS_REMOVE: "Se ha eliminado ese mensaje del Salón de la Fama.",
      SUCCESS_REMOVE_ALL: "Se ha eliminado todo del Salón de la Fama."
    },
    STATS: {
      DESCRIPTION: "Mira las estadísticas de un usuario, o restablece las estadísticas de un usuario.",
      USAGE: "stats ([usuario]) --reset",
      SUCCESS_RESET: u => `Se han restablecido las estadísticas de la lista de clasificaciones de **${u}**. Ten en cuenta que solo el primer conjunto de estadísticas (Estrellas, Veces En El Starboard, Puntos Globales etc) puede ser restablecido.`,
      STATS: u => `${u ? `Estadísticas de ${u}` : "Tus Estadísticas"}`,
      STARS: "Estrellas",
      STARBOARDED: "Veces En El Starboard",
      GLOBAL_POINTS: "Puntos Globales",
      DOWNVOTES: "Votos En Contra",
      TRASHED: "Mensajes En La Basura",
      MESSAGES_STARRED: "Mensajes Marcados Con Estrellas",
      LOCKED: "Mensajes Bloqueados",
      FROZEN: "Mensajes Congelados",
      CURRENTLY_TRASHED: "Mensajes Actualmente En La Basura",
      ON_STARBOARD_BEFORE: "Mensajes Que Estuvieron En El Starboard",
      AVG_STARS_PER_MESSAGE: "Promedio De Estrellas Por Mensaje",
      STARRED_CHANNEL: "Mayor Número De Estrellas Obtenidas En",
      MOST_STARRED: "Mayor Número De Estrellas En Un Mensaje",
      PERCENT_LOCKED: "% Bloqueado",
      PERCENT_FROZEN: "% Congelado",
      PERCENT_TRASHED: "% En la Basura",
      STARRED_MESSAGES_BY_YOU: "% De Mensajes Marcados Con Estrellas Por Ti",
      CHANCE_ON_STARBOARD: "Probabilidad En El Starboard",
      WORLDWIDE: "Estadísticas Globales",
      TOTAL_STARS: "Estrellas Totales",
      HALL_OF_FAME: "Mensajes En El Salón De La Fama",
      HALL_OF_FAME_BY_YOU: "Tus Entradas En El Salón De La Fama",
      NONE: "Ninguna"
    },
    FILTERS: {
      DESCRIPTION: "Mira, crea o edita filtros usados para filtrar mensajes de ser marcados con una estrella.",
      USAGE: "filters ([channelSettings]) (add/remove/list/edit) (content/attachments/age/[filterNumber]) (...[opciones]) --explain --options",
      MAX_FILTERS: c => `Has alcanzado la cantidad máxima de filtros permitidos para este ${c ? "canal" : "servidor"}.`,
      SUCCESS_ADD: desc => `Se ha agregado un nuevo filtro${desc ? `:\n${desc}` : "."}`,
      NO_FILTERS: c => `No hay filtros establecidos para este ${c ? "canal" : "servidor"}.`,
      SUCCESS_EDIT: (n, desc) => `Se ha editado el filtro ${n}${desc ? `:\n${desc}` : "."}`,
      SUCCESS_REMOVE: n => `Se ha eliminado el filtro ${n}.`,
      SUCCESS_REMOVE_ALL: "Se han eliminado todos los filtros.",
      MAX_MIN: age => `El máximo${age && " de edad"} no puede ser menor que el mínimo${age && " de edad"}.${age ? " (`olderThan` no puede ser mayor que `newerThan`)" : ""}`,
      REGEX_SAME: "Las regex/strings para coincidir y no, no pueden ser la misma.",
      MEDIA_REQUIRED_MAX: "No puedes hacer que la multimedia sea requerida cuando el máximo de archivos adjuntos es 0.",
      REQUIRED_MAX: "El contenido no puede ser requerido si el máximo de caracteres es 0.",
      MIN_MAX_CONTENT: min => `El número de caracteres ${min ? "mini" : "maxi"}mo no puede ser mayor a 4000.`,
      MIN_MAX_ATTACHMENTS: min => `El número de archivos adjuntos ${min ? "mini" : "maxi"}mo no puede ser mayor a 50.`,
      MIN_MAX_AGE: min => `La edad ${min ? "mini" : "maxi"}ma no puede ser mayor a 5 años.`,
      AGE_RELATIVE: "Un filtro de edad no puede tener un tiempo relativo (x días x horas x minutos) y estático (una fecha, es decir. dd/mm/aaaa) simultáneamente.",
      INVALID_REGEX: (t, e) => `Una regex fue proveída para **${t}**: ${e}`,
      REGEX_TOO_LONG: "Esa regex es muy extensa.",
      AUTO_STAR_AGE: "La opción **AutoStar** no puede ser usada para filtros de edad.",
      FILTERS: "Filtros",
      EMBED_DESCRIPTION: c => `${c ? `**Ajustes de Canales**: ${c}\n` : ""}
      Estos son los filtros para este ${c ? "canal" : "servidor"}. Los mensajes no pueden ser marcados con estrellas si no pasan todos estos filtros.
      Si un mensaje fue marcado con una estrella antes de que los filtros fueran hechos, o fue forzado al starboard, aún podrán obtener más estrellas.`.stripIndents(),
      OPTIONS: (p, guide) => `Los tipos de filtros actuales son **Content**, **Attachments** y **Age**.
      Las opciones disponibles son:
      __**Content**__
      - Required yes/no
      - Minimum [número]
      - Maximum [número]
      - IsReply yes/no/none
      - Match [texto/regex]
      - NotMatch [texto/regex]
      - AutoStar yes/no/none
      
      __**Attachments**__
      - Required yes/no
      - Minimum [número]
      - Maximum [número]
      - MediaRequired yes/no
      - AutoStar yes/no/none
      
      __**Age**__
      - NewerThan [tiempo]
      - OlderThan [tiempo]
      
      Para crear un filtro, ejecuta \`${p}filters add <content/attachments/age> <...[opciones]>\`
      
      **[Aprender Más](${guide})**`.stripIndents(),
      VIEW_OPTIONS: (p, ex, guide) => `Puedes ver todas las opciones para crear filtros con \`${p}filters --options\`, o editar un filtro existente con \`${p}filters edit <[número]> <...[opciones]>\`
      ${!ex ? `Si quieres una explicación de todos tus filtros, ejecuta \`${p}filters --explain\`\n` : ""}
      **[Aprender Más](${guide})**`.stripIndents(),
      DESCRIBE: "Para que un mensaje sea marcado con una estrella, debe:",
      REQUIRED_CONTENT: "tener contenido",
      MIN_CONTENT: n => `tener contenido mayor o igual a **${n}** caracteres`,
      MAX_CONTENT: n => `tener contenido menor o igual a **${n}** caracteres`,
      IS_REPLY: is => `${is ? "" : "**no** "}ser una respuesta`,
      MATCH_REGEX: (rgx, flags) => `coincidir la regex \`/${rgx}/${flags}\``,
      INCLUDES: str => `incluir \`${str}\``,
      NOT_MATCH_REGEX: (rgx, flags) => `no coincidir la regex \`/${rgx}/${flags}\``,
      NOT_INCLUDES: str => `no incluir \`${str}\``,
      REQUIRED_ATTACHMENT: "tener al menos **un** archivo adjunto/embed",
      MIN_ATTACHMENTS: n => `tener no menos que **${n}** archivos adjuntos`,
      MAX_ATTACHMENTS: n => `tener no más que **${n}** archivos adjuntos`,
      MEDIA_REQUIRED: "tener al menos **una** imagen, video o otro tipo de multimedia",
      MIN_AGE: t => `ser más viejo de \`${t}\``,
      SENT_BEFORE: t => `haber sido enviado antes de \`${t}\``,
      MAX_AGE: t => `ser más reciente que \`${t}\``,
      SENT_AFTER: t => `haber sido enviado después de \`${t}\``,
      APPLIES_TO: list => `Este filtro aplica a ${list}`,
      DOES_NOT_APPLY_TO: list => `Este filtro no aplica a ${list}`,
      AUTO_STAR: b => `Este filtro ${b ? "solo aplica" : "no aplica"} a mensajes que son marcados con estrellas automáticamente.`,
      NOT_SET: "No establecido",
      REQUIRED_NAME: "Necesario",
      MIN_NAME: "Mínimo",
      MAX_NAME: "Máximo",
      IS_REPLY_NAME: "Es una Respuesta",
      MATCH_NAME: "Coincide la Regex",
      INCLUDES_NAME: "Incluye",
      NOT_MATCH_NAME: "No Coincide la Regex",
      NOT_INCLUDES_NAME: "Excluye",
      MEDIA_REQUIRED_NAME: "Multimedia Necesaria",
      MIN_AGE_NAME: "Publicada Antes de",
      AFTER_NAME: "Enviada Después de",
      MAX_AGE_NAME: "Publicada Después de",
      BEFORE_NAME: "Enviada Antes de",
      APPLIES_TO_NAME: "Aplica a",
      DOES_NOT_APPLY_TO_NAME: "No Aplica a",
      AUTO_STAR_NAME: "Mensajes Marcados Automáticamente",
      NOONE: "ninguno",
      CONTENT: "Filtro de Contenido de Mensaje",
      ATTACHMENTS: "Filtro de Archivos Adjuntos de Mensaje",
      AGE: "Filtro de Edad de Mensaje",
      FILTER_PAGE: (n, t) => `Filtro ${n}/${t}`,
      PLEASE_INPUT: more => `Por favor introduce ${more ? "algunas más " : ""}opciones para este filtro.`
    },
    DEBUG: {
      DESCRIPTION: "Has un debug y obten razones del porque un mensaje, mensajes en un canal específico, y todos los mensajes no están siendo marcados con estrellas.",
      USAGE: "debug ([canal]) ([ID del mensaje]) --autoStar",
      DEBUG: "Debug",
      NO_STARBOARD: c => `No hay actualmente un canal de starboard establecido en este ${c ? "canal" : "servidor"}.`,
      NO_STARBOARDS: "No hay starboards establecidos para este servidor.",
      MISSING_READ: c => `No puedo ver ${c}, por favor habilita el permiso \`Ver Canal\`.`,
      MISSING_HISTORY: c => `No puedo leer el historial de mensajes en ${c}, por favor habilita el permiso \`Leer el Historial de Mensajes\`.`,
      MISSING_EMBEDS: c => `No puedo enviar embeds en ${c}, por favor habilita el permiso \`Insertar Enlaces\`.`,
      MISSING_FILES: c => `No puedo adjuntar archivo en ${c}, así que los archivos no serán adjuntados al mensaje del starboard y en cambio serán vinculados. Por favor habilita el permiso \`Adjuntar Archivos\` si quieres archivos adjuntos.`,
      MESSAGE_NOT_EXISTS: (id, c) => `Un mensaje con ID \`${id}\` no fue encontrado en ${c}`,
      TRASHED: "Este mensaje está en la basura.",
      FROZEN: "Este mensaje está congelado y no puede conseguir o perder ninguna estrella más.",
      FILTER_BOTS: "Los mensajes de bots no pueden ser marcados con estrellas porque el ajuste **FilterBots** está habilitado.",
      BLACKLISTED: roles => `El autor de este mensaje está en la lista negra${roles && ` porque tiene los roles ${roles}`}.`,
      CHANNEL_BLACKLISTED: c => `${c || "El canal en el cual este mensaje fue enviado"} está actualmente en la lista negra.`,
      FILTER: (c, list) => `Este mensaje no pasa el ${list.length > 1 ? `${list.slice(0, -1).join(", ")} y ${list.slice(-1)} filtros` : `${list} filtro`} establecido para este ${c ? "canal" : "servidor"}.`,
      CONTENT_REQUIRED: "Este mensaje no tiene contenido pero se necesita contenido.",
      CONTENT_MIN: (n, l) => `El largo de este mensaje necesita ser ${n} caracteres o más, actualmente es ${l}.`,
      CONTENT_MAX: (n, l) => `El largo de este mensaje excede el límite de ${n} caracteres. (${l})`,
      IS_REPLY: b => `Este mensaje no puede ser marcado con estrellas porque este ${b ? "no es" : "es"} una respuesta.`,
      MATCH_REGEX: r => `Este mensaje no coincide con la regex${r && ` \`${r}\``}.`,
      CONTENT_INCLUDES: str => `Este mensaje no contiene${str ? `\`${str}\`` : "una frase"} y por esto no puede ser marcado con estrellas.`,
      NOT_MATCH_REGEX: r => `Este mensaje coincide con la regex${r && ` \`${r}\``} así que no puede ser marcado con estrellas.`,
      CONTENT_EXCLUDES: str => `Este mensaje contiene${str ? `\`${str}\`` : "una frase"} y por esto no puede ser marcado con estrellas.`,
      ATTACHMENT_REQUIRED: "Un archivo o embed es necesario y este mensaje no tiene ninguno.",
      ATTACHMENT_MIN: (m, n) => `Este mensaje necesita tener ${m} o más archivos/embeds, actualmente tiene ${n}.`,
      ATTACHMENT_MAX: (m, n) => `Este mensaje debe tener menos de ${m + 1} archivos/embeds, actualmente tiene ${n}.`,
      MEDIA_REQUIRED: "Este mensaje no tiene ninguna multimedia pero es necesario tener. (Imagenes, GIFs, video, etc)",
      OLDER_THAN: (t, curr) => `Este mensaje necesita ser más viejo que ${t} para ser marcado con estrellas, actualmente es ${curr} viejo.`,
      SENT_BEFORE: (t, sent) => `Este mensaje necesita haber sido enviado antes de ${t} para ser marcado con estrellas, fue enviado el ${sent}.`,
      NEWER_THAN: (t, curr) => `Este mensaje necesita ser más reciente que ${t} para ser marcado con estrellas, actualmente es ${curr} viejo.`,
      SENT_AFTER: (t, sent) => `Este mensaje necesita haber sido enviado después de ${t} para ser marcado con estrellas, fue enviado el ${sent}.`,
      REQUIRED_STARS: (r, s, emojis) => `Este mensaje necesita ${r} estrellas (${emojis}) para llegar al starboard, ahora mismo tiene ${s}.`,
      CHANNEL_SETTINGS: "Ajustes de Canales",
      STARBOARD: "Starboard",
      REQUIRED: "Necesario",
      EMOJI: "Emoji",
      STAR_SELF: "StarSelf",
      BLACKLISTED_ITEMS: "Items En La Lista Negra",
      FILTERS: "Filtros",
      NOT_SET: "no establecido",
      NOTHING_WRONG: (m, c, as) => `No parece que haya algo mal y ${m ? "este mensaje" : "todos los mensajes"} de ${c ? `${c} debería` : "los canales que puedo ver deberían"} poder ser marcado(s) ${as ? "automáticamente " : ""} con una estrella como usualmente. ${c ? "" : "Si quieres, puedes en cambio introducir un canal para hacer debug."}`
    },
    BOTINFO: {
      DESCRIPTION: "Obtén detalles del bot.",
      USAGE: "botinfo (bot/star)",
      BOT_STATS: "Estadisticas del Bot",
      STARRED_STATS: "Estadísticas de Mensajes con Estrellas",
      SYSTEM_STATS: "Estadísticas del Sistema",
      SERVERS: "Servidores",
      USERS: "Usuarios",
      MESSAGES: "Mensajes",
      CHANNELS: "Canales",
      COMMANDS_RUN: "Comandos Ejecutados",
      PING: "Latencia",
      UPTIME: "Tiempo de Funcionamiento",
      CREATED_AT: "Creación del Bot",
      JOINED_AT: "Se Unió al Servidor",
      COMMANDS: "Comandos",
      VERSION: "Versión",
      STARRED_MESSAGES: "Mensajes Marcados con Estrellas",
      LIFETIME_STARRED_MESSAGES: "Mensajes Marcados con Estrellas de Siempre",
      MOST_STARS: "Mayor Número de Estrellas En Un Mensaje",
      TOTAL_STARS: "Estrellas Totales",
      UPVOTES: "Estrellas Guardadas",
      GLOBAL: "Puntos Globales Guardados",
      TRASHED: "Mensajes en la Basura",
      POSTED_MESSAGES: "Mensajes Publicados",
      EDITED_MESSAGES: "Mensajes Editados",
      REWARD_ROLES: "Roles de Recompensa Dados",
      LOCKED: "Mensajes Bloqueados",
      FROZEN: "Mensajes Congelados",
      SAVED: "Mensajes Enviados A MDs",
      QUICK_ACTIONS: "Acciones Rápidas Efectuadas",
      CPU: "CPU",
      DISK_USAGE: "Uso del Disco",
      MEMORY_USAGE: "Uso de Memoria",
      PROCESS_UPTIME: "Tiempo de Funcionamiento del Proceso",
      PLATFORM: "Platforma",
      LIBRARY: "Libreria"
    },
    SHOW: {
      DESCRIPTION: "Muestra vista previa de cualquier mensaje marcado con estrellas, o el mensaje con más estrellas.",
      USAGE: "show <moststarred/[ID del mensaje]>",
      NOT_FOUND: "No pude encontrar un mensaje marcado con estrellas basado en tu entrada.",
      STARRED_MESSAGE: "Mensaje Marcado con Estrellas",
      COULD_NOT_OBTAIN: "No logre obtener este mensaje marcado con estrellas, esto puede ser debido a que ambos mensajes fueron eliminados, el canal fue eliminado o no puedo ver el canal. Pero sin embargo, aquí hay alguna información de este:",
      STARS: "Estrellas",
      GLOBAL: "Puntos Globales",
      AUTHOR: "Autor",
      CHANNEL: "Canal"
    },
    SHARDS: {
      DESCRIPTION: "Información del Shard",
      USAGE: "shards"
    },
    SUGGEST: {
      DESCRIPTION: "Sugiere lo que sea que creas que este bot debe tener/cambiar.",
      USAGE: "suggest <[sugerencia]>",
      NEED_VOTE: (vote, support) => `Para reducir el spam, debes **[votar por el bot](${vote})** para hacer sugerencias fuera del **[servidor de soporte](${support})**.`,
      NO_INPUT: "Por favor provee una sugerencia para hacer.",
      ATTACHMENTS_NSFW: "Los archivos no pueden ser usados para hacer sugerencias en un canal NSFW.",
      SUGGESTION: "Sugerencia",
      THANK_YOU: link => `Muchas gracias por tu sugerencia, esto realmente ayuda mucho al desarrollo de este bot. Puedes ver tu sugerencia **[aquí](${link})**, en donde la gente puede votar por esta.`
    },
    GENERATE: {
      DESCRIPTION: "Genera un código premium",
      USAGE: "generate ([código])",
    },
    REDEEM: {
      DESCRIPTION: "Reclama un código premium",
      USAGE: "redeem <[código]>",
      SUPPORT: "Por favor reclama códigos de Starboard Premium en un servidor en el cual realmente deseas tener Starboard Premium.",
      CODE_USED: "Este código ya fue redimido.",
      CODE_INVALID: "Perdón, ese no es un código válido.",
      ALREADY_PREMIUM: "Este servidor ya tiene premium de por vida, así que un código no puede ser reclamado.",
      EXTRA_PREMIUM: months => `Ese código fue reclamado. Este servidor ahora tiene Starboard Premium por un mes extra, para un total de ${months} meses.`,
      SUCCESS_PREMIUM: expires => `¡Ese código fue reclamado. Este servidor ahora tiene Starboard Premium${expires ? " por un mes" : ""}!`,
    },
    PREMIUM: {
      DESCRIPTION: "Obtén detalles de premium, o tu estado premium.",
      USAGE: "premium",
      PREMIUM: "Starboard Premium",
      HAVE_PREMIUM: n => `Actualmente tienes premium activo en ${n} servidores.`,
      SINCE: "Desde",
      EXPIRES: "Expira En",
      NEVER: "Nunca",
      DONATED: "¡Gracias por donar y apoyar el desarrollo de Starboard!",
      PREMIUM_INFO: idonated => `
      __Al **donar**, obtienes (permanentemente):__
      - Un rol de Donator y un chat exclusivo de donadores en nuestro servidor de soporte.
      - Un emblema ${idonated} que aparece en todos tus mensajes del starboard.

      __Al obtener **Starboard Premium**, puedes:__
      - Reclamar un rol Premium en nuestro servidor de soporte.
      *Y en un servidor de tu elección...*
      - Tener hasta 5 emojis.
      - Tener hasta 25 colecciones de ajustes de canales.
      - Tener la habilidad de **votar en contra** de mensajes del starboard.
      - Tener todas las respuestas a comandos que tienen embeds ser del color establecido para mensajes del starboard.
      `.stripIndents()
    },
    LANGUAGES: {
      DESCRIPTION: "Mira una lista de todos los idiomas, o establece un idioma para el servidor.",
      USAGE: "languages ([idioma])",
      LANGUAGES: "Idiomas",
      EMBED_DESCRIPTION: (l, p) => `¡Ahora tienes la opción de establecer el idioma del bot! El bot responderá a todos los comandos en ese idioma, pero los comandos aún deben ser ejecutados en Inglés.
      Toma en cuenta que Inglés es el único idioma que siempre estará completo al 100%, así que si una declaración no pudo ser encontrada en tu idioma, será enviada en Inglés por defecto.
      Si quieres, puedes ayudar a agregar más idiomas en https://github.com/TheNoob27/starboard-languages, esto ayudaría bastante.

      La lista actual de idiomas disponibles es:
      - ${Object.values(module.exports.LANGUAGES).join("\n- ")}
      
      El idioma actualmente establecido es **${l}**. Puedes cambiarlo con \`${p}languages <[idioma]>\``.stripIndents(),
      INVALID_LANGUAGE: l => `${l ? `**${l}**` : "Eso"} no es un idioma válido.`,
      SUCCESS: l => `Se ha establecido el idioma del servidor a **${l}**.`
    },
    QUICKACTIONS: {
      DESCRIPTION: "Obtén detalles de las Acciones Rápidas.",
      USAGE: "quickactions",
      QUICK_ACTIONS: "Acciones Rápidas",
      EMBED_DESCRIPTION: (enabled, prefix) => `**Habilitadas**: ${enabled}

      Las acciones rápidas permiten a los usuarios ejecutar acciones en mensajes del starboard, como bloquear, congelar, eliminar o guardar, al reaccionar en el mensaje del starboard con emojis específicos.
      __Aquí hay una lista de las Acciones Rápidas para moderadores:__
      🗑️: Agregar mensaje a la basura
      🔒: Bloquear mensaje
      🔓: Desbloquear mensaje
      🧊/❄️: Congelar el mensaje
      🔥: Descongelar el mensaje
      🔄/🔁: Volver a contar las estrellas del mensaje
      🏆/🏅: Agregar al Salón de la Fama
      ❌/🇽: Elimina el mensaje del starboard
      📌/📍: Forzar al starboard

      __Y para todos:__
      📥/💾: Guardar el mensaje a los MDs
      ❌/🇽: Eliminar un mensaje del starboard que les pertenece
      
      **Nota**: La acción rápida 📌/📍 forzar tiene que ser usada en el mensaje original.
      **Tip**: Si no quieres que los usuarios usen las Acciones Rápidas para todos puedes deshabilitar su permiso \`Añadir Reacciones\`.

      Para habilitar/deshabilitar las Acciones Rápidas, ejecuta \`${prefix}changesetting quickActions <true/false/yes/no>\``.stripIndents()
    },
    SAVE: {
      DESCRIPTION: "Guarda un mensaje marcado con estrellas o un mensaje normal en tus mds.",
      USAGE: "save ([canal]) <[ID del mensaje]>",
      RECENTLY_SAVED: "Este mensaje ya fue guardado recientemente.",
      DMS_CLOSED: "No puedo enviarte este mensaje ya que tus MDs están cerrados.",
      SUCCESS: "Ese mensaje ha sido enviado a tus MDs.",
      FAIL: "Algo salió mal al enviarte ese mensaje.",
      NO_MESSAGE_ID: "Por favor provee un ID de mensaje."
    }
  }, // might alphabetically order the commands one day -- not needed

    // languages
    LANGUAGES: {
      EN_GB: "Inglés (Reino Unido)",
      EN_US: "Inglés (Estados Unidos)",
      ES_ES: "Español",
      FUWWY: "Fuwwy",
    }
  }
