module.exports = {
  name: "English (GB)",
  real: true,
  HELLO_WORLD: "Hello world!",

  YES: "Yes",
  NO: "No",
  DELETE: "Delete",
  CANCEL: "Cancel",
  NONE: "None",
  NOT_SET: "Not Set",
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
  RUN_COMMAND_MISSING_PERMISSIONS_BOT: "The bot is missing the {permissions} permissions, required to run this command.",
  NO_CHANNEL_SETTINGS_FOR_ARG: "There are no channel settings specifically for {channel, select, null {this channel} other {channel}}.",
}