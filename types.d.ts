export = {
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
  "RUN_COMMAND_MISSING_PERMISSIONS_BOT": {
    permissions: string,
  },
  "NO_CHANNEL_SETTINGS_FOR_ARG": {
    channel: string | null,
  },
  "COMMANDS.BLACKLIST.EMBED_DESCRIPTION": {
    settingsType: "channel" | "server",
    blacklistedOnStarboard: boolean,
    nothing: string,
  },
}