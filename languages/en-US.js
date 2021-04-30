module.exports = {
  name: "English (US)",
  HELLO_WORLD: "Hello world!",
  SETTINGS: {
    COLORS: {
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `This will be the color of the starboard message when the message has less than ${r.first} stars.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `This will be the color of the starboard message when the message has ${r.first}-${r.second - 1} stars.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `This will be the color of the starboard message when the message has ${r.second}-${r.third - 1} stars.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `This will be the color of the starboard message when the message has ${r.third} stars or more.`,
    },
    TYPES: {
      COLOR: "role/random/[color]",
      ROLE: "the author's highest role color"
    }
  },
  COMMANDS: {
    SETTINGS: {
      COLORS: "Colors"
    },
    CHANGESETTINGS: {
      COLOR_SET: (c, r) => `Successfully set the color for starboard messages above ${r} stars to ${c}.`
    },
    PREMIUM: {
      PREMIUM_INFO: idonated => `
      __By **donating**, you get (permanently):__
      - A Donator role and donator-only chat in our support server.
      - A ${idonated} badge that appears on all your starboard messages.

      __By getting **Starboard Premium**, you can:__
      - Claim a Premium role in our support server.
      *And in one server of your choice...*
      - Have up to 5 emojis.
      - Have up to 25 channel settings.
      - Have the ability to **downvote** starboard messages.
      - Have all command responses that have embeds to be the color set for starboard messages.
      `.stripIndents()
    }
  }
  // keys are missing on purpose because getting a key
  // defaults to the en-GB one if it cannot be found
  // in the specified language
  // so i only display keys that are actually different from en-GB
}