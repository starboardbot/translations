// @ts-check
module.exports = {
  name: "English (GB)",
  real: true,
  HELLO_WORLD: "Hello world!",

  EN_GB: "English (GB)",
  EN_US: "English (US)",
  ES_ES: "Spanish",

  YES: "Yes",
  NO: "No",
  DELETE: "Delete",
  CANCEL: "Cancel",
  BACK: "Back",
  SKIP: "Skip",
  CONTINUE: "Continue",
  NEXT: "Next",
  END: "End",

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
    EMOJIS {change the star emojis and display stars}
    AUTO_STAR {enable auto starring}
    REWARD_ROLES {customise reward roles}
    other {{feat}}
  }, you need to **[vote for the bot]({voteLink})**. Once you have voted, you have to wait a few minutes for me to recieve your vote.`,
  NEED_PREMIUM: `To {feat, select,
    DOWNVOTE {downvote starred messages}
    MULTIPLE_EMOJIS {have multiple emojis at once}
    CHANNEL_SETTINGS {have more than 10 sets of channel settings}
    other {{feat}}
  }, your server needs to be a **[Premium Server]({patreonLink})**.`,

  COOLDOWN_MESSAGE: "You're using this command too frequently! Please wait {time} before using it again.",
  COOLDOWN_WAIT_SUGGESTIONS: [
    "**[join the support server]({support})** and have fun talking to us, participate in polls which heavily determine what gets added to the bot, possible giveaways and much much more",
    "**[vote for the bot]({vote})** {hasVoted, select, true {for extra coolness points} other {to have this cooldown sawed in half}}",
    "**[become a patron]({patreonLink})** and unlock some sweet donator only features, and a donator only role in our discord server",
    "check out Starboard's **[Github Issues page]({guide})** where you can post bugs/suggestions instead of using the commands",
  ],
  OR: "{a} or {b}",
  AND: "{a} and {b}",
  BY: "{something} by {someone}",
  ORDINAL: "{number, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
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
  COMMAND_DISABLED_EMBED: `This command is currently disabled. {disableMessage, select,
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
  PERFORM_ACTIONS_MISSING_PERMISSIONS_USER:
    "You are missing the {permissions} permissions, required to perform this action.",
  RUN_COMMAND_MISSING_PERMISSIONS_BOT:
    "The bot is missing the {permissions} permissions, required to run this command.",
  NO_CHANNEL_SETTINGS_FOR_ARG:
    "There are no channel settings specifically for {channel, select, null {this channel} other {channel}}.",

  ID: "ID",
  USER: "User",
  USERS: "Users",
  ROLE: "Role",
  ROLES: "Roles",
  EMOJI: "Emoji",
  EMOJIS: "Emojis",
  AUTHOR: "Author",
  CHANNEL: "Channel",
  CHANNELS: "Channels",
  THREADS: "Threads",
  PERMISSION: "Permission",
  SERVERS: "Servers",
  STARBOARD: "Starboard",
  NSFW_STARBOARD: "NSFW Starboard",
  REACTION: "Reaction",
  MESSAGE: "Message",
  MESSAGES: "Messages",
  STARRED_MESSAGES: "Starred Messages",
  STARRED_MESSAGE_INFO: "Starred Message Info",
  LOCKED_MESSAGES: "Locked Messages",
  FROZEN_MESSAGES: "Frozen Messages",
  MESSAGES_TRASHED: "Messages Trashed",
  MESSAGES_CURRENTLY_TRASHED: "Messages Currently Trashed",
  MESSAGES_ON_STARBOARD_BEFORE: "Messages On Starboard Before",
  AVG_STARS_PER_MESSAGE: "Average Stars Per Message",
  MOST_STARS_EARNED_IN: "Most Stars Earned In",
  MOST_STARS_ON_MESSAGE: "Most Stars on a Message",
  MOST_STARRED_MESSAGES: "Most Starred Messages",
  MOST_STARRED_CHANNEL: "Most Starred Channel",
  LIFETIME_STARRED_MESSAGES: "Lifetime Starred Messages",
  GLOBAL_POINTS_RECORDED: "Global Points Recorded",
  MESSAGES_POSTED: "Messages Posted",
  MESSAGES_EDITED: "Messages Edited",
  REWARD_ROLES_GIVEN: "Reward Roles Given",
  MESSAGES_LOCKED: "Messages Locked",
  MESSAGES_FROZEN: "Messages Frozen",
  MESSAGES_SENT_TO_DMS: "Messages Sent To DMs",
  MESSAGE_DELETED: "Message Deleted",
  MESSAGE_SAVED: "Message Saved",
  ON_STARBOARD: "On Starboard",
  ON_STARBOARD_BEFORE: "On Starboard Before",
  STARBOARD_MESSAGE: "Starboard Message",
  TRASHED: "Trashed",
  PERCENT_LOCKED: "% Locked",
  PERCENT_FROZEN: "% Frozen",
  PERCENT_TRASHED: "% Trashed",
  PERCENT_STARRED_MESSAGES_BY_YOU: "% Of Starred Messages By You",
  CHANCE_ON_STARBOARD: "Chance On Starboard",
  WORLDWIDE_STATS: "Worldwide Stats",
  TOTAL_STARS: "Total Stars",
  MESSAGES_ON_HALL_OF_FAME: "Messages On Hall Of Fame",
  HALL_OF_FAME_ENTRIES_BY_YOU: "Hall Of Fame Entries By You",
  QUICK_ACTIONS_PERFORMED: "Quick Actions Performed",
  UPVOTES: "Upvotes",
  DOWNVOTES: "Downvotes",
  STARBOARDED: "Times On Starboard", // ?
  GLOBAL_POINTS: "Global Points",
  BLACKLIST: "Blacklist",
  WHITELIST: "Whitelist",
  AUTO_STAR: "Auto Star",
  SETTING: "Setting",
  SETTINGS: "Settings",
  CHANNEL_SETTINGS: "Channel Settings",
  SERVER_SETTINGS: "Server Settings",
  MAIN_SETTINGS: "Main Settings",
  FILTERING: "Filtering",
  CUSTOMISATION: "Customisation",
  EVENTS: "Events",
  DOWNVOTING: "Downvoting",
  AUTO_STARRING: "Auto Starring",
  MISCELLANEOUS: "Miscellaneous",
  STAR: "Star",
  STARS: "Stars",
  THRESHOLD: "Threshold",
  REQUIREMENTS: "Requirements",
  COLOR: "Colour",
  COLORS: "Colours",
  LANGUAGE: "Language",
  DATA: "Data",
  VALUE: "Value",
  DEFAULT: "Default",
  SETUP: "Setup",
  CONTEXT: "Context",
  STARRED_AT: "Starred At",
  STATS: "Stats",
  ATTRIBUTES: "Attributes",
  LINKS: "Links",
  CONVERSATION: "Conversation",
  MIGRATE: "Migrate",
  FILTERS: "Filters",
  REQUIRED: "Required",
  REQUIRED_STARS: "Required Stars",
  REQUIRED_TO_REMOVE: "Required To Remove",
  MINIMUM: "Minimum",
  MAXIMUM: "Maximum",
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
  STAR_SELF: "Star Self",
  BLACKLISTED_ITEMS: "Blacklisted Items",
  BOT_STATS: "Bot Stats",
  STARRED_MESSAGE_STATS: "Starred Message Stats",
  CLUSTER_ID: "Cluster {id}",
  SHARD_ID: "Shard {id}",
  SYSTEM_STATS: "System Stats",
  COMMANDS_RUN: "Commands Run",
  PING: "Ping",
  UPTIME: "Uptime",
  BOT_CREATION: "Bot Creation",
  JOINED_THE_SERVER: "Joined the Server",
  COMMANDS_WORD: "Commands",
  VERSION: "Version",
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
  HALL_OF_FAME: "Hall of Fame",
  NOTHING_TO_DISPLAY: "Nothing to display.",
  PAGE: "Page {page, number}/{pages, number}",
  STARS_NEEDED: "Stars Needed",
  USER_PROGRESS: "{user}'s Progress",
  YOUR_PROGRESS: "Your Progress",
  USER_PLACE: "{user}'s Place",
  YOUR_PLACE: "Your Place",
  OTHER: "Other",
  NUMBER_STARS: `{number, number} stars`,
  UPDATED_SETTINGS: "Updated Settings",
  ERRORS: "Errors",
  ENABLE: "Enable",
  DISABLE: "Disable",
  VOTE: "Vote",
  VOTE_LATER: "Vote Later",

  CANNOT_SEND_MESSAGES_IN_CHANNEL: "I cannot send messages in {channel}, please enable the `Send Messages` permission.",
  CANNOT_SEND_EMBEDS_IN_CHANNEL: "I cannot send embeds in {channel}, please enable the `Embed Links` permission.",
  CANNOT_VIEW_CHANNEL: "I cannot view {channel}, please enable the `View Channel` permission.",
  CANNOT_VIEW_VOICE_CHANNEL: "I cannot view {channel}, please enable the `View Channel` and `Connect` permissions.",
  CANNOT_READ_HISTORY_IN_CHANNEL:
    "I cannot read message history in {channel}, please enable the `Read Message History` permission.",
  CANNOT_CONNECT_IN_VOICE_CHANNEL:
    "For the text chat of {channel}, you also need to enable the `Connect` permission for me to view messages.",

  INVALID_CHANNEL_SETTING:
    "**{setting}** is not a valid setting for channels, it is only available as a server setting.",
  INVALID_GUILD_SETTING: "**{setting}** is not a valid setting for servers, it is only available as a channel setting.",
  INVALID_LANGUAGE: "**{language}** was not a valid language.",
  LANGUAGE_SET: "Successfully set the language to **{language}**.", // instead of hardcoding this file's language
  NO_STARBOARD_SET: "There is no starboard set for this server.",
  NO_STARBOARDS_SET: "There are no starboards set for this server.",
  NO_NSFW_STARBOARD_SET: "There is no NSFW starboard set for this server.",
  NO_STARBOARD_SET_CHANNEL: "There is no starboard set for the channels these channel settings apply to.",
  NO_NSFW_STARBOARD_SET_CHANNEL: "There is no NSFW starboard set for the channels these channel settings apply to.",
  CHANNEL_NOT_EXIST: "That channel does not exist.",
  CHANNEL_MUST_BE_TEXT_OR_ANNOUNCEMENT: "The channel must be either a text or announcement channel.",
  CHANNEL_MUST_BE_TEXT_BASED: "The channel must be a text-based channel.",

  NSFW_STARBOARD_INVALID_TYPE: "The NSFW starboard can only be set to an NSFW channel.",
  MISSING_PERMISSION_CREATE_CHANNELS:
    "The bot is missing the `Manage Channels` permission, required to create channels.",
  CREATE_STARBOARD_FAIL: "Something went wrong when creating a starboard channel.",
  CREATE_STARBOARD_SUCCESS: "Successfully created a starboard channel: {channel}",
  CREATE_NSFW_STARBOARD_SUCCESS: "Successfully created an NSFW starboard channel: {channel}",
  STARBOARD_SET_SUCCESS:
    "Successfully set the starboard for {settingsType, select, channel {the channels these channel settings apply to} other {this server}} to {channel}.",
  STARBOARD_UNSET_SUCCESS:
    "Successfully unset the starboard for {settingsType, select, channel {the channels these channel settings apply to} other {this server}}.",
  NSFW_STARBOARD_SET_SUCCESS: "Successfully set the NSFW starboard for this server's NSFW channels to {channel}.",
  NSFW_STARBOARD_UNSET_SUCCESS: "Successfully unset the starboard for this server.",
  REQUIRED_STARS_TOO_BIG: "The required amount of stars to reach the starboard cannot be that high.",
  REQUIRED_STARS_TOO_SMALL: "The required amount of stars to reach the starboard has to be a number greater than 0.",
  REQUIRED_STARS_SET:
    "Successfully set the required amount of stars to reach the starboard {settingsType, select, channel {for the channels these channel settings apply to } other {}}to {number, number}",
  REQUIRED_STARS_SET_BOTH:
    "Successfully set the required amount of stars to reach the starboard {settingsType, select, channel {for the channels these channel settings apply to } other {}}to {required, number}, and lowered **RequiredToRemove** to {requiredToRemove, number}.",
  RTR_TOO_BIG: "The required amount of stars to be removed from the starboard cannot be that high.",
  RTR_TOO_SMALL:
    "The required amount of stars to be removed from the starboard has to be a number greater than or equal to 0.",
  RTR_SET:
    "Successfully set the required amount of stars to be removed from the starboard {settingsType, select, channel {for the channels these channel settings apply to } other {}}to {number, number}",
  RTR_SET_BOTH:
    "Successfully set the required amount of stars to be removed from the starboard {settingsType, select, channel {for the channels these channel settings apply to } other {}}to {requiredToRemove, number}, and raised **Required** to {required, number}.",
  PERMISSIONS_PROVIDED_NOT_VALID: "The permissions provided were not valid.",
  PERMISSIONS_SET_SUCCESS: "Successfully set the permissions required to perform various actions to {permission}.",
  COLOR_INVALID_COLOUR:
    "Could not parse a colour from `{input}`. Try inputting a hex code (`#ecd558`) or RGB values (`236, 213, 88`).",
  COLOR_SET_SUCCESS: `Successfully set the colour for starboard messages above {above, number} stars to {color, select,
    role {the author's highest role colour}
    random {random}
    other {\`{color}\`}
  }.`,
  STAR_REQUIREMENT_TOO_HIGH:
    "The **{ordinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** threshold cannot be that high.",
  STAR_REQUIREMENT_TOO_LOW:
    "The **{ordinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** threshold has to be a number greater than 0.",
  STAR_REQUIREMENT_BOUNDARY_HIGHER:
    "The **{ordinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** threshold has to be a number higher than {number, number}, which is what the **{prevOrdinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** threshold is currently set as.",
  STAR_REQUIREMENT_BOUNDARY_LOWER:
    "The **{ordinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** threshold has to be a number lower than {number, number}, which is what the **{nextOrdinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** threshold is currently set as.",
  STAR_REQUIREMENT_SET:
    "Successfully set the threshold for the **{ordinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** tier's star and colour to show up on the starboard to {number, number}.",
  EMOJI_NOT_FOUND: "That emoji could not be found, or was invalid.",
  CANNOT_USE_EMOJI: "I cannot use that emoji, I can only use emojis from servers I'm in.",
  UPVOTE_DOWNVOTE_EMOJIS_SAME:
    "The emoji to upvote starred messages and the emoji to downvote starred messages cannot be the same.",
  CANNOT_USE_RESERVED_EMOJI: "Sorry, but this emoji cannot be used.",
  MAX_EMOJIS_REACHED: "You have reached the maximum amount of emojis allowed for 1 server.",
  TOO_MANY_EMOJIS: "You cannot have that many emojis set to use for starring messages.",
  ALREADY_AN_EMOJI_SAVED: "Your emoji is already saved as one in the list of emojis.",
  NOT_AN_EMOJI_SAVED: "Your emoji is not saved as one in the list of emojis.",
  EMOJI_ADD_SUCCESS: "Successfully added {emoji} to the list of emojis.",
  EMOJI_REMOVE_SUCCESS: "Successfully removed {emoji} from the list of emojis.",
  EMOJI_SET_SUCCESS: "Successfully set the emoji to react on messages with to {emoji}.",
  STAR_SET_SUCCESS:
    "Successfully changed the **{ordinal, select, first {first} second {second} third {third} fourth {fourth} other {}}** display star to {emoji}.",
  DOWNVOTE_EMOJI_SET: "Successfully set the emoji to downvote messages with to {emoji}.",
  ON_DELETION_NOTHING_SET: "Starboard message will no longer be reposted, frozen or trashed when they get deleted.",
  ON_DELETION_REPOST_SET: "Starboard messages will now be automatically reposted when they get deleted by a moderator.",
  ON_DELETION_FREEZE_SET:
    "Starred messages will now be automatically frozen if the starboard message gets deleted by a moderator.",
  ON_DELETION_TRASH_SET:
    "Starred messages will now be automatically trashed if the starboard message gets deleted by a moderator.",
  LINK_DELETES_ENABLED: "When a message is deleted, the starboard message will now be deleted.",
  LINK_DELETES_DISABLED: "When a message is deleted, the starboard message will no longer be deleted.",
  FILTER_BOTS_ENABLED: "Bots can no longer get on the starboard.",
  FILTER_BOTS_DISABLED: "Bots can now get on the starboard.",
  STAR_SELF_ENABLED: "Users can now star their own messages.",
  STAR_SELF_DISABLED: "Users can no longer star their own messages.",
  VISIBLE_ENABLED: "People can now find this server's messages in the explore command.",
  VISIBLE_DISABLED: "People can no longer find this server's messages in the explore command.",
  CLEAN_ENABLED:
    "~~The **Click to jump to message!** and other links will no longer show on starboard messages.~~ This setting no longer does anything. A similar setting will be made to replace this very soon.",
  CLEAN_DISABLED:
    "~~The **Click to jump to message!** and other links will now show on starboard messages.~~ This setting no longer does anything. A similar setting will be made to replace this very soon.",
  DOWNVOTE_ENABLED: "Users can now downvote starred messages.",
  DOWNVOTE_DISABLED: "Users can no longer downvote starred messages.",
  BOTS_ON_LB_ENABLED: "Bots will now show on the leaderboard.",
  BOTS_ON_LB_DISABLED: "Bots will no longer show on the leaderboard.",
  ATTACHMENTS_ENABLED: "Attachments will now be attached onto the starboard message.",
  ATTACHMENTS_DISABLED: "Attachments will no longer be attached onto the starboard message.",
  NO_EXPLORE_ENABLED: "Users can no longer use the explore command.",
  NO_EXPLORE_DISABLED: "Users can now use the explore command.",
  FILTER_BLACKLISTED_ENABLED: "Blacklisted users will now be filtered off the starboard.",
  FILTER_BLACKLISTED_DISABLED: "Blacklisted users will no longer be filtered off the starboard.",
  REMOVE_REACTIONS_ENABLED: "Reactions will now be removed if a user reacts wrongly, such as in a blacklisted channel.",
  REMOVE_REACTIONS_DISABLED:
    "Reactions will no longer be removed if a user reacts wrongly, such as in a blacklisted channel.",
  NO_LEADERBOARD_ENABLED_SERVER: "The leaderboard and leaderboard related commands have been disabled.",
  NO_LEADERBOARD_DISABLED_SERVER: "The leaderboard and leaderboard related commands have been enabled.",
  NO_LEADERBOARD_ENABLED: "The leaderboard for this channel will no longer be recorded.",
  NO_LEADERBOARD_DISABLED: "The leaderboard for this channel will now be recorded.",
  KEEP_ROLES_ENABLED: "Users will now keep old reward roles upon getting a new one.",
  KEEP_ROLES_DISABLED: "Users will no longer keep old reward roles upon getting a new one.",
  MENTION_AUTHOR_ENABLED: "Users will now be pinged on their starboard messages.",
  MENTION_AUTHOR_DISABLED: "Users will no longer be pinged on their starboard messages.",
  QUICK_ACTIONS_ENABLED: "You can now react on starboard messages to quickly perform actions on them.",
  QUICK_ACTIONS_DISABLED: "You can no longer react on starboard messages to quickly perform actions on them.",
  LINK_EDITS_ENABLED: "Starboard messages will now be updated when its original message is edited.",
  LINK_EDITS_DISABLED: "Starboard messages will no longer be updated when its original message is edited.",
  DISPLAY_NICKNAME_ENABLED: "Starboard messages will now display the message author's server nickname.",
  DISPLAY_NICKNAME_DISABLED: "Starboard messages will now display the message author's Discord tag.",
  NO_COMMANDS_ENABLED: "Commands will now only work for moderators.",
  NO_COMMANDS_DISABLED: "Commands will no longer only work for moderators.",
  AUTO_STAR_ENABLED: "Messages from these channels will now be automatically starred by me.",
  AUTO_STAR_DISABLED: "Messages from these channels will no longer be automatically starred by me.",
  DELETE_INVALID_ENABLED:
    "Messages sent while auto starring is enabled that either don't pass the filters or were sent by blacklisted users will now be deleted.",
  DELETE_INVALID_DISABLED:
    "Messages sent while auto starring is enabled that either don't pass the filters or were sent by blacklisted users will no longer be deleted.",
  CHANNEL_SETTINGS_NAME_TOO_LONG: "The name of these channel settings cannot be more than 64 characters long.",
  TOO_HIGH: "That number is too high.",
  TOO_LOW: "That number is too low.",
  ENTER_NUMBER: "Enter Number",
  ENTER_PERMISSIONS: "Enter Permissions",

  UNKOWN_MESSAGE: "A message with ID `{id}` was not found in {channel}.",
  MESSAGE_NOT_FOUND: "I could not find a message from your input.",
  STARRED_MESSAGE_NOT_FOUND: "I could not find a starred message from your input.",
  PLEASE_PROVIDE_MESSAGE: "Please provide a link to a message or a message ID.",
  ROLE_NOT_FOUND: "I could not find a role from your input.",
  CANNOT_OBTAIN_STARRED_MESSAGE:
    "Sorry, but this starred message could not be obtained. This is likely because it is trashed, the original message's channel was deleted or the bot can't see the starboard channel.",

  MESSAGE_ALREADY_LOCKED: "This message is already locked.",
  MESSAGE_NOT_LOCKED: "This message is not currently locked.",
  MESSAGE_ALREADY_FROZEN: "This message is already frozen.",
  MESSAGE_NOT_FROZEN: "This message is not currently frozen.",
  ALREADY_ON_HALL_OF_FAME: "This message is already on the Hall of Fame.",
  NOT_ON_HALL_OF_FAME: "That message is not on the Hall of Fame.",
  HALL_OF_FAME_HIT_MAX: "This server has hit the limit of 100 messages on the Hall of Fame.",
  MESSAGE_HAS_NO_STARBOARD_MESSAGE_TO_DELETE: "This message has no starboard message to delete.",
  CANNOT_FORCE_MESSAGE_TRASHED: "This message cannot be forced because it is trashed.",

  MESSAGE_ALREADY_POSTED_ON_STARBOARD: "This message is already posted on the starboard.",
  MESSAGE_RECENTLY_SAVED: "This message seems to have been recently saved.",
  CANNOT_SEND_MESSAGE_DMS_CLOSED: "I cannot send you this message because your DMs are closed.",
  LOCK_SUCCESS: "Successfully locked that message.",
  UNLOCK_SUCCESS: "Successfully unlocked that message.",
  FREEZE_SUCCESS: "Successfully froze that message.",
  UNFREEZE_SUCCESS: "Successfully unfroze that message.",
  REFRESH_SUCCESS:
    "Successfully recounted stars for that message.{url, select, null {} other { The starboard message is **[here]({url})**.}}",
  TRASH_SUCCESS: "Successfully trashed that message.",
  SAVE_SUCCESS: "Successfully sent that message to your DMs.",
  HALL_OF_FAME_SUCCESS: "Successfully added that message to the server's Hall of Fame.",
  HALL_OF_FAME_REMOVE_SUCCESS: "Successfully removed that message from the server's Hall of Fame.",

  FORCE_SUCCESS:
    "Successfully forced that message to the starboard!{url, select, null {} other { The starboard message is **[here]({url})**.}}",
  POST_SUCCESS:
    "Successfully posted that message to the starboard!{url, select, null {} other { The starboard message is **[here]({url})**.}}",
  DELETE_SUCCESS: "Successfully deleted that message.",

  DOWNVOTE_REACTION: "Downvote Reaction",
  LINK_DELETES: "Link Deletes",
  FILTER_BOTS: "Filter Bots",
  VISIBLE: "Visible",
  REUPLOAD_ATTACHMENTS: "Reupload Attachments",
  FILTER_BLACKLISTED_USERS: "Filter Blacklisted Users",
  REMOVE_REACTIONS: "Remove Invalid Reactions",
  KEEP_ROLES: "Keep Roles",
  MENTION_AUTHOR: "Mention Author",
  QUICK_ACTIONS: "Quick Actions",
  LINK_EDITS: "Link Edits",
  DISPLAY_NICKNAME: "Display Nickname",
  DELETE_INVALID: "Delete Invalid Messages",
  WHEN_DELETED: "When Deleted",
  ON_DELETION_NOTHING: "Do Nothing",
  ON_DELETION_REPOST: "Repost Message",
  ON_DELETION_FREEZE: "Freeze Message",
  ON_DELETION_TRASH: "Trash Message",
  LANGUAGE_SETTING_DESCRIPTION: "The language that the bot's messages will be sent in.",
  STARBOARD_ID_SETTING_DESCRIPTION: "Where all starred messages will go.",
  NSFW_STARBOARD_ID_SETTING_DESCRIPTION: "Where all starred messages from NSFW channels will go.",
  REQUIRED_SETTING_DESCRIPTION: "Stars required to reach the starboard.",
  REQUIRED_TO_REMOVE_SETTING_DESCRIPTION: "Drop below this and get removed from the starboard.",
  PERMISSION_SETTING_DESCRIPTION:
    "The permissions one must have to be considered a moderator and perform various actions.",
  EMOJIS_SETTING_DESCRIPTION: "The emojis used to add stars to messages.",
  DOWNVOTE_EMOJI_SETTING_DESCRIPTION: "The emoji used to downvote messages.",
  LINK_DELETES_SETTING_DESCRIPTION: "Delete the starboard message when the original is deleted.",
  FILTER_BOTS_SETTING_DESCRIPTION: "Filter messages by bots off the starboard.",
  STAR_SELF_SETTING_DESCRIPTION: "Allow users to star their own messages.",
  VISIBLE_SETTING_DESCRIPTION: "Allow this server to be visible in global listings (explore, top servers leaderboard).",
  DOWNVOTE_SETTING_DESCRIPTION: "Allow downvoting messages with the downvote emoji.",
  ATTACHMENTS_SETTING_DESCRIPTION:
    "Reupload videos and files to the starboard message instead of just appending as links.",
  FILTER_BLACKLISTED_SETTING_DESCRIPTION: "Filter messages by blacklisted users off the starboard.",
  REMOVE_REACTIONS_SETTING_DESCRIPTION: "Remove invalid reactions - ones on messages that shouldn't be starred.",
  KEEP_ROLES_SETTING_DESCRIPTION: "Keep old reward roles when achieving a newer one.",
  MENTION_AUTHOR_SETTING_DESCRIPTION: "Mention users on their starboard messages.",
  QUICK_ACTIONS_SETTING_DESCRIPTION: "Allow reacting with specific emojis to perform Quick Actions.",
  LINK_EDITS_SETTING_DESCRIPTION: "Update the starboard message when the original is edited.",
  DISPLAY_NICKNAME_SETTING_DESCRIPTION: "Display a user's nickname instead of their Discord tag.",
  AUTO_STAR_SETTING_DESCRIPTION: "Automatically star new messages.",
  DELETE_INVALID_SETTING_DESCRIPTION:
    "When auto-starring, delete new messages that don't meet the conditions for getting starred.",
  ON_DELETION_SETTING_DESCRIPTION: "What to do when a moderator deletes a starboard message.",

  // ? might still keep these nested translations for command responses that are super specific and 100% only used once - in that command
  COMMANDS: {
    BLACKLIST: {
      NAME: "blacklist",
      DESCRIPTION: "View info about blacklisted users, roles or channels, or modify the list.",
      USAGE: "blacklist (add/remove) ([user/role/channel]) --channel ([channelSettings])",
      SETTINGS_OPTION: "The settings of which you're modifying the blacklist for.",
      ADD: {
        NAME: "add",
        DESCRIPTION: "Add a user, role or channel to the blacklist.",
        USER: {
          NAME: "user",
          DESCRIPTION: "Add a user to the blacklist.",
          OPTIONS: {
            USER: "The user to add to the blacklist.",
          },
        },
        ROLE: {
          NAME: "role",
          DESCRIPTION: "Add a role to the blacklist.",
          OPTIONS: {
            ROLE: "The role to add to the blacklist.",
          },
        },
        CHANNEL: {
          NAME: "channel",
          DESCRIPTION: "Add a channel to the blacklist.",
          OPTIONS: {
            CHANNEL: "The channel to add to the blacklist.",
          },
        },
      },
      REMOVE: {
        NAME: "remove",
        DESCRIPTION: "Remove a user, role or channel from the blacklist.",
        USER: {
          NAME: "user",
          DESCRIPTION: "Remove a user from the blacklist.",
          OPTIONS: {
            USER: "The user to remove from the blacklist.",
          },
        },
        ROLE: {
          NAME: "role",
          DESCRIPTION: "Remove a role from the blacklist.",
          OPTIONS: {
            ROLE: "The role to remove from the blacklist.",
          },
        },
        CHANNEL: {
          NAME: "channel",
          DESCRIPTION: "Remove a channel from the blacklist.",
          OPTIONS: {
            CHANNEL: "The channel to remove from the blacklist.",
          },
        },
        ID: {
          NAME: "id",
          DESCRIPTION: "Remove a specific ID from the blacklist.",
          OPTIONS: {
            ID: "The ID to remove from the blacklist.",
          },
        },
      },
      CLEAR: {
        NAME: "clear",
        DESCRIPTION: "Clear all users, roles and channels from the blacklist.",
      },
      VIEW: {
        NAME: "view",
        DESCRIPTION: "View all users, roles and channels currently on the blacklist.",
        OPTIONS: {
          SETTINGS: "The settings of which you're viewing the blacklist of.",
        },
      },
      // embed descriptions may always be complicated
      EMBED_DESCRIPTION: `{blacklistedOnStarboard, select,
        true {Blacklisted users cannot star messages but their messages can still get on the starboard}
        other {Blacklisted users cannot star messages and cannot get their messages on the starboard}
      }, and messages cannot be starred if from a blacklisted {settingsType, select, channel {thread} other {channel}}.
      To add/remove to the list, run \`{prefix}blacklist <add/remove> <[user/role/{settingsType, select,
        channel {thread}
        other {channel}
      }]>\`.\n\n{settingsType, select,
        channel {The following users, roles and threads are blacklisted in the channels these channel settings apply to.}
        other {The following users, roles and channels are blacklisted:}
      }{nothing, select, true {\n**Nothing has been blacklisted yet.**} other {}}`,
      NOT_FOUND:
        "I could not find a user, role or {settingsType, select, channel {thread} other {channel}} from your input.",
      ALREADY_BLACKLISTED: "**{item}** is already blacklisted.",
      NOT_BLACKLISTED: "**{item}** is not blacklisted.",
      TOO_MANY_BLACKLISTED: "There are too many items on the blacklist.",
      NOTHING_BLACKLISTED: "There is nothing blacklisted.",
      CAN_ONLY_BLACKLIST_THREADS: "When using channel-based settings, you can only blacklist threads.",
      BLACKLIST_ADD_SUCCESS: `Successfully blacklisted **{item}**.`,
      BLACKLIST_ADD_CHANNELS_SUCCESS: `Successfully blacklisted {number, number} channels.`,
      BLACKLIST_REMOVE_ALL_SUCCESS: "Successfully removed everything from the blacklist.",
      BLACKLIST_REMOVE_SUCCESS: `Successfully removed **{item}** from the blacklist.`,
    },
    BOTINFO: {
      NAME: "botinfo",
      DESCRIPTION: "View info about the bot.",
      USAGE: "botinfo (bot/star)",
    },
    CHANGESETTING: {
      NAME: "changesetting",
      // DESCRIPTION:
      //   "Change a setting for the current channel or the server, such as the required amount of stars needed to reach the starboard. All the settings are in the settings command, so you can view your options there.",
      DESCRIPTION: "Change the settings for starring messages.",
      USAGE: "changesetting ([channel]) <[setting]> <[value]>",
      SETTINGS_OPTION: "The settings of which you're mofifying.",
      MAIN: {
        NAME: "main",
        DESCRIPTION: "Change the main settings, such as the starboard or the required stars.",
      },
      FILTERING: {
        NAME: "filtering",
        DESCRIPTION: "Change the settings related to filtering star reactions, such as allowing self stars.",
      },
      STYLE: {
        NAME: "style",
        DESCRIPTION: "Change the settings related to how the starboard message looks.",
      },
      MISC: {
        NAME: "misc",
        DESCRIPTION: "Change miscellaneous settings.",
      },
      TIERS: {
        NAME: "tiers",
        DESCRIPTION: "Different tiers for displaying colours and stars on the starboard message.",
        FIRST: {
          NAME: "first",
          DESCRIPTION: "The first star/colour display tier.",
        },
        SECOND: {
          NAME: "second",
          DESCRIPTION: "The second star/colour display tier.",
        },
        THIRD: {
          NAME: "third",
          DESCRIPTION: "The third star/colour display tier.",
        },
        FOURTH: {
          NAME: "fourth",
          DESCRIPTION: "The fourth star/colour display tier.",
        },
        COLOR_OPTION: "The colour starboard messages should display past this tier's treshold.",
        STAR_OPTION: "The star emoji starboard messages should display past this tier's treshold.",
        THRESHOLD_OPTION:
          "This tier's treshold - this tier will take effect once this number of stars has been achieved.",
      },
    },
    CHANNELSETTINGS: {
      NAME: "channel-settings",
      DESCRIPTION: "View info about Channel Settings, or create/clone sets of channel settings.",
      USAGE: "channelsettings (list/create/edit/delete) ([name]) (...[channels]) --channel ([channelSettings])",
      NO_CHANNEL_SETTINGS: `**This server has no channel settings.**
      To create a new set of channel settings, run \`{prefix}channnelsettings create ([name]) <...[channels]>\`

      Channel Settings are settings that only apply to a group of channels.
      They can have their own starboard, emojis, reward roles, filters, and almost everything else the server settings can have.

      **[Learn More]({guide})**`,
      EMBED_DESCRIPTION: `Here are the channel settings for this server.
      Run \`{prefix}channelsettings --help\` for more info, or **[Learn More]({guide})**`,
      EMBED_DESCRIPTION_GUIDE: `Here are the channel settings for this server.
      Note: When providing the \`[channelSettings]\` argument for commands, you can either provide the name of the channel settings if the name has no spaces, or a channel from the list of channels.

      • If you want to clone one of these, you can run \`{prefix}channelsettings create ([name]) <...[channels]> --channel ([channelSettings])\` where \`([channelSettings])\` is the channel settings to clone from.

      • If you want to edit a set of channel settings to add/remove channels or change the name, you can run \`{prefix}channelsettings edit ([channelSettings]) ([name]) (...[channels])\` where \`([channelSettings])\` is the channel settings to edit. Prefix the channels with + or - to add or remove them from the list (e.g. \`+#general\`, \`-#memes\`).

      • If you need to delete a set of channel settings, you can run \`{prefix}channelsettings delete <[name]>\`

      • To edit one's settings, run \`{prefix}changesetting ([channelSettings]) <[setting]> <[value]>\`

      **[Learn More]({guide})**`,
      HIT_MAX: "You have hit the maximum amount of channel settings for one server.",
      PROVIDE_CHANNELS: "Please provide some channels for this set of channel settings.",
      INVALID_CHANNELS: "You did not provide valid channels.",
      DUPLICATE_CHANNELS:
        "The channels provided must not already have channel settings. A channel may only have one set of channel settings.",
      CONFIRMATION_EMBED:
        "Are you sure you want to delete the **{name}** channel settings?\nYou will lose all saved reward roles, blacklists/whitelists, filters and other saved configurations, and they will be gone forever.",
      NOT_DELETED: "The settings will not be deleted.",
      SUCCESS_CREATE:
        "Successfully created a new set of channel settings for {size, plural, =1 {one channel} other {# channels}}: **{name}**.",
      NOTHING_PROVIDED: "Please provide the name of a set of channel settings.",
      NOTHING_MODIFIED: "Please provide edits to make.",
      MODIFIED_NAME: `Successfully changed the name to **{name}**.`,
      MODIFIED_CHANNELS: `Successfully changed the channels that these channel settings apply for to {size, plural, =1 {one channel} other {# channels}}.`,
      MODIFIED_BOTH:
        "Successfully changed the name to **{name}** and changed the channels that these channel settings apply for to {size, plural, =1 {one channel} other {# channels}}.",
      SUCCESS_DELETE: "Successfully deleted **{name}**.",
    },
    DEBUG: {
      NAME: "debug",
      DESCRIPTION:
        "Debug and get reasons for why a message, messages in a specific channel, or all messages aren't being starred.",
      USAGE: "debug ([channel]) ([messageID]) --autoStar",
      MISSING_FILES:
        "I cannot attach files in {channel}, so attachments will not be attached to the starboard message and will instead be linked. Please enable the `Attach Files` permission if you want attachments.",
      TRASHED: "This message is trashed.",
      FROZEN: "This message is frozen and cannot get or lose any more stars.",
      FILTER_BOTS: "Messages by bots cannot be starred because the **FilterBots** setting is enabled.",
      BLACKLISTED: "The author of this message is blacklisted.",
      BLACKLISTED_ROLES: "The author of this message is blacklisted because they have the roles {roles}.",
      CHANNEL_BLACKLISTED: "{channel} is currently blacklisted.",
      MESSAGE_CHANNEL_BLACKLISTED: "The channel where this message was sent in is currently blacklisted.",
      // FILTER: "This message doesn't pass the {list} set for this ${c ? "channel" : "server"}.`,
      // todo - the 1st, 2nd and 6th filters set for
      CONTENT_REQUIRED: "This message has no content but content is required.",
      CONTENT_MIN:
        "The length of this message needs to be {limit, number} characters or greater, it is currently {length, number}.",
      CONTENT_MAX: "The length of this message exceeds the limit of {limit, number} characters. ({length, number})",
      IS_REPLY: `This message cannot be starred because it is a reply.`,
      IS_NOT_REPLY: "This message cannot be starred because it isn't a reply.",
      MATCH_REGEX: "This message doesn't match the regex `{regex}`.",
      CONTENT_INCLUDES: "This message does not contain `{text}` and therefor cannot be starred.",
      NOT_MATCH_REGEX: "This message matches the regex `{regex}` so it cannot be starred.",
      CONTENT_EXCLUDES: "This message contains `{text}` and therefor cannot be starred.",
      ATTACHMENT_REQUIRED: "An attachment or embed is required and this message has none.",
      ATTACHMENT_MIN:
        "This message needs to have {min, number} or more attachments/embeds, it currently has {size, number}.",
      ATTACHMENT_MAX:
        "This message needs to have less than {max, number} attachments/embeds, it currently has {size, number}.",
      MEDIA_REQUIRED: "This message does not have any media but media is required. (Images, GIFs, video, etc)",
      OLDER_THAN: "This message needs to be older than {time} to be starred, it is currently {age} old.",
      SENT_BEFORE:
        "This message needs to have been sent before {date, date, ::ddMy} to be starred, it was sent on {sent, date, ::ddMy}.",
      NEWER_THAN: "This message needs to be newer than {time} to be starred, it is currently {age} old.",
      SENT_AFTER:
        "This message needs to have been sent after {date, date, ::ddMy} to be starred, it was sent on {sent, date, ::ddMy}.",
      REQUIRED_STARS:
        "This message needs {required, number} stars ({emojis}) to reach the starboard, right now it only has {stars}.",
    },
    EVAL: {
      NAME: "eval",
      DESCRIPTION: "Evaluates a bit of code.",
      USAGE: "eval <code>",
    },
    EXPLORE: {
      NAME: "explore",
      DESCRIPTION:
        "Bring up a random starred message from a user, your server or from any server! For a message to be brought up from any server, it has to have 5+ stars and the server has to have the **Visible** setting enabled.",
      USAGE: "explore ([stars]) (me/user/server/global) ([user])",
      NOT_FOUND:
        "No visible starred messages have been found. Messages need to have 5+ stars to show up, so go on and star any funny messages!",
      NOT_FOUND_STARS:
        "No visible starred messages with {stars, number}+ stars have been found. Try searching for a smaller amount.",
      TYPE_NOT_FOUND: `No messages{stars, select, null {} other { with {stars}+ stars}} have been found from {type, select,
        server {this server}
        user {this user}
        you {you}
        other {}
      }.`,
      COULD_NOT_FETCH: "I couldn't resolve a starred message from a random entry with ID `{id}`",
    },
    FILTERS: {
      NAME: "filters",
      DESCRIPTION: "View, create or edit filters used to filter messages from being starred.",
      USAGE:
        "filters ([channelSettings]) (add/remove/list/edit) (content/attachments/age/[filterNumber]) (...[options]) --explain --options",
      // todo
    },
    FORCE: {
      NAME: "force",
      DESCRIPTION: "Force or refresh a message on the starboard.",
      USAGE: "force ([channel]) <[messageID]>",
      IS_EXPLORE_MESSAGE: "This message seems to be a message from the explore command, so it can't be forced.",
      IS_LIKE_STARBOARD_MESSAGE:
        "This message seems to be a starboard message or something similar, of another message, so it can't be forced.",
    },
    FREEZE: {
      NAME: "freeze",
      DESCRIPTION: "Freezes a starred message, so no-one can add or remove stars.",
      USAGE: "freeze <[messageID]>",
    },
    GENERATE: {
      NAME: "generate",
      // todo: may delete translations for owner commands, useless
      DESCRIPTION: "Generate a premium code",
      USAGE: "generate ([code])",
    },
    HALLOFFAME: {
      NAME: "hall-of-fame",
      DESCRIPTION:
        "Shows the server's Hall of Fame, or add/remove messages from it. You can also add messages by using the 🏆 Quick Action.",
      USAGE: "halloffame (add/remove/[page]) ([messageID])",
      LINE: "• {message} by {author} - {star} {stars, number}",
      NOTHING:
        "Moderators can add a message to the Hall of Fame by using `{prefix}halloffame add <[messageID]>`, or using the 🏆 Quick Action.",
      EMBED_DESCRIPTION: `This is the Hall of Fame, messages that "belong in a museum" - the best messages on the server. These messages were picked by various moderators, so appearing here is a great achievement. Here's the list:`,
      CONFIRMATION_EMBED: "Are you sure you want to remove every message from the Hall of Fame?",
      CANCELLED: "Cancelled removing every message from the Hall of Fame.",
      SUCCESS_REMOVE_ALL: "Successfully removed everything from the Hall of Fame.",
    },
    HELP: {
      NAME: "help",
      DESCRIPTION: "View all the commands the bot has to offer, or view info about a specific command.",
      USAGE: "help ([command])",
      EMBED_DESCRIPTION: `Commands: {commands, number}
      If you're new to the bot, you can set up your server using \`{prefix}setup\`.
      For more info on various features, you could read the **[guide]({guideLink})**.
      If you still need help, please join our **[support server]({supportLink})**.`,
    },
    LANGUAGES: {
      NAME: "languages",
      DESCRIPTION: "View a list of all languages, or set the language for the server.",
      USAGE: "languages ([language])",
      EMBED_DESCRIPTION: `You now have the option to set the language for the bot! The bot will respond to all commands in that language, but commands still have to be inputted in English.
      Please note that English is the only language that will always be 100% complete, so if a statement cannot be found in your language, it'll be sent in English by default.
      If you want, you can help add more languages at https://github.com/TheNoob27/starboard-languages, it'd help a lot.

      The current list of available languages is:
      - {languagesList}

      The language that is currently being used is **{language}**. You can set the language with \`{prefix}languages <[language]>\``,
    },
    LEADERBOARD: {
      NAME: "leaderboard",
      DESCRIPTION:
        "Show a leaderboard for people with the most stats. You can input a user to jump to their position on the leaderboard, or a channel to filter stats for starred messages only in that channel.",
      USAGE:
        "leaderboard (messages/stars/starboarded/global/trashed/downvotes/channels/servers/reset) ([page]) ([user]) ([channel]) --before <[date]> --after <[date]>",
      NO_LEADERBOARD: "The leaderboard is disabled for this server.",
      NOT_ON_LEADERBOARD: "Not on the leaderboard.",
      TITLE: "Leaderboard - {title}",
      TOTAL_STARS_IN: "Total Stars in #{channel}",
      DOWNVOTES_IN: "Downvotes in #{channel}",
      GLOBAL_POINTS_IN: "Global Points in #{channel}",
      STARBOARDED_IN: "Times On Starboard in #{channel}",
      MESSAGES_TRASHED_IN: "Messages Trashed in #{channel}",
      MOST_STARRED_MESSAGES_BY: "Most Starred Messages by {user}",
      MOST_STARRED_MESSAGES_IN: "Most Starred Messages in #{channel}",
      MOST_STARRED_MESSAGES_BY_IN: "Most Starred Messages by {user} in #{channel}",
      MOST_STARRED_CHANNEL_USER: "{user}'s Most Starred Channel",
      CONFIRMATION_EMBED: `Are you sure you want to erase the leaderboard?
      Please note that this doesn't reset all leaderboards, just the server-wide **Stars**, **Global**, **Trashed** and **Times On Starboard** leaderboards.
      For other leaderboards such as the message leaderboard, you can use the --before or --after flags, e.g. \`--after 14/09/2021\`.`,
      NOT_RESET: "Cancelled resetting the leaderboard.",
      SUCCESS_RESET: "Successfully reset the leaderboard.",
      EMBED_FOOTER:
        "{user, select, null {Your} other {{user}'s}} Place: #{place} | Page {page, number}/{pages, number}",
    },
    LINKS: {
      NAME: "links",
      DESCRIPTION: "Get the links related to the bot, such as the bot's invite link.",
      USAGE: "links",
      DISCORD_LINKS: "**[Invite me!]({invite})**\n**[Support Server]({support})**",
      PATREON_LINK: "**Become a Patron!]({patreon})**",
      OTHER_LINKS: "**[Vote for the bot!]({vote})**\n**[GitHub Issues]({github})**\n**[Starboard Guide]({guide})**",
      LEGAL_LINKS: "**[Privacy]({privacy})**",
    },
    LOCK: {
      NAME: "lock",
      DESCRIPTION: "Locks a starred message to the starboard, so it'll stay there even if it reaches 0 stars.",
      USAGE: "lock <[messageID]>",
    },
    MESSAGEINFO: {
      NAME: "message-info",
      DESCRIPTION: "View info about a starred message.",
      USAGE: "messageinfo <[messageID]>",
      AT_DATE: "(at {date})",
      WILL_DELETE: "(will delete {time})",
    },
    MIGRATE: {
      NAME: "migrate",
      DESCRIPTION:
        "Scan up to the last 1000 messages in the starboard for posts by other starboard bots and convert them to starred messages for this bot. You can optionally provide an ID for starboard to scan before or after.",
      USAGE: "migrate ([starboard]) ([limit]) --after <[messageID]> --before <[messageID]>",
      // todo
    },
    PING: {
      NAME: "ping",
      DESCRIPTION: "Check the bot's ping, response times and edit speed.",
      USAGE: "ping",
      PINGING: "Pinging...",
    },
    PREFIXES: {
      NAME: "prefixes",
      DESCRIPTION: "Add or remove prefixes for the server, or view a list of them.",
      USAGE: "prefixes (add/remove) ([prefix])",
      ALREADY_PREFIX: "That is already a prefix for this server.",
      NOT_PREFIX: "That is not a prefix for this server.",
      TOO_MANY_PREFIXES: "There are too many prefixes set for this server.",
      PREFIX_TOO_LONG: "That prefix is too long.",
      PREFIX_ADD: "Successfully added `{prefix}` to the list of prefixes.",
      PREFIX_REMOVE: "Successfully removed `{prefix}` from the list of prefixes.",
      PREFIX_SET: "Successfully set the server's prefix to `{prefix}`",
      LIST_PREFIXES:
        "The prefixes for this server {prefixCount, plural, one {are: \n{prefixes}} other {is {prefixes}}}.",
      FOOTER: "My mention also works as a prefix.",
    },
    PREMIUM: {
      NAME: "premium",
      DESCRIPTION: "View info about premium, or your premium status.",
      USAGE: "premium",
      HAVE_PREMIUM: "You currently have premium active on {servers} servers.",
      PREMIUM_INFO: `
      __By **donating**, you get (permanently):__
      - A Donator role and donator-only chat in our support server.

      __By getting **Starboard Premium**, you can:__
      - Claim a Premium role in our support server.
      *And in one server of your choice...*
      - Have up to 5 emojis to use to star messages.
      - Have up to 25 sets of channel settings.
      - Have the ability to **downvote** starboard messages.
      - Have all command responses that have embeds to be the colour set for starboard messages.
      `,
    },
    QUICKACTIONS: {
      NAME: "quick-actions",
      DESCRIPTION: "View more info about Quick Actions.",
      USAGE: "quickactions",
      EMBED_DESCRIPTION: `**React to perform Quick Actions**: {enabledEmoji}

      Quick Actions allow users to quickly perform actions on starboard messages, such as locking, freezing, deleting or saving, by performing the **Quick Actions** message context menu command or reacting on the starboard message with specific emojis.
      __Here's the list of Quick Actions for moderators:__
      🗑️: Trash the message
      🔒: Lock the message
      🔓: Unlock the message
      🧊/❄️: Freeze the message
      🔥: Unfreeze the message
      🔄/🔁: Recount the stars of the message
      🏆/🏅: Add to Hall of Fame
      ❌/🇽: Delete the starboard message
      📌/📍: Force to the starboard (used on the original message)

      __And for everyone:__
      📥/💾: Save the starred message to DMs
      ❌/🇽: Delete a starboard message belonging to them

      To enable/disable reacting to perform Quick Actions, run \`{prefix}changesetting quickActions <true/false/yes/no>\``,
    },
    RECOVER: {
      NAME: "recover",
      DESCRIPTION:
        "Recover messages from a starboard that have been lost in the dataloss. You can also specify a message ID to recover messages before that specific starboard message.",
      USAGE: "migrate ([channel]) ([messageID])",
      // todo
    },
    REDEEM: {
      NAME: "redeem",
      DESCRIPTION: "Redeem a premium code.",
      USAGE: "redeem <[code]>",
      SUPPORT: "Please redeem Starboard Premium codes in the server you actually want Starboard Premium in.",
      CODE_USED: "This code has already been redeemed.",
      CODE_INVALID: "Sorry, that was not a valid code.",
      ALREADY_PREMIUM: "This server already has renewable premium, so a code cannot be redeemed.",
      EXTRA_PREMIUM:
        "That code has been successfully redeemed. This server now has Starboard Premium for an extra month, for a total of {months} months.",
      SUCCESS_PREMIUM: "That code has been successfully redeemed. This server now has Starboard Premium!",
      SUCCESS_PREMIUM_MONTH:
        "That code has been successfully redeemed. This server now has Starboard Premium for a month!",
    },
    RELOAD: {
      NAME: "reload",
      DESCRIPTION: "Reload commands, events or a file.",
      USAGE: "reload <[command]/event/file> ([event]/[file])",
    },
    REWARDROLES: {
      NAME: "rewardroles",
      DESCRIPTION:
        "View info about or add/remove reward roles, roles that get added to users once they surpass a certain amount of stars.",
      USAGE: "rewardroles ([channelSettings]) (add/remove) ([role]) ([stars])",
      NO_LEADERBOARD: "The leaderboard is disabled for the server, which includes reward roles.",
      EMBED_DESCRIPTION: `Reward roles are a fun way to reward users for getting their messages starred. Users will be given a role based on the amount of stars they have gotten in {settingsType, select,
        channel {the channels these channel settings apply to}
        other {this server}
      }.
      {hasPerms, select,
        true {You can add/subtract to the amount of stars needed for an existing reward role by creating it again, but putting a +/- before the stars argument. (+50, -50 etc)
          When viewing reward roles, you can optionally **ping a user** to see their progress.
          If you wish for users to only have **one reward role at a time**, disable the **KeepRoles** setting.\n}
        other {}
      }
      Here are the current reward roles set for {settingType, select, channel {the channels these channel settings apply to} other {the server}}:`,
      NO_REWARD_ROLES: `**There are no reward roles set for {settingType, select, channel {the channels these channel settings apply to} other {the server}}.**
      To add a reward role, run \`{prefix}rewardroles add <[role]> ([stars])\``,
      HIGHER_POSITION: "That role is higher than my highest role, so I cannot give this role to members.",
      ROLE_MANAGED: "This role is automatically managed by an integration and cannot be manually assigned to members.",
      HIGHER_THAN_USER: "You cannot add this role as a reward role as it is higher than or equal to your highest role.",
      NOT_A_NUMBER: "The amount of stars needs to be a number.",
      ADD_TOO_MANY: "You are adding too many stars to this reward role.",
      SUBTRACT_TOO_MANY: "You are subtracting too many stars from this reward role.",
      HIT_MAX_SERVER: "The server has hit the max of 25 reward roles.",
      HIT_MAX: "These channel settings have hit the max of 25 reward roles.",
      NOT_RR: "That role is not set as a reward role.",
      RR_SET: "Successfully set the stars needed for the reward role **{name}** to {stars, number}",
      RR_ADD:
        "Successfully added the role **{name}** as a reward role, awarded to users after getting a total of **{stars, number}** stars{settingsType, select, other {} channel { in the channels these channel settings apply to}}.",
      RR_REMOVE_ALL:
        "Successfully removed all reward roles{settingsType, select, other {} channel { for the channels these channel settings apply to}}.",
      RR_REMOVE:
        "Successfully removed the reward role **{name}** from {settingsType, select, channel {the channels these channel settings apply to} other {the server}}'s reward roles.",
    },
    SAVE: {
      NAME: "save",
      DESCRIPTION: "Save a starred message or a normal message to your DMs.",
      USAGE: "save ([channel]) <[messageID]>",
    },
    SETTINGS: {
      NAME: "settings",
      DESCRIPTION: "View the server/channel's settings, or view info about a specific setting.",
      USAGE: "settings ([channelSettings]) ([setting])",
      // CAN_CHANGE: (prefix, name, sub, value) =>
      //   `You can change this setting with \`${prefix}changesetting ${name}${sub && ` ${sub}`} <${
      //     value.includes("/") ? value : `[${value}]`
      //   }>\`.`,
      // todo
      MISSING_PERMISSIONS_CHANGE_SETTINGS: "You need to have the {permission} permissions to change settings.",
      CANT_CHANGE: "You cannot change this setting: {reason}",
      USE_ALIASES: "You can also use any of these to change/view the setting.",
    },
    SETUP: {
      NAME: "setup",
      DESCRIPTION: "Set up the bot by walking you through basic settings.",
      USAGE: "setup ([channel])",
      OPTIONS: {
        SETTINGS: "The settings that we're setting up.",
      },
      EMBED_DESCRIPTION: `During this setup, I will walk you through **some** of the settings, the ones that would be relevant to most users, to help you get the starboard up and running for {settingsType, select,
        server {this server}
        channel {the channels these channel settings apply to}
        other {}
      }.`,
      RESULT_EMBED: "Successfully finished setting up these settings.",
      RESULT_COMPLETE:
        "The starboard should be up and running now. Messages will be send to {starboard} once they get **{required, number}** stars ({emoji}).\nYou can change even more settings with the changesetting command.",
      RESULT_INCOMPLETE:
        "All that's left is to set up the starboard channel. You can use the changesetting command to set the starboard, and change a lot of other settings too.",
      CANCEL_EMBED: "Cancelled the setup. No settings have been changed.",
      PERMISSIONS_EXAMPLE: "Manage Messages, Manage Server",
      EXTRA_INFO_LANGUAGE:
        "Right now the languages we have are limited but we hope to add more in the future.\nYou can join the support server if you wish to help translate the bot into your language!",
      EXTRA_INFO_REQUIRED:
        "Currently, if {required, number} different people star a message, it will then be posted to the starboard.",
      EXTRA_INFO_REQUIRED_TO_REMOVE:
        "Currently, if a message in the starboard drops below {requiredToRemove, number} stars, it will then be removed from the starboard.",
      EXTRA_INFO_PERMISSION: "By default this is set to `Manage Messages`.",
      EXTRA_INFO_EMOJIS: "React on this message with the emoji you want to use to star messages, then press Continue.",
      EXTRA_INFO_AUTO_STAR: "If you want to customise what messages get auto-starred, check out the filters command.",
      EXTRA_INFO_VISIBLE:
        "If you star personal/private stuff, you should probably keep this disabled. If this is enabled, a 🌍 will appear on starred messages that have been found in the explore command, followed by the number of times it was found.",
      NOTICE_NSFW_STARBOARD_ID:
        "It seems you have a few NSFW channels in this server; would you like to set a NSFW starboard for starred messages from NSFW channels to be sent to? If none is set, they'll just go to the normal starboard with media spoilered.",
      REACT_BEFORE_CONTINUE: "Please react with your emoji before pressing the Continue button.",
      NEED_VOTE:
        "Before you can change this setting, you have to vote for the bot. Once you have voted, press Continue to resume the setup, or you can vote later.",
      NOT_YET_VOTE: "I haven't yet received your vote, try waiting a few more seconds, or just skip and come back to it later.",
    },
    SHARDS: {
      NAME: "shards",
      DESCRIPTION: "Shard info",
      USAGE: "shards",
    },
    SHOW: {
      NAME: "show",
      DESCRIPTION: "Preview any starred message, or the most starred message.",
      USAGE: "show <moststarred/[messageID]>",
      COULD_NOT_OBTAIN:
        "I couldn't obtain this starred message, this is most likely because both messages were deleted, the channel was deleted or I can no longer see the channel. But, here's some info about it anyway:",
    },
    STARWORTHY: {
      NAME: "starworthy",
      DESCRIPTION: "Check if a message is worthy of being starred or not :)",
      USAGE: "starworthy <[messageID]>",
      WORTHY: "That message is {percent, number, ::percent} star-worthy.",
    },
    STATS: {
      NAME: "stats",
      DESCRIPTION: "View stats about a user, or reset a user's stats.",
      USAGE: "stats ([user]) --reset",
    },
    SUGGEST: {
      NAME: "suggest",
      DESCRIPTION: "Suggest anything you think this bot should have/change.",
      USAGE: "suggest <[suggestion]>",
      NEED_VOTE:
        "In order to reduce spam, you have to **[vote for the bot]({voteLink})** to make suggestions outside the **[support server]({supportLink})**.",
      NO_INPUT: "Please provide a suggestion to make.",
      ATTACHMENTS_NSFW: "Attachments cannot be used for suggestions when in a NSFW channel.",
      THANK_YOU:
        "Thank you so much for your suggestion, these really help the development of this bot a lot. You can view your suggestion **[here]({inviteLink})**, where people vote on it.",
    },
    TRASH: {
      NAME: "trash",
      DESCRIPTION:
        "Trash a message from the starboard and show the first 5 people to react to it, check if a message exists in the list of trashed messages, remove a message from the list of trashed messages, clear the list, or view the first 100 message IDs on the list.",
      USAGE: "trash (add/remove/exists/clear/list) ([messageID])",
      REASON_TOO_LONG: "Your reason is too long.",
      NOT_TRASHED: "That message is not trashed.",
      UNTRASH_SUCCESS: "Successfully untrashed that message. It can now be starred again.",
      IS_TRASHED:
        "Your message with ID `{id}` is currently in the list of trashed messages. You can remove it from the trash with `${prefix}trash remove ${id}`.",
      IS_NOT_TRASHED: "Your message with ID `{id}` is not currently trashed.",
      CLEAR_TRASH: "Successfully removed {number, number} items from the trash.",
    },
    UNFREEZE: {
      NAME: "unfreeze",
      DESCRIPTION: "Unfreezes a starred message, so everyone can add or remove stars as normal.",
      USAGE: "unfreeze <[messageID]>",
    },
    UNLOCK: {
      NAME: "unlock",
      DESCRIPTION: "Unlocks a starred message from the starboard, so it can be removed as normal.",
      USAGE: "unlock <[messageID]>",
    },
    WHITELIST: {
      NAME: "whitelist",
      DESCRIPTION: "View info about whitelisted users, roles or threads, or modify the list.",
      USAGE: "whitelist (add/remove) ([user/role/thread]) --channel ([channelSettings])",
      EMBED_DESCRIPTION: `{settingsType, select,
        channel {The following users and roles are whitelisted and won't be affected by the blacklist in the channels these channel settings apply to.}
        other {The following users, roles and threads are whitelisted and won't be affected by the blacklist.}
      }
      {nothing, select, true {**Nothing has been whitelisted yet.**\n} other {}}To add/remove to the list, run \`{prefix}whitelist <add/remove> <[user/role/{settingsType, select,
        channel {}
        other {thread}
      }]>\`.`,
      NOT_FOUND:
        "I could not find a {settingsType, select, channel {user or role} other {user, role or thread}} from your input.",
      ALREADY_WHITELISTED: "**{item}** is already whitelisted.",
      NOT_WHITELISTED: "**{item}** is not whitelisted.",
      TOO_MANY_WHITELISTED: "There are too many items on the whitelist.",
      NOTHING_WHITELISTED: "There is nothing whitelisted.",
      WHITELIST_ADD: `Successfully whitelisted **{item}**.`,
      REMOVE_ALL: "Successfully removed everything from the whitelist.",
      WHITELIST_REMOVE: `Successfully removed **{item}** from the whitelist.`,
    },
  },
}