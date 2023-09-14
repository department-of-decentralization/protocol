const speakers = [
  {
    name: "Afri Schoedon",
    organization: {
      name: "Protocol Berg Team",
    },
    image: require("./images/speakers/afri.jpg"),
  },
  {
    name: "Franziska Heintel",
    organization: {
      name: "Protocol Berg Team",
    },
    image: require("./images/speakers/franzi.jpg"),
  },
  {
    name: "Trent Van Epps",
    organization: {
      name: "Protocol Guild",
      url: "https://twitter.com/ProtocolGuild",
    },
    image: require("./images/speakers/trentv.jpg"),
    twitter: "https://twitter.com/trent_vanepps",
  },
  {
    name: "Gavin Wood",
    organization: {
      name: "Polkadot",
    },
    image: require("./images/speakers/gavin.jpeg"),
    twitter: "https://twitter.com/gavofyork",
    website: "https://gavwood.com/",
  },
  {
    name: "Tanishq Jasoria",
    organization: {
      name: "Nethermind",
    },
    image: require("./images/speakers/tanishq.jpg"),
  },
  {
    name: "Philipp Kant",
    organization: {
      name: "Mina Foundation",
    },
    image: require("./images/speakers/philipp.jpg"),
    twitter: "https://twitter.com/philipp_kant",
  },
  {
    name: "Max Inden",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: require("./images/speakers/max-inden.jpg"),
    website: "https://max-inden.de",
  },
  {
    name: "Laura Lotti",
    organization: {
      name: "Other Internet",
    },
    image: require("./images/speakers/laura.jpg"),
  },
  {
    name: "Jenny Pollack",
    image: require("./images/speakers/jenny.jpg"),
    website: "https://jenny.lol",
  },
  {
    name: "Dawid Szlachta",
    organization: {
      name: "TrueBlocks",
    },
    image: require("./images/speakers/dawid.jpg"),
  },
  {
    name: "Asynchronous Phil",
    twitter: "https://twitter.com/ph_lux",
    image: require("./images/speakers/phil.jpg"),
  },
  {
    name: "Toby Shorin",
    organization: {
      name: "Other Internet",
    },
    image: require("./images/speakers/toby.jpg"),
    twitter: "https://twitter.com/tobyshorin",
    website: "https://tobyshorin.com",
  },
  {
    name: "Erik Kundt",
    organization: {
      name: "Radicle",
    },
    image: require("./images/speakers/erik.jpg"),
    twitter: "https://twitter.com/_erikli_",
  },
  {
    name: "D.",
    organization: {
      name: "Anoma",
    },
    github: "https://github.com/degregat",
    image: require("./images/speakers/d.jpg"),
  },
  {
    name: "Charleen Fei",
    organization: {
      name: "Interchain GmbH",
    },
    image: require("./images/speakers/charleen.jpg"),
    twitter: "https://twitter.com/chrlylrhc",
  },
  {
    name: "Anirudha Bose",
    organization: {
      name: "Brave",
    },
    twitter: "https://twitter.com/onybose",
  },
  {
    name: "Will Scott",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: require("./images/speakers/will.jpg"),
    website: "http://wills.co.tt",
  },
  {
    name: "Barnabé Monnot",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: require("./images/speakers/barnabe.jpg"),
    warpcast: "https://warpcast.com/barnabe",
  },
  {
    name: "Federico Kunze Küllmer",
    organization: {
      name: "Evmos",
      url: "https://evmos.org/",
    },
    image: require("./images/speakers/fede.jpg"),
    twitter: "https://twitter.com/fekunze",
  },
  {
    name: "Daniel Burckhardt",
    organization: {
      name: "Evmos",
      url: "https://evmos.org/",
    },
    image: require("./images/speakers/daniel.jpg"),
    twitter: "https://twitter.com/danburck",
  },
  {
    name: "Parithosh",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: require("./images/speakers/pari.jpg"),
    twitter: "https://twitter.com/parithosh_j",
    website: "https://parithosh.com",
  },
  {
    name: "Barnabas Busa",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: require("./images/speakers/barnabas.jpg"),
  },
  {
    name: "Jannik Luhn",
    organization: {
      name: "Shutter Network",
    },
    image: require("./images/speakers/jannik.png"),
  },
  {
    name: "Masih Derkani",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: require("./images/speakers/masih.jpg"),
    website: "https://derkani.org",
  },
  {
    name: "Molly Mackinlay",
    organization: {
      name: "Protocol Labs Starfleet",
    },
    image: require("./images/speakers/molly.jpg"),
    twitter: "https://twitter.com/momack28",
  },
  {
    name: "Richard Meissner",
    organization: {
      name: "Safe Project",
      url: "https://safe.global/",
    },
    image: require("./images/speakers/richard.jpg"),
    twitter: "https://twitter.com/rimeissner",
  },
  {
    name: "Robert Habermeier",
    image: require("./images/speakers/robert.jpg"),
  },
  {
    name: "Sebastian Martinez",
    organization: {
      name: "Radicle",
    },
    image: require("./images/speakers/sebastian.jpg"),
  },
  {
    name: "Steffen Kux",
    organization: {
      name: "dm3.network, corpus.io",
    },
    twitter: "https://twitter.com/steffenkux",
    image: require("./images/speakers/steffen.jpg"),
  },
  {
    name: "Susannah Evans",
    organization: {
      name: "Interchain Gmbh",
    },
    image: require("./images/speakers/susannah.jpg"),
    twitter: "https://twitter.com/susevans",
  },
  {
    name: "Thomas Jay Rush",
    organization: {
      name: "TrueBlocks",
    },
    image: require("./images/speakers/jay.jpg"),
    twitter: "https://twitter.com/trueblocks",
    website: "https://trueblocks.io",
  },
  {
    name: "Sam Hart",
    organization: {
      name: "Skip",
      url: "https://skip.money/",
    },
    twitter: "https://twitter.com/hxrts",
    image: require("./images/speakers/sam.jpeg"),
  },
  {
    name: "tina",
    organization: {
      name: "Eigenlayer",
      url: "https://www.eigenlayer.xyz/",
    },
    image: require("./images/speakers/tina.jpg"),
    twitter: "https://twitter.com/html_tina",
    website: "https://tina.codes/",
  },
  {
    name: "tomaka",
    image: require("./images/speakers/tomaka.png"),
  },
  {
    name: "Viet",
    image: require("./images/speakers/viet.jpg"),
    organization: {
      name: "Celestia Labs",
    },
  },
  {
    name: "Yajin (Andy) Zhou",
    organization: {
      name: "BlockSec & Zhejiang University",
    },
    image: require("./images/speakers/yajin.jpg"),
    website: "https://yajin.org",
  },
  {
    name: "dapplion",
    organization: {
      name: "Chainsafe",
      url: "https://chainsafe.io/",
    },
    image: require("./images/speakers/dapplion.jpg"),
    twitter: "https://twitter.com/dapplion",
  },
  {
    name: "Garrett MacDonald",
    image: require("./images/speakers/garrett.jpg"),
    organization: {
      name: "Permanent",
    },
  },
  {
    name: "Guillaume Ballet",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: require("./images/speakers/guillaume.jpg"),
    twitter: "https://twitter.com/gballet",
  },
  {
    name: "Jonas Seiferth",
    organization: {
      name: "Optimism Foundation",
      url: "https://optimism.io/",
    },
    image: require("./images/speakers/jonas.jpg"),
    twitter: "https://twitter.com/JonasSFT",
  },
  {
    name: "Aliasgar Merchant",
    organization: {
      name: "Informal Systems",
    },
    image: require("./images/speakers/aliasgar.jpg"),
    twitter: "https://twitter.com/Ali_the_Curios",
  },
  {
    name: "austingriffith",
    organization: {
      name: "BuildGuild & EF",
    },
    image: require("./images/speakers/austin.jpg"),
    twitter: "https://twitter.com/austingriffith",
  },
  {
    name: "Christian Reitwiessner",
    organization: {
      name: "powdr labs",
    },
    image: require("./images/speakers/chris.jpg"),
    twitter: "https://twitter.com/chriseth",
  },
  {
    name: "Constanza Gallo",
    organization: {
      name: "Swarm Foundation",
    },
    image: require("./images/speakers/constanza.jpg"),
    twitter: "https://twitter.com/costgallo",
  },
  {
    name: "elizabeth",
    organization: {
      name: "Astria",
    },
    image: require("./images/speakers/elizabeth.jpeg"),
    twitter: "https://twitter.com/elizabethereum",
  },
  {
    name: "eskimor",
    organization: {
      name: "Parity Technologies",
    },
    image: require("./images/speakers/eskimor.jpg"),
  },
  {
    name: "Grigoris",
    organization: {
      name: "Rawsciousness",
    },
    image: require("./images/speakers/grigoris.jpg"),
    twitter: "https://twitter.com/rawsciousness",
  },
  {
    name: "Igor Mandrigin",
    organization: {
      name: "Gateway.fm",
    },
    image: require("./images/speakers/igor.jpg"),
    twitter: "https://twitter.com/mandrigin",
  },
  {
    name: "Jaya Klara Brekke",
    organization: {
      name: "Nym",
    },
    image: require("./images/speakers/jaya.jpg"),
    twitter: "https://twitter.com/jayapapaya",
  },
  {
    name: "Laurence Kirk",
    organization: {
      name: "Extropy.IO",
    },
    image: require("./images/speakers/laurence.jpg"),
  },
  {
    name: "Lefteris Karapetsas",
    organization: {
      name: "rotki",
    },
    image: require("./images/speakers/lefteris.jpg"),
    twitter: "https://twitter.com/LefterisJP",
  },
  {
    name: "Mario Havel",
    organization: {
      name: "Ethereum Foundation",
    },
    image: require("./images/speakers/mario.jpg"),
  },
  {
    name: "Max Hampshire",
    organization: {
      name: "Nym",
    },
    image: require("./images/speakers/max.jpg"),
  },
  {
    name: "protolambda",
    organization: {
      name: "OP Labs",
    },
    image: require("./images/speakers/proto.jpeg"),
    twitter: "https://twitter.com/protolambda",
  },
  {
    name: "Remco Bloemen",
    organization: {
      name: "Worldcoin",
    },
    image: require("./images/speakers/remco.jpg"),
    website: "https://xn--2-umb.com/",
  },
  {
    name: "rene",
    organization: {
      name: "Celestia",
    },
    image: require("./images/speakers/rene.jpg"),
    twitter: "https://twitter.com/renelubov",
  },
  {
    name: "Sacha",
    organization: {
      name: "Parity Technologies",
    },
    image: require("./images/speakers/sacha.png"),
    twitter: "https://twitter.com/SachaL__",
  },
  {
    name: "Sebastian Buergel",
    organization: {
      name: "HOPR",
    },
    image: require("./images/speakers/scbuergel.jpg"),
    twitter: "https://twitter.com/SCBuergel",
  },
  {
    name: "Tim Daubenschütz",
    organization: {
      name: "Kiwi News",
    },
    image: require("./images/speakers/tim.jpg"),
    twitter: "https://twitter.com/timdaub",
  },
  {
    name: "Wassim Z. Alsindi",
    organization: {
      name: "MIT Computational Law Report",
    },
    image: require("./images/speakers/wassim.jpg"),
    website: "https://wassim.pubpub.org",
  },
  {
    name: "Yabir Garcia",
    organization: {
      name: "rotki",
    },
    image: require("./images/speakers/yabir.jpg"),
  },
];

const shuffledSpeakers = speakers.sort(() => (Math.random() > 0.5 ? 1 : -1));
export default shuffledSpeakers;
