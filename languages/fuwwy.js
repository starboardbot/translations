const LOCALE = "fuwwy"

module.exports = {
  name: "Fuwwy",
  HELLO_WORLD: "Hhewwo wowwd!",

  // miscellaneous - could be used anywhere
  IMAGE: num => `Image${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `GIF Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Media${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred message embed - stuff that shows up in starboard message embeds
  CLICK_TO_JUMP: deleted =>
    !deleted ? "Cwick to jump to message!" : "Context (message was deweted)",
  SHORT_CLICK_TO_JUMP: deleted =>
    // if for whatever reason there are 25 fields and content over 1928 and less than 1947 chars
    !deleted ? "Cwick!" : "Context",
  REFERENCED_MESSAGE: (isReply, deleted) =>
    isReply ? `Repwying to thwis message${deleted ? " (deweted)" : ""}` : "Refewenced message",
  TWEET: (authorName, number) => `Tweet${number && typeof number === "number" ? ` ${number}` : ""} fwom ${authorName}`,
  UNKNOWN: tag => `Unknown${tag ? "#0000" : ""}`,
  FROM_SERVER: server => `Fwom ${server}`,
  TRASH_EMBED: (reason, userList, removeTrashCommand) => 
  `This message has been twashed/wemoved by a modewatow.
  ${reason ? `**Weason**: ${reason}\n` : ""}
  If my cawcuwations awe cowwect, the fiwst few peopwe to staw this message shouwd've been:
  ${userList}

  Feew fwee to dewete this message aftew punishing these peopwe if you need to.
  Twhis message can no wongew be stawwed, evew. Howevew, if you want this message to get stawwed again, you can wemove it fwom the twash with \`${removeTrashCommand}\``
  .stripIndents(),

  // upon joining a server
  GET_STARTED: "Get stawted",
  GET_STARTED_EMBED: (req, prefix) => `I've detected a channew wamed \`#starboard\`, so this is now whewe aww stawwed messages wiww go. You can change this watew.
  Cuwwentwy in this sewvew, messages need to have ${req} staw weactions to get posted in this channew, which can be changed.
  You can set the sewvew up pwopewwy with \`${prefix}setup\`, this wiww wawk you thwough aww the settings.
  And most impowtantwy, have fuwn!`.stripIndents(),
  GET_STARTED_FOOTER: "Thank you fow using stawboawd!",

  // message event
  CANT_SPEAK: "I cannot speak in that channew! Pwease get a modewatow to change my pewmissions fow that channew, ow twy using me in a diffewent channew.",
  PREFIX_INFO: (prefixes = ["star "]) => `My pwefix fow this sewvew is${prefixes.length > 1 ? " any of" : ""} \`${prefixes.join("`, `")}\`, but my mention awso wowks as a pwefix.`,
  HELP: "Hewp",

  NEED_VOTE: doThis => `To ${doThis}, you need to **[vote fow the bot](https://top.gg/bot/655390915325591629/vote)**. Once you have voted, you have to wait a few winutes fow me to wecieve youw vote.`,
  NEED_PREMIUM: doThis => `To ${doThis}, youw sewvew needs to be a **[Pwemium sewvew](https://patreon.com/TheNoob27)**.`,
  STAR_REQ_FEAT: "change the wequiwements fow diffewent staw emojis to appeaw",
  EMOJIS_FEAT: "change the emowjis",
  DOWNVOTE_FEAT: "downvote stawwed messages",
  MULTIPLE_EMOJIS_FEAT: "have muwtipwe emojis at once",
  CHANNEL_SETTINGS_FEAT: "have mowe than 10 sets of channew settings",

  FIND_USER_MORE_SPECIFIC: users => `Pwease be mowe specific, I fouwnd ${users} usews matching youw input.`,
  FIND_USER_PROMPT: list => `I found muwtipwe usews matching youw input:
  ${list}
  Pwease wespond with the numbew of the usew you want.`.stripIndents(),

  SETTINGS: { // prefix, isPremium, channelSettingName
    STARBOARD_ID: (p, _prm, name) => `This is whewe stawwed messages wiww go. If you wish to unset the stawboawd, wun \`${p}changesetting starboard none${name && ` --channel ${name}`}\`.`,
    NSFW_STARBOARD_ID: "This is whewe stawwed messages fwom nsfw channews wiww go. If this isn't set, messages fwom nsfw channews wiww go to the nowmaw stawboawd. If channew settings awe set, aww messages wiww go thewe.",
    REQUIRED: "This is how many staws a message needs befowe weaching the stawboawd.",
    REQUIRED_TO_REMOVE: "When a message on the stawboawd dwops to this numbew, it wiww get wemoved fwom the stawboawd.",
    LANGUAGE: (_p, _pm, name) => `The wanguage of the ${name ? "channew" : "sewvew"}. The wanguages that awe cuwwentwy avaiwabwe awe ${Object.values(module.exports.LANGUAGES).join(", ")}.`,
    PERMISSION: `This is the pewmission usews need to have befowe pewfowming vawious actions, such as twashing messages, changing settings and bwackwisting usews.
    When setting the pewmission, you can input something wike \`MANAGE_MESSAGES\`, \`Manage Messages\`, \`Manage-Messages\` or \`8192\`. Fow muwtipwe pewmissions, use a pewmissions cawcuwatow.`.stripIndents(),

    LINK_DELETES: "If a message is deweted, the stawboawd message wiww automaticawwy be deweted.",
    FILTER_BOTS: "Whethew ow not bots shouwd be fiwtewed off the stawboawd.",
    STAR_SELF: "If usews awe abwe to staw theiw own messages.",
    WATCHING: `This is if you want the fuww functionawity of stawboawd without actuawwy posting messages to a stawboawd.
    I guess this is usefuw if you have a sewvew with a second stawboawd bot, but this setting was mainwy made fow the discowd bot list discowd sewvew, which the bot is no wongew in. This setting may get wemoved in the futuwe.`,
    VISIBLE: (p, _prm, name) => `This detewmines whethew ow not usews can find this ${name ? "channew" : "sewvew"}'s messages in \`${p}explore\`, and whethew ow not this sewvew appeaws on the sewvew weadewboawd (\`${p}leaderboard servers\`).`,
    CLEAN: "With this enabwed, **[Cwick to jump to message!](https://www.youtube.com/watch?v=KvxteMk0e84)** and othew winks/media wiww not show up at the bottom of stawboawd messages.",
    DOWNVOTE: "If usews can downvote stawwed messages.",
    BOTS_ON_LB: "If bots awe abwe to appeaw on the weadewboawd.",
    ATTACHMENTS: "If media such as videos shouwd be attached to the stawboawd message instead of just appended as winks.",
    NO_EXPLORE: p => `If the \`${p}explore\` command shouwd be disabwed fow the sewvew. Youw messages wiww stiww appeaw in this command if the **Visible** setting is enabwed.`,
    FILTER_BLACKLISTED: `Whethew ow not bwackwisted usews shouwd be fiwtewed off the stawboawd.`,
    REMOVE_REACTIONS: "If weactions shouwd get wemoved if a usew weacts wwongwy, such as weacting on a bwackwisted usew's message.",
    NO_LEADERBOARD: (_p, _prm, name) => !name ? "If weadewboawd wewated commands shouwd be disabwed fow the sewvew." : "If weadewboawd stats shouwd not be wecowded fow this channew.",
    KEEP_ROLES: "If usews shouwd keep owd wewawd wowes upon getting a new one.",
    MENTION_AUTHOR: "If the authow of a message shouwd be pinged on theiw stawboawd messages.",
    QUICK_ACTIONS: `With this enabwed, usews can pewfowm actions on a stawwed message by weacting on the stawboawd message with specific emojis.
    __Modewatows:__
    **Twashing**: 🗑️
    **Wocking**: 🔒 
    **Unwocking**: 🔓 
    **Fweezing**: 🧊 
    **Unfweezing**: 🔥 
    **Wefweshing**: 🔄 or 🔁
    **Add to Haww of Fame**: 🏆
    **Fowcing**: 📌 - onwy on the owiginaw message aftew it's been stawwed
    __Anyone:__
    **Saving**: 📥
    `.stripIndents(),
    LINK_EDITS: "If a message is edited, the stawboawd message wiww update with the new message content.",
    DISPLAY_NICKNAME: "Whethew ow not the nickname of the authow shouwd be dispwayed instead of theiw discowd tag.",
    NO_COMMANDS: "If the bot shouwd not wespond to commands wun by non-modewatows, so the bot kinda \"wowks in the backgwound\".",

    DOWNVOTE_EMOJI: "The emoji used to downvote stawwed messages.",
    EMOJIS: {
      REACTION: (p, prm, name) => `The emoji${prm ? "s" : ""} usews weact with to get a message on the stawboawd. ${
        prm
          ? `You can add/wemove mowe emojis with ${p}changesetting emoji weaction <add/remove> <[emoji]>${name && `--channel ${name}`}`
          : "**[Pwemium Sewvews](https://patreon.com/TheNoob27)** can add up to **5** diffewent emojis."
      }`,
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `Beside the staw countew on a stawboawd message, this emoji wiww show when the message has wess than ${r.first} staws.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `Beside the staw countew on a stawboawd message, this emoji wiww show when the message has ${r.first}-${r.second - 1} staws.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `Beside the staw countew on a stawboawd message, this emoji wiww show when the message has ${r.second}-${r.third - 1} staws.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `Beside the staw countew on a stawboawd message, this emoji wiww show when the message has ${r.third} staws ow mowe.`
    },
    STAR_REQUIREMENTS: {
      FIRST: "The amount of staws a message needs to have befowe the staw beside the countew switches to the second staw.",
      SECOND: "The amount of staws a message needs to have befowe the staw beside the countew switches to the thiwd staw.",
      THIRD: "The amount of staws a message needs to have befowe the staw beside the countew switches to the fouwth staw.",
    },
    COLORS: {
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `This wiww be the cowouw of the stawboawd message when the message has wess than ${r.first} staws.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `This wiww be the cowouw of the stawboawd message when the message has ${r.first}-${r.second - 1} staws.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `This wiww be the cowouw of the stawboawd message when the message has ${r.second}-${r.third - 1} staws.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `This wiww be the cowouw of the stawboawd message when the message has ${r.third} staws ow mowe.`,
    },
    TYPES: {
      NOT_SET: "Not Set",
      NONE: "None",
      STARS: "staws",
      CHANNEL: "channew",
      NUMBER: "numbew",
      LANGUAGE: "wanguage",
      PERMISSION: "pewmission",
      EMOJI: "emoji",
      COLOR: "cowouw",
    }
  },

  COMMANDS: {
    COOLDOWN_MESSAGE: time => `You'we using this command too fwequentwy! Pwease wait ${time} befowe using it again.`,
    WAIT_SUGGESTIONS: (hasVoted, guildID) => {
      return [
        "**[join the suppowt sewvew](https://discord.gg/rZgxfbH)** and have fun tawking to us, pawticipate in powws which heaviwy detewmine what gets added to the bot, possibwe giveaways and much much mowe",
        `**[vote fow the bot](https://top.gg/bot/655390915325591629/vote)** ${hasVoted ? "fow extwa coowness points" : "to have this coowdown sawed in hawf"}`,
        "**[become a patwon](https://patreon.com/TheNoob27)** and unwock some sweet donatow onwy featuwes, and a donatow onwy wowe in ouw discowd sewvew",
        "**[fowwow my twittew](https://twitter.com/DaNoob27)** fow absowutewy no weason at aww",
        "suppowt one of ouw patwons, x79#8008, by **[fowwowing theiw twittew](https://twitter.com/cometvgc)**",
        "suppowt one of ouw patwons, Conifer ConnieTreeCow#9864 by **[subscwibing to theiw youtube channew](https://www.youtube.com/channel/UCzL9A1orpOcXCSOQ3n6ujEA)**",
        `check out this coow **[Minecwaft Discowd bot](https://discord.com/oauth2/authorize?client_id=652726107535310859&permissions=16&scope=bot&guild_id=${guildID})** fow aww you minecwaft pwayews out thewe`,
        "check out Stawboawd's **[Github page](https://github.com/TheNoob27/starboard-issues/issues)** whewe you can post bugs/suggestions instead of using the commands"
      ]
    },
    COOLDOWN: "Coowdown",
    COOLDOWN_EMBED: (cooldownMessage, cooldown, waitSuggestions) => 
    `${cooldownMessage}
    The coowdown fow this command is **${cooldown}**. 
    Whiwe you wait, why not ${waitSuggestions.join(" ow ")}!`
    .stripIndents(),
    /** @param {import("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_HELP_EMBED: (command, Embed, prefix, color, cooldown, requiredPermissions) => {
      const l = LOCALE
      const c = command.language(l).get()
      const embed = Embed
        .setTitle("Help")
        .setColor(command.enabled ? color : command.client.colors.error)
        .addField(
          `Command: ${prefix}${command.language(l).name.get() || command.name}`,
          `**Awiases**: ${(command.language(l).aliases.get() || command.aliases).join(", ") || "none"}
          **Descwiption**: ${command.language(l).description || "none"}
          **Usage**: ${prefix}${command.language(l).usage}
          ${c.EXAMPLE ? `**Exampwe${Array.isArray(c.EXAMPLE) ? "s" : ""}**: ${Array.isArray(c.EXAMPLE) ? c.EXAMPLE.map(c => `${prefix}${c}`).join("\n") : `${prefix}${c.EXAMPLE}`}` : ""}`
          .stripIndents()
        )
        .addField(
          "Extwa",
          `**Categowy**: ${command.language(l).base.categories(command.category).get() || command.category}
          **Coowdown**: ${cooldown}
          **Enabwed**: ${command.client.config.emojis[command.enabled ? "yes" : "no"]}
          **Requiwed bot pewmissions**: ${command.client.util.readablePermissions(command.botPermissions)}
          **Wequiwed usew pewmissions**: ${command.client.util.readablePermissions(requiredPermissions || 0)}`
          .stripIndents()
        )
        .setFooter("() = optionaw awguments, <> = wequiwed awguments, [] = a pwacehowdew, -- = optionaw fwag")
      if (command.notices) embed.addField(
        "Notices",
        `${
          command.errorMessage
            ? `Something is cuwwentwy wwong with this command: **${command.errorMessage}**.\n`
            : ""
        }${
          command.disableMessage
            ? `This command is disabwed: **${command.disableMessage}**`
            : ""
        }`
      )

      return embed
    },

    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_DISABLED_EMBED: (command, Embed) =>
      Embed
        .setTitle("Command disabwed")
        .setDescription(`This command is cuwwentwy disabwed. ${command.settings.disableMessage ? `The weason fow that is: **${command.disableMessage}**.` : "It was pwobabwy disabwed because something wasn't functioning pwopewwy, othewwise anothew weason."}
        Pwease twy again watew, ow **[join the suppowt sewvew](https://discord.gg/rZgxfbH)** fow mowe info.`.stripIndents())
        .setColor(command.client.colors.error)
        .setTimestamp(),
    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_ERROR_EMBED: (command, Embed, e, owner, prefix) => 
      Embed
        .setTitle("An ewwow occuwwed!")
        .setColor(command.client.colors.error)
        .setDescription(
          `Something went wwong whiwe twying to wun this command! this shouwdn't happen. ${command.errorMessage
            ? `\nNote: **${command.errorMessage}**`
            : `If this pewsists, pwease **[join the suppowt sewvew](${command.client.config.links.support})** and expwain youw pwobwem thewe.`}

          **Ewwow**: \`\`\`js
          ${e[owner ? "stack" : "message"]}
          \`\`\``.stripIndents()
        )
        .setFooter(`Faiwed to wun ${prefix}${command.name}.`)
        .setTimestamp(),
    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed  @param {[("ENUM" | "MATCH" | "TYPE" | "RANGE" | "PARSE")]} e */
    COMMAND_INVALID_ARGS: (command, Embed, e) => {
      let m, esc = command.client.util.discordUtil.escapeMarkdown
      switch (e[0]) {
        case "ENUM": {
          const [, name, raw, en] = e
          m = `The awgument **${name}** ${
            raw ? `(pwovided: \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\`) ` : ""
          }has to be one of \`${en.join("`, `")}\`.`
          break
        }
        case "MATCH": {
          const [, name, raw, match] = e
          m = `The awgument **${name}** ${
            raw ? `(pwovided: \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\`) ` : ""
          }has to match the wegex \`${match.toString().split("/")[1] || match}\`.`
          break
        }
        case "MISSING": {
          const [, name] = e
          m = `The wequiwed awgument **${name}** is missing.`
          break
        }
        case "PARSE": {
          const [, raw, toParse] = e
          m = `Couwd not pawse a ${toParse} ${typeof raw === "number" ? "fow awgument" : "fwom the pwovided awgument"} \`${esc(String(raw || "")).replace(/(\w{20}).+/, "$1...")}\``
          break
        }
        case "RANGE": {
          const [, raw, greater, boundary] = e
          m = `The pwovided awgument \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\` cannot be ${greater ? "gweatew" : "wess"} than \`${boundary.toLocaleString(LOCALE)}\`.`
          break
        }
        case "TYPE": {
          const [, name, raw, type] = e
          m = `The asgument **${name}** ${
            raw ? `(pwovided: \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\`) ` : ""
          }has to be a \`${type}\`.`
          break
        }
      }
      return Embed
        .setTitle("Invawid Awguments")
        .setDescription(`The awguments pwovided wewe not vawid: ${m}`)
        .addField("Usage", `\`${command.language(LOCALE).usage}\``)
        .setColor(command.client.colors.error)
    },
    MISSING_PERMISSIONS: (perms, bot) => `${bot ? "The bot is" : "You awe"} missing the ${perms} pewmissions, wequiwed to wun this command.`,
    NO_CHANNEL_SETTINGS: (c) => `Thewe awe no channew settings specificawwy fow ${c ? c : "this channew"}.`,

    EVAL: {
      DESCRIPTION: "Evawuates a bit of code.",
      USAGE: "eval <code>"
    },
    HELP: {
      DESCRIPTION: "View aww the commands the bot has to offew, ow view info about a specific command.",
      USAGE: "help (command)",
      EMBED_DESCRIPTION: (command, owner, categories, prefix) => `Commands: ${
          owner
            ? command.client.commands.size
            : Object.values(categories) // { "Categowy": "...\n..." }
              .reduce((p, c) => c.split("\n").length + p, 0)
        }
        If you'we new to the bot, you can set up youw sewvew using \`${prefix}setup\`.
        If you stiww need hewp, pwease join ouw **[suppowt sewvew](${command.client.config.links.support})**.`.stripIndents(),
      EMBED_FOOTER: "() = optionaw, <> = wequiwed, [] = a pwacehowdew, -- = optionaw fwags - don't incwude these when using the commands."
    },
    PING: {
      DESCRIPTION: "Check the bot's ping, wesponse times and edit speed.",
      USAGE: "ping",
      PINGING: "Pinging...",
      CLUSTER: n => `Cwustew ${n}`,
      SHARD: n => `Shawd ${n}`,
      PING: "Ping",
      LATENCY: "Latency",
      EDIT: "Edit"
    },
    RELOAD: {
      DESCRIPTION: "Weload commands, events ow a fiwe.",
      USAGE: "reload <[command]/event/file> ([event]/[file])"
    },
    CHANGESETTING: {
      DESCRIPTION: "Change a setting fow the channel ow sewvew, such as the wequiwed amount of staws needed to weach the stawboard. Aww the settings awe in the settings command, so you can view youw options thewe.",
      USAGE: "changesetting <[setting]> <[value]> --channel ([channel])",
      
      UPDATED_SETTINGS: "Updated Settings",
      ERRORS: "Ewwows",
      CHANNEL_SETTINGS: "Channew Settings",
      NONE: "None",

      INVALID_CHANNEL_SETTING: s => `**${s}** is not a vawid setting fow channews, it is onwy avaiwabwe as a sewvew setting.`,
      
      INVALID_LANGUAGE: l => `**${l}** was not a vawid wanguage.`,
      LANGUAGE_SET: l => `Successfuwwy set the wanguage to ${l}`, // passing l because other languages may not be finished and will use this translation

      NO_STARBOARD: (c, nsfw) => `Thewe is no ${nsfw ? "NSFW " : ""}stawboawd set${c ? " fow this channew" : ""}.`,
      INVALID_CHANNEL: "That channew does not exist.",
      INVALID_CHANNEL_TYPE: "The channew must be eithew a text ow announcement channew.",
      CANT_SPEAK: embeds => `I cannot send ${embeds ? "embeds" : "messages"} in that channew`,
      SAME_STARBOARDS: "You cannot set the nowmaw stawboawd to the same channew as the nsfw stawboawd.",
      NOT_NSFW: "The nsfw stawboawd must be set as a nsfw channew.",
      MISSING_PERMISSIONS: "The bot is missing the `Manage Channews` pewmission, wequiwed to cweate channews.",
      CREATE_STARBOARD_FAIL: "Something went wwong when cweating a stawboawd channew.",
      CREATE_STARBOARD_SUCCESS: c => `Successfuwwy cweated a stawboawd channew: ${c}`,
      STARBOARD_DELETE: (c, nsfw) => `Successfuwwy unset the ${nsfw ? "NSFW " : ""}stawboawd${c ? " fow this channew" : ""}.`,
      STARBOARD_SET: (c, channel, nsfw) => `Successfuwwy set the ${nsfw ? "NSFW " : ""}stawboawd$ ${c ? "fow this channew " : ""}to ${channel}.`,

      REQUIRED_TOO_BIG: "The wequiwed amount of staws to weach the stawboawd cannot be that high.",
      REQUIRED_TOO_SMALL: "The wequiwed amount of staws to weach the stawboawd has to be a numbew gweatew than 0.",
      REQUIRED_SET: (n, c) => `Successfuwwy set the wequiwed amount of staws to weach the stawboawd ${c ? "fow this channew " : ""}to ${n}.`,
      REQUIRED_SET_BOTH: (n, c) => `Successfuwwy set the wequiwed amount of staws to weach the stawboawd ${c ? "fow this channew " : ""}to ${n}, and wowewed **WequiwedToWemove** to ${n - 1}.`,
      RTR_TOO_BIG: "The wequiwed amount of staws to be wemoved fwom the stawboawd cannot be that high.",
      RTR_TOO_SMALL: "The wequiwed amount of staws to be wemoved fwom the stawboawd has to be a numbew gweatew than ow equaw to 0.",
      RTR_SET: (n, c) => `Successfuwwy set the wequiwed amount of staws to be wemoved fwom the stawboawd ${c ? "fow this channew " : ""}to ${n}.`,
      RTR_SET_BOTH: (n, c) => `Successfuwwy set the wequiwed amount of staws to be wemoved fwom the stawboawd ${c ? "fow this channew " : ""}to ${n}, and waised **Wequiwed** to ${n + 2}.`,

      INVALID_PERMISSIONS: "The pewmissions pwovided wewe not vawid.",
      PERMISSIONS_SET: p => `Successfuwwy set the pewmissions wequiwed to pewfowm vawious actions to ${p}.`,
      COLOR_SET: (c, r) => `Successfuwwy set the cowouw fow stawboawd messages above ${r} staws to ${c}.`,

      REQUIREMENT_TOO_HIGH: t => `The **${t}** wequiwement cannot be that high.`,
      REQUIREMENT_TOO_LOW: t => `The **${t}** wequiwement has to be a numbew gweatew than 0.`,
      REQUIREMENT_BOUNDARY: (t, next, n, higher) => `The **${t}** wequiwement has to be a numbew ${higher ? "highew" : "wowew"} than ${n}, which is what **${next}** is cuwwentwy set as.`,
      REQUIREMENT_SET: (type, emoji, n) => `Successfuwwy set the wequiwed amount of staws fow the **${type}** emoji${emoji ? ` (${emoji})` : ""} to show up on the stawboawd to ${n}.`,
      
      EMOJI_NOT_FOUND: "That emoji couwd not be found, ow was invawid.",
      CANNOT_USE_EMOJI: "I cannot use this emoji, it has to be an emoji fwom a sewvew i am in.",
      EMOJIS_SAME: "The emoji to upvote stawwed messages and the emoji to downvote stawwed messages cannot be the same.",
      RESERVED_EMOJI: "Sowwy, but this emoji cannot be used.",
      MAX_EMOJIS: "You have weached the maximum amount of emojis awwowed fow 1 sewvew.",
      ALREADY_AN_EMOJI: "Youw emoji is awweady saved as one in the wist of emojis.",
      NOT_AN_EMOJI: "Youw emoji is not saved as one in the wist of emojis.",
      EMOJI_ADD_SET: e => `Successfuwwy added ${e} to the wist of emojis.`,
      EMOJI_REMOVE_SET: e => `Successfuwwy wemoved ${e} fwom the wist of emojis.`,
      EMOJI_SET: e => `Successfuwwy set the emoji to weact on messages with to ${e}.`,
      STAR_SET: (e, type) => `Successfuwwy changed the **${type}** staw to ${e}.`,
      DV_EMOJI_SET: e => `Successfuwwy set the emoji to downvote messages with to ${e}.`,

      LINK_DELETES: b => `When a message is deweted, the stawboawd message wiww ${b ? "now" : "no wongew"} be deweted.`,
      FILTER_BOTS: b => `Bots can ${b ? "no wongew" : "now"} get on the stawboard.`,
      STAR_SELF: b => `Usews can ${b ? "now" : "no wongew"} staw theiw own messages.`,
      WATCHING: b => b ? "Nothing now goes on the stawboawd, but stats awe stiww being wecowded." : "The stawboawd wiww now be used awong with wecowding of stats.",
      VISIBLE: b => `People can ${b ? "now" : "no longer"} find this server's messages in the explore command.`,
      CLEAN: b => `The **Cwick to jump to message!** and othew winks wiww ${!b ? "now" : "no wongew"} show on stawboawd messages.`,
      DOWNVOTE: b => `Usews can ${b ? "now" : "no wongew"} downvote stawwed messages.`,
      BOTS_ON_LB: b => `Bots wiww ${b ? "now" : "no wongew"} show on the weadewboawd.`,
      ATTACHMENTS: b => `Attachments wiww ${b ? "now" : "no wongew"} be attached onto the stawboawd message.`,
      NO_EXPLORE: b => `Usews can ${b ? "no wongew" : "now"} use the expwowe command.`,
      FILTER_BLACKLISTED: b => `Bwackwisted usews wiww ${b ? "now" : "no wongew"} be fiwtewed off the stawboawd.`,
      REMOVE_REACTIONS: b => `Weactions wiww ${b ? "now" : "no wongew"} be wemoved if a usew weacts wwongwy, such as in a bwackwisted channew.`,
      NO_LEADERBOARD: (b, cs) => cs
        ? `The weadewboawd fow this channew wiww ${b ? "no wongew" : "now"} be wecowded.`
        : `The weadewboawd and weadewboawd wewated commands have been ${b ? "disabwed" : "enabwed"}.`,
      KEEP_ROLES: b => `Usews wiww ${b ? "now" : "no wongew"} keep owd wewawd wowes upon getting a new one.`,
      MENTION_AUTHOR: b => `Usews wiww ${b ? "now" : "no wongew"} be pinged on theiw stawboawd messages.`,
      QUICK_ACTIONS: b => `You can ${b ? "now" : "no wongew"} weact on stawboawd messages to quickwy pewfowm actions on them.`,
      LINK_EDITS: b => `Stawboawd messages wiww ${b ? "now" : "no wongew"} be updated when its owiginaw message is edited.`,
      DISPLAY_NICKNAME: b => `Stawboawd messages wiww now dispway the message authow's ${b ? "sewvew nickname" : "Discowd tag"}.`,
      NO_COMMANDS: b => `Commands wiww ${b ? "now" : "no wongew"} onwy wowk fow modewatows.`
    },
    LOCK: {
      DESCRIPTION: "Wocks a stawwed message to the stawboawd, so it'ww stay thewe even if it weaches 0 staws.",
      USAGE: "lock <[messageID]>",
      SUCCESS: "Successfuwwy wocked that message to the stawboawd.",
      FAILED: "That message is awweady wocked."
    },
    UNLOCK: {
      DESCRIPTION: "Unwocks a stawwed message fwom the stawboawd, so it can be wemoved as nowmaw.",
      USAGE: "unlock <[messageID]>",
      SUCCESS: "Successfuwwy unwocked that message fwom the stawboawd.",
      FAILED: "That message is not wocked."
    },
    FREEZE: {
      DESCRIPTION: "Fweezes a stawwed message, so no-one can add ow wemove staws.",
      USAGE: "freeze <[messageID]>",
      SUCCESS: "Successfuwwy fwoze that message.",
      FAILED: "That message is awweady fwozen."
    },
    UNFREEZE: {
      DESCRIPTION: "Unfweezes a stawwed message, so evewyone can add ow wemove staws as nowmaw.",
      USAGE: "unfreeze <[messageID]>",
      SUCCESS: "Successfuwwy unfwoze that message.",
      FAILED: "That message is not fwozen."
    },
    PREFIXES: {
      DESCRIPTION: "Add ow wemove pwefixes fow the sewvew, ow view a wist of them.",
      USAGE: "prefixes (add/remove) ([prefix])",
      ALREADY_PREFIX: "That is awweady a pwefix fow this sewvew.",
      TOO_MANY_PREFIXES: "Thewe awe too many pwefixes set fow this sewvew.",
      PREFIX_TOO_LONG: "That pwefix is too wong.",
      NOT_PREFIX: "That is not a pwefix fow this sewvew.",
      PREFIX_ADD: p => `Successfuwwy added \`${p}\` to the wist of pwefixes.`,
      PREFIX_REMOVE: p => `Successfuwwy removed \`${p}\` from the list of prefixes.`,
      PREFIX_SET: p => `Successfuwwy set the sewvew's pwefix to \`${p}\``,
      LIST_PREFIXES: prefixes => `The pwefixes fow this sewvew ${
        prefixes.length > 1
          ? `awe: \n\`${prefixes.join("`,\n`")}\``
          : `is \`${prefixes}\`.`
      }`,
      FOOTER: "My mention awso wowks as a pwefix."
    },
    LINKS: {
      DESCRIPTION: "Get the winks wewated to the bot, such as the bot's invite wink.",
      USAGE: "links",
      LINKS: "Winks",
      DONATION: "Donation",
      OTHER: "Othew",
      DISCORD_LINKS: (i, s) => `**[Invite me!](${i})**\n**[Join ouw suppowt sewvew](${s})**`,
      PATREON_LINK: p => `**[Become a Patwon!](${p})**`,
      OTHER_LINKS: (v, gh) => `**[Vote fow the bot!](${v})**\n**[GitHub Issues](${gh})**`
    },
    BLACKLIST: {
      DESCRIPTION: "View info about bwackwisted usews, wowes ow channews, ow modify the wist.",
      USAGE: "blacklist (add/remove) ([user/role/channel]) --channel ([channel])",
      BLACKLIST: "Bwackwist",
      EMBED_DESCRIPTION: (blsb, c, nothing, prefix) => `The fowwowing ${c ? `usews and wowes` : `wsews, wowes and channews`} awe bwackwisted and cannot intewact with the stawboard${c ? " in this channew" : ""}.${
        blsb 
          ? " Bwackwisted usews can stiww get on the stawboawd."
          : ""
      }${nothing ? `\n**Nothing has been bwackwisted yet**\nTo add to/wemove fwom the wist, do \`${prefix}blacklist <add/remove> <[user/role${c ? "" : "/channel"}]>\`.` : ""}`,
      USERS: "Usews",
      ROLES: "Wowes",
      CHANNELS: "Channews",
      UNKNOWN: "Unknown",
      NOT_FOUND: c => `I couwd not find a ${c ? "usew ow wowe" : "usew, wowe ow channew"} from youw input.`,
      ALREADY_BLACKLISTED: s => `**${s}** is awweady bwackwisted.`,
      NOT_BLACKLISTED: s => `**${s}** is not bwackwisted.`,
      TOO_MANY_BLACKLISTED: "Thewe awe too many items on the bwackwist.",
      NOTHING_BLACKLISTED: "Thewe is nothing bwackwisted.",
      BLACKLIST_ADD: s => `Successfuwwy bwackwisted **${s}**.`,
      REMOVE_ALL: "Successfuwwy wemoved evewything fwom the bwackwist.",
      BLACKLIST_REMOVE: s => `Successfuwwy wemoved **${s}** fwom the bwackwist.`
    },
    WHITELIST: {
      DESCRIPTION: "View info about whitewisted usews ow wowes, ow modify the wist.",
      USAGE: "whitelist (add/remove) ([user/role]) --channel ([channel])",
      WHITELIST: "Whitelist",
      EMBED_DESCRIPTION: (c, nothing, prefix) => `The following users and roles are whitelisted and bypass the blacklist ${c ? "in this channewThe fowwowing usews and wowes awe whitewisted and bypass the bwackwist " : ""}if on it.${
        nothing
          ? `\n**Nothing has been whitewisted yet**\nTo add to/wemove fwom the wist, do \`${prefix}whitelist <add/remove> <[user/role]>.\``
          : ""
        }`,
      USERS: "Usews",
      ROLES: "Woles",
      UNKNOWN: "Unknown",
      NOT_FOUND: "I couwd not find a usew ow wowe fwom youw input.",
      ALREADY_WHITELISTED: s => `**${s}** is awweady whitewisted.`,
      NOT_WHITELISTED: s => `**${s}** is not whitewisted.`,
      TOO_MANY_WHITELISTED: "Thewe awe too many items on the whitewist.",
      NOTHING_WHITELISTED: "Thewe is nothing whitewisted.",
      WHITELIST_ADD: s => `Successfuwwy whitewisted **${s}**.`,
      REMOVE_ALL: "Successfuwwy wemoved evewything fwom the whitewist.",
      WHITELIST_REMOVE: s => `Successfuwwy wemoved **${s}** fwom the whitelist.`
    },
    REWARDROLES: {
      DESCRIPTION:
        "View info about ow add/wemove wewawd wowes, wowes that get added to usews once they suwpass a cewtain amount of staws. " +
        "You can add/subtwact to the amount of staws needed fow an existing wewawd wowe by putting a +/- befowe the staws awgument.",
      USAGE: "rewardroles (add/remove) ([role]) ([stars])",
      NO_LEADERBOARD: "The weadewboawd is disabwed fow the sewvew, which incwudes wewawd wowes.",
      REWARD_ROLES: "Wewawd Wowes",
      ROLE: "WoWe",
      STARS_NEEDED: "Staws Needed",
      PROGRESS: "Youw Pwogwess",
      EMBED_DESCRIPTION: c => `Hewe awe the cuwwent wewawd wowes set fow this ${c ? "channew" : "sewvew"}.`,
      NO_REWARD_ROLES: (p, c) => `**Thewe awe no wewawd wowes set fow this ${c ? "channew" : "sewvew"}.**
      To add a wewawd wowe, do ${p}rewardroles add <[role]> ([stars])`.stripIndents(),
      RR_FEAT: "customise wewawd wowes",
      ROLE_NOT_FOUND: "That was not a vawid wowe.",
      HIGHER_POSITION: "That wowe is highew than my highest wowe, so i cannot give this wowe to usews.",
      ROLE_MANAGED: "This wowe is automaticawwy managed by an integwation and cannot be manuawwy assigned to membews.",
      HIGHER_THAN_USER: "You cannot add this wowe as it is highew than youw highest wowe.",
      TOO_HIGH: "That numbew is too high.",
      TOO_LOW: "That numbew is too wwow.",
      NOT_A_NUMBER: "The amount of staws needs to be a numbew.",
      ADD_TOO_MANY: "You awe adding too many staws to this wewawd wowe.",
      SUBTRACT_TOO_MANY: "You awe subtwacting too many staws fwom this wewawd wowe.",
      HIT_MAX: c => `This ${c ? "channew" : "sewvew"} has hit the max of 25 wewawd wowes.`,
      NOT_RR: `That wowe is not set as a weward wowe.`,
      RR_SET: (name, stars) => `Successfuwwy set the staws needed fow the wewawd wowe **${name}** to ${stars.toLocaleString(LOCALE)}`,
      RR_ADD: (name, stars, c) => `Successfuwwy added the wowe **${name}** as a wewawd wowe, awawded to usews aftew getting a totaw of **${stars.toLocaleString(LOCALE)}** staws${c ? " fwom this channew" : ""}.`,
      RR_REMOVE_ALL: c => `Successfuwwy wemoved aww weward wowes${c ? " fow this channew" : ""}.`,
      RR_REMOVE: (name, c) => `Successfuwwy wemoved **${name}** fwom this ${c ? "channew" : "sewvew"}'s weward wowes.`
    },
    FORCE: {
      DESCRIPTION: "Fowce ow wefwesh a message on the stawboawd.",
      USAGE: "force ([channel]) <[messageID]>",
      NO_STARBOARDS: c => `Thewe awe no stawboawds cuwwentwy set fow this ${c ? "channew" : "sewvew"}.`,
      NO_MESSAGE_ID: "Pwease pwovide a message id. If you don't know how to get the id of a message, you have to enabwe **Devewopew Mode** in settings, click the three dots on a message and clickin settings, cwick the thwee dots on a message and cwick **Copy ID**.",
      INVALID_TYPE: "The channew must be a text channew.",
      TRASHED: "That message is twashed and cannot be fowced.",
      FROZEN: "That message is fwozen and cannot be fowced ow wefweshed untiw unfwozen.",
      NOT_FOUND: "I couwdn't find a message fwom youw input.",
      IS_STARBOARD_MESSAGE: "This message seems to be a stawboawd message, so it can't be fowced.",
      IS_EXPLORE_MESSAGE: "This message seems to be a message fwom the expwowe command, so it can't be fowced.",
      CHANNEL_BLACKLISTED: "That channew is bwackwisted, so this message can't be fowced.",
      STARS_RECOUNTED: url => `Successfuwwy wecounted the staws fow this message${url ? `, the stawboard message is **[hewe](${url})**` : ""}.`,
      FORCE_SUCCESS: "Successfuwwy fowced this message to the stawboawd!",
      POST_SUCCESS: "Successfuwwy posted this message to the stawboawd!"
    },
    PURGE: {
      DESCRIPTION: "Puwge and fweeze a numbew of messages off a stawboawd.",
      USAGE: "purge ([channel]) <[messages]> --before <[messageID]> --after <[messageID]>",
      NOT_STARBOARD: "That channew is not a stawboawd channew.",
      MISSING_PERMISSIONS: sb => `I do not have pewmission to buwk dewete messages in ${sb}.`,
      MIGRATING: "I cannot puwge messages from stawboawds wight now.",
      ARE_YOU_SURE: "Awe you suwe?",
      CONFIRMATION_EMBED: (n, starboard, before, after) =>
      `Awe you suwe you want to puwge and fweeze the wast ${n} messages${before ? ` befowe ${before}${after ? " and" : ""}` : ""}${after ? ` aftew ${after}` : ""} fwom ${starboard}? If the owiginaw messages awe deweted, they may be wost fowevew.
      Say **yes** to continue.`.stripIndents(),
      NOT_PURGED: "Cancewwed the puwging of the stawboawd.",
      NOTHING_TO_DELETE: (before, after) => `Thewe awe no stawboawd messages${before ? ` befowe ${before}${after ? " and" : ""}` : ""}${after ? ` aftew ${after}` : ""} to dewete.`,
      SUCCESS: (n, sb) => `Successfuwwy wemoved and fwoze ${n} messages fwom ${sb}.`
    },
    TRASH: {
      DESCRIPTION: "Twash a message fwom the stawboawd and show the fiwst 5 peopwe to weact to it, check if a message exists in the wist of twashed messages, wemove a message fwom the wist of twashed messages, cweaw the wist, ow view the fiwst 100 message ids on the wist.",
      USAGE: "trash (add/remove/exists/clear/list) ([messageID])",
      REASON_TOO_LONG: "Youw weason is too wong.",
      NOT_MESSAGE_ID: "Pwease pwovide a message ID.",
      NOT_FOUND: "I couwd not find a stawwed message fwom youw input.",
      ALREADY_TRASHED: "That messsage is alweady twashed.",
      NOT_TRASHED: "That message is not twashed.",
      TRASHED_MESSAGES: "Twashed Messages",
      AND_MORE: n => `\n\n...And ${n} mowe.`,
      NO_TRASHED: "Thewe awe no twashed messages.",
      LIST_FOOTER: n => `Amount: ${n}${n > 100 ? ` - Listing the fiwst 100` : ""}`,
      TRASH_SUCCESS: "Successfuwwy twashed that message.",
      UNTRASH_SUCCESS: "Successfuwwy untwashed that message. It can now be stawwed again.",
      IS_TRASHED: (b, id, p) => b
        ? `Youw message with ID \`${id}\` is cuwwentwy in the wist of twashed messages. You can wemove it fwom the twash with \`${p}trash remove ${id}\``
        : `Youw message with ID \`${id}\` is not cuwwentwy twashed.`,
      CLEAR_TRASH: n => `Successfuwwy wemoved ${n} items fwom the twash.`
    },
    STARWORTHY: {
      DESCRIPTION: "Check if a message is wowthy of being stawwed ow not :)",
      USAGE: "starworthy <[messageID]>",
      NOT_ID: "Pwease pwovide a vawid message ID.",
      WORTHY: p => `That message is ${p}% staw wowthy.`
    },
    CHANNELSETTINGS: {
      DESCRIPTION: "View info about channew settings, ow cweate/cwone channew settings fow a set of channews.",
      USAGE: "channelsettings (list/create/edit) ([name]) (...[channels]) --channel ([channel]) --name ([name])",
      NO_CHANNEL_SETTINGS: prefix => `**This sewvew has no channew settings.**
      To cweate channew settings, do \`${prefix}channnelsettings create (...[channels]) --name <[name]>\`.`.stripIndents(),
      EMBED_DESCRIPTION: p => `Hewe awe the channew settings fow this sewvew.

      • If you want to cwone one of these, you can do \`${p}channelsettings create (...[channels]) --name <[name]> --channel ([channelSettingsName])\`

      • If you want to edit channew settings to add/wemove channews ow change the name, you can do\`${p}channelsettings edit ([channelSettingsName]) (...[channels]) --name <[name]>\`

      • If you need to dewete channew settings, you can do \`${p}channelsettings delete <name>\`

      • To edit channew settings, do \`${p}changesettings <[settings]> <[value]> --channel ([name/channel])\`.`.stripIndents(),
      CHANNEL_SETTINGS: "Channew Settings",
      CHANNELS: "Channews",
      STARBOARD: "Stawboawd",
      NONE: "Not Set",
      NAME_TOO_LONG: "Channew setting names cannot be mowe than 64 chawactews wong.",
      HIT_MAX: "You have hit the maximum amount of channew settings fow one sewvew.",
      PROVIDE_CHANNELS: "Pwease pwovide channews fow which these channew settings appwy fow.",
      INVALID_CHANNELS: "You did not pwovide vawid channews.",
      DUPLICATE_CHANNELS: "The channews pwovided must not awweady have channew settings. A channew may onwy have one channew settings.",
      ARE_YOU_SURE: "Awe you suwe?",
      CONFIRMATION_EMBED: name => `Awe you suwe you want to dewete the **${name}** channew settings?
      You wiww wose aww saved wewawd wowes, bwackwists/whitewists, fiwtews and othew saved configuwations, and they wiww be gone fowevew.
      Say **yes** to continue.`.stripIndents(),
      NOT_DELETED: "The settings wiww not be deweted.",
      SUCCESS_CREATE: n => `Successfuwwy cweated a new set of channew settings: **${n}**.`,
      NOTHING_MODIFIED: "Pwease pwovide edits to make.",
      MODIFIED_NAME: n => `changed the name to **${n}**`,
      MODIFIED_CHANNELS: "changed the channews which these channew settings appwy fow",
      MODIFIED: modifications => `Successfuwwy ${modifications.join(" and ")}.`,
      SUCCESS_DELETE: n => `Successfuwwy deweted **${n}**.`
    },
    SETTINGS: {
      DESCRIPTION: "View the sewvew/channew's settings, ow view info about a specific setting.",
      USAGE: "settings ([setting]) --channel ([channel])",
      SETTINGS: "Settings",
      CHANNEL_SETTINGS: "Channew Settings",
      EMOJIS: "Emojis",
      REQUIREMENTS: "Wequiwements",
      COLORS: "Cowours",
      EMBED_FOOTER: prefix => `To view info about a specific setting, do ${prefix}settings <setting>`,
      INVALID_SETTING: s => `**${s}** was not a vawid setting.`,
      // PLEASE_INPUT: firstToFourth => `Please input ${firstToFourth.slice(0, -1).join(", ")} or ${firstToFourth.slice(-1)}.`
      INVALID_CHANNEL_SETTING: s => `**${s}** is not a vawid setting fow channews, it is onwy avaiwabwe as a sewvew setting.`,
      EMBED_DESCRIPTION: (lock, name, desc) => `${lock} **Setting**: ${name}\n${desc}`,
      DATA: "Data",
      VALUE: "Vawue",
      DEFAULT: "Defauwt",
      PERMISSION: "Pewmission",
      SETTING_ALIASES: "Awiases",
      NONE: "None",
      CAN_CHANGE: (prefix, name, sub, value) => `You can change this setting with \`${prefix}changesetting ${name}${sub && ` ${sub}`} <${value.includes("/") ? value : `[${value}]`}>\`.`,
      MISSING_PERMISSIONS: p => `You need to have the ${p} pewmissions to change settings.`,
      CANT_CHANGE: reason => `You cannot change this setting: ${reason}`,
      USE_ALIASES: "You can awso use any of these to change/view the setting."
    },
    SETUP: {
      DESCRIPTION: "Set up the bot in a sewvew or channew by wawking you thwough basic settings.",
      USAGE: "setup --channel ([channel])",
      SETUP: "Setup",
      EMBED_DESCRIPTION: c => `Hewe i wiww wawk you thwough **some** of the settings to hewp you set me up in this ${c ? "channew" : "sewvew"}.
      Say \`cancel\` or \`stop\` to cancew the setup, \`skip\` or \`next\` to skip to the next setting, and \`end\` to skip to the end.`.stripIndents(),
      EMBED_FOOTER: (n, total) => `You can stop, skip ow skip to the end at any time. Setting ${n}/${total}`,
      SETTING: "Setting",
      PLEASE_INPUT: item => `Pwease input ${item.includes("/") ? "" : "a "}\`${item}\`.`,
      SETTING_SKIPPED: "Skipped the setting.",
      MISSING_PERMISSIONS: "The bot is missing the `Manage Channels` pewmission, wequiwed to cweate channews.",
      CREATE_CHANNEL_FAIL: "Something went wwong when cweating a stawboawd channew.",
      CREATE_CHANNEL_SUCCESS: c => `Successfuwwy cweated a stawboawd channew: ${c}`,
      REQUIRED_NAN: "The wequiwed amount of staws to weach the stawboawd has to be a numbew.",
      RTR_NAN: "The amount of staws a message needs to have to be wemoved fwom the stawboawd has to be a numbew.",
      STARBOARD_ID: "If you want me to cweate a stawboard channel fow you, input `create`, optionawwy fowwowed by the name of the channew, such as \`create message-museum\` (wiww be \"stawboard\" by defauwt).",
      LANGUAGE: "Note that not aww wanguages awe compweted, Engwish is the onwy one compweted.",
      REQUIRED: s => `Cuwwentwy, if ${s.required} diffewent people staw a message, it wiww then be posted to the stawboawd.`,
      REQUIRED_TO_REMOVE: s => `Cuwwentwy, if a message in the stawboawd dwops bewow ${s.requiredToRemove} staws, it wiww then be wemoved fwom the stawboawd.`,
      FILTER_BOTS: "If you want bots to weach the stawboawd, don't enabwe this.",
      VISIBLE: "If you staw pewsonal/pwivate stuff, you shouwd definitewy disabwe this.",
      CANCELLED_BY_MISTAKES: "Cancewwed due to too many mistakes.",
      WAS_INACTIVE: "Stopped due to inactivity.",
      CANCELLED: "The setup has been cancewwed, no settings have been changed.",
      CONFIRMATION: del => `Awe you happy with these wesults? Wespond with yes or no. ${
        del
          ? "You can also add `delete` at the end of your wesponse (like `yes delete`) to cleaw aww embeds I have sent duwing this setup."
          : ""
      }`,
      SOMETHING_WRONG: "Something went wwong.",
      BULK_DELETE_FAIL: "Something went wwong when twying to delete my embeds.",
      RESULT: (b, p, c) => `${
        b
          ? `Successfuwwy updated the settings for this ${c ? "channew" : "sewvew"}`
          : `The settings for this ${c ? "channew" : "sewvew"} have not been updated`
      }. If you want to change mowe settings, you can view them aww with ${p} settings.`
    },
    MESSAGEINFO: {
      DESCRIPTION: "View info about a stawwed message.",
      USAGE: "messageinfo <[messageID]>",
      NO_MESSAGE_ID: "Pwease pwovide a message ID.",
      NOT_FOUND: "I couwd not find a stawwed message fwom youw input.",
      STARRED_MESSAGE_INFO: "Stawwed Message Info",

      CONTEXT: "Context",
      AUTHOR: "Authow",
      CHANNEL: "Channew",
      STARBOARD: "Stawboawd",
      STARRED_AT: "Stawwed At",

      STATS: "Stats",
      UPVOTES: "Upvotes",
      DOWNVOTES: "Downvotes",
      GLOBAL: "Gwobaw Points",

      OTHER: "Othew",
      DELETED: "Message Deweted",
      AT_DATE: d => `(at ${d})`,
      SAVED: "Message Saved",
      WILL_DELETE: d => `(wiww dewete in ${d})`,
      ON_STARBOARD: "On Stawboawd",
      ON_STARBOARD_BEFORE: "On Stawboawd Befowe",
      ATTRIBUTES: "Attwibutes",
      NONE: "None",

      LINKS: "Winks",
      MESSAGE: "Message",
      CONVERSATION: "Convewsation",
      STARBOARD_MESSAGE: "Stawboawd Message"
    },
    MIGRATE: {
      DESCRIPTION: "Scan the stawboawd fow posts by othew stawboawd bots and convewt them to stawwed messages fow this bot. You can optionawwy pwovide an ID fow stawboawd to scan befowe ow aftew.",
      USAGE: "migrate ([starboard]) ([limit]) --after <[messageID]> --before <[messageID]>", // these usages are getting too long :(
      NO_STARBOARD: "Thewe awe no stawboawds set fow this sewvew.",
      // NOT_STARBOARD: "That channel is not a starboard channel.",
      MISSING_PERMISSIONS: sb => `I do not have pewmission to buwk dewete messages in ${sb}. Note that I wiww not buwk dewete untiw aftew migwating.`,
      NOTHING_TO_MIGRATE: (sb, bots) => `I couwd not find any messages to migwate in ${sb}. Cuwwently, I can onwy migwate stawboawd messages by <@${bots.join(">, <@")}>.`,
      MIGRATE: "Migrate",
      CONFIRMATION_EMBED: (n, bots, c, before, after) => `I've found ${n} messages${before ? ` befowe ${before}${after ? " and" : ""}` : ""}${after ? ` aftew ${after}` : ""} by <@${bots.join(">, <@")}> in ${c} that couwd be stawwed messages. Do you want me to continue?
      I wiww attempt to tuwn these messages into stawwed messages fow me, and post them aww to the stawboawd. Once done, I wiww then dewete aww the messages that I have successfuwwy wepwaced, ow ones that awweady exist as stawwed messages.
      • Stawboawd messages fow messages that awe deweted can not be migwated and wiww be ignowed.
      • Stawboawd messages fow messages sent in a channew that does not have a stawboawd wiww be ignowed.
      Say **yes** to continue.`.stripIndents(),
      ETA: t => `ETA: about ${t}`,
      CANCELLED: "Cancewwed the migwating of the stawboawd.",
      ALREADY_MIGRATING: "It seems this sewvew is cuwwentwy awweady migwating messages.",
      STATUS: (n, total, sb, typing) => `${typing} Migwating messages fwom ${sb} - ${n}/${total} \`[${"#".repeat((n / total) * 10).padEnd(10, " ")}]\``,
      SUCCESS: n => `Successfuwwy migwated ${n} messages.`
    },
    EXPLORE: {
      DESCRIPTION: "Bwing up a wandom stawwed message fwom a usew, youw sewvew ow fwom any sewvew! Fow a message to be bwought up fwom any sewvew, it has to have 5+ staws and the sewvew has to have the **Visibwe** setting enabwed.",
      USAGE: "explore ([stars]) (me/user/server/global) ([user])",
      NOT_FOUND: "No visibwe stawwed messages have been found. Messages need to have 5+ staws to show up, so go on and staw any funny messages!",
      NOT_FOUND_STARS: stars => `No visible starred messages with ${stars}+ stars have been found. Try searching for a smaller amount.`,
      TYPE_NOT_FOUND: (stars, type) => `No messages ${stars ? `with ${stars}+ staws ` : ""}have been found fwom ${type}.`,
      THIS_SERVER: "this sewvew",
      THIS_USER: "this usew",
      YOU: "you"
    },
  }, // might alphabetically order the commands one day

  // languages
  LANGUAGES: {
    EN_GB: "Engwish (GB)",
    EN_US: "Engwish (US)",
    LT_LT: "Withuanian",
    TR_TR: "Tuwkish",
    FUWWY: "Fuwwy",
  }
}
