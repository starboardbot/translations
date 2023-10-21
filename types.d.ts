// auto generated by ./scripts/types.js

declare type MessageParameters = {
  "REPLYING_TO_USER": {
    user: string,
  },
  "SENT_A_STICKER": {
    name: string,
  },
  "STARBOARD_MESSAGE_IMAGE_N": {
    number: number,
  },
  "STARBOARD_MESSAGE_VIDEO_N": {
    number: number,
  },
  "STARBOARD_MESSAGE_FILE_N": {
    number: number,
  },
  "STARBOARD_MESSAGE_SPOILER": {
    content: string,
  },
  "SETTINGS_NOT_FOUND": {
    name: string,
  },
  "SUCCESS_CREATE_SETTINGS": {
    name: string,
    type: "channel" | "channelType" | "emoji" | "role",
    channels: number,
    emojis: number,
    roles: number,
  },
  "SUCCESS_CREATE_SETTINGS_CHANNELS_NOTICE": {
    channels: number,
  },
  "CONFIRMATION_DELETE_SETTINGS": {
    name: string,
  },
  "SUCCESS_DELETE_SETTINGS": {
    name: string,
  },
  "CONFIRMATION_RESET_CREATED_SETTINGS": {
    name: string,
  },
  "SUCCESS_RESET_SETTINGS": {
    name: string | null,
  },
  "SUCCESS_CREATE_EMOJI_SETTINGS_NOTICE": {
    emojis: string,
  },
  "INHERITS_SETTINGS_FROM": {
    name: string,
  },
  "SETTINGS_APPLY_CHANNELS": {
    other: number,
    channels: string,
  },
  "SETTINGS_APPLY_CHANNEL_TYPES": {
    type: string,
  },
  "SETTINGS_APPLY_ROLES": {
    other: number,
    channels: string | null,
    roles: string,
  },
  "SETTINGS_APPLY_EMOJIS": {
    emojis: string,
    channels: string | null,
  },
  "NUMBER_STARS": {
    stars: number,
  },
  "NUMBER_CHARACTERS": {
    chars: number,
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
  "SUCCESS_CHANGE_SETTINGS": {
    name: string,
  },
  "SUCCESS_CHANGE_SETTINGS_NOTICE": {
    notices: string,
  },
  "MISSING_ATTACH_FILES_PERMISSION_NOTICE": {
    channel: string,
  },
  "REQUIRED_STARS_CLASH_SET": {
    requiredStars: number,
    requiredToRemove: number,
  },
  "UNUSABLE_REACTION_EMOJIS_PROVIDED": {
    emojis: string,
  },
  "SETTING_ONLY_FOR_SERVER_SETTINGS": {
    setting: string,
  },
  "SUCCESS_EDIT_SETTINGS": {
    name: string,
    changes: string,
  },
  "SETTINGS_NOW_NAMED": {
    name: string,
  },
  "SETTINGS_PRIORITY_NOW": {
    priority: string,
  },
  "SETTINGS_NOW_INHERITS": {
    name: string,
  },
}

export = MessageParameters