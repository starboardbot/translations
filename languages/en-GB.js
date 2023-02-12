module.exports = {
  name: "English (GB)",
  real: true,
  HELLO_WORLD: "Hello world!",

  YES: "Yes",
  NO: "No",
  CONTINUE: "Continue",
  CANCEL: "Cancel",
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
}