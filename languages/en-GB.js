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

  // message event
  CANT_SPEAK: "I cannot speak in that channel! Please get a moderator to change my permissions for that channel, or try using me in a different channel.",
  PREFIX_INFO: (prefixes = ["star "]) => `My prefix for this server is${prefixes.length > 1 ? " any of" : ""} \`${prefixes.join("`, `")}\`, but my mention also works as a prefix.`,
  HELP: "Help",

  COMMANDS: {
    COOLDOWN_MESSAGE: time => `You're using this command too frequently! Please wait ${time} before using it again.`,
    WAIT_SUGGESTIONS: (hasVoted, guildID) => {
      return [
        "**[join the support server](https://discord.gg/rZgxfbH)** and have fun talking to us, participate in polls which heavily determine what gets added to the bot, possible giveaways and much much more",
        `**[vote for the bot](https://top.gg/bot/655390915325591629/vote)** ${hasVoted ? "for extra coolness points" : "to have this cooldown sawed in half"}`,
        "**[become a patron](https://patreon.com/TheNoob27)** and unlock some sweet donator only features, and a donator only role in our discord server",
        "**[follow my twitter](https://twitter.com/DaNoob27)** for absolutely no reason at all",
        "support one of our patrons, x79#8008, by **[following their twitter](https://twitter.com/cometvgc)**",
        "support one of out patrons, Conifer ConnieTreeCow#9864 by **[subscribing to their youtube channel](https://www.youtube.com/channel/UCzL9A1orpOcXCSOQ3n6ujEA)**",
        `check out this cool **[Minecraft Discord bot](https://discord.com/oauth2/authorize?client_id=652726107535310859&permissions=16&scope=bot&guild_id=${guildID})** for all you minecraft players out there`,
        "check out Starboard's **[Github page](https://github.com/TheNoob27/starboard-issues/issues)** where you can post bugs/suggestions instead of using the commands"
      ]
    },
    COOLDOWN: "Cooldown",
    COOLDOWN_EMBED: (cooldownMessage, cooldown, waitSuggestions) => 
    `${cooldownMessage}
    The cooldown for this command is **${cooldown}**. 
    While you wait, why not ${waitSuggestions.join(" or ")}!`
    .stripIndents(),
    /** @param {import ("../../Starboard/src/classes/Command")} command @param {import("../../Starboard/src/classes/Embed")} Embed */
    COMMAND_HELP_EMBED: (command, Embed, prefix, color, cooldown) => {
      const l = __filename.split("/").slice(-1)[0].slice(0, -3) // a/b/c/en-GB.js -> en-GB
      const c = command.language(l).get()
      const embed = Embed
        .setTitle("Help")
        .setColor(command.enabled ? color : command.client.colors.error)
        .addField(
          `Command: ${prefix}${command.language(l).name}`,
          `**Aliases**: ${command.language(l).aliases.get().join(", ") || "none"}
          **Description**: ${command.language(l).description || "none"}
          **Usage**: ${prefix}${command.language(l).usage}
          ${c.EXAMPLE ? `**Example${Array.isArray(c.EXAMPLE) ? "s" : ""}**: ${Array.isArray(c.EXAMPLE) ? c.EXAMPLE.map(c => `${prefix}${c}`).join("\n") : `${prefix}${c.EXAMPLE}`}` : ""}`
          .stripIndents()
        )
        .addField(
          "Extra",
          `**Category**: ${command.language(l).base.categories(command.category)}
          **Cooldown**: ${cooldown}
          **Enabled**: ${command.client.config.ids.emojis[command.enabled ? "yes" : "no"]}
          **Required Bot Permissions**: ${command.client.util.readablePermissions(command.botPermissions)}
          **Required User Permissions**: ${command.client.util.readablePermissions(command.requiredPermissions)}`
          .stripIndents()
        )
        .setFooter("() = optional arguments, <> = required arguments, -- = optional flag")
      if (command.notices) embed.addField(
        "Notices",
        `${
          command.errorMessage
            ? `Something is currently wrong with this command: **${command.errorMessage}**.\n`
            : ""
        }${
          command.disableMessage
            ? `This command is disabled: **${command.disableMessage}**`
            : ""
        }`
      )

      return embed
    },

    /** @param {import ("../../Starboard/src/classes/Command")} command @param {import("../../Starboard/src/classes/Embed")} Embed */
    COMMAND_DISABLED_EMBED: (command, Embed) =>
      Embed
        .setTitle("Command Disabled")
        .setDescription(`This command is currently disabled. ${command.settings.disableMessage ? `The reason for that is: **${command.disableMessage}**.` : "It was probably disabled because something wasn't functioning properly, otherwise another reason."}
        Please try again later, or **[join the support server](https://discord.gg/rZgxfbH)** for more info.`.stripIndents())
        .setColor(command.client.colors.error)
        .setTimestamp(),
    /** @param {import ("../../Starboard/src/classes/Command")} command @param {import("../../Starboard/src/classes/Embed")} Embed */
    COMMAND_ERROR_EMBED: (command, Embed, e, owner, prefix) => 
      Embed
        .setTitle("An Error Occurred!")
        .setColor(command.client.colors.error)
        .setDescription(
          `Something went wrong while trying to run this command! This shouldn't happen. ${command.errorMessage
            ? `\nNote: **${command.errorMessage}**`
            : `If this persists, please **[join the support server](${command.client.config.links.support})** and explain your problem there.`}

          **Error**: \`\`\`js
          ${e[owner ? "stack" : "message"]}
          \`\`\``.stripIndents()
        )
        .setFooter(`Failed to run ${prefix}${command.name}.`)
        .setTimestamp(),
    /** @param {import ("../../Starboard/src/classes/Command")} command @param {import("../../Starboard/src/classes/Embed")} Embed  @param {[("ENUM" | "MATCH" | "TYPE" | "RANGE" | "PARSE")]} e */
    COMMAND_INVALID_ARGS: (command, Embed, e) => {
      let m, esc = command.client.util.discordUtil.escapeMarkdown
      switch (e[0]) {
        case "ENUM": {
          const [, raw, en] = e
          m = `The provided argument \`${esc(raw)}\` has to be one of \`${en.join("`, `")}\`.`
          break
        }
        case "MATCH": {
          const [, raw, match] = e
          m = `The provided argument \`${esc(raw)}\` has to match the regex \`${match.toString().split("/")[1] || match}\`.`
          break
        }
        case "PARSE": {
          const [, raw, toParse] = e
          m = `Could not parse a ${toParse} from the provided argument \`${esc(raw)}\``
          break
        }
        case "RANGE": {
          const [, raw, greatOrLess, boundary] = e
          m = `The provided argument \`${esc(raw)}\` cannot be ${greatOrLess} than \`${boundary}\`.`
          break
        }
        case "TYPE": {
          const [, raw, type] = e
          m = `The provided argument \`${esc(raw)}\` has to be a \`${type}\`.`
          break
        }
      }
      return Embed
        .setTitle("Invalid Arguments")
        .setDescription(`The arguments provided were not valid: **${m}**`)
        .setColor(command.client.colors.error)
    }
  },

  // languages
  LANGUAGES: {
    ENGLISH: "English",
    LITHUANIAN: "Lithuanian",
    TURKISH: "Turkish",
  }
}
