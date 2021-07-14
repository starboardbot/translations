module.exports = {
  name: "Malay (Jawi)",
  HELLO_WORLD: "سلام سجهترا!",
  SETTINGS: {
    COLORS: {
      FIRST: (_p, _prm, _n, { starRequirements: r }) => `اين اکن منجادي ورنا ميسيج ستربورد اڤابيلا ميسيج ترسبوت ممڤوڽاءي کورڠ درڤد ${r.first} بينتڠ.`,
      SECOND: (_p, _prm, _n, { starRequirements: r }) => `اين اکن منجادي ورنا ميسيج ستربورد اڤابيلا ميسيج ترسبوت ممڤوڽاءي انتارا ${r.first}-${r.second - 1} بينتڠ.`,
      THIRD: (_p, _prm, _n, { starRequirements: r }) => `اين اکن منجادي ورنا ميسيج ستربورد اڤابيلا ميسيج ترسبوت ممڤوڽاءي انتارا ${r.second}-${r.third - 1} بينتڠ.`,
      FOURTH: (_p, _prm, _n, { starRequirements: r }) => `اين اکن منجادي ورنا ميسيج ستربورد اڤابيلا ميسيج ترسبوت ممڤوڽاءي ${r.third} بينتڠ اتاو لبيه.`,
    },
    TYPES: {
      COLOR: "ڤرنن/راوق/[ورنا]",
      ROLE: "ورنا ڤرنن ترتيڠݢي ڤڠارڠ ميسيج"
    }
  },
  COMMANDS: {
    SETTINGS: {
      COLORS: "ورنا"
    },
    CHANGESETTINGS: {
      COLOR_SET: (c, r) => `برجاي منتڤکن ورنا ميسيج ستربورد بربينتڠ لبيه ${r} کڤد ${c}.`
    },
    PREMIUM: {
      PREMIUM_INFO: idonated => `
      __دڠن **مندرما**⹁ اندا منداڤت (سلاما-لاماڽ):__
      - ڤرنن ڤندرما (Donator) دان اکسيس کڤد ڤربوالن ڤندرما دڤلاين بنتوان کامي.
      - لنچان ${idonated} يڠ مونچول دسموا ميسيج ستربورد اندا.

      __دڠن منداڤت **ستربورد ڤريميوم**, اندا بوليه:__
      - تونتوت ڤرنن Premium دڤلاين بنتوان کامي.
      *دان دساتو ڤلاين ڤيليهن اندا...*
      - ممڤوڽاءي سباڽق ايموجي.
      - ممڤوڽاءي سباڽق 25 تتڤن سالورن.
      - ممڤوڽاءي کأوڤاياءن اونتوق **مڠاوندي تورون** ميسيج ستربورد.
      - مڠاوبه سموا بالسن ڤرينته يڠ ممڤوڽاءي ڤمبوبوهن اونتوقق ممڤوڽاءي ورنا يڠ دتتڤکن باݢي ميسيج ستربورد. 
      `.stripIndents()
    }
  }
  // keys are missing on purpose because getting a key
  // defaults to the en-GB one if it cannot be found
  // in the specified language
  // so i only display keys that are actually different from en-GB
}