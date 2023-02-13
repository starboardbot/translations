// @ts-check
module.exports = {
  name: "English (GB)",
  real: true,
  HELLO_WORLD: "Hello world!",

  YES: "Yes",
  NO: "No",
  DELETE: "Delete",
  CANCEL: "Cancel",
  NONE: "None",
  NOT_SET: "Not set",
  UNKNOWN: "Unknown",
  UNKNOWN_TAG: "Unknown#0000",

  ORIGINAL_MESSAGE: "Original Message",
  REPLYING_TO_USER: "Replying to {user}",
  REFERENCED_MESSAGE: "Referenced Message",
  SENT_A_STICKER: "Sent a sticker: {name}",
  FROM_SERVER: "From {server}",
  EXTRA_IMAGES: "+{number} images",

  WARN_LINK_UNKNOWN_LINK: "Sorry, but it looks like I've misplaced the link you're looking for.",
  WARN_LINK_PROMPT:
    "This link leads to a file with a `{ext}` extension. These type of files can be malicious, or contain malicious content, especially because you don't know who it's from. Are you sure you want to open this link?",
  WARN_LINK_CONFIRM: "Yes, open this link.",

  // eg "Google Image 1", "Google Image", "Image 1", "Image"
  STARBOARD_MESSAGE_IMAGE:
    "{provider, select, null {} other {{provider} }}Image{number, select, 0 {} other { {number}}}",
  STARBOARD_MESSAGE_GIF_VIDEO:
    "{provider, select, null {} other {{provider} }}GIF Video{number, select, 0 {} other { {number}}}",
  STARBOARD_MESSAGE_VIDEO:
    "{provider, select, null {} other {{provider} }}Video{number, select, 0 {} other { {number}}}",
  STARBOARD_MESSAGE_MEDIA:
    "{provider, select, null {} other {{provider} }}Media{number, select, 0 {} other { {number}}}",
  STARBOARD_MESSAGE_FILE: "{provider, select, null {} other {{provider} }}File{number, select, 0 {} other { {number}}}",
  STARBOARD_MESSAGE_LINK: "{provider, select, null {} other {{provider} }}Link{number, select, 0 {} other { {number}}}",
  STARBOARD_MESSAGE_TWEET: "Tweet from {author}",
  STARBOARD_MESSAGE_SPOILER: "(SPOILER) {content}",
  STARBOARD_MESSAGE_NSFW: "(NSFW) {content}",

  TRASH_EMBED: `This message has been trashed/removed by a moderator.
  {reason, select, null {} other {**Reason**: {reason}\n}}
  If my calculations are correct, the first few people to star this message should've been:
  {userList}

  Feel free to delete this message after punishing these people if you need to.
  This message can no longer be starred, ever. However, if you want this message to get starred again, you can remove it from the trash with \`{removeTrashCommand}\``,

  SELECT_A_USER: "Select a User",
  FIND_USER_MORE_SPECIFIC: "Please be more specific, I found {amount} users matching your input.",
  FIND_USER_PROMPT: "I found {amount, number} users matching your input - please select the user you're looking for.",
  ARE_YOU_SURE: "Are you sure?",
  ARE_YOU_SURE_PROMPT: `Are you sure you want to perform this action?`,
  ARE_YOU_SURE_PROMPT_DESTRUCTIVE: `Are you sure you want to perform this action? This action cannot be reversed.`,

  GET_STARTED: "Get Started",
  GET_STARTED_EMBED: `I've detected a channel named \`#starboard\`, so this is now where all starred messages will go. You can change this later.
  Currently in this server, messages need to have {required, number} star reactions to get posted in this channel, which can be changed.
  You can set the server up properly with \`{prefix}setup\`, this will walk you through all the settings.
  And most importantly, have fun!`,
  GET_STARTED_FOOTER: "Thank you for using Starboard!",

  MESSAGE_EVENT_CANT_SPEAK:
    "I cannot speak in that channel! Please get a moderator to change my permissions for that channel, or try using me in a different channel.",
  PREFIX_INFO_NO_PREFIXES: "I don't have any prefixes set for this server, but you can still use my mention as one.",
  PREFIX_INFO: `My prefix for this server {prefixCount, plural, =1 {is} other {is any one of}} {prefixes}, but my mention also works as a prefix.`,
  NEED_VOTE: `To {feat, select,
    STAR_REQ {change the requirements for different star emojis to appear}
    EMOJIS {change the emojis}
    AUTO_STAR {enable auto starring}
    REWARD_ROLES {customise reward roles}
  }, you need to **[vote for the bot]({voteLink})**. Once you have voted, you have to wait a few minutes for me to recieve your vote.`,
  NEED_PREMIUM: `To {feat, select,
    DOWNVOTE {downvote starred messages}
    MULTIPLE_EMOJIS {have multiple emojis at once}
    CHANNEL_SETTINGS {have more than 10 sets of channel settings}
  }, your server needs to be a **[Premium Server]({patreonLink})**.`,

  COOLDOWN_MESSAGE: "You're using this command too frequently! Please wait {time} before using it again.",
  COOLDOWN_WAIT_SUGGESTIONS: [
    "**[join the support server]({support})** and have fun talking to us, participate in polls which heavily determine what gets added to the bot, possible giveaways and much much more",
    "**[vote for the bot]({vote})** {hasVoted, select, true {for extra coolness points} other {to have this cooldown sawed in half}}",
    "**[become a patron]({patreonLink})** and unlock some sweet donator only features, and a donator only role in our discord server",
    "check out Starboard's **[Github Issues page]({guide})** where you can post bugs/suggestions instead of using the commands",
  ],
  OR: "{a} or {b}",
  HELP: "Help",
  COMMAND: "Command",
  ALIASES: "Aliases",
  DESCRIPTION: "Description",
  USAGE: "Usage",
  EXAMPLE: "Example",
  EXAMPLES: "Examples",
  EXTRA: "Extra",
  CATEGORY: "Category",
  COOLDOWN: "Cooldown",
  ENABLED: "Enabled",
  REQUIRED_BOT_PERMISSIONS: "Required Bot Permissions",
  REQUIRED_USER_PERMISSIONS: "Required User Permissions",
  NOTICES: "Notices",
  COMMAND_NOTICE_SOMETHING_WRONG: "Something is currently wrong with this command: **{errorMessage}**.",
  COMMAND_NOTICE_DISABLED: "This command is disabled: **{disableMessage}**",
  COMMAND_HELP_ARGS_INFO: "() = optional arguments, <> = required arguments, [] = a placeholder, -- = optional flag",
  COMMAND_DISABLED: "Command Disabled",
  COMMAND_DISABLED_EMBED: `This command is currently disabled. {disableMessage, select
    null {It was probably disabled because something wasn't functioning properly, otherwise another reason.}
    other {The reason for that is: **{disableMessage}**.}
  }
  Please try again later, or **[join the support server]({supportLink})** for more info.`,
  AN_ERROR_OCCURRED: "An Error Occurred!",
  COMMAND_SOMETHING_WENT_WRONG: `Something went wrong while trying to run this command! This shouldn't happen. {errorMessage, select,
    null {If this persists, please **[join the support server]({supportLink})** and explain your problem there.}
    other {\nNote: **{errorMessage}**}
  }`,
  ERROR: "Error",
  FAILED_TO_RUN_COMMAND: "Failed to run {command}.",
  COMMAND_INVALID_ARGS_ENUM:
    "The argument **{name}**{provided, select, null {} other { (provided: `{provided}`)}} has to be one of {enum}.",
  COMMAND_INVALID_ARGS_REGEX:
    "The argument **{name}**{provided, select, null {} other { (provided: `{provided}`)}} has to match the regex `{regex}`.",
  COMMAND_INVALID_ARGS_TYPE:
    "The argument **{name}**{provided, select, null {} other { (provided: `{provided}`)}} has to be a `{type}`.",
  COMMAND_INVALID_ARGS_MISSING: "The required argument **{name}** is missing.",
  // todo: COMMAND_INVALID_ARGS_PARSE
  COMMAND_INVALID_ARGS_RANGE:
    "The provided argument `{raw}` cannot be {greater, select, true {greater} other {less}} than `{boundary, number}`.",
  INVALID_ARGUMENTS: "Invalid Arguments",
  ARGUMENTS_PROVIDED_NOT_VALID: "The arguments provided were not valid:",
  RUN_COMMAND_MISSING_PERMISSIONS_USER: "You are missing the {permissions} permissions, required to run this command.",
  RUN_COMMAND_MISSING_PERMISSIONS_BOT:
    "The bot is missing the {permissions} permissions, required to run this command.",
  NO_CHANNEL_SETTINGS_FOR_ARG:
    "There are no channel settings specifically for {channel, select, null {this channel} other {channel}}.",

  USERS: "Users",
  ROLE: "Role",
  ROLES: "Roles",
  CHANNELS: "Channels",
  THREADS: "Threads",
  BLACKLIST: "Blacklist",
  WHITELIST: "Whitelist",
  STARBOARD: "Starboard",
  AUTO_STAR: "AutoStar",
  SETTINGS: "Settings",
  SETTING: "Setting",
  CHANNEL_SETTINGS: "Channel Settings",
  MAIN_SETTINGS: "Main Settings",
  FILTERING: "Filtering",
  CUSTOMISATION: "Customisation",
  EVENTS: "Events",
  DOWNVOTING: "Downvoting",
  AUTO_STARRING: "Auto Starring",
  MISCELLANEOUS: "Miscellaneous",
  STARS: "Stars",
  REQUIREMENTS: "Requirements",
  COLORS: "Colours",
  DATA: "Data",
  VALUE: "Value",
  DEFAULT: "Default",
  PERMISSION: "Permission",
  SETUP: "Setup",
  CONTEXT: "Context",
  AUTHOR: "Author",
  CHANNEL: "Channel",
  STARRED_AT: "Starred At",
  STATS: "Stats",
  UPVOTES: "Upvotes",
  DOWNVOTES: "Downvotes",
  GLOBAL_POINTS: "Global Points",
  OTHER: "Other",
  MESSAGE_DELETED: "Message Deleted",
  MESSAGE_SAVED: "Message Saved",
  ON_STARBOARD: "On Starboard",
  ON_STARBOARD_BEFORE: "On Starboard Before",
  ATTRIBUTES: "Attributes",
  LINKS: "Links",
  MESSAGE: "Message",
  CONVERSATION: "Conversation",
  STARBOARD_MESSAGE: "Starboard Message",
  MIGRATE: "Migrate",
  SERVERS: "Servers",
  STARBOARDED: "Times On Starboard", // ?
  TRASHED: "Trashed",
  STARRED_MESSAGES: "Starred Messages",
  LOCKED_MESSAGES: "Locked Messages",
  FROZEN_MESSAGES: "Frozen Messages",
  MESSAGES_CURRENTLY_TRASHED: "Messages Currently Trashed",
  MESSAGES_ON_STARBOARD_BEFORE: "Messages On Starboard Before",
  AVG_STARS_PER_MESSAGE: "Average Stars Per Message",
  MOST_STARS_EARNED_IN: "Most Stars Earned In",
  MOST_STARS_ON_MESSAGE: "Most Stars on a Message",
  PERCENT_LOCKED: "% Locked",
  PERCENT_FROZEN: "% Frozen",
  PERCENT_TRASHED: "% Trashed",
  PERCENT_STARRED_MESSAGES_BY_YOU: "% Of Starred Messages By You",
  CHANCE_ON_STARBOARD: "Chance On Starboard",
  WORLDWIDE_STATS: "Worldwide Stats",
  TOTAL_STARS: "Total Stars",
  MESSAGES_ON_HALL_OF_FAME: "Messages On Hall Of Fame",
  HALL_OF_FAME_ENTRIES_BY_YOU: "Hall Of Fame Entries By You",
  FILTERS: "Filters",
  REQUIRED: "Required",
  MIN: "Minimum",
  MAX: "Maximum",
  IS_REPLY: "Is Reply",
  MATCH_REGEX: "Match Regex",
  INCLUDES: "Includes",
  NOT_MATCH_REGEX: "Not Match Regex",
  EXCLUDES: "Excludes",
  MEDIA_REQUIRED: "Media Required",
  OLDER_THAN: "Older Than",
  SENT_AFTER: "Sent After",
  NEWER_THAN: "Newer Than",
  SENT_BEFORE: "Sent Before",
  APPLIES_TO: "Applies To",
  DOES_NOT_APPLY_TO: "Does Not Apply To",
  AUTO_STARRED_MESSAGES: "Auto Starred Messages",
  NO_ONE: "no one",
  MESSAGE_CONTENT_FILTER: "Message Content Filter",
  MESSAGE_ATTACHMENTS_FILTER: "Message Attachments Filter",
  MESSAGE_AGE_FILTER: "Message Age Filter",
  DEBUG: "Debug",
  EMOJI: "Emoji",
  STAR_SELF: "StarSelf",
  BLACKLISTED_ITEMS: "Blacklisted Items",
  BOT_STATS: "Bot Stats",
  STARRED_MESSAGE_STATS: "Starred Message Stats",
  SYSTEM_STATS: "System Stats",
  MESSAGES: "Messages",
  COMMANDS_RUN: "Commands Run",
  PING: "Ping",
  UPTIME: "Uptime",
  BOT_CREATION: "Bot Creation",
  JOINED_THE_SERVER: "Joined the Server",
  COMMANDS_WORD: "Commands",
  VERSION: "Version",
  LIFETIME_STARRED_MESSAGES: "Lifetime Starred Messages",
  GLOBAL_POINTS_RECORDED: "Global Points Recorded",
  MESSAGES_POSTED: "Messages Posted",
  MESSAGES_EDITED: "Messages Edited",
  REWARD_ROLES_GIVEN: "Reward Roles Given",
  MESSAGES_LOCKED: "Messages Locked",
  MESSAGES_FROZEN: "Messages Frozen",
  MESSAGES_SENT_TO_DMS: "Messages Sent To DMs",
  QUICK_ACTIONS_PERFORMED: "Quick Actions Performed",
  CPU: "CPU",
  DISK_USAGE: "Disk Usage",
  MEMORY_USAGE: "Memory Usage",
  PROCESS_UPTIME: "Process Uptime",
  PLATFORM: "Platform",
  LIBRARY: "Library",
  SUGGESTION: "Suggestion",
  SINCE: "Since",
  EXPIRES_IN: "Expires In",
  NEVER: "Never",
  LANGUAGES: "Languages",
  STARBOARD_PREMIUM: "Starboard Premium",

  NOTHING_TO_DISPLAY: "Nothing to display.",

  COMMANDS: {
    BLACKLIST: {
      DESCRIPTION: "View info about blacklisted users, roles or channels, or modify the list.",
      USAGE: "blacklist (add/remove) ([user/role/channel]) --channel ([channelSettings])",
    },
    BOTINFO: {
      DESCRIPTION: "View info about the bot.",
      USAGE: "botinfo (bot/star)",
    },
    CHANGESETTING: {
      DESCRIPTION:
        "Change a setting for the current channel or the server, such as the required amount of stars needed to reach the starboard. All the settings are in the settings command, so you can view your options there.",
      USAGE: "changesetting ([channel]) <[setting]> <[value]>",
    },
    CHANNELSETTINGS: {
      DESCRIPTION: "View info about Channel Settings, or create/clone sets of channel settings.",
      USAGE: "channelsettings (list/create/edit/delete) ([name]) (...[channels]) --channel ([channelSettings])",
    },
    DEBUG: {
      DESCRIPTION:
        "Debug and get reasons for why a message, messages in a specific channel, or all messages aren't being starred.",
      USAGE: "debug ([channel]) ([messageID]) --autoStar",
    },
    EVAL: {
      DESCRIPTION: "Evaluates a bit of code.",
      USAGE: "eval <code>",
    },
    EXPLORE: {
      DESCRIPTION:
        "Bring up a random starred message from a user, your server or from any server! For a message to be brought up from any server, it has to have 5+ stars and the server has to have the **Visible** setting enabled.",
      USAGE: "explore ([stars]) (me/user/server/global) ([user])",
    },
    FILTERS: {
      DESCRIPTION: "View, create or edit filters used to filter messages from being starred.",
      USAGE:
        "filters ([channelSettings]) (add/remove/list/edit) (content/attachments/age/[filterNumber]) (...[options]) --explain --options",
    },
    FORCE: {
      DESCRIPTION: "Force or refresh a message on the starboard.",
      USAGE: "force ([channel]) <[messageID]>",
    },
    FREEZE: {
      DESCRIPTION: "Freezes a starred message, so no-one can add or remove stars.",
      USAGE: "freeze <[messageID]>",
    },
    GENERATE: { // todo: may delete translations for owner commands, useless
      DESCRIPTION: "Generate a premium code",
      USAGE: "generate ([code])",
    },
    HALLOFFAME: {
      DESCRIPTION:
        "Shows the server's Hall of Fame, or add/remove messages from it. You can also add messages by using the 🏆 quick action.",
      USAGE: "halloffame (add/remove/[page]) ([messageID])",
    },
    HELP: {
      DESCRIPTION: "View all the commands the bot has to offer, or view info about a specific command.",
      USAGE: "help ([command])",
    },
    LANGUAGES: {
      DESCRIPTION: "View a list of all languages, or set the language for the server.",
      USAGE: "languages ([language])",
    },
    LEADERBOARD: {
      DESCRIPTION:
        "Show a leaderboard for people with the most stats. You can input a user to jump to their position on the leaderboard, or a channel to filter stats for starred messages only in that channel.",
      USAGE:
        "leaderboard (messages/stars/starboarded/global/trashed/downvotes/channels/servers/reset) ([page]) ([user]) ([channel]) --before <[date]> --after <[date]>",
    },
    LINKS: {
      DESCRIPTION: "Get the links related to the bot, such as the bot's invite link.",
      USAGE: "links",
    },
    LOCK: {
      DESCRIPTION: "Locks a starred message to the starboard, so it'll stay there even if it reaches 0 stars.",
      USAGE: "lock <[messageID]>",
    },
    MESSAGEINFO: {
      DESCRIPTION: "View info about a starred message.",
      USAGE: "messageinfo <[messageID]>",
    },
    MIGRATE: {
      DESCRIPTION:
        "Scan up to the last 1000 messages in the starboard for posts by other starboard bots and convert them to starred messages for this bot. You can optionally provide an ID for starboard to scan before or after.",
      USAGE: "migrate ([starboard]) ([limit]) --after <[messageID]> --before <[messageID]>", // these usages are getting too long :(
    },
    PING: {
      DESCRIPTION: "Check the bot's ping, response times and edit speed.",
      USAGE: "ping",
    },
    PREFIXES: {
      DESCRIPTION: "Add or remove prefixes for the server, or view a list of them.",
      USAGE: "prefixes (add/remove) ([prefix])",
    },
    PREMIUM: {
      DESCRIPTION: "View info about premium, or your premium status.",
      USAGE: "premium",
    },
    PURGE: {
      DESCRIPTION: "Purge and freeze a number of messages off a starboard.",
      USAGE: "purge ([channel]) <[messages]> --before <[messageID]> --after <[messageID]>",
    },
    QUICKACTIONS: {
      DESCRIPTION: "View more info about Quick Actions.",
      USAGE: "quickactions",
    },
    RECOVER: {
      DESCRIPTION:
        "Recover messages from a starboard that have been lost in the dataloss. You can also specify a message ID to recover messages before that specific starboard message.",
      USAGE: "migrate ([channel]) ([messageID])",
    },
    REDEEM: {
      DESCRIPTION: "Redeem a premium code",
      USAGE: "redeem <[code]>",
    },
    RELOAD: {
      DESCRIPTION: "Reload commands, events or a file.",
      USAGE: "reload <[command]/event/file> ([event]/[file])",
    },
    REWARDROLES: {
      DESCRIPTION:
        "View info about or add/remove reward roles, roles that get added to users once they surpass a certain amount of stars.",
      USAGE: "rewardroles ([channelSettings]) (add/remove) ([role]) ([stars])",
    },
    SAVE: {
      DESCRIPTION: "Save a starred message or a normal message to your dms.",
      USAGE: "save ([channel]) <[messageID]>",
    },
    SETTINGS: {
      DESCRIPTION: "View the server/channel's settings, or view info about a specific setting.",
      USAGE: "settings ([channelSettings]) ([setting])",
    },
    SETUP: {
      DESCRIPTION: "Set up the bot in a server or channel by walking you through basic settings.",
      USAGE: "setup ([channel])",
    },
    SHARDS: {
      DESCRIPTION: "Shard info",
      USAGE: "shards",
    },
    SHOW: {
      DESCRIPTION: "Preview any starred message, or the most starred message.",
      USAGE: "show <moststarred/[messageID]>",
    },
    STARWORTHY: {
      DESCRIPTION: "Check if a message is worthy of being starred or not :)",
      USAGE: "starworthy <[messageID]>",
    },
    STATS: {
      DESCRIPTION: "View stats about a user, or reset a user's stats.",
      USAGE: "stats ([user]) --reset",
    },
    SUGGEST: {
      DESCRIPTION: "Suggest anything you think this bot should have/change.",
      USAGE: "suggest <[suggestion]>",
    },
    TRASH: {
      DESCRIPTION:
        "Trash a message from the starboard and show the first 5 people to react to it, check if a message exists in the list of trashed messages, remove a message from the list of trashed messages, clear the list, or view the first 100 message IDs on the list.",
      USAGE: "trash (add/remove/exists/clear/list) ([messageID])",
    },
    UNFREEZE: {
      DESCRIPTION: "Unfreezes a starred message, so everyone can add or remove stars as normal.",
      USAGE: "unfreeze <[messageID]>",
    },
    UNLOCK: {
      DESCRIPTION: "Unlocks a starred message from the starboard, so it can be removed as normal.",
      USAGE: "unlock <[messageID]>",
    },
    WHITELIST: {
      DESCRIPTION: "View info about whitelisted users, roles or threads, or modify the list.",
      USAGE: "whitelist (add/remove) ([user/role/thread]) --channel ([channelSettings])",
    },
  },
}