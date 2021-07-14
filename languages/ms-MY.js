module.exports = {
  name: "Malay",
  HELLO_WORLD: "Salam Sejahtera!",
  SETTINGS: {
    COLORS: {
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `Ini akan menjadi warna mesej starboard apabila mesej tersebut mempunyai kurang daripada ${r.first} bintang.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `Ini akan menjadi warna mesej starboard apabila mesej tersebut mempunyai antara ${r.first}-${r.second - 1} bintang.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `Ini akan menjadi warna mesej starboard apabila mesej tersebut mempunyai antara ${r.second}-${r.third - 1} stars.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `Ini akan menjadi warna mesej starboard apabila mesej tersebut mempunyai ${r.third} bintang atau lebih.`,
    },
    TYPES: {
      COLOR: "peranan/rawak/[warna]",
      ROLE: "warna peranan tertinggi pengarang mesej"
    }
  },
  COMMANDS: {
    SETTINGS: {
      COLORS: "Warna"
    },
    CHANGESETTINGS: {
      COLOR_SET: (c, r) => `Berjaya menetapkan warna mesej starboard berbintang lebih ${r} kepada ${c}.`
    },
    PREMIUM: {
      PREMIUM_INFO: idonated => `
      __Dengan **menderma**, anda mendapat (selama-lamanya):__
      - Peranan Penderma (Donator) dan akses kepada perbualan penderma di pelayan bantuan kami.
      - Lencana ${idonated} yang muncul di semua mesej starboard anda.

      __Dengan mendapat **Starboard Premium**, anda boleh:__
      - Tuntut peranan Premium di pelayan bantuan kami.
      *Dan di satu pelayan pilihan anda...*
      - Mempunyai sebanyak 5 emoji.
      - Mempunyai sebanyak 25 tetapan saluran.
      - Mempunyai keupayaan untuk **mengundi turun** mesej starboard.
      - Mengubah semua balasan perintah yang mempunyai pembubuhan untuk mempunyai warna yang ditetapkan bagi mesej starboard.
      `.stripIndents()
    }
  }
  // keys are missing on purpose because getting a key
  // defaults to the en-GB one if it cannot be found
  // in the specified language
  // so i only display keys that are actually different from en-GB
}