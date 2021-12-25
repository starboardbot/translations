const LOCALE = "en-GB"

module.exports = {
  name: "English (GB)",
  HELLO_WORLD: "Hello world!",

  // miscellaneous - could be used anywhere
  IMAGE: num => `Image${typeof num === "number" && num ? ` ${num}` : ""}`,
  GIF_VIDEO: num => `GIF Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  VIDEO: num => `Video${typeof num === "number" && num ? ` ${num}` : ""}`,
  MEDIA: num => `Media${typeof num === "number" && num ? ` ${num}` : ""}`,
  FILE: num => `File${typeof num === "number" && num ? ` ${num}` : ""}`,
  
  // starred message embed - stuff that shows up in starboard message embeds
  CLICK_TO_JUMP: deleted =>
    !deleted ? "Click to jump to message!" : "Context (message was deleted)",
  SHORT_CLICK_TO_JUMP: deleted =>
    // if for whatever reason there are 25 fields and content over 1928 and less than 1947 chars
    !deleted ? "Click!" : "Context",
  REFERENCED_MESSAGE: (isReply, deleted, user) =>
    isReply ? `Replying to ${user || "this message"}${deleted ? " (deleted)" : ""}` : "Referenced Message",
  TWEET: authorName => `Tweet from ${authorName}`,
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
  And most importantly, have fun!`.stripIndents(),
  GET_STARTED_FOOTER: "Thank you for using Starboard!",

  // message event
  CANT_SPEAK: "I cannot speak in that channel! Please get a moderator to change my permissions for that channel, or try using me in a different channel.",
  PREFIX_INFO: (prefixes = ["star "]) => `My prefix for this server is${prefixes.length > 1 ? " any one of" : ""} \`${prefixes.join("`, `")}\`, but my mention also works as a prefix.`,
  HELP: "Help",

  NEED_VOTE: doThis => `To ${doThis}, you need to **[vote for the bot](https://top.gg/bot/655390915325591629/vote)**. Once you have voted, you have to wait a few minutes for me to recieve your vote.`,
  NEED_PREMIUM: doThis => `To ${doThis}, your server needs to be a **[Premium Server](https://patreon.com/TheNoob27)**.`,
  STAR_REQ_FEAT: "change the requirements for different star emojis to appear",
  EMOJIS_FEAT: "change the emojis",
  DOWNVOTE_FEAT: "downvote starred messages",
  MULTIPLE_EMOJIS_FEAT: "have multiple emojis at once",
  CHANNEL_SETTINGS_FEAT: "have more than 10 sets of channel settings",
  AUTO_STAR_FEAT: "enable auto starring",

  FIND_USER_MORE_SPECIFIC: users => `Please be more specific, I found ${users} users matching your input.`,
  FIND_USER_PROMPT: list => `I found multiple users matching your input:
  ${list}
  Please respond with the number of the user you want.`.stripIndents(),

  SETTINGS: { // prefix, isPremium, channelSettingName
    STARBOARD_ID: (p, _prm, name) => `This is where starred messages will go. If you wish to unset the starboard, run \`${p}changesetting${name && ` ${name}`} starboard none\`.`,
    NSFW_STARBOARD_ID: "This is where starred messages from NSFW channels will go. If this isn't set, messages from NSFW channels will go to the normal starboard, with images spoilered.",
    REQUIRED: "This is how many stars a message needs before reaching the starboard.",
    REQUIRED_TO_REMOVE: "When a message on the starboard drops to this number, it will get removed from the starboard.",
    LANGUAGE: (_p, _pm, name) => `The language of the ${name && name !== "server" ? "channel" : "server"}. The languages that are currently available are ${Object.values(module.exports.LANGUAGES).join(", ")}.`,
    PERMISSION: `This is the permission users need to have before performing various actions, such as trashing messages, changing settings and blacklisting users.
    When setting the permission, you can input something like \`MANAGE_MESSAGES\`, \`Manage Messages\`, \`Manage-Messages\` or \`8192\`. For multiple permissions, use a permissions calculator.`.stripIndents(),
    ON_DELETION: "This is what should happen when a moderator deletes a starboard message. Repost means the starboard message automatically gets reposted, freeze means the starred message gets frozen and trash means the starred message gets trashed.",

    LINK_DELETES: "If a message is deleted, the starboard message will automatically be deleted.",
    FILTER_BOTS: "Whether or not bots should be filtered off the starboard.",
    STAR_SELF: "If users are able to star their own messages.",
    WATCHING: `This is if you want the full functionality of Starboard without actually posting messages to a starboard.
    I guess this is useful if you have a server with a second Starboard bot, but this setting was mainly made for the Discord Bot List Discord server, which the bot is no longer in. This setting may get removed in the future.`,
    VISIBLE: (p, _prm, name) => `This determines whether or not users can find this ${name && name !== "server" ? "channel" : "server"}'s messages in \`${p}explore\`, and whether or not this server appears on the server leaderboard (\`${p}leaderboard servers\`).`,
    CLEAN: "With this enabled, **[Click to jump to message!](https://www.youtube.com/watch?v=KvxteMk0e84)** and other links/media will not show up at the bottom of starboard messages.",
    DOWNVOTE: "If users can downvote starboard messages. When a message is downvoted off the starboard, it is automatically frozen so it cannot be sent back to the starboard.",
    BOTS_ON_LB: "If bots are able to appear on the leaderboard.",
    ATTACHMENTS: "If media such as videos should be attached to the starboard message instead of just appended as links.",
    NO_EXPLORE: p => `If the \`${p}explore\` command should be disabled for the server. Your messages will still appear in this command if the **Visible** setting is enabled.`,
    FILTER_BLACKLISTED: `Whether or not blacklisted users should be filtered off the starboard.`,
    REMOVE_REACTIONS: "If reactions should get removed if a user reacts wrongly, such as reacting on a blacklisted user's message.",
    NO_LEADERBOARD: (_p, _prm, name) => !name || name === "server" ? "If leaderboard related commands should be disabled for the server." : "If leaderboard stats should not be recorded for this channel.",
    KEEP_ROLES: "If users should keep old reward roles upon getting a new one.",
    MENTION_AUTHOR: "If the author of a message should be pinged on their starboard messages.",
    QUICK_ACTIONS: `With this enabled, users can perform actions on a starred message by reacting on the starboard message with specific emojis.
    __Moderators:__
    **Trashing**: 🗑️
    **Locking**: 🔒
    **Unlocking**: 🔓
    **Freezing**: 🧊 or ❄️
    **Unfreezing**: 🔥
    **Refreshing**: 🔄 or 🔁
    **Add to Hall of Fame**: 🏆 or 🏅
    **Forcing**: 📌 or 📍 - only on the original message
    __Anyone:__
    **Saving**: 📥 or 💾
    **Deleting**: ❌ or 🇽 - only on starred messages they own
    `.stripIndents(),
    LINK_EDITS: "If a message is edited, the starboard message will update with the new message content.",
    DISPLAY_NICKNAME: "Whether or not the nickname of the author should be displayed instead of their Discord tag.",
    NO_COMMANDS: "If the bot should not respond to commands run by non-moderators, so the bot kinda \"works in the background\".",
    AUTO_STAR: "If the bot should automatically star messages in these channels.",
    DELETE_INVALID: "If the bot should delete messages in an auto star channel that don't pass the filters or were sent by a blacklisted user.",

    DOWNVOTE_EMOJI: "The emoji used to downvote starred messages.",
    EMOJIS: {
      REACTION: (p, prm, name) => `The emoji${prm ? "s" : ""} users react with to get a message on the starboard. ${
        prm
          ? `You can add/remove more emojis with ${p}changesetting${name && ` ${name}`} emoji reaction <add/remove> <[emoji]>`
          : "**[Premium Servers](https://patreon.com/TheNoob27)** can add up to **5** different emojis."
      }`,
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has less than ${r.first} stars.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has ${r.first}-${r.second - 1} stars.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has ${r.second}-${r.third - 1} stars.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `Beside the star counter on a starboard message, this emoji will show when the message has ${r.third} stars or more.`
    },
    STAR_REQUIREMENTS: {
      FIRST: "The amount of stars a message needs to have before the star beside the counter switches to the second star.",
      SECOND: "The amount of stars a message needs to have before the star beside the counter switches to the third star.",
      THIRD: "The amount of stars a message needs to have before the star beside the counter switches to the fourth star.",
    },
    COLORS: {
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `This will be the colour of the starboard message when the message has less than ${r.first} stars.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `This will be the colour of the starboard message when the message has ${r.first}-${r.second - 1} stars.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `This will be the colour of the starboard message when the message has ${r.second}-${r.third - 1} stars.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `This will be the colour of the starboard message when the message has ${r.third} stars or more.`,
    },
    TYPES: {
      NOT_SET: "Not Set",
      NONE: "None",
      STARS: "stars",
      CHANNEL: "channel",
      NUMBER: "number",
      LANGUAGE: "language",
      PERMISSION: "permission",
      EMOJI: "emoji",
      COLOR: "role/random/[colour]",
      RANDOM: "random",
      ROLE: "the author's highest role colour"
    }
  },

  COMMANDS: {
    COOLDOWN_MESSAGE: time => `You're using this command too frequently! Please wait ${time} before using it again.`,
    WAIT_SUGGESTIONS: (hasVoted) => {
      return [
        "**[join the support server](https://discord.gg/rZgxfbH)** and have fun talking to us, participate in polls which heavily determine what gets added to the bot, possible giveaways and much much more",
        `**[vote for the bot](https://top.gg/bot/655390915325591629/vote)** ${hasVoted ? "for extra coolness points" : "to have this cooldown sawed in half"}`,
        "**[become a patron](https://patreon.com/TheNoob27)** and unlock some sweet donator only features, and a donator only role in our discord server",
        "**[follow my twitter](https://twitter.com/DaNoob27)** for absolutely no reason at all",
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
      const l = LOCALE
      const c = command.language(l).get()
      const embed = Embed
        .setTitle("Help")
        .setColor(command.enabled ? color : command.client.colors.error)
        .addField(
          `Command: ${prefix}${command.language(l).name.get() || command.name}`,
          `**Aliases**: ${(command.language(l).aliases.get() || command.aliases).join(", ") || "none"}
          **Description**: ${command.language(l).description || "none"}
          **Usage**: ${prefix}${command.language(l).usage}
          ${command.example ? `**Example${Array.isArray(command.example) ? "s" : ""}**: ${Array.isArray(command.example) ? `\n\`${command.example.map(c => `${prefix}${c}`).join("`\n`")}\`` : `${prefix}${command.example}`}` : ""}`
          .stripIndents()
        )
        .addField(
          "Extra",
          `**Category**: ${command.language(l).base.categories(command.category).get() || command.category}
          **Cooldown**: ${cooldown}
          **Enabled**: ${command.client.config.emojis[command.enabled ? "yes" : "no"]}
          **Required Bot Permissions**: ${command.client.util.readablePermissions(command.botPermissions || 0)}
          **Required User Permissions**: ${command.client.util.readablePermissions(requiredPermissions || 0)}`
          .stripIndents()
        )
        .setFooter("() = optional arguments, <> = required arguments, [] = a placeholder, -- = optional flag")
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
        .setDescription(`This command is currently disabled. ${command.disableMessage ? `The reason for that is: **${command.disableMessage}**.` : "It was probably disabled because something wasn't functioning properly, otherwise another reason."}
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
            raw ? `(provided: \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\`) ` : ""
          }has to be one of \`${en.join("`, `")}\`.`
          break
        }
        case "MATCH": {
          const [, name, raw, match] = e
          m = `The argument **${name}** ${
            raw ? `(provided: \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\`) ` : ""
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
          m = `Could not parse a ${toParse} ${typeof raw === "number" ? "for argument" : "from the provided argument"} \`${esc(String(raw || "")).replace(/([^]{20}).+/, "$1...")}\``
          break
        }
        case "RANGE": {
          const [, raw, greater, boundary] = e
          m = `The provided argument \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\` cannot be ${greater ? "greater" : "less"} than \`${boundary.toLocaleString(LOCALE)}\`.`
          break
        }
        case "TYPE": {
          const [, name, raw, type] = e
          m = `The argument **${name}** ${
            raw ? `(provided: \`${esc(raw).replace(/([^]{20}).+/, "$1...")}\`) ` : ""
          }has to be a \`${type}\`.`
          break
        }
      }
      return Embed
        .setTitle("Invalid Arguments")
        .setDescription(`The arguments provided were not valid: ${m}`)
        .addField("Usage", `\`${command.language(LOCALE).usage}\``)
        .setColor(command.client.colors.error)
    },
    MISSING_PERMISSIONS: (perms, bot) => `${bot ? "The bot is" : "You are"} missing the ${perms} permissions, required to run this command.`,
    NO_CHANNEL_SETTINGS: (c) => `There are no channel settings specifically for ${c ? c : "this channel"}.`,

    EVAL: {
      DESCRIPTION: "Evaluates a bit of code.",
      USAGE: "eval <code>"
    },
    HELP: {
      DESCRIPTION: "View all the commands the bot has to offer, or view info about a specific command.",
      USAGE: "help ([command])",
      EMBED_DESCRIPTION: (command, owner, categories, prefix, guide) => `Commands: ${
          owner
            ? command.client.commands.size
            : Object.values(categories) // { "Category": "...\n..." }
              .reduce((p, c) => c.split("\n").length + p, 0)
        }
        If you're new to the bot, you can set up your server using \`${prefix}setup\`.
        For more info on various features, you could read the **[guide](${guide})**.
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
      USAGE: "changesetting ([channel]) <[setting]> <[value]>",
      
      UPDATED_SETTINGS: "Updated Settings",
      ERRORS: "Errors",
      CHANNEL_SETTINGS: "Channel Settings",
      NONE: "None",

      INVALID_CHANNEL_SETTING: s => `**${s}** is not a valid setting for channels, it is only available as a server setting.`,
      INVALID_GUILD_SETTING: s => `**${s}** is not a valid setting for servers, it is only available as a channel setting.`,
      
      INVALID_LANGUAGE: l => `**${l}** was not a valid language.`,
      LANGUAGE_SET: l => `Successfully set the language to ${l}`, // passing l because other languages may not be finished and will use this translation

      NO_STARBOARD: (c, nsfw) => `There is no ${nsfw ? "NSFW " : ""}starboard set${c ? " for this channel" : ""}.`,
      INVALID_CHANNEL: "That channel does not exist.",
      INVALID_CHANNEL_TYPE: "The channel must be either a text or announcement channel.",
      CANT_SPEAK: embeds => `I cannot send ${embeds ? "embeds" : "messages"} in that channel`,
      NOT_NSFW: "The NSFW starboard must be set as a NSFW channel.",
      MISSING_PERMISSIONS: "The bot is missing the `Manage Channels` permission, required to create channels.",
      CREATE_STARBOARD_FAIL: "Something went wrong when creating a starboard channel.",
      CREATE_STARBOARD_SUCCESS: (c, nsfw) => `Successfully created a ${nsfw ? "NSFW" : ""} starboard channel: ${c}`,
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

      ON_DELETION_NOTHING: "Starboard message will no longer be reposted, frozen or trashed when they get deleted.",
      ON_DELETION_REPOST: "Starboard messages will now be automatically reposted when they get deleted by a moderator.",
      ON_DELETION_FREEZE: "Starred messages will now be automatically frozen if the starboard message gets deleted by a moderator.",
      ON_DELETION_TRASH: "Starred messages will now be automatically trashed if the starboard message gets deleted by a moderator.",

      LINK_DELETES: b => `When a message is deleted, the starboard message will ${b ? "now" : "no longer"} be deleted.`,
      FILTER_BOTS: b => `Bots can ${b ? "no longer" : "now"} get on the starboard.`,
      STAR_SELF: b => `Users can ${b ? "now" : "no longer"} star their own messages.`,
      WATCHING: b => b ? "Nothing now goes on the starboard, but stats are still being recorded." : "The starboard will now be used along with recording of stats.",
      VISIBLE: b => `People can ${b ? "now" : "no longer"} find this server's messages in the explore command.`,
      CLEAN: b => `The **Click to jump to message!** and other links will ${!b ? "now" : "no longer"} show on starboard messages.`,
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
      NO_COMMANDS: b => `Commands will ${b ? "now" : "no longer"} only work for moderators.`,
      AUTO_STAR: b => `Messages from these channels will ${b ? "now" : "no longer"} be automatically starred by me.`,
      DELETE_INVALID: b => `Messages sent while auto starring is enabled that either don't pass the filters or were sent by blacklisted users will ${b ? "now" : "no longer"} be deleted.`
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
      PREFIX_ADD: p => `Successfully added \`${p}\` to the list of prefixes.`,
      PREFIX_REMOVE: p => `Successfully removed \`${p}\` from the list of prefixes.`,
      PREFIX_SET: p => `Successfully set the server's prefix to \`${p}\``,
      LIST_PREFIXES: prefixes => `The prefixes for this server ${
        prefixes.length > 1
          ? `are: \n\`${prefixes.join("`,\n`")}\``
          : `is \`${prefixes}\`.`
      }`,
      FOOTER: "My mention also works as a prefix."
    },
    LINKS: {
      DESCRIPTION: "Get the links related to the bot, such as the bot's invite link.",
      USAGE: "links",
      LINKS: "Links",
      DONATION: "Donation",
      OTHER: "Other",
      DISCORD_LINKS: (i, s) => `**[Invite me!](${i})**\n**[Support Server](${s})**`,
      PATREON_LINK: p => `**[Become a Patron!](${p})**`,
      OTHER_LINKS: (v, gh, g) => `**[Vote for the bot!](${v})**\n**[GitHub Issues](${gh})**\n**[Starboard Guide](${g})**`
    },
    BLACKLIST: {
      DESCRIPTION: "View info about blacklisted users, roles or channels, or modify the list.",
      USAGE: "blacklist (add/remove) ([user/role/channel]) --channel ([channelSettings])",
      BLACKLIST: "Blacklist",
      EMBED_DESCRIPTION: (blsb, c, nothing, prefix) => `The following ${c ? `users and roles` : `users, roles and channels`} are blacklisted and cannot interact with the starboard${c ? " in this channel" : ""}.${
        blsb 
          ? " Blacklisted users can still get on the starboard."
          : ""
      }${nothing ? `\n**Nothing has been blacklisted yet**\nTo add/remove to the list, run \`${prefix}blacklist <add/remove> <[user/role${c ? "" : "/channel"}]>\`.` : ""}`,
      USERS: "Users",
      ROLES: "Roles",
      CHANNELS: "Channels",
      NOT_FOUND: c => `I could not find a ${c ? "user or role" : "user, role or channel"} from your input.`,
      ALREADY_BLACKLISTED: s => `**${s}** is already blacklisted.`,
      NOT_BLACKLISTED: s => `**${s}** is not blacklisted.`,
      TOO_MANY_BLACKLISTED: "There are too many items on the blacklist.",
      NOTHING_BLACKLISTED: "There is nothing blacklisted.",
      BLACKLIST_ADD: s => `Successfully blacklisted **${s}**.`,
      BLACKLIST_ADD_CHANNELS: n => `Successfully blacklisted ${n} channels.`,
      REMOVE_ALL: "Successfully removed everything from the blacklist.",
      BLACKLIST_REMOVE: s => `Successfully removed **${s}** from the blacklist.`
    },
    WHITELIST: {
      DESCRIPTION: "View info about whitelisted users or roles, or modify the list.",
      USAGE: "whitelist (add/remove) ([user/role]) --channel ([channelSettings])",
      WHITELIST: "Whitelist",
      EMBED_DESCRIPTION: (c, nothing, prefix) => `The following users and roles are whitelisted and bypass the blacklist ${c ? "in this channel " : ""}if on it.${
        nothing
          ? `\n**Nothing has been whitelisted yet**\nTo add/remove to the list, run \`${prefix}whitelist <add/remove> <[user/role]>.\``
          : ""
        }`,
      USERS: "Users",
      ROLES: "Roles",
      NOT_FOUND: "I could not find a user or role from your input.",
      ALREADY_WHITELISTED: s => `**${s}** is already whitelisted.`,
      NOT_WHITELISTED: s => `**${s}** is not whitelisted.`,
      TOO_MANY_WHITELISTED: "There are too many items on the whitelist.",
      NOTHING_WHITELISTED: "There is nothing whitelisted.",
      WHITELIST_ADD: s => `Successfully whitelisted **${s}**.`,
      REMOVE_ALL: "Successfully removed everything from the whitelist.",
      WHITELIST_REMOVE: s => `Successfully removed **${s}** from the whitelist.`
    },
    REWARDROLES: {
      DESCRIPTION: "View info about or add/remove reward roles, roles that get added to users once they surpass a certain amount of stars.",
      USAGE: "rewardroles ([channelSettings]) (add/remove) ([role]) ([stars])",
      NO_LEADERBOARD: "The leaderboard is disabled for the server, which includes reward roles.",
      REWARD_ROLES: "Reward Roles",
      ROLE: "Role",
      STARS_NEEDED: "Stars Needed",
      PROGRESS: u => `${u ? `${u}'s` : "Your"} Progress`,
      EMBED_DESCRIPTION: (c, showThisBit) => `Reward roles are a fun way to reward users for getting their messages starred. Users will be given a role based on the amount of stars they have gotten in this ${c ? "channel" : "server"}.
      ${showThisBit
        ? `You can add/subtract to the amount of stars needed for an existing reward role by creating it again, but putting a +/- before the stars argument. (+50, -50 etc)
          When viewing reward roles, you can optionally **ping a user** to see their progress.
          If you wish for users to only have **one reward role at a time**, disable the **KeepRoles** setting.\n`
        : ""}
      Here are the current reward roles set for this ${c ? "channel" : "server"}:`.stripIndents(),
      NO_REWARD_ROLES: (p, c) => `**There are no reward roles set for this ${c ? "channel" : "server"}.**
      To add a reward role, run \`${p}rewardroles add <[role]> ([stars])\``.stripIndents(),
      RR_FEAT: "customise reward roles",
      ROLE_NOT_FOUND: "That was not a valid role.",
      HIGHER_POSITION: "That role is higher than my highest role, so I cannot give this role to users.",
      ROLE_MANAGED: "This role is automatically managed by an integration and cannot be manually assigned to members.",
      HIGHER_THAN_USER: "You cannot add this role as it is higher than or equal to your highest role.",
      TOO_HIGH: "That number is too high.",
      TOO_LOW: "That number is too low.",
      NOT_A_NUMBER: "The amount of stars needs to be a number.",
      ADD_TOO_MANY: "You are adding too many stars to this reward role.",
      SUBTRACT_TOO_MANY: "You are subtracting too many stars from this reward role.",
      HIT_MAX: c => `This ${c ? "channel" : "server"} has hit the max of 25 reward roles.`,
      NOT_RR: `That role is not set as a reward role.`,
      RR_SET: (name, stars) => `Successfully set the stars needed for the reward role **${name}** to ${stars.toLocaleString(LOCALE)}`,
      RR_ADD: (name, stars, c) => `Successfully added the role **${name}** as a reward role, awarded to users after getting a total of **${stars.toLocaleString(LOCALE)}** stars${c ? " from this channel" : ""}.`,
      RR_REMOVE_ALL: c => `Successfully removed all reward roles${c ? " for this channel" : ""}.`,
      RR_REMOVE: (name, c) => `Successfully removed **${name}** from this ${c ? "channel" : "server"}'s reward roles.`
    },
    FORCE: {
      DESCRIPTION: "Force or refresh a message on the starboard.",
      USAGE: "force ([channel]) <[messageID]>",
      NO_STARBOARDS: c => `There are no starboards currently set for this ${c ? "channel" : "server"}.`,
      NO_MESSAGE_ID: "Please provide a message ID. If you don't know how to get the ID of a message, you have to enable **Developer Mode** in settings, click the three dots on a message and click **Copy ID**.",
      INVALID_TYPE: "The channel must be a text channel.",
      TRASHED: "That message is trashed and cannot be forced.",
      FROZEN: "That message is frozen and cannot be forced or refreshed until unfrozen.",
      NOT_FOUND: "I couldn't find a message from your input.",
      MISSING_PERMISSIONS: c => `I am missing permissions to read messages in ${c || "this channel"}.`,
      IS_STARBOARD_MESSAGE: "This message seems to be a starboard message, so it can't be forced.",
      IS_EXPLORE_MESSAGE: "This message seems to be a message from the explore command, so it can't be forced.",
      CHANNEL_BLACKLISTED: "That channel is blacklisted, so this message can't be forced.",
      STARS_RECOUNTED: url => `Successfully recounted the stars for this message${url ? `, the starboard message is **[here](${url})**` : ""}.`,
      FORCE_SUCCESS: "Successfully forced this message to the starboard!",
      POST_SUCCESS: "Successfully posted this message to the starboard!"
    },
    PURGE: {
      DESCRIPTION: "Purge and freeze a number of messages off a starboard.",
      USAGE: "purge ([channel]) <[messages]> --before <[messageID]> --after <[messageID]>",
      NOT_STARBOARD: "That channel is not a starboard channel.",
      MISSING_PERMISSIONS: sb => `I do not have permission to bulk delete messages in ${sb}.`,
      MIGRATING: "I cannot purge messages from starboards right now.",
      ARE_YOU_SURE: "Are you sure?",
      CONFIRMATION_EMBED: (n, starboard, before, after) =>
      `Are you sure you want to purge and freeze the last ${n} of starboard messages${before ? ` before ${before}${after ? " and" : ""}` : ""}${after ? ` after ${after}` : ""} from ${starboard}? I can only purge starboard messages sent in the last 14 days. If the original messages are deleted, they may be lost forever.
      Say **yes** to continue.`.stripIndents(),
      NOT_PURGED: "Cancelled the purging of the starboard.",
      NOTHING_TO_DELETE: (before, after) => `There are no starboard messages${before ? ` before ${before}${after ? " and" : ""}` : ""}${after ? ` after ${after}` : ""} to delete.`,
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
      DESCRIPTION: "View info about Channel Settings, or create/clone sets of channel settings.",
      USAGE: "channelsettings (list/create/edit/delete) ([name]) (...[channels]) --channel ([channelSettings])",
      NO_CHANNEL_SETTINGS: (prefix, guide) => `**This server has no channel settings.**
      To create a new set of channel settings, run \`${prefix}channnelsettings create ([name]) <...[channels]>\`

      Channel Settings are settings that only apply to a group of channels.
      They can have their own starboard, emojis, reward roles, filters, and almost everything else the server settings can have.
      
      **[Learn More](${guide})**`.stripIndents(),
      EMBED_DESCRIPTION: (p, guide, help) => 
        `Here are the channel settings for this server.
        ${
          help
            ? `
              Note: When providing the \`[channelSettings]\` argument for commands, you can either provide the name of the channel settings if the name has no spaces, or a channel from the list of channels.

              • If you want to clone one of these, you can run \`${p}channelsettings create ([name]) <...[channels]> --channel ([channelSettings])\` where \`([channelSettings])\` is the channel settings to clone from.

              • If you want to edit a set of channel settings to add/remove channels or change the name, you can run \`${p}channelsettings edit ([channelSettings]) ([name]) (...[channels])\` where \`([channelSettings])\` is the channel settings to edit. Prefix the channels with + or - to add or remove them from the list (e.g. \`+#general\`, \`-#memes\`).

              • If you need to delete a set of channel settings, you can run \`${p}channelsettings delete <[name]>\`

              • To edit one's settings, run \`${p}changesetting ([channelSettings]) <[setting]> <[value]>\`
              \n`
            : `Run \`${p}channelsettings --help\` for more info, or `
        }**[Learn More](${guide})**`.stripIndents(),
      CHANNEL_SETTINGS: "Channel Settings",
      CHANNELS: "Channels",
      STARBOARD: "Starboard",
      AUTO_STAR: "AutoStar",
      NONE: "Not Set",
      NAME_TOO_LONG: "The name cannot be more than 64 characters long.",
      HIT_MAX: "You have hit the maximum amount of channel settings for one server.",
      PROVIDE_CHANNELS: "Please provide some channels for this set of channel settings.",
      INVALID_CHANNELS: "You did not provide valid channels.",
      DUPLICATE_CHANNELS: "The channels provided must not already have channel settings. A channel may only have one set of channel settings.",
      ARE_YOU_SURE: "Are you sure?",
      CONFIRMATION_EMBED: name => `Are you sure you want to delete the **${name}** channel settings?
      You will lose all saved reward roles, blacklists/whitelists, filters and other saved configurations, and they will be gone forever.
      Say **yes** to continue.`.stripIndents(),
      NOT_DELETED: "The settings will not be deleted.",
      SUCCESS_CREATE: (n, size) => `Successfully created a new set of channel settings for ${size} channel${size !== 1 ? "s" : ""}: **${n}**.`,
      NOTHING_PROVIDED: "Please provide the name of a set of channel settings.",
      NOTHING_MODIFIED: "Please provide edits to make.",
      MODIFIED_NAME: n => `changed the name to **${n}**`,
      MODIFIED_CHANNELS: n => `changed the channels that these channel settings apply for to ${n} channel${n !== 1 ? "s" : ""}`,
      MODIFIED: modifications => `Successfully ${modifications.join(" and ")}.`,
      SUCCESS_DELETE: n => `Successfully deleted **${n}**.`
    },
    SETTINGS: {
      DESCRIPTION: "View the server/channel's settings, or view info about a specific setting.",
      USAGE: "settings ([channelSettings]) ([setting])",
      SETTINGS: "Settings",
      CHANNEL_SETTINGS: "Channel Settings",
      MAIN: "Main Settings",
      FILTERING: "Filtering",
      CUSTOMISATION: "Customisation",
      EVENTS: "Events",
      DOWNVOTING: "Downvoting",
      AUTO_STAR: "Auto Starring",
      MISCELLANEOUS: "Miscellaneous",
      STARS: "Stars",
      REQUIREMENTS: "Requirements",
      COLORS: "Colours",
      EMBED_FOOTER: prefix => `To view info about a specific setting, run ${prefix}settings <setting>`,
      INVALID_SETTING: s => `**${s}** was not a valid setting.`,
      INVALID_CHANNEL_SETTING: s => `**${s}** is not a valid setting for channels, it is only available as a server setting.`,
      INVALID_GUILD_SETTING: s => `**${s}** is not a valid setting for servers, it is only available as a channel setting.`,
      EMBED_DESCRIPTION: (lock, name, desc) => `${lock} **Setting**: ${name}\n${desc}`,
      DATA: "Data",
      VALUE: "Value",
      DEFAULT: "Default",
      PERMISSION: "Permission",
      SETTING_ALIASES: "Aliases",
      NONE: "None",
      CAN_CHANGE: (prefix, name, sub, value) => `You can change this setting with \`${prefix}changesetting ${name}${sub && ` ${sub}`} <${value.includes("/") ? value : `[${value}]`}>\`.`,
      MISSING_PERMISSIONS: p => `You need to have the ${p} permissions to change settings.`,
      CANT_CHANGE: reason => `You cannot change this setting: ${reason}`,
      USE_ALIASES: "You can also use any of these to change/view the setting."
    },
    SETUP: {
      DESCRIPTION: "Set up the bot in a server or channel by walking you through basic settings.",
      USAGE: "setup ([channel])",
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
      LANGUAGE: "Note that not all languages are completed, English and Spanish are the only ones completed.",
      REQUIRED: s => `Currently, if ${s.required} different people star a message, it will then be posted to the starboard.`,
      REQUIRED_TO_REMOVE: s => `Currently, if a message in the starboard drops below ${s.requiredToRemove} stars, it will then be removed from the starboard.`,
      EMOJIS: "This is the emoji users must react with to get a message on the starboard. You can also react to this message with the emoji you want.",
      FILTER_BOTS: "If you want bots to reach the starboard, don't enable this.",
      VISIBLE: "If you star personal/private stuff, you should definitely disable this. If this is enabled, a 🌍 will appear on starred messages that have been found in the explore command, followed by the number of times it was found.",
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
      RESULT: (b, p, c, v) => `${
        b
          ? `Successfully updated the settings for this ${c ? "channel" : "server"}`
          : `The settings for this ${c ? "channel" : "server"} have not been updated`
      }. If you want to change more settings, you can view them all with ${p}settings${
        v ? "" : `, and if you want to change the emoji, you must vote for the bot first and then either run this command again or run \`${p}changesetting emoji <[emoji]>\``
      }.`
    },
    MESSAGEINFO: {
      DESCRIPTION: "View info about a starred message.",
      USAGE: "messageinfo <[messageID]>",
      NO_MESSAGE_ID: "Please provide a message ID.",
      NOT_FOUND: "I could not find a starred message from your input.",
      STARRED_MESSAGE_INFO: "Starred Message Info",

      CONTEXT: "Context",
      AUTHOR: "Author",
      CHANNEL: "Channel",
      STARBOARD: "Starboard",
      STARRED_AT: "Starred At",

      STATS: "Stats",
      STARS: "Stars",
      UPVOTES: "Upvotes",
      DOWNVOTES: "Downvotes",
      GLOBAL: "Global Points",

      OTHER: "Other",
      DELETED: "Message Deleted",
      AT_DATE: d => `(at ${d})`,
      SAVED: "Message Saved",
      WILL_DELETE: d => `(will delete in ${d})`,
      ON_STARBOARD: "On Starboard",
      ON_STARBOARD_BEFORE: "On Starboard Before",
      ATTRIBUTES: "Attributes",
      NONE: "None",

      LINKS: "Links",
      MESSAGE: "Message",
      CONVERSATION: "Conversation",
      STARBOARD_MESSAGE: "Starboard Message"
    },
    MIGRATE: {
      DESCRIPTION: "Scan up to the last 1000 messages in the starboard for posts by other starboard bots and convert them to starred messages for this bot. You can optionally provide an ID for starboard to scan before or after.",
      USAGE: "migrate ([starboard]) ([limit]) --after <[messageID]> --before <[messageID]>", // these usages are getting too long :(
      NO_STARBOARD: "There are no starboards set for this server.",
      // NOT_STARBOARD: "That channel is not a starboard channel.",
      MISSING_PERMISSIONS: sb => `I do not have permission to delete messages in ${sb}. Note that I will not delete a message until after it has successfully been migrated.`,
      NOTHING_TO_MIGRATE: (sb, bots) => `I could not find any messages to migrate in ${sb}. Currently, I can only migrate starboard messages by <@${bots.join(">, <@")}>.`,
      MIGRATE: "Migrate",
      CONFIRMATION_EMBED: (n, bots, c, before, after) => `I've found ${n} messages${before ? ` before ${before}${after ? " and" : ""}` : ""}${after ? ` after ${after}` : ""} by <@${bots.join(">, <@")}> in ${c} that could be starred messages. Do you want me to continue?
      I will attempt to turn these messages into starred messages for me, and post them all to the starboard. As I go, I will delete the messages I have successfully replaced, or ones that already exist as starred messages.
      • Starboard messages for messages that are deleted can not be migrated and will be ignored.
      • Starboard messages for messages sent in a channel that does not have a starboard will be ignored.
      Say **yes** to continue.`.stripIndents(),
      ETA: t => `ETA: about ${t}`,
      CANCELLED: "Cancelled the migrating of the starboard.",
      ALREADY_MIGRATING: "It seems this server is currently already migrating messages.",
      STATUS: (n, total, sb, typing) => `${typing} Migrating messages from ${sb} - ${n}/${total} \`[${"#".repeat((n / total) * 10).padEnd(10, " ")}]\``,
      SUCCESS: n => `Successfully migrated ${n} messages.`
    },
    EXPLORE: {
      DESCRIPTION: "Bring up a random starred message from a user, your server or from any server! For a message to be brought up from any server, it has to have 5+ stars and the server has to have the **Visible** setting enabled.",
      USAGE: "explore ([stars]) (me/user/server/global) ([user])",
      NOT_FOUND: "No visible starred messages have been found. Messages need to have 5+ stars to show up, so go on and star any funny messages!",
      NOT_FOUND_STARS: stars => `No visible starred messages with ${stars}+ stars have been found. Try searching for a smaller amount.`,
      TYPE_NOT_FOUND: (stars, type) => `No messages ${stars ? `with ${stars}+ stars ` : ""}have been found from ${type}.`,
      COULD_NOT_FETCH: id => `I couldn't resolve a starred message from a random entry with ID \`${id}\``,
      THIS_SERVER: "this server",
      THIS_USER: "this user",
      YOU: "you"
    },
    LEADERBOARD: {
      DESCRIPTION: "Show a leaderboard for people with the most stats. You can input a user to jump to their position on the leaderboard, or a channel to filter stats for starred messages only in that channel.",
      USAGE: "leaderboard (messages/stars/starboarded/global/trashed/downvotes/channels/servers/reset) ([page]) ([user]) ([channel]) --before <[date]> --after <[date]>",
      NO_LEADERBOARD: "The leaderboard is disabled for this server.",
      NOT_ON_LEADERBOARD: "Not on the leaderboard.",
      TITLE: title => `Leaderboard - ${title}`,
      STARS: c => `Total Stars ${c ? `in #${c}` : ""}`,
      STARBOARDED: c => `Times on Starboard ${c ? `in #${c}` : ""}`,
      TRASHED: c => `Messages Trashed ${c ? `in #${c}` : ""}`,
      DOWNVOTES: c => `Downvotes ${c ? `in #${c}` : ""}`,
      GLOBAL: c => `Global Points ${c ? `in #${c}` : ""}`,
      MOST_STARRED_MESSAGES: (c, u) => `Most Starred Messages${u ? ` by ${u}` : ""}${c ? ` in #${c}` : ""}`,
      CHANNELS: u => `${u ? `${u}'s ` : ""}Most Starred Channel`,
      SERVERS: "Servers",
      STARS_LINE: (medal, isYou, place, name, stars, star) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Stars: ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      STARBOARDED_LINE: (medal, isYou, place, name, times) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Times on Starboard: ${times.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      TRASHED_LINE: (medal, isYou, place, name, trashed) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Messages Trashed: ${trashed.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      DOWNVOTES_LINE: (medal, isYou, place, name, downvotes) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Downvotes: ${downvotes.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      GLOBAL_LINE: (medal, isYou, place, name, g) => `${isYou ? "**" : ""}${medal} ${place}: ${name} - Global Points: ${g.toLocaleString(LOCALE)}${isYou ? "**" : ""}`,
      CHANNEL_LEADERBOARD_LINE: (medal, isYou, place, channel, star, stars) =>
        `${isYou ? "**" : ""}${medal} ${place}: ${channel} - ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      MESSAGE_LEADERBOARD_LINE: (medal, isYou, place, messageID, name, url, star, stars) =>
        `${isYou ? "**" : ""}${medal} ${place}: ${isYou ? `[${messageID}](${url})` : `**[${messageID}](${url})**`}${name && ` by ${name}`} - ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      SERVER_LEADERBOARD_LINE: (isYou, medal, place, name, stars, star) =>
        `${isYou ? "**" : ""}${medal} ${place}: ${isYou ? name : `**${name}**`} - Stars: ${stars.toLocaleString(LOCALE)} ${star}${isYou ? "**" : ""}`,
      NOTHING_TO_DISPLAY: "Nothing to display.",
      EMBED_FOOTER: (user, place, page, totalPages) =>
        `${user ? `${user}'s` : "Your"} Place: ${place} | Page ${page}/${totalPages}`,

      ARE_YOU_SURE: "Are you sure?",
      CONFIRMATION_EMBED: `Are you sure you want to erase the leaderboard?
      Please note that this doesn't reset all leaderboards, just the server-wide **Stars**, **Global**, **Trashed** and **Times On Starboard** leaderboards.
      For other leaderboards such as the message leaderboard, you can use the --before or --after flags, e.g. \`--after 14/09/2021\`.
      Say **yes** to continue.`.stripIndents(),
      NOT_RESET: "Cancelled resetting the leaderboard.",
      SUCCESS_RESET: "Successfully reset the leaderboard."
    },
    HALLOFFAME: {
      DESCRIPTION: "Shows the server's Hall of Fame, or add/remove messages from it. You can also add messages by using the 🏆 quick action.",
      USAGE: "halloffame (add/remove/[page]) ([messageID])",
      TITLE: "Hall Of Fame",
      LINE: (id, url, name, stars, star) => `• **[${id}](${url})** by ${name} - ${star} ${stars.toLocaleString(LOCALE)}`,
      NOTHING: p => `Nothing to display.\nModerators can add a message to the hall of fame by using \`${p}halloffame add <[messageID]>\`, or using the 🏆 quick action.`,
      EMBED_DESCRIPTION: `This is the Hall of Fame, messages that "belong in a museum" - the best messages on the server. These messages were picked by various moderators, so appearing here is a great achievement. Here's the list:`,
      PAGE: (p, t) => `Page ${p}/${t}`,
      NOT_FOUND: "I couldn't find a starred message from your input.",
      ALREADY_ON: "That message is already on the Hall of Fame.",
      MAX: "You have hit the maximum of 100 messages on the Hall of Fame.",
      NOT_ON: "That message is not on the Hall of Fame.",
      ARE_YOU_SURE: "Are you sure?",
      CONFIRMATION_EMBED: "Are you sure you want to remove every message from the Hall of Fame?\nSay **yes** to continue.",
      CANCELLED: "Cancelled removing every message from the Hall of Fame.",
      SUCCESS_ADD: "Successfully added that message to the Hall of Fame.",
      SUCCESS_REMOVE: "Successfully removed that message from the Hall of Fame.",
      SUCCESS_REMOVE_ALL: "Successfully removed everything from the Hall of Fame."
    },
    STATS: {
      DESCRIPTION: "View stats about a user, or reset a user's stats.",
      USAGE: "stats ([user]) --reset",
      SUCCESS_RESET: u => `Successfully reset leaderboard stats for **${u}**. Note that only the first set of stats (Stars, Times On Starboard, Global Points etc) can be reset.`,
      STATS: u => `${u ? `${u}'s` : "Your"} Stats`,
      STARS: "Stars",
      STARBOARDED: "Times On Starboard",
      GLOBAL_POINTS: "Global Points",
      DOWNVOTES: "Downvotes",
      TRASHED: "Trashed",
      MESSAGES_STARRED: "Starred Messages",
      LOCKED: "Locked Messages",
      FROZEN: "Frozen Messages",
      CURRENTLY_TRASHED: "Messages Currently Trashed",
      ON_STARBOARD_BEFORE: "Messages On Starboard Before",
      AVG_STARS_PER_MESSAGE: "Average Stars Per Message",
      STARRED_CHANNEL: "Most Stars Earned In",
      MOST_STARRED: "Most Stars On A Message",
      PERCENT_LOCKED: "% Locked",
      PERCENT_FROZEN: "% Frozen",
      PERCENT_TRASHED: "% Trashed",
      STARRED_MESSAGES_BY_YOU: "% Of Starred Messages By You",
      CHANCE_ON_STARBOARD: "Chance On Starboard",
      WORLDWIDE: "Worldwide Stats",
      TOTAL_STARS: "Total Stars",
      HALL_OF_FAME: "Messages On Hall Of Fame",
      HALL_OF_FAME_BY_YOU: "Hall Of Fame Entries By You",
      NONE: "None"
    },
    FILTERS: {
      DESCRIPTION: "View, create or edit filters used to filter messages from being starred.",
      USAGE: "filters ([channelSettings]) (add/remove/list/edit) (content/attachments/age/[filterNumber]) (...[options]) --explain --options",
      MAX_FILTERS: c => `You have hit the maximum amount of filters allowed for this ${c ? "channel" : "server"}.`,
      SUCCESS_ADD: desc => `Successfully added a new filter${desc ? `:\n${desc}` : "."}`,
      NO_FILTERS: c => `There are no filters currently set for this ${c ? "channel" : "server"}.`,
      SUCCESS_EDIT: (n, desc) => `Successfully edited the ${n} filter${desc ? `:\n${desc}` : "."}`,
      SUCCESS_REMOVE: n => `Successfully removed the ${n} filter.`,
      SUCCESS_REMOVE_ALL: "Successfully removed all filters.",
      MAX_MIN: age => `The maximum${age && " age"} cannot be less than the minimum${age && " age"}.${age ? " (`olderThan` cannot be bigger than `newerThan`)" : ""}`,
      REGEX_SAME: "The regex/strings to match and not match cannot be the same.",
      MEDIA_REQUIRED_MAX: "You cannot make media required when the maximum attachments is 0.",
      REQUIRED_MAX: "Content cannot be required if the maximum characters is 0.",
      MIN_MAX_CONTENT: min => `The ${min ? "min" : "max"}imum character length cannot be greater than 4000.`,
      MIN_MAX_ATTACHMENTS: min => `The ${min ? "min" : "max"}imum amount of attachments cannot be greater than 50.`,
      MIN_MAX_AGE: min => `The ${min ? "min" : "max"}imum age cannot be greater than 5 years.`,
      AGE_RELATIVE: "An age filter cannot have relative time (x days x hours x minutes) and static time (a date, i.e. dd/mm/yyyy) simutaneously.",
      INVALID_REGEX: (t, e) => `An invalid regex was provided for **${t}**: ${e}`,
      REGEX_TOO_LONG: "That regex is too long.",
      AUTO_STAR_AGE: "The **AutoStar** option cannot be used for age filters.",
      FILTERS: "Filters",
      EMBED_DESCRIPTION: c => `${c ? `**Channel Settings**: ${c}\n` : ""}
      These are the filters for this ${c ? "channel" : "server"}. Messages cannot be starred if they don't pass all of these filters.
      If a message has been starred before filters were made, or forced to the starboard, they'll still be able to get more stars.`.stripIndents(),
      OPTIONS: (p, guide) => `The current types of filters are **Content**, **Attachments** and **Age**.
      The options available are:
      __**Content**__
      - Required yes/no
      - Minimum [number]
      - Maximum [number]
      - IsReply yes/no/none
      - Match [text/regex]
      - NotMatch [text/regex]
      - AutoStar yes/no/none
      
      __**Attachments**__
      - Required yes/no
      - Minimum [number]
      - Maximum [number]
      - MediaRequired yes/no
      - AutoStar yes/no/none
      
      __**Age**__
      - NewerThan [time]
      - OlderThan [time]
      
      To create a filter, run \`${p}filters add <content/attachments/age> <...[options]>\`
      
      **[Learn More](${guide})**`.stripIndents(),
      VIEW_OPTIONS: (p, ex, guide) => `You can view all the options for creating filters with \`${p}filters --options\`, or edit an existing filter with \`${p}filters edit <[number]> <...[options]>\`
      ${!ex ? `If you want an explanation for all your filters, run \`${p}filters --explain\`\n` : ""}
      **[Learn More](${guide})**`.stripIndents(),
      DESCRIBE: "In order for a message to be starred, it must:",
      REQUIRED_CONTENT: "have content",
      MIN_CONTENT: n => `have content greater than or equal to **${n}** characters`,
      MAX_CONTENT: n => `have content less than or equal to **${n}** characters`,
      IS_REPLY: is => `${is ? "" : "**not** "}be a reply`,
      MATCH_REGEX: (rgx, flags) => `match the regex \`/${rgx}/${flags}\``,
      INCLUDES: str => `include \`${str}\``,
      NOT_MATCH_REGEX: (rgx, flags) => `not match the regex \`/${rgx}/${flags}\``,
      NOT_INCLUDES: str => `not include \`${str}\``,
      REQUIRED_ATTACHMENT: "have at least **one** attachment/embed",
      MIN_ATTACHMENTS: n => `have no less than **${n}** attachments`,
      MAX_ATTACHMENTS: n => `have no more than **${n}** attachments`,
      MEDIA_REQUIRED: "have at least **one** image, video or other forms of media",
      MIN_AGE: t => `be older than \`${t}\``,
      SENT_BEFORE: t => `be sent before \`${t}\``,
      MAX_AGE: t => `be newer than \`${t}\``,
      SENT_AFTER: t => `be sent after \`${t}\``,
      APPLIES_TO: list => `This filter applies to ${list}`,
      DOES_NOT_APPLY_TO: list => `This filter does not apply to ${list}`,
      AUTO_STAR: b => `This filter ${b ? "applies only" : "doesn't apply"} to messages being automatically starred.`,
      NOT_SET: "Not set",
      REQUIRED_NAME: "Required",
      MIN_NAME: "Minimum",
      MAX_NAME: "Maximum",
      IS_REPLY_NAME: "Is Reply",
      MATCH_NAME: "Match Regex",
      INCLUDES_NAME: "Includes",
      NOT_MATCH_NAME: "Not Match Regex",
      NOT_INCLUDES_NAME: "Excludes",
      MEDIA_REQUIRED_NAME: "Media Required",
      MIN_AGE_NAME: "Older Than",
      AFTER_NAME: "Sent After",
      MAX_AGE_NAME: "Newer Than",
      BEFORE_NAME: "Sent Before",
      APPLIES_TO_NAME: "Applies To",
      DOES_NOT_APPLY_TO_NAME: "Does Not Apply To",
      AUTO_STAR_NAME: "Auto Starred Messages",
      NOONE: "no one",
      CONTENT: "Message Content Filter",
      ATTACHMENTS: "Message Attachments Filter",
      AGE: "Message Age Filter",
      FILTER_PAGE: (n, t) => `Filter ${n}/${t}`,
      PLEASE_INPUT: more => `Please input ${more ? "some more " : ""}options for this filter.`
    },
    DEBUG: {
      DESCRIPTION: "Debug and get reasons for why a message, messages in a specific channel, or all messages aren't being starred.",
      USAGE: "debug ([channel]) ([messageID]) --autoStar",
      DEBUG: "Debug",
      NO_STARBOARD: c => `There is currently no starboard channel set for this ${c ? "channel" : "server"}.`,
      NO_STARBOARDS: "There are no starboards set for this server.",
      MISSING_READ: c => `I cannot view ${c}, please enable the \`View Channel\` permission.`,
      MISSING_HISTORY: c => `I cannot read message history in ${c}, please enable the \`Read Message History\` permission.`,
      MISSING_EMBEDS: c => `I cannot send embeds in ${c}, please enable the \`Embed Links\` permission.`,
      MISSING_FILES: c => `I cannot attach files in ${c}, so attachments will not be attached to the starboard message and will instead be linked. Please enable the \`Attach Files\` permission if you want attachments.`,
      MESSAGE_NOT_EXISTS: (id, c) => `A message with ID \`${id}\` was not found in ${c}`,
      TRASHED: "This message is trashed.",
      FROZEN: "This message is frozen and cannot get or lose any more stars.",
      FILTER_BOTS: "Messages by bots cannot be starred because the **FilterBots** setting is enabled.",
      BLACKLISTED: roles => `The author of this message is blacklisted${roles && ` because they have the roles ${roles}`}.`,
      CHANNEL_BLACKLISTED: c => `${c || "The channel where this message was sent in"} is currently blacklisted.`,
      FILTER: (c, list) => `This message doesn't pass the ${list.length > 1 ? `${list.slice(0, -1).join(", ")} and ${list.slice(-1)} filters` : `${list} filter`} set for this ${c ? "channel" : "server"}.`,
      CONTENT_REQUIRED: "This message has no content but content is required.",
      CONTENT_MIN: (n, l) => `The length of this message needs to be ${n} characters or greater, it is currently ${l}.`,
      CONTENT_MAX: (n, l) => `The length of this message exceeds the limit of ${n} characters. (${l})`,
      IS_REPLY: b => `This message cannot be starred because it ${b ? "isn't" : "is"} a reply.`,
      MATCH_REGEX: r => `This message doesn't match the regex${r && ` \`${r}\``}.`,
      CONTENT_INCLUDES: str => `This message does not contain${str ? `\`${str}\`` : "a phrase"} and therefor cannot be starred.`,
      NOT_MATCH_REGEX: r => `This message matches the regex${r && ` \`${r}\``} so it cannot be starred.`,
      CONTENT_EXCLUDES: str => `This message contains${str ? `\`${str}\`` : "a phrase"} and therefor cannot be starred.`,
      ATTACHMENT_REQUIRED: "An attachment or embed is required and this message has none.",
      ATTACHMENT_MIN: (m, n) => `This message needs to have ${m} or more attachments/embeds, it currently has ${n}.`,
      ATTACHMENT_MAX: (m, n) => `This message needs to have less than ${m + 1} attachments/embeds, it currently has ${n}.`,
      MEDIA_REQUIRED: "This message does not have any media but media is required. (Images, GIFs, video, etc)",
      OLDER_THAN: (t, curr) => `This message needs to be older than ${t} to be starred, it is currently ${curr} old.`,
      SENT_BEFORE: (t, sent) => `This message needs to have been sent before ${t} to be starred, it was sent on ${sent}.`,
      NEWER_THAN: (t, curr) => `This message needs to be newer than ${t} to be starred, it is currently ${curr} old.`,
      SENT_AFTER: (t, sent) => `This message needs to have been sent after ${t} to be starred, it was sent on ${sent}.`,
      REQUIRED_STARS: (r, s, emojis) => `This message needs ${r} stars (${emojis}) to reach the starboard, right now it only has ${s}.`,
      CHANNEL_SETTINGS: "Channel Settings",
      STARBOARD: "Starboard",
      REQUIRED: "Required",
      EMOJI: "Emoji",
      STAR_SELF: "StarSelf",
      BLACKLISTED_ITEMS: "Blacklisted Items",
      FILTERS: "Filters",
      NOT_SET: "not set",
      NOTHING_WRONG: (m, c, as) => `There seems to be nothing wrong and ${m ? "this message" : "all messages"} from ${c || "channels I can see"} should be able to be ${as ? "auto " : ""}starred as normal. ${c ? "" : "If you want, you can input a channel to debug that instead."}`
    },
    BOTINFO: {
      DESCRIPTION: "View info about the bot.",
      USAGE: "botinfo (bot/star)",
      BOT_STATS: "Bot Stats",
      STARRED_STATS: "Starred Message Stats",
      SYSTEM_STATS: "System Stats",
      SERVERS: "Servers",
      USERS: "Users",
      MESSAGES: "Messages",
      CHANNELS: "Channels",
      COMMANDS_RUN: "Commands Run",
      PING: "Ping",
      UPTIME: "Uptime",
      CREATED_AT: "Bot Creation",
      JOINED_AT: "Joined the Server",
      COMMANDS: "Commands",
      VERSION: "Version",
      STARRED_MESSAGES: "Starred Messages",
      LIFETIME_STARRED_MESSAGES: "Lifetime Starred Messages",
      MOST_STARS: "Most Stars on a Message",
      TOTAL_STARS: "Total Stars",
      UPVOTES: "Recorded Stars",
      GLOBAL: "Global Points Recorded",
      TRASHED: "Messages Trashed",
      POSTED_MESSAGES: "Messages Posted",
      EDITED_MESSAGES: "Messages Edited",
      REWARD_ROLES: "Reward Roles Given",
      LOCKED: "Messages Locked",
      FROZEN: "Messages Frozen",
      SAVED: "Messages Sent To DMs",
      QUICK_ACTIONS: "QuickActions Performed",
      CPU: "CPU",
      DISK_USAGE: "Disk Usage",
      MEMORY_USAGE: "Memory Usage",
      PROCESS_UPTIME: "Process Uptime",
      PLATFORM: "Platform",
      LIBRARY: "Library"
    },
    SHOW: {
      DESCRIPTION: "Preview any starred message, or the most starred message.",
      USAGE: "show <moststarred/[messageID]>",
      NOT_FOUND: "I couldn't find a starred message from your input.",
      STARRED_MESSAGE: "Starred Message",
      COULD_NOT_OBTAIN: "I couldn't obtain this starred message, this is most likely because both messages were deleted, the channel was deleted or I can no longer see the channel. But, here's some info about it anyway:",
      STARS: "Stars",
      GLOBAL: "Global Points",
      AUTHOR: "Author",
      CHANNEL: "Channel"
    },
    SHARDS: {
      DESCRIPTION: "Shard info",
      USAGE: "shards"
    },
    SUGGEST: {
      DESCRIPTION: "Suggest anything you think this bot should have/change.",
      USAGE: "suggest <[suggestion]>",
      NEED_VOTE: (vote, support) => `In order to reduce spam, you have to **[vote for the bot](${vote})** to make suggestions outside the **[support server](${support})**.`,
      NO_INPUT: "Please provide a suggestion to make.",
      ATTACHMENTS_NSFW: "Attachments cannot be used for suggestions when in a NSFW channel.",
      SUGGESTION: "Suggestion",
      THANK_YOU: link => `Thank you so much for your suggestion, these really help the development of this bot a lot. You can view your suggestion **[here](${link})**, where people vote on it.`
    },
    GENERATE: {
      DESCRIPTION: "Generate a premium code",
      USAGE: "generate ([code])",
    },
    REDEEM: {
      DESCRIPTION: "Redeem a premium code",
      USAGE: "redeem <[code]>",
      SUPPORT: "Please redeem Starboard Premium codes in the server you actually want Starboard Premium in.",
      CODE_USED: "This code has already been redeemed.",
      CODE_INVALID: "Sorry, that was not a valid code.",
      ALREADY_PREMIUM: "This server already has lifetime premium, so a code cannot be redeemed.",
      EXTRA_PREMIUM: months => `That code has been successfully redeemed. This server now has Starboard Premium for an extra month, for a total of ${months} months.`,
      SUCCESS_PREMIUM: expires => `That code has been successfully redeemed. This server now has Starboard Premium${expires ? " for a month" : ""}!`,
    },
    PREMIUM: {
      DESCRIPTION: "View info about premium, or your premium status.",
      USAGE: "premium",
      PREMIUM: "Starboard Premium",
      HAVE_PREMIUM: n => `You currently have premium active on ${n} servers.`,
      SINCE: "Since",
      EXPIRES: "Expires In",
      NEVER: "Never",
      DONATED: "Thanks for donating and supporting the development of Starboard!",
      PREMIUM_INFO: idonated => `
      __By **donating**, you get (permanently):__
      - A Donator role and donator-only chat in our support server.
      - A ${idonated} badge that appears on all your starboard messages.

      __By getting **Starboard Premium**, you can:__
      - Claim a Premium role in our support server.
      *And in one server of your choice...*
      - Have up to 5 emojis.
      - Have up to 25 sets of channel settings.
      - Have the ability to **downvote** starboard messages.
      - Have all command responses that have embeds to be the colour set for starboard messages.
      `.stripIndents()
    },
    LANGUAGES: {
      DESCRIPTION: "View a list of all languages, or set the language for the server.",
      USAGE: "languages ([language])",
      LANGUAGES: "Languages",
      EMBED_DESCRIPTION: (l, p) => `You now have the option to set the language for the bot! The bot will respond with all commands in that language, but commands still have to be inputted in English.
      Please note that English is the only language that will always be 100% complete, so if a statement cannot be found in your language, it'll be sent in English by default.
      If you want, you can help add more languages at https://github.com/TheNoob27/starboard-languages, it'd help a lot.

      The current list of available languages is:
      - ${Object.values(module.exports.LANGUAGES).join("\n- ")}
      
      The language that is currently being used is **${l}**. You can set the language with \`${p}languages <[language]>\``.stripIndents(),
      INVALID_LANGUAGE: l => `${l ? `**${l}**` : "That"} was not a valid language.`,
      SUCCESS: l => `Successfully set the language of the server to **${l}**.`
    },
    QUICKACTIONS: {
      DESCRIPTION: "View more info about Quick Actions.",
      USAGE: "quickactions",
      QUICK_ACTIONS: "Quick Actions",
      EMBED_DESCRIPTION: (enabled, prefix) => `**Enabled**: ${enabled}

      QuickActions allow users to quickly perform actions on starboard messages, such as locking, freezing, deleting or saving, by reacting on the starboard message with specific emojis.
      __Here's the list of QuickActions for moderators:__
      🗑️: Trash the message
      🔒: Lock the message
      🔓: Unlock the message
      🧊/❄️: Freeze the message
      🔥: Unfreeze the message
      🔄/🔁: Recount the stars of the message
      🏆/🏅: Add to Hall of Fame
      ❌/🇽: Delete the starboard message
      📌/📍: Force to the starboard

      __And for everyone:__
      📥/💾: Save the starred message to DMs
      ❌/🇽: Delete a starboard message belonging to them
      
      **Note**: The 📌/📍 force QuickAction has to be used on the original message.
      **Tip**: If you don't want users to be using the QuickActions for everyone, you can disable their \`Add Reactions\` permission.

      To enable/disable QuickActions, run \`${prefix}changesetting quickActions <true/false/yes/no>\``.stripIndents()
    },
    SAVE: {
      DESCRIPTION: "Save a starred message or a normal message to your dms.",
      USAGE: "save ([channel]) <[messageID]>",
      RECENTLY_SAVED: "This message has already been saved recently.",
      DMS_CLOSED: "I cannot send you this message because your DMs are closed.",
      SUCCESS: "That message has successfully been sent to your DMs.",
      FAIL: "Something went wrong when sending you that message.",
      NO_MESSAGE_ID: "Please provide a message ID."
    }
  }, // might alphabetically order the commands one day

  // languages
  LANGUAGES: {
    EN_GB: "English (GB)",
    EN_US: "English (US)",
    ES_ES: "Spanish",
    FUWWY: "Fuwwy",
  }
}
