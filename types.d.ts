declare type MessageParameters = {
  "REPLYING_TO_USER": {
    user: string,
  },
  "SENT_A_STICKER": {
    name: string,
  },
  "FROM_SERVER": {
    server: string,
  },
  "EXTRA_IMAGES": {
    number: string,
  },
  "WARN_LINK_PROMPT": {
    ext: string,
  },
  "STARBOARD_MESSAGE_IMAGE": {
    provider: string | null,
    number: number,
  },
  "STARBOARD_MESSAGE_GIF_VIDEO": {
    provider: string | null,
    number: number,
  },
  "STARBOARD_MESSAGE_VIDEO": {
    provider: string | null,
    number: number,
  },
  "STARBOARD_MESSAGE_MEDIA": {
    provider: string | null,
    number: number,
  },
  "STARBOARD_MESSAGE_FILE": {
    provider: string | null,
    number: number,
  },
  "STARBOARD_MESSAGE_LINK": {
    provider: string | null,
    number: number,
  },
  "STARBOARD_MESSAGE_TWEET": {
    author: string,
  },
  "STARBOARD_MESSAGE_SPOILER": {
    content: string,
  },
  "STARBOARD_MESSAGE_NSFW": {
    content: string,
  },
  "TRASH_EMBED": {
    reason: string | null,
    userList: string,
    removeTrashCommand: string,
  },
  "FIND_USER_MORE_SPECIFIC": {
    amount: string,
  },
  "FIND_USER_PROMPT": {
    amount: number,
  },
  "GET_STARTED_EMBED": {
    required: number,
    prefix: string,
  },
  "PREFIX_INFO": {
    prefixCount: number,
    prefixes: string,
  },
  "NEED_VOTE": {
    feat: "STAR_REQ" | "EMOJIS" | "AUTO_STAR" | "REWARD_ROLES",
    voteLink: string,
  },
  "NEED_PREMIUM": {
    feat: "DOWNVOTE" | "MULTIPLE_EMOJIS" | "CHANNEL_SETTINGS",
    patreonLink: string,
  },
  "COOLDOWN_MESSAGE": {
    time: string,
  },
  "COOLDOWN_WAIT_SUGGESTIONS": {
    support: string,
    vote: string,
    hasVoted: boolean,
    patreonLink: string,
    guide: string,
  },
  "OR": {
    a: string,
    b: string,
  },
  "AND": {
    a: string,
    b: string,
  },
  "BY": {
    something: string,
    someone: string,
  },
  "ORDINAL": {
    number: number,
  },
  "COMMAND_NOTICE_SOMETHING_WRONG": {
    errorMessage: string,
  },
  "COMMAND_NOTICE_DISABLED": {
    disableMessage: string,
  },
  "COMMAND_DISABLED_EMBED": {
    disableMessage: string | null,
    supportLink: string,
  },
  "COMMAND_SOMETHING_WENT_WRONG": {
    errorMessage: string | null,
    supportLink: string,
  },
  "FAILED_TO_RUN_COMMAND": {
    command: string,
  },
  "COMMAND_INVALID_ARGS_ENUM": {
    name: string,
    provided: string | null,
    enum: string,
  },
  "COMMAND_INVALID_ARGS_REGEX": {
    name: string,
    provided: string | null,
    regex: string,
  },
  "COMMAND_INVALID_ARGS_TYPE": {
    name: string,
    provided: string | null,
    type: string,
  },
  "COMMAND_INVALID_ARGS_MISSING": {
    name: string,
  },
  "COMMAND_INVALID_ARGS_RANGE": {
    raw: string,
    greater: boolean,
    boundary: number,
  },
  "RUN_COMMAND_MISSING_PERMISSIONS_USER": {
    permissions: string,
  },
  "PERFORM_ACTIONS_MISSING_PERMISSIONS_USER": {
    permissions: string,
  },
  "RUN_COMMAND_MISSING_PERMISSIONS_BOT": {
    permissions: string,
  },
  "NO_CHANNEL_SETTINGS_FOR_ARG": {
    channel: string | null,
  },
  "CLUSTER_ID": {
    id: string,
  },
  "SHARD_ID": {
    id: string,
  },
  "PAGE": {
    page: number,
    pages: number,
  },
  "USER_PROGRESS": {
    user: string,
  },
  "USER_PLACE": {
    user: string,
  },
  "NUMBER_STARS": {
    number: number,
  },
  "TOTAL_STARS_IN_CHANNEL": {
    channel: string,
  },
  "DOWNVOTES_IN_CHANNEL": {
    channel: string,
  },
  "GLOBAL_POINTS_IN_CHANNEL": {
    channel: string,
  },
  "STARBOARDED_IN_CHANNEL": {
    channel: string,
  },
  "MESSAGES_TRASHED_IN_CHANNEL": {
    channel: string,
  },
  "MOST_STARRED_MESSAGES_BY_USER": {
    user: string,
  },
  "MOST_STARRED_MESSAGES_IN_CHANNEL": {
    channel: string,
  },
  "MOST_STARRED_MESSAGES_BY_USER_IN_CHANNEL": {
    user: string,
    channel: string,
  },
  "MOST_STARRED_CHANNEL_USER": {
    user: string,
  },
  "TIER_AFTER": {
    style: string,
    stars: number,
  },
  "NUMBER_CHANNELS": {
    channels: number,
  },
  "CANNOT_SEND_MESSAGES_IN_CHANNEL": {
    channel: string,
  },
  "CANNOT_SEND_EMBEDS_IN_CHANNEL": {
    channel: string,
  },
  "CANNOT_VIEW_CHANNEL": {
    channel: string,
  },
  "CANNOT_VIEW_VOICE_CHANNEL": {
    channel: string,
  },
  "CANNOT_READ_HISTORY_IN_CHANNEL": {
    channel: string,
  },
  "CANNOT_CONNECT_IN_VOICE_CHANNEL": {
    channel: string,
  },
  "MISSING_PERMISSIONS_CHANGE_SETTINGS": {
    permission: string,
  },
  "INVALID_CHANNEL_SETTING": {
    setting: string,
  },
  "INVALID_GUILD_SETTING": {
    setting: string,
  },
  "INVALID_SETTING": {
    setting: string,
  },
  "INVALID_LANGUAGE": {
    language: string,
  },
  "LANGUAGE_SET": {
    language: string,
  },
  "CREATE_STARBOARD_SUCCESS": {
    channel: string,
  },
  "CREATE_NSFW_STARBOARD_SUCCESS": {
    channel: string,
  },
  "STARBOARD_SET_SUCCESS": {
    settingsType: "channel" | "server",
    channel: string,
  },
  "STARBOARD_UNSET_SUCCESS": {
    settingsType: "channel" | "server",
  },
  "NSFW_STARBOARD_SET_SUCCESS": {
    channel: string,
  },
  "REQUIRED_STARS_SET": {
    settingsType: "channel" | "server",
    number: number,
  },
  "REQUIRED_STARS_SET_BOTH": {
    settingsType: "channel" | "server",
    required: number,
    requiredToRemove: number,
  },
  "RTR_SET": {
    settingsType: "channel" | "server",
    number: number,
  },
  "RTR_SET_BOTH": {
    settingsType: "channel" | "server",
    requiredToRemove: number,
    required: number,
  },
  "PERMISSIONS_SET_SUCCESS": {
    permission: string,
  },
  "COLOR_INVALID_COLOUR": {
    input: string,
  },
  "COLOR_SET_SUCCESS": {
    above: number,
    color: "role" | "random",
  },
  "STAR_REQUIREMENT_TOO_HIGH": {
    ordinal: "first" | "second" | "third" | "fourth",
  },
  "STAR_REQUIREMENT_TOO_LOW": {
    ordinal: "first" | "second" | "third" | "fourth",
  },
  "STAR_REQUIREMENT_BOUNDARY_HIGHER": {
    ordinal: "first" | "second" | "third" | "fourth",
    number: number,
    prevOrdinal: "first" | "second" | "third" | "fourth",
  },
  "STAR_REQUIREMENT_BOUNDARY_LOWER": {
    ordinal: "first" | "second" | "third" | "fourth",
    number: number,
    nextOrdinal: "first" | "second" | "third" | "fourth",
  },
  "STAR_REQUIREMENT_SET": {
    ordinal: "first" | "second" | "third" | "fourth",
    number: number,
  },
  "EMOJI_ADD_SUCCESS": {
    emoji: string,
  },
  "EMOJI_REMOVE_SUCCESS": {
    emoji: string,
  },
  "EMOJI_SET_SUCCESS": {
    emoji: string,
  },
  "STAR_SET_SUCCESS": {
    ordinal: "first" | "second" | "third" | "fourth",
    emoji: string,
  },
  "DOWNVOTE_EMOJI_SET": {
    emoji: string,
  },
  "UNKOWN_MESSAGE": {
    id: string,
    channel: string,
  },
  "REFRESH_SUCCESS": {
    url: string | null,
  },
  "FORCE_SUCCESS": {
    url: string | null,
  },
  "POST_SUCCESS": {
    url: string | null,
  },
  "NSFW_STARBOARD_ID_SETTING_DESCRIPTION_LONG": {
    extend: string,
  },
  "LINK_DELETES_SETTING_DESCRIPTION_LONG": {
    extend: string,
  },
  "TIERS_SETTING_DESCRIPTION_LONG": {
    extend: string,
  },
  "COMMANDS.BLACKLIST.EMBED_DESCRIPTION": {
    blacklistedOnStarboard: boolean,
    settingsType: "channel" | "server",
    prefix: string,
    nothing: boolean,
  },
  "COMMANDS.BLACKLIST.NOT_FOUND": {
    settingsType: "channel" | "server",
  },
  "COMMANDS.BLACKLIST.ALREADY_BLACKLISTED": {
    item: string,
  },
  "COMMANDS.BLACKLIST.NOT_BLACKLISTED": {
    item: string,
  },
  "COMMANDS.BLACKLIST.BLACKLIST_ADD_SUCCESS": {
    item: string,
  },
  "COMMANDS.BLACKLIST.BLACKLIST_ADD_CHANNELS_SUCCESS": {
    number: number,
  },
  "COMMANDS.BLACKLIST.BLACKLIST_REMOVE_SUCCESS": {
    item: string,
  },
  "COMMANDS.CHANNELSETTINGS.NO_CHANNEL_SETTINGS": {
    prefix: string,
    guide: string,
  },
  "COMMANDS.CHANNELSETTINGS.EMBED_DESCRIPTION": {
    prefix: string,
    guide: string,
  },
  "COMMANDS.CHANNELSETTINGS.EMBED_DESCRIPTION_GUIDE": {
    prefix: string,
    guide: string,
  },
  "COMMANDS.CHANNELSETTINGS.CONFIRMATION_EMBED": {
    name: string,
  },
  "COMMANDS.CHANNELSETTINGS.SUCCESS_CREATE": {
    size: number,
    name: string,
  },
  "COMMANDS.CHANNELSETTINGS.MODIFIED_NAME": {
    name: string,
  },
  "COMMANDS.CHANNELSETTINGS.MODIFIED_CHANNELS": {
    size: number,
  },
  "COMMANDS.CHANNELSETTINGS.MODIFIED_BOTH": {
    name: string,
    size: number,
  },
  "COMMANDS.CHANNELSETTINGS.SUCCESS_DELETE": {
    name: string,
  },
  "COMMANDS.DEBUG.MISSING_FILES": {
    channel: string,
  },
  "COMMANDS.DEBUG.BLACKLISTED_ROLES": {
    roles: string,
  },
  "COMMANDS.DEBUG.CHANNEL_BLACKLISTED": {
    channel: string,
  },
  "COMMANDS.DEBUG.CONTENT_MIN": {
    limit: number,
    length: number,
  },
  "COMMANDS.DEBUG.CONTENT_MAX": {
    limit: number,
    length: number,
  },
  "COMMANDS.DEBUG.MATCH_REGEX": {
    regex: string,
  },
  "COMMANDS.DEBUG.CONTENT_INCLUDES": {
    text: string,
  },
  "COMMANDS.DEBUG.NOT_MATCH_REGEX": {
    regex: string,
  },
  "COMMANDS.DEBUG.CONTENT_EXCLUDES": {
    text: string,
  },
  "COMMANDS.DEBUG.ATTACHMENT_MIN": {
    min: number,
    size: number,
  },
  "COMMANDS.DEBUG.ATTACHMENT_MAX": {
    max: number,
    size: number,
  },
  "COMMANDS.DEBUG.OLDER_THAN": {
    time: string,
    age: string,
  },
  "COMMANDS.DEBUG.SENT_BEFORE": {
    date: Date,
    sent: Date,
  },
  "COMMANDS.DEBUG.NEWER_THAN": {
    time: string,
    age: string,
  },
  "COMMANDS.DEBUG.SENT_AFTER": {
    date: Date,
    sent: Date,
  },
  "COMMANDS.DEBUG.REQUIRED_STARS": {
    required: number,
    emojis: string,
    stars: string,
  },
  "COMMANDS.EXPLORE.NOT_FOUND_STARS": {
    stars: number,
  },
  "COMMANDS.EXPLORE.TYPE_NOT_FOUND": {
    stars: string | null,
    type: "server" | "user" | "you",
  },
  "COMMANDS.EXPLORE.COULD_NOT_FETCH": {
    id: string,
  },
  "COMMANDS.HALLOFFAME.LINE": {
    message: string,
    author: string,
    star: string,
    stars: number,
  },
  "COMMANDS.HALLOFFAME.NOTHING": {
    prefix: string,
  },
  "COMMANDS.HELP.EMBED_DESCRIPTION": {
    commands: number,
    prefix: string,
    guideLink: string,
    supportLink: string,
  },
  "COMMANDS.LANGUAGES.EMBED_DESCRIPTION": {
    languagesList: string,
    language: string,
    prefix: string,
  },
  "COMMANDS.LEADERBOARD.TITLE": {
    title: string,
  },
  "COMMANDS.LEADERBOARD.YOUR_PLACE": {
    item: string | null,
    place: number,
  },
  "COMMANDS.LINKS.DISCORD_LINKS": {
    invite: string,
    support: string,
  },
  "COMMANDS.LINKS.PATREON_LINK": {
    patreon: string,
  },
  "COMMANDS.LINKS.OTHER_LINKS": {
    vote: string,
    github: string,
    guide: string,
  },
  "COMMANDS.LINKS.LEGAL_LINKS": {
    privacy: string,
  },
  "COMMANDS.MESSAGEINFO.AT_DATE": {
    date: string,
  },
  "COMMANDS.MESSAGEINFO.WILL_DELETE": {
    time: string,
  },
  "COMMANDS.PREFIXES.PREFIX_ADD": {
    prefix: string,
  },
  "COMMANDS.PREFIXES.PREFIX_REMOVE": {
    prefix: string,
  },
  "COMMANDS.PREFIXES.PREFIX_SET": {
    prefix: string,
  },
  "COMMANDS.PREFIXES.LIST_PREFIXES": {
    prefixCount: number,
    prefixes: string,
  },
  "COMMANDS.PREMIUM.HAVE_PREMIUM": {
    servers: string,
  },
  "COMMANDS.QUICKACTIONS.EMBED_DESCRIPTION": {
    enabledEmoji: string,
    prefix: string,
  },
  "COMMANDS.REDEEM.EXTRA_PREMIUM": {
    months: string,
  },
  "COMMANDS.REWARDROLES.EMBED_DESCRIPTION": {
    settingsType: "channel" | "server",
    hasPerms: boolean,
    settingType: "channel" | "server",
  },
  "COMMANDS.REWARDROLES.NO_REWARD_ROLES": {
    settingType: "channel" | "server",
    prefix: string,
  },
  "COMMANDS.REWARDROLES.RR_SET": {
    name: string,
    stars: number,
  },
  "COMMANDS.REWARDROLES.RR_ADD": {
    name: string,
    stars: number,
    settingsType: "channel" | "server",
  },
  "COMMANDS.REWARDROLES.RR_REMOVE_ALL": {
    settingsType: "channel" | "server",
  },
  "COMMANDS.REWARDROLES.RR_REMOVE": {
    name: string,
    settingsType: "channel" | "server",
  },
  "COMMANDS.SETTINGS.CAN_CHANGE": {
    command: string,
  },
  "COMMANDS.SETTINGS.CANT_CHANGE": {
    reason: string,
  },
  "COMMANDS.SETTINGS.SETTINGS_APPLY": {
    channels: string,
  },
  "COMMANDS.SETTINGS.SETTINGS_APPLY_OTHER": {
    channels: string,
    other: number,
  },
  "COMMANDS.SETTINGS.SETTINGS_LIST_DESCRIPTION_NO_SETTINGS": {
    command: string,
  },
  "COMMANDS.SETTINGS.CONFIRMATION_EMBED": {
    name: string,
  },
  "COMMANDS.SETTINGS.SUCCESS_CREATE": {
    size: number,
    name: string,
  },
  "COMMANDS.SETUP.EMBED_DESCRIPTION": {
    settingsType: "server" | "channel",
  },
  "COMMANDS.SETUP.RESULT_COMPLETE": {
    starboard: string,
    required: number,
    emoji: string,
  },
  "COMMANDS.SETUP.EXTRA_INFO_REQUIRED": {
    required: number,
  },
  "COMMANDS.SETUP.EXTRA_INFO_REQUIRED_TO_REMOVE": {
    requiredToRemove: number,
  },
  "COMMANDS.STARWORTHY.WORTHY": {
    percent: number,
  },
  "COMMANDS.SUGGEST.NEED_VOTE": {
    voteLink: string,
    supportLink: string,
  },
  "COMMANDS.SUGGEST.THANK_YOU": {
    inviteLink: string,
  },
  "COMMANDS.TRASH.IS_TRASHED": {
    id: string,
    prefix: string,
  },
  "COMMANDS.TRASH.IS_NOT_TRASHED": {
    id: string,
  },
  "COMMANDS.TRASH.CLEAR_TRASH": {
    number: number,
  },
  "COMMANDS.WHITELIST.EMBED_DESCRIPTION": {
    settingsType: "channel" | "server",
    nothing: boolean,
    prefix: string,
  },
  "COMMANDS.WHITELIST.NOT_FOUND": {
    settingsType: "channel" | "server",
  },
  "COMMANDS.WHITELIST.ALREADY_WHITELISTED": {
    item: string,
  },
  "COMMANDS.WHITELIST.NOT_WHITELISTED": {
    item: string,
  },
  "COMMANDS.WHITELIST.WHITELIST_ADD": {
    item: string,
  },
  "COMMANDS.WHITELIST.WHITELIST_REMOVE": {
    item: string,
  },
}
export = MessageParameters