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
  TRASH_EMBED: (reason, userList, removeTrashCommand) => 
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

  NEED_VOTE: doThis => `To ${doThis}, you need to **[vote for the bot](https://top.gg/bot/655390915325591629/vote)**. Once you have voted, you have to wait a few minutes for me to recieve your vote.`,
  NEED_PREMIUM: doThis => `To ${doThis}, your server needs to be a **[Premium Server](https://patreon.com/TheNoob27)**.`,
  STAR_REQ_FEAT: "change the requirements for different star emojis to appear",
  EMOJIS_FEAT: "change the emojis",
  DOWNVOTE_FEAT: "downvote starred messages",
  MULTIPLE_EMOJIS_FEAT: "have multiple emojis at once",

  SETTINGS: { // prefix, isPremium, channelSettingName
    STARBOARD_ID: (p, _prm, name) => `This is where starred messages will go. If you wish to unset the starboard, run \`${p}changesetting starboard none${name && ` --channel ${name}`}\``,
    NSFW_STARBOARD_ID: "This is where starred messages from NSFW channels will go. If this isn't set, messages from NSFW channels will go to the normal starboard. If channel settings are set, all messages will go there.",
    REQUIRED: "This is how many stars a message needs before reaching the starboard.",
    REQUIRED_TO_REMOVE: "When a message on the starboard drops to this number, it will get removed from the starboard.",
    LANGUAGE: (_p, _pm, name) => `The language of the ${name ? "channel" : "server"}.`,
    PERMISSION: `This is the permission users need to have before performing various actions, such as trashing messages, changing settings and blacklisting users.
    When setting the permission, you can input something like \`MANAGE_MESSAGES\`, \`Manage Messages\`, \`Manage-Messages\` or \`8192\`. For multiple permissions, use a permissions calculator.`.stripIndents(),

    LINK_DELETES: "If a message is deleted, the starboard message will automatically be deleted.",
    FILTER_BOTS: "Whether or not bots should be filtered off the starboard.",
    STAR_SELF: "If users are able to star their own messages.",
    WATCHING: `This is if you want the full functionality of Starboard without actually posting messages to a starboard.
    I guess this is useful if you have a server with a second Starboard bot, but this setting was mainly made for the Discord Bot List Discord server, which the bot is no longer in. This setting may get removed in the future.`,
    VISIBLE: (p, _prm, name) => `This determines whether or not users can find this ${name ? "channel" : "server"}'s messages in \`${p}explore\`, and whether or not this server appears on the server leaderboard (\`${p}leaderboard servers\`)`,
    CLEAN: "With this enabled, **[Click to jump to message!](https://www.youtube.com/watch?v=KvxteMk0e84)** and other links/media will not show up at the bottom of starboard messages.",
    DOWNVOTE: "If users can downvote starred messages.",
    BOTS_ON_LB: "If bots are able to appear on the leaderboard.",
    ATTACHMENTS: "If media such as videos should be attached to the starboard message instead of just appended as links.",
    NO_EXPLORE: p => `If the \`${p}explore\` command should be disabled for the server. Your messages will still appear in this command if the **Visible** setting is enabled.`,
    FILTER_BLACKLISTED: `Whether or not blacklisted users should be filtered off the starboard.`,
    REMOVE_REACTIONS: "If reactions should get removed if a user reacts wrongly, such as reacting on a blacklisted user's message.",
    NO_LEADERBOARD: (_p, _prm, name) => !name ? "If leaderboard related commands should be disabled for the server." : "If leaderboard stats should not be recorded for this channel.",
    KEEP_ROLES: "If users should keep old reward roles upon getting a new one.",
    MENTION_AUTHOR: "If the author of a message should be pinged on their starboard messages.",
    QUICK_ACTIONS: `With this enabled, users can perform actions on a starred message by reacting on the starboard message with specific emojis.
    __Moderators:__
    **Trashing**: 🗑️
    **Locking**: 🔒 
    **Unlocking**: 🔓 
    **Freezing**: 🧊 
    **Unfreezing**: 🔥 
    **Refreshing**: 🔄 or 🔁
    **Add to Hall of Fame**: 🏆
    **Forcing**: 📌 - only on the original message after it's been starred
    __Anyone:__
    **Saving**: 📥
    `.stripIndents(),
    LINK_EDITS: "If a message is edited, the starboard message will update with the new message content.",
    DISPLAY_NICKNAME: "Whether or not the nickname of the author should be displayed instead of their Discord tag.",
    NO_COMMANDS: "If the bot should not respond to commands run by non-moderators, so the bot kinda \"works in the background\".",

    DOWNVOTE_EMOJI: "The emoji used to downvote starred messages.",
    EMOJIS: {
      REACTION: (p, prm, name) => `The emoji${prm ? "s" : ""} users react with to get a message on the starboard. ${
        prm
          ? `You can add/remove more emojis with ${p}changesetting emoji reaction <add/remove> <[emoji]>${name && `--channel ${name}`}`
          : "**[Premium Servers](https://patreon.com/TheNoob27)** can add up to **5** different emojis."
      }`,
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has less than ${r.first} stars.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has ${r.first + 1}-${r.second} stars.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has ${r.second + 1}-${r.third} stars.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has more than ${r.third + 1} stars.`
    },
    STAR_REQUIREMENTS: {
      FIRST: "The amount of stars a message needs to have before the star beside the counter switches to the second star.",
      SECOND: "The amount of stars a message needs to have before the star beside the counter switches to the third star.",
      THIRD: "The amount of stars a message needs to have before the star beside the counter switches to the fourth star.",
    },
    COLORS: {
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `This will be the colour of the starboard message when the message has ${r.first + 1}-${r.second} stars.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `This will be the colour of the starboard message when the message has ${r.second + 1}-${r.third} stars.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `This will be the colour of the starboard message when the message has more than ${r.third + 1} stars.`,
    },
    TYPES: {
      NOT_SET: "Not Set",
      NONE: "None",
      CHANNEL: "channel",
      NUMBER: "number",
      LANGUAGE: "language",
      PERMISSION: "permission",
      EMOJI: "emoji",
      COLOR: "colour",
      BOOLEAN: "true/false/yes/no",
    }
  },

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
    /** @param {import("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_HELP_EMBED: (command, Embed, prefix, color, cooldown, requiredPermissions) => {
      const l = __filename.split("/").slice(-1)[0].slice(0, -3) // a/b/c/en-GB.js -> en-GB
      const c = command.language(l).get()
      const embed = Embed
        .setTitle("Help")
        .setColor(command.enabled ? color : command.client.colors.error)
        .addField(
          `Command: ${prefix}${command.language(l).name || command.name}`,
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
          **Required User Permissions**: ${command.client.util.readablePermissions(requiredPermissions)}`
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

    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
    COMMAND_DISABLED_EMBED: (command, Embed) =>
      Embed
        .setTitle("Command Disabled")
        .setDescription(`This command is currently disabled. ${command.settings.disableMessage ? `The reason for that is: **${command.disableMessage}**.` : "It was probably disabled because something wasn't functioning properly, otherwise another reason."}
        Please try again later, or **[join the support server](https://discord.gg/rZgxfbH)** for more info.`.stripIndents())
        .setColor(command.client.colors.error)
        .setTimestamp(),
    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed */
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
    /** @param {import ("../../classes/Command")} command @param {import("../../classes/Embed")} Embed  @param {[("ENUM" | "MATCH" | "TYPE" | "RANGE" | "PARSE")]} e */
    COMMAND_INVALID_ARGS: (command, Embed, e) => {
      let m, esc = command.client.util.discordUtil.escapeMarkdown
      switch (e[0]) {
        case "ENUM": {
          const [, name, raw, en] = e
          m = `The argument **${name}** ${
            raw ? `(provided: \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\`) ` : ""
          }has to be one of \`${en.join("`, `")}\`.`
          break
        }
        case "MATCH": {
          const [, name, raw, match] = e
          m = `The argument **${name}** ${
            raw ? `(provided: \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\`) ` : ""
          }has to match the regex \`${match.toString().split("/")[1] || match}\`.`
          break
        }
        case "MISSING": {
          const [, name] = e
          m = `The required argument **${name}** is missing.`
          break
        }
        case "PARSE": {
          const [, raw, toParse] = e
          m = `Could not parse a ${toParse} ${typeof raw === "number" ? "for argument" : "from the provided argument"} \`${esc(String(raw || "")).replace(/(\w{20}).+/, "$1...")}\``
          break
        }
        case "RANGE": {
          const [, raw, greater, boundary] = e
          m = `The provided argument \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\` cannot be ${greater ? "greater" : "less"} than \`${boundary}\`.`
          break
        }
        case "TYPE": {
          const [, name, raw, type] = e
          m = `The argument **${name}** ${
            raw ? `(provided: \`${esc(raw).replace(/(\w{20}).+/, "$1...")}\`) ` : ""
          }has to be a \`${type}\`.`
          break
        }
      }
      return Embed
        .setTitle("Invalid Arguments")
        .setDescription(`The arguments provided were not valid: ${m}`)
        .setColor(command.client.colors.error)
    },
    MISSING_PERMISSIONS: (perms, bot) => `${bot ? "The bot is" : "You are"} missing the ${perms} permissions, required to run this command.`,
    // STARRED_MESSAGE_NOT_IN_GUILD: "The starred message must be from this server.",

    EVAL: {
      DESCRIPTION: "Evaluates a bit of code.",
      USAGE: "eval <code>"
    },
    HELP: {
      DESCRIPTION: "View all the commands the bot has to offer, or view info about a specific command.",
      USAGE: "help (command)",
      EMBED_DESCRIPTION: (command, owner, categories, prefix) => `Commands: ${
          owner
            ? command.client.commands.size
            : Object.values(categories) // { "Category": "...\n..." }
              .reduce((p, c) => c.split("\n").length + p, 0)
        }
        If you're new to the bot, you can set up your server using \`${prefix}setup\`.
        If you still need help, please join our **[support server](${command.client.config.links.support})**.`.stripIndents(),
      EMBED_FOOTER: "() = optional, <> = required, [] = a placeholder, -- = optional flags - don't include these when using the commands."
    },
    PING: {
      DESCRIPTION: "Check the bot's ping, response times and edit speed.",
      USAGE: "ping",
      PINGING: "Pinging...",
      CLUSTER: n => `Cluster ${n}`,
      SHARD: n => `Shard ${n}`,
      PING: "Ping",
      LATENCY: "Latency",
      EDIT: "Edit"
    },
    RELOAD: {
      DESCRIPTION: "Reload commands, events or a file.",
      USAGE: "reload <[command]/event/file> ([event]/[file])"
    },
    CHANGESETTING: {
      DESCRIPTION: "Change a setting for the channel or server, such as the required amount of stars needed to reach the starboard. All the settings are in the settings command, so you can view your options there.",
      USAGE: "changesetting <[setting]> <[value]> --channel ([channel])",
      
      UPDATED_SETTINGS: "Updated Settings",
      ERRORS: "Errors",

      NO_CHANNEL_SETTINGS: (c) => `There are no channel settings specifically for ${c ? c : "this channel"}.`,
      INVALID_CHANNEL_SETTING: s => `**${s}** is not a valid setting for channels, it is only available as a server setting.`,
      
      INVALID_LANGUAGE: l => `**${l}** was not a valid language.`,
      LANGUAGE_SET: l => `Successfully set the language to ${l}`, // passing l because other languages may not be finished and have this translation

      NO_STARBOARD: (c, nsfw) => `There is no ${nsfw ? "NSFW " : ""}starboard set${c ? " for this channel" : ""}.`,
      INVALID_CHANNEL: "That channel does not exist.",
      INVALID_CHANNEL_TYPE: "The channel must be either a text or announcement channel.",
      CANT_SPEAK: embeds => `I cannot send ${embeds ? "embeds" : "messages"} in that channel`,
      SAME_STARBOARDS: "You cannot set the normal starboard to the same channel as the NSFW starboard.",
      NOT_NSFW: "The NSFW starboard must be set as a NSFW channel.",
      STARBOARD_DELETE: (c, nsfw) => `Successfully unset the ${nsfw ? "NSFW " : ""}starboard${c ? " for this channel" : ""}.`,
      STARBOARD_SET: (c, channel, nsfw) => `Successfully set the ${nsfw ? "NSFW " : ""}starboard ${c ? "for this channel " : ""}to ${channel}.`,

      REQUIRED_TOO_BIG: "The required amount of stars to reach the starboard cannot be that high.",
      REQUIRED_TOO_SMALL: "The required amount of stars to reach the starboard has to be a number greater than 0.",
      REQUIRED_SET: (n, c) => `Successfully set the required amount of stars to reach the starboard ${c ? "for this channel " : ""}to ${n}.`,
      REQUIRED_SET_BOTH: (n, c) => `Successfully set the required amount of stars to reach the starboard ${c ? "for this channel " : ""}to ${n}, and lowered **RequiredToRemove** to ${n - 1}.`,
      RTR_TOO_BIG: "The required amount of stars to be removed from the starboard cannot be that high.",
      RTR_TOO_SMALL: "The required amount of stars to be removed from the starboard has to be a number greater than or equal to 0.",
      RTR_SET: (n, c) => `Successfully set the required amount of stars to be removed from the starboard ${c ? "for this channel " : ""}to ${n}.`,
      RTR_SET_BOTH: (n, c) => `Successfully set the required amount of stars to be removed from the starboard ${c ? "for this channel " : ""}to ${n}, and raised **Required** to ${n + 2}.`,

      INVALID_PERMISSIONS: "The permissions provided were not valid.",
      PERMISSIONS_SET: p => `Successfully set the permissions required to perform various actions to ${p}.`,
      COLOR_SET: (c, r) => `Successfully set the colour for starboard messages above ${r} stars to ${c}.`,

      REQUIREMENT_TOO_HIGH: t => `The **${t}** requirement cannot be that high.`,
      REQUIREMENT_TOO_LOW: t => `The **${t}** requirement has to be a number greater than 0.`,
      REQUIREMENT_BOUNDARY: (t, next, n, higher) => `The **${t}** requirement has to be a number ${higher ? "higher" : "lower"} than ${n}, which is what **${next}** is currently set as.`,
      REQUIREMENT_SET: (type, emoji, n) => `Successfully set the required amount of stars for the **${type}** emoji${emoji ? ` (${emoji})` : ""} to show up on the starboard to ${n}.`,
      
      EMOJI_NOT_FOUND: "That emoji could not be found, or was invalid.",
      CANNOT_USE_EMOJI: "I cannot use this emoji, it has to be an emoji from a server I am in.",
      EMOJIS_SAME: "The emoji to upvote starred messages and the emoji to downvote starred messages cannot be the same.",
      RESERVED_EMOJI: "Sorry, but this emoji cannot be used.",
      MAX_EMOJIS: "You have reached the maximum amount of emojis allowed for 1 server.",
      ALREADY_AN_EMOJI: "Your emoji is already saved as one in the list of emojis.",
      NOT_AN_EMOJI: "Your emoji is not saved as one in the list of emojis.",
      EMOJI_ADD_SET: e => `Successfully added ${e} to the list of emojis.`,
      EMOJI_REMOVE_SET: e => `Successfully removed ${e} from the list of emojis.`,
      EMOJI_SET: e => `Successfully set the emoji to react on messages with to ${e}.`,
      STAR_SET: (e, type) => `Successfully changed the **${type}** star to ${e}.`,
      DV_EMOJI_SET: e => `Successfully set the emoji to downvote messages with to ${e}.`,

      LINK_DELETES: b => `When a message is deleted, the starboard message will ${b ? "now" : "no longer"} be deleted.`,
      FILTER_BOTS: b => `Bots can ${b ? "no longer" : "now"} get on the starboard.`,
      STAR_SELF: b => `Users can ${b ? "now" : "no longer"} star their own messages.`,
      WATCHING: b => b ? "Nothing now goes on the starboard, but stats are still being recorded." : "The starboard will now be used along with recording of stats.",
      VISIBLE: b => `People can ${b ? "now" : "no longer"} find this server's messages in the explore command.`,
      CLEAN: b => `The **Click to jump to message!** and other links will ${b ? "now" : "no longer"} show.`,
      DOWNVOTE: b => `Users can ${b ? "now" : "no longer"} downvote starred messages.`,
      BOTS_ON_LB: b => `Bots will ${b ? "now" : "no longer"} show on the leaderboard.`,
      ATTACHMENTS: b => `Attachments will ${b ? "now" : "no longer"} be attached onto the starboard message.`,
      NO_EXPLORE: b => `Users can ${b ? "no longer" : "now"} use the explore command.`,
      FILTER_BLACKLISTED: b => `Blacklisted users will ${b ? "now" : "no longer"} be filtered off the starboard.`,
      REMOVE_REACTIONS: b => `Reactions will ${b ? "now" : "no longer"} be removed if a user reacts wrongly, such as in a blacklisted channel.`,
      NO_LEADERBOARD: (b, cs) => cs
        ? `The leaderboard for this channel will ${b ? "no longer" : "now"} be recorded.`
        : `The leaderboard and leaderboard related commands have been ${b ? "disabled" : "enabled"}.`,
      KEEP_ROLES: b => `Users will ${b ? "now" : "no longer"} keep old reward roles upon getting a new one.`,
      MENTION_AUTHOR: b => `Users will ${b ? "now" : "no longer"} be pinged on their starboard messages.`,
      QUICK_ACTIONS: b => `You can ${b ? "now" : "no longer"} react on starboard messages to quickly perform actions on them.`,
      LINK_EDITS: b => `Starboard messages will ${b ? "now" : "no longer"} be updated when its original message is edited.`,
      DISPLAY_NICKNAME: b => `Starboard messages will now display the message author's ${b ? "server nickname" : "Discord tag"}.`,
      NO_COMMANDS: b => `Commands will ${b ? "now" : "no longer"} only work for moderators.`
    },
    LOCK: {
      DESCRIPTION: "Locks a starred message to the starboard, so it'll stay there even if it reaches 0 stars.",
      USAGE: "lock <[messageID]>",
      SUCCESS: "Successfully locked that message to the starboard.",
      FAILED: "That message is already locked."
    },
    UNLOCK: {
      DESCRIPTION: "Unlocks a starred message from the starboard, so it can be removed as normal.",
      USAGE: "unlock <[messageID]>",
      SUCCESS: "Successfully unlocked that message from the starboard.",
      FAILED: "That message is not locked."
    },
    FREEZE: {
      DESCRIPTION: "Freezes a starred message, so no-one can add or remove stars.",
      USAGE: "freeze <[messageID]>",
      SUCCESS: "Successfully froze that message.",
      FAILED: "That message is already frozen."
    },
    UNFREEZE: {
      DESCRIPTION: "Unfreezes a starred message, so everyone can add or remove stars as normal.",
      USAGE: "unfreeze <[messageID]>",
      SUCCESS: "Successfully unfroze that message.",
      FAILED: "That message is not frozen."
    },
    PREFIXES: {
      DESCRIPTION: "Add or remove prefixes for the server, or view a list of them.",
      USAGE: "prefixes (add/remove) ([prefix])",
      ALREADY_PREFIX: "That is already a prefix for this server.",
      TOO_MANY_PREFIXES: "There are too many prefixes set for this server.",
      PREFIX_TOO_LONG: "That prefix is too long.",
      NOT_PREFIX: "That is not a prefix for this server.",
      PREFIX_ADD: p => `Successfully added "${p}" to the list of prefixes.`,
      PREFIX_REMOVE: p => `Successfully removed "${p}" from the list of prefixes.`,
      PREFIX_SET: p => `Successfully set the server's prefix to "${p}"`,
      LIST_PREFIXES: prefixes => `The prefixes for this server ${
        prefixes.length > 1
          ? `are: \n"${prefixes.join("\",\n\"")}"`
          : `is "${prefixes}".`
      }`,
      FOOTER: "My mention also works as a prefix."
    },
    LINKS: {
      DESCRIPTION: "Get the links related to the bot, such as the bot's invite link.",
      USAGE: "links",
      LINKS: "Links",
      DONATION: "Donation",
      OTHER: "Other",
      DISCORD_LINKS: (i, s) => `**[Invite me!](${i})**\n**[Join our support server](${s})**`,
      PATREON_LINK: p => `**[Become a Patron!](${p})**`,
      OTHER_LINKS: (v, gh) => `**[Vote for the bot!](${v})**\n**[GitHub Issues](${gh})**`
    }
  },

  // languages
  LANGUAGES: {
    EN_GB: "English (GB)",
    EN_US: "English (US)",
    LT_LT: "Lithuanian",
    TR_TR: "Turkish",
  }
}
