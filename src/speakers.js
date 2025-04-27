const speakers = [
  // {
  //   name: "Trent Van Epps",
  //   organization: {
  //     name: "Protocol Guild",
  //     url: "https://twitter.com/ProtocolGuild",
  //   },
  //   image: require("./images/speakers/trentv.jpg"),
  //   twitter: "https://twitter.com/trent_vanepps",
  // },
  {
    name: "Lisa Akselrod",
    organization: {
      name: "Aztec Labs",
      url: "https://www.aztec-labs.com/",
    },
    image: require("./images/speakers/lisa.jpg"),
    twitter: "https://x.com/cryptobuilder_",
    code: "79CGKW",
  },
  {
    name: "Gavin Wood",
    organization: {
      name: "Polkadot Network, Parity Technologies",
    },
    image: require("./images/speakers/gavin.jpeg"),
    github: "https://github.com/gavofyork",
    code: "TNMM9H",
  },
  {
    name: "Ann Brody",
    image: require("./images/speakers/ann.jpg"),
    website: "https://annbrody.com/",
    code: "SS78ZC",
  },
  {
    name: "Molly Mackinlay",
    image: require("./images/speakers/molly.jpg"),
    twitter: "https://twitter.com/momack28",
    code: "F3TDMM",
  },
  {
    name: "Edmund Edgar",
    organization: {
      name: "reality.eth",
      url: "https://reality.eth.limo/",
    },
    image: require("./images/speakers/edmund.jpg"),
    github: "https://github.com/edmundedgar",
    code: "H3FZNT",
  },
  // {
  //   name: "Robert Habermeier",
  //   image: require("./images/speakers/robert.jpg"),
  // },
  // {
  //   name: "Steffen Kux",
  //   organization: {
  //     name: "dm3.network, corpus.io",
  //   },
  //   twitter: "https://twitter.com/steffenkux",
  //   image: require("./images/speakers/steffen.jpg"),
  // },
  {
    name: "Paul Dylan-Ennis",
    organization: {
      name: "University College Dublin",
      url: "https://www.ucd.ie/",
    },
    image: require("./images/speakers/paul-dylan.png"),
    twitter: "https://x.com/post_polar_",
    code: "L7UVCF",
  },
  {
    name: "erin",
    image: require("./images/speakers/erin.jpg"),
    organization: {
      name: "Polkadot Network",
      url: "https://polkadot.com/",
    },
    twitter: "https://x.com/byteboro",
    code: "UFZNZQ",
  },
  {
    name: "Guillaume Ballet",
    image: require("./images/speakers/guillaume.jpg"),
    github: "https://github.com/gballet",
    code: "JZGDSU",
  },
  {
    name: "Manu Alzuru",
    image: require("./images/speakers/manu.jpg"),
    organization: {
      name: "Blockravers & Lovepunks",
    },
    code: "7LYBNE",
  },
  {
    name: "Michal Rostecki",
    image: null,
    code: "L7VGWR",
  },
  {
    name: "Pedro Gomes",
    image: require("./images/speakers/pedro.jpg"),
    organization: {
      name: "WalletConnect Foundation",
    },
    website: "https://walletconnect.network",
    code: "SKWGBF",
  },
  // {
  //   name: "Aliasgar Merchant",
  //   organization: {
  //     name: "Informal Systems",
  //   },
  //   image: require("./images/speakers/aliasgar.jpg"),
  //   twitter: "https://twitter.com/Ali_the_Curios",
  // },
  // {
  //   name: "austingriffith",
  //   organization: {
  //     name: "BuildGuild & EF",
  //   },
  //   image: require("./images/speakers/austin.jpg"),
  //   twitter: "https://twitter.com/austingriffith",
  // },
  {
    name: "Costanza Gallo",
    image: require("./images/speakers/constanza.jpg"),
    twitter: "https://x.com/costgallo",
    code: "ZSKWE7",
  },
  {
    name: "Fatemeh Fannizadeh",
    image: require("./images/speakers/fatemeh.jpg"),
    twitter: "https://x.com/fatalmeh",
    code: "QTXNGK",
  },
  {
    name: "Robert Habermeier",
    image: require("./images/speakers/robert.jpg"),
    github: "https://github.com/rphmeier",
    code: "LZFC3A",
  },
  {
    name: "Wassim Alsindi",
    image: require("./images/speakers/wassim.jpg"),
    organization: {
      name: "0xSalon",
      url: "https://0xsalon.pubpub.org/",
    },
    website: "https://www.wassim.xyz",
    code: "CARPLZ",
  },
  {
    name: "Tim Beiko",
    image: require("./images/speakers/tim.jpg"),
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    farcaster: "https://warpcast.com/tim",
    code: "VMEVD8",
  },
  {
    name: "Michelle Lee",
    image: require("./images/speakers/michelle.jpg"),
    bluesky: "https://bsky.app/profile/mosh.bsky.social",
    organization: {
      name: "IPFS Foundation",
    },
    code: "QXANZJ",
  },
  {
    name: "Jaya Klara Brekke",
    image: require("./images/speakers/jaya.jpg"),
    organization: {
      name: "Nym",
      url: "https://nym.com/",
    },
    code: "YCARUG",
  },
  {
    name: "Hudson Jameson",
    image: require("./images/speakers/hudson.jpg"),
    organization: {
      name: "Polygon, Former EF and Flashbots",
    },
    twitter: "https://x.com/hudsonjameson",
    code: "F8CS3J",
  },
  {
    name: "Lefteris Karapetsas",
    image: require("./images/speakers/lefteris.jpg"),
    organization: {
      name: "rotki",
    },
    github: "https://github.com/LefterisJP",
    code: "S3UTHE",
  },
  {
    name: "Gajinder",
    image: require("./images/speakers/gajinder.jpg"),
    organization: {
      name: "Zeam, Ethereumjs, Lodestar",
    },
    twitter: "https://x.com/Gajpower",
    code: "PMDAYM",
  },
  {
    name: "odysseas",
    image: require("./images/speakers/odysseas.jpg"),
    organization: {
      name: "Phylax Systems",
    },
    twitter: "https://twitter.com/odysseas_eth",
    code: "CYFQLS",
  },
  {
    name: "Esad Yusuf Atik",
    image: require("./images/speakers/esad.jpg"),
    organization: {
      name: "Citrea",
    },
    github: "https://github.com/chainwayxyz/citrea",
    code: "BYQHEF",
  },
  {
    name: "Arik Galansky",
    image: require("./images/speakers/arik.jpg"),
    twitter: "https://x.com/arik_g",
    code: "VQAEGL",
  },
  {
    name: "Axel Eckerbom",
    image: require("./images/speakers/axel.jpg"),
    organization: {
      name: "X1 Labs",
      url: "https://x1.network/",
    },
    twitter: "https://x.com/ackebom",
    code: "N8QFVP",
  },
  {
    name: "Casey Carr",
    image: require("./images/speakers/casey.jpg"),
    organization: {
      name: "Diffractions Collective",
    },
    code: "MX9MGS",
  },
  {
    name: "Thomas Hsueh",
    image: require("./images/speakers/thomas.jpg"),
    organization: {
      name: "topology.gg",
    },
    twitter: "https://x.com/guiltygyoza",
    code: "QFCEN9",
  },
  {
    name: "Frederik Luehrs",
    image: require("./images/speakers/frederik.jpg"),
    organization: {
      name: "Phylax Systems",
    },
    twitter: "https://x.com/FredLuehrs",
    code: "8Z89AT",
  },
  {
    name: "Lukas",
    image: require("./images/speakers/lukas.jpg"),
    organization: {
      name: "ZeroSync",
    },
    code: "N8HWF7",
  },
  {
    name: "Shawn Tabrizi",
    image: require("./images/speakers/shawn.jpg"),
    organization: {
      name: "Polkadot",
    },
    github: "https://github.com/shawntabrizi",
    code: "7ZGFWB",
  },
  {
    name: "Daniel Norman",
    image: require("./images/speakers/daniel.jpg"),
    organization: {
      name: "Interplanetary Shipyard",
    },
    website: "https://ipshipyard.com/",
    code: "GT9CJP",
  },
  {
    name: "Alejandro Ranchal-Pedrosa",
    image: require("./images/speakers/alejandro.jpg"),
    organization: {
      name: "Scroll",
    },
    code: "CH3MTN",
  },
  {
    name: "Bastian Köcher",
    image: require("./images/speakers/bastian.jpg"),
    organization: {
      name: "Polkadot",
    },
    twitter: "https://x.com/bkchr",
    code: "KQ7ERU",
  },
  {
    name: "Barnabé Monnot",
    image: require("./images/speakers/barnabe.jpg"),
    organization: {
      name: "Ethereum Foundation Research",
    },
    twitter: "https://x.com/barnabemonnot",
    code: "XTVGXJ",
  },
  {
    name: "Sergey Fedorov",
    image: require("./images/speakers/sergey.jpg"),
    organization: {
      name: "Replica_IO",
    },
    github: "https://github.com/sergefdrv",
    code: "UQP3UF",
  },
  {
    name: "Leo Alt",
    image: require("./images/speakers/leo.jpg"),
    organization: {
      name: "powdr labs",
    },
    twitter: "https://twitter.com/leonardoalt",
    code: "ZUNRYM",
  },
  {
    name: "François Garillot",
    image: require("./images/speakers/francois.jpg"),
    website: "https://www.garillot.net/",
    code: "HQHFTY",
  },
];
const shuffledSpeakers = speakers.sort(() => (Math.random() > 0.5 ? 1 : -1));
export default shuffledSpeakers;
