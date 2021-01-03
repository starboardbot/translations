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
  And most impowtantwy, have fuwn!`,
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
    LANGUAGE: (_p, _pm, name) => `The wanguage of the ${name ? "channew" : "sewvew"}.`,
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
      const l = "en-GB" // change to file name
      const c = command.language(l).get()
      const embed = Embed
        .setTitle("Help")
        .setColor(command.enabled ? color : command.client.colors.error)
        .addField(
          `Command: ${prefix}${command.language(l).name || command.name}`,
          `**Awiases**: ${command.language(l).aliases.get().join(", ") || "none"}
          **Descwiption**: ${command.language(l).description || "none"}
          **Usage**: ${prefix}${command.language(l).usage}
          ${c.EXAMPLE ? `**Exampwe${Array.isArray(c.EXAMPLE) ? "s" : ""}**: ${Array.isArray(c.EXAMPLE) ? c.EXAMPLE.map(c => `${prefix}${c}`).join("\n") : `${prefix}${c.EXAMPLE}`}` : ""}`
          .stripIndents()
        )
        .addField(
          "Extwa",
          `**Categowy**: ${command.language(l).base.categories(command.category)}
          **Coowdown**: ${cooldown}
          **Enabwed**: ${command.client.config.ids.emojis[command.enabled ? "yes" : "no"]}
          **Requiwed bot pewmissions**: ${command.client.util.readablePermissions(command.botPermissions)}
          **Requiwed usew pewmissions**: ${command.client.util.readablePermissions(requiredPermissions)}`
          .stripIndents()
        )
        .setFooter("() = optionaw awguments, <> = wequiwed awguments, -- = optionaw fwag")
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
          m = `The pwovided awgument \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\` cannot be ${greater ? "gweatew" : "wess"} than \`${boundary.toLocaleString("en-GB")}\`.`
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
      CLEAN: b => `The **Cwick to jump to message!** and othew winks wiww ${b ? "now" : "no wongew"} show.`,
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
      RR_SET: (name, stars) => `Successfuwwy set the staws needed fow the wewawd wowe **${name}** to ${stars.toLocaleString("en-GB")}`,
      RR_ADD: (name, stars, c) => `Successfuwwy added the wowe **${name}** as a wewawd wowe, awawded to usews aftew getting a totaw of **${stars.toLocaleString("en-GB")}** staws${c ? " fwom this channew" : ""}.`,
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
      DESCRIPTION: "Purge and freeze a number of messages off a starboard.",
      USAGE: "purge ([channel]) <[messages]>",
      NOT_STARBOARD: "That channel is not a starboard channel.",
      MISSING_PERMISSIONS: sb => `I do not have permission to bulk delete messages in ${sb}.`,
      ARE_YOU_SURE: "Are you sure?",
      CONFIRMATION_EMBED: (n, starboard) => `Are you sure you want to purge and freeze the last ${n} messages from ${starboard}? If the original messages are deleted, they may be lost forever.
      Say **yes** to continue.`.stripIndents(),
      NOT_PURGED: "Cancelled the purging of the starboard.",
      NOTHING_TO_DELETE: "There are no starboard messages to delete.",
      SUCCESS: (n, sb) => `Successfully removed and froze ${n} messages from ${sb}.`
    },
    TRASH: {
      DESCRIPTION: "Trash a message from the starboard and show the first 5 people to react to it, check if a message exists in the list of trashed messages, remove a message from the list of trashed messages, clear the list, or view the first 100 message IDs on the list.",
      USAGE: "trash (add/remove/exists/clear/list) ([messageID])",
      REASON_TOO_LONG: "Your reason is too long.",
      NOT_MESSAGE_ID: "Please provide a message ID.",
      NOT_FOUND: "I could not find a starred message from your input.",
      ALREADY_TRASHED: "That messsage is already trashed.",
      NOT_TRASHED: "That message is not trashed.",
      TRASHED_MESSAGES: "Trashed Messages",
      AND_MORE: n => `\n\n...And ${n} more.`,
      NO_TRASHED: "There are no trashed messages.",
      LIST_FOOTER: n => `Amount: ${n}${n > 100 ? ` - Listing the first 100` : ""}`,
      TRASH_SUCCESS: "Successfully trashed that message.",
      UNTRASH_SUCCESS: "Successfully untrashed that message. It can now be starred again.",
      IS_TRASHED: (b, id, p) => b
        ? `Your message with ID \`${id}\` is currently in the list of trashed messages. You can remove it from the trash with \`${p}trash remove ${id}\``
        : `Your message with ID \`${id}\` is not currently trashed.`,
      CLEAR_TRASH: n => `Successfully removed ${n} items from the trash.`
    },
    STARWORTHY: {
      DESCRIPTION: "Check if a message is worthy of being starred or not :)",
      USAGE: "starworthy <[messageID]>",
      NOT_ID: "Please provide a valid message ID.",
      WORTHY: p => `That message is ${p}% star worthy.`
    },
    CHANNELSETTINGS: {
      DESCRIPTION: "View info about channel settings, or create/clone channel settings for a set of channels.",
      USAGE: "channelsettings (list/create/edit) ([name]) (...[channels]) --channel ([channel]) --name ([name])",
      NO_CHANNEL_SETTINGS: prefix => `**This server has no channel settings.**
      To create channel settings, do \`${prefix}channnelsettings create (...[channels]) --name ([name])\`.`.stripIndents(),
      EMBED_DESCRIPTION: p => `Here are the channel settings for this server.

      • If you want to clone one of these, you can do \`${p}channelsettings create (...[channels]) --name <[name]> --channel ([channelSettingsName])\`

      • If you want to edit channel settings to add/remove channels or change the name, you can do \`${p}channelsettings edit ([channelSettingsName]) (...[channels]) --name ([name])\`

      • If you need to delete channel settings, you can do \`${p}channelsettings delete (name)\`

      • To edit channel settings, do \`${p}changesettings <[settings]> <[value]> --channel ([name/channel])\`.`.stripIndents(),
      CHANNEL_SETTINGS: "Channel Settings",
      CHANNELS: "Channels",
      STARBOARD: "Starboard",
      NONE: "Not Set",
      NAME_TOO_LONG: "Channel setting names cannot be more than 64 characters long.",
      HIT_MAX: "You have hit the maximum amount of channel settings for one server.",
      PROVIDE_CHANNELS: "Please provide channels for which these channel settings apply for.",
      INVALID_CHANNELS: "You did not provide valid channels.",
      DUPLICATE_CHANNELS: "The channels provided must not already have channel settings. A channel may only have one channel settings.",
      ARE_YOU_SURE: "Are you sure?",
      CONFIRMATION_EMBED: name => `Are you sure you want to delete the **${name}** channel settings?
      You will lose all saved reward roles, blacklists/whitelists, filters and other saved configurations, and they will be gone forever.
      Say **yes** to continue.`.stripIndents(),
      NOT_DELETED: "The settings will not be deleted.",
      SUCCESS_CREATE: n => `Successfully created a new set of channel settings: **${n}**.`,
      NOTHING_MODIFIED: "Please provide edits to make.",
      MODIFIED_NAME: n => `changed the name to **${n}**`,
      MODIFIED_CHANNELS: "changed the channels which these channel settings apply for",
      MODIFIED: modifications => `Successfully ${modifications.join(" and ")}.`,
      SUCCESS_DELETE: n => `Successfully deleted **${n}**.`
    },
    SETTINGS: {
      DESCRIPTION: "View the server/channel's settings, or view info about a specific setting.",
      USAGE: "settings ([setting]) --channel ([channel])",
      SETTINGS: "Settings",
      CHANNEL_SETTINGS: "Channel Settings",
      EMOJIS: "Emojis",
      REQUIREMENTS: "Requirements",
      COLORS: "Colours",
      EMBED_FOOTER: prefix => `To view info about a specific setting, do ${prefix}settings <setting>`,
      INVALID_SETTING: s => `**${s}** was not a valid setting.`,
      // PLEASE_INPUT: firstToFourth => `Please input ${firstToFourth.slice(0, -1).join(", ")} or ${firstToFourth.slice(-1)}.`
      INVALID_CHANNEL_SETTING: s => `**${s}** is not a valid setting for channels, it is only available as a server setting.`,
      EMBED_DESCRIPTION: (lock, name, desc) => `${lock} **Setting**: ${name}\n${desc}`,
      DATA: "Data",
      VALUE: "Value",
      DEFAULT: "Default",
      PERMISSION: "Permission",
      ALIASES: "Aliases",
      NONE: "None",
      CAN_CHANGE: (prefix, name, sub, value) => `You can change this setting with \`${prefix}changesetting ${name}${sub && ` ${sub}`} <${value.includes("/") ? value : `[${value}]`}>\`.`,
      MISSING_PERMISSIONS: p => `You need to have the ${p} permissions to change settings.`,
      CANT_CHANGE: reason => `You cannot change this setting: ${reason}`,
      USE_ALIASES: "You can also use any of these to change/view the setting."
    },
    SETUP: {
      DESCRIPTION: "Set up the bot in a server or channel by walking you through basic settings.",
      USAGE: "setup --channel ([channel])",
      SETUP: "Setup",
      EMBED_DESCRIPTION: c => `Here I will walk you through **some** of the settings to help you set me up in this ${c ? "channel" : "server"}.
      Say \`cancel\` or \`stop\` to cancel the setup, \`skip\` or \`next\` to skip to the next setting, and \`end\` to skip to the end.`.stripIndents(),
      EMBED_FOOTER: (n, total) => `You can stop, skip or skip to the end at any time. Setting ${n}/${total}`,
      SETTING: "Setting",
      PLEASE_INPUT: item => `Please input ${item.includes("/") ? "" : "a "}\`${item}\`.`,
      SETTING_SKIPPED: "Skipped the setting.",
      MISSING_PERMISSIONS: "The bot is missing the `Manage Channels` permission, required to create channels.",
      CREATE_CHANNEL_FAIL: "Something went wrong when creating a starboard channel.",
      CREATE_CHANNEL_SUCCESS: c => `Successfully created a starboard channel: ${c}`,
      REQUIRED_NAN: "The required amount of stars to reach the starboard has to be a number.",
      RTR_NAN: "The amount of stars a message needs to have to be removed from the starboard has to be a number.",
      STARBOARD_ID: "If you want me to create a starboard channel for you, input `create`, optionally followed by the name of the channel, such as \`create message-museum\` (will be \"starboard\" by default).",
      LANGUAGE: "Note that not all languages are completed, English is the only one completed.",
      REQUIRED: s => `Currently, if ${s.required} different people star a message, it will then be posted to the starboard.`,
      REQUIRED_TO_REMOVE: s => `Currently, if a message in the starboard drops below ${s.requiredToRemove} stars, it will then be removed from the starboard.`,
      FILTER_BOTS: "If you want bots to reach the starboard, don't enable this.",
      VISIBLE: "If you star personal/private stuff, you should definitely disable this.",
      CANCELLED_BY_MISTAKES: "Cancelled due to too many mistakes.",
      WAS_INACTIVE: "Stopped due to inactivity.",
      CANCELLED: "The setup has been cancelled, no settings have been changed.",
      CONFIRMATION: del => `Are you happy with these results? Respond with yes or no. ${
        del
          ? "You can also add `delete` at the end of your respond (like `yes delete`) to clear all embeds I have sent during this setup."
          : ""
      }`,
      SOMETHING_WRONG: "Something went wrong.",
      BULK_DELETE_FAIL: "Something went wrong when trying to delete my embeds.",
      RESULT: (b, p, c) => `${
        b
          ? `Successfully updated the settings for this ${c ? "channel" : "server"}`
          : `The settings for this ${c ? "channel" : "server"} have not been updated`
      }. If you want to change more settings, you can view them all with ${p} settings.`
    }
  }, // might alphabetically order the commands one day

  // languages
  LANGUAGES: {
    EN_GB: "English (GB)",
    EN_US: "English (US)",
    LT_LT: "Lithuanian",
    TR_TR: "Turkish",
  }
}
