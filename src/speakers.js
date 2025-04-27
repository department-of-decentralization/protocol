const speakers = [
  {
    name: "Lisa Akselrod",
    organization: {
      name: "Aztec Labs",
      url: "https://www.aztec-labs.com/",
    },
    image: require("./images/speakers/placeholder.jpg"),
    twitter: "https://x.com/cryptobuilder_",
    code: "79CGKW",
    acceptedSessions: [
      {
        code: "FKXWHY",
        title: "Anatomy of on-chain privacy",
      },
    ],
  },
  {
    name: "Gavin Wood",
    organization: {
      name: "Polkadot Network, Parity Technologies",
    },
    image: require("./images/speakers/placeholder.jpg"),
    github: "https://github.com/gavofyork",
    code: "TNMM9H",
    acceptedSessions: [
      {
        code: "VM3L8N",
        title: "Beyond the Ledger: JAM and the Future of Scalable Decentralized Computing",
      },
    ],
  },
  {
    name: "Ann Brody",
    image: require("./images/speakers/placeholder.jpg"),
    website: "https://annbrody.com/",
    code: "SS78ZC", // The speaker in the API is "Ann and Costanza"
    acceptedSessions: [
      {
        code: "JBRYZC",
        title: "Goodbye Cypherpunk values? Adapting to the new world order",
      },
    ],
  },
  {
    name: "Molly Mackinlay",
    image: require("./images/speakers/placeholder.jpg"),
    twitter: "https://twitter.com/momack28",
    code: "F3TDMM",
    acceptedSessions: [],
  },
  {
    name: "Edmund Edgar",
    organization: {
      name: "reality.eth",
      url: "https://reality.eth.limo/",
    },
    image: require("./images/speakers/placeholder.jpg"),
    github: "https://github.com/edmundedgar",
    code: "H3FZNT",
    acceptedSessions: [
      {
        code: "37UXLY",
        title: "Bluesky, atproto, how to hack on it and why it matters",
      },
    ],
  },
  {
    name: "Paul Dylan-Ennis",
    organization: {
      name: "University College Dublin",
      url: "https://www.ucd.ie/",
    },
    image: require("./images/speakers/placeholder.jpg"),
    twitter: "https://x.com/post_polar_",
    code: "L7UVCF",
    acceptedSessions: [
      {
        code: "WBYS89",
        title: "No friends but the hash function: Descent into the Social Layer",
      },
    ],
  },
  {
    name: "erin",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Polkadot Network",
      url: "https://polkadot.com/",
    },
    twitter: "https://x.com/byteboro",
    code: "UFZNZQ",
    acceptedSessions: [],
  },
  {
    name: "Guillaume Ballet",
    image: require("./images/speakers/placeholder.jpg"),
    github: "https://github.com/gballet",
    code: "JZGDSU",
    acceptedSessions: [],
  },
  {
    name: "Manu Alzuru",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Blockravers & Lovepunks",
    },
    code: "7LYBNE",
    acceptedSessions: [],
  },
  {
    name: "Michal Rostecki",
    image: require("./images/speakers/placeholder.jpg"),
    code: "L7VGWR",
    acceptedSessions: [],
  },
  {
    name: "Pedro Gomes",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "WalletConnect Foundation",
    },
    website: "https://walletconnect.network",
    code: "SKWGBF",
    acceptedSessions: [],
  },
  {
    name: "Costanza Gallo", // Name in the API is lowercase
    image: require("./images/speakers/placeholder.jpg"),
    twitter: "https://x.com/costgallo",
    code: "ZSKWE7",
    acceptedSessions: [
      {
        code: "JBRYZC",
        title: "Goodbye Cypherpunk values? Adapting to the new world order",
      },
    ],
  },
  {
    name: "Fatemeh Fannizadeh",
    image: require("./images/speakers/placeholder.jpg"),
    twitter: "https://x.com/fatalmeh",
    code: "QTXNGK",
    acceptedSessions: [],
  },
  {
    name: "Robert Habermeier",
    image: require("./images/speakers/placeholder.jpg"),
    github: "https://github.com/rphmeier",
    code: "LZFC3A",
    acceptedSessions: [],
  },
  {
    name: "Wassim Alsindi",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "0xSalon",
      url: "https://0xsalon.pubpub.org/",
    },
    website: "https://www.wassim.xyz",
    code: "CARPLZ",
    acceptedSessions: [
      {
        code: "LATYL3",
        title: "The Chain Mail Gaze",
      },
    ],
  },
  {
    name: "Tim Beiko",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    farcaster: "https://warpcast.com/tim",
    code: "VMEVD8",
    acceptedSessions: [
      {
        code: "RUM7ET",
        title: "How Ethereum Governance (Actually) Works",
      },
    ],
  },
  {
    name: "Michelle Lee",
    image: require("./images/speakers/placeholder.jpg"),
    bluesky: "https://bsky.app/profile/mosh.bsky.social",
    organization: {
      name: "IPFS Foundation",
    },
    code: "QXANZJ",
    acceptedSessions: [],
  },
  {
    name: "Jaya Klara Brekke",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Nym",
      url: "https://nym.com/",
    },
    code: "YCARUG",
    acceptedSessions: [],
  },
  {
    name: "Hudson Jameson",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Polygon, Former EF and Flashbots",
    },
    twitter: "https://x.com/hudsonjameson",
    code: "F8CS3J",
    acceptedSessions: [],
  },
  {
    name: "Lefteris Karapetsas",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "rotki",
    },
    github: "https://github.com/LefterisJP",
    code: "S3UTHE",
    acceptedSessions: [],
  },
  {
    name: "Gajinder",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Zeam, Ethereumjs, Lodestar",
    },
    twitter: "https://x.com/Gajpower",
    code: "PMDAYM",
    acceptedSessions: [],
  },
  {
    name: "odysseas",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Phylax Systems",
    },
    twitter: "https://twitter.com/odysseas_eth",
    code: "CYFQLS",
    acceptedSessions: [],
  },
  {
    name: "Esad Yusuf Atik",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Citrea",
    },
    github: "https://github.com/chainwayxyz/citrea",
    code: "BYQHEF",
    acceptedSessions: [
      {
        code: "JVZ3HB",
        title: "How to Build Rollups on Bitcoin",
      },
    ],
  },
  {
    name: "Arik Galansky",
    image: require("./images/speakers/placeholder.jpg"),
    twitter: "https://x.com/arik_g",
    code: "VQAEGL",
    acceptedSessions: [
      {
        code: "SNZKTA",
        title: "MPC at internet scale",
      },
    ],
  },
  {
    name: "Axel Eckerbom",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "X1 Labs",
      url: "https://x1.network/",
    },
    twitter: "https://x.com/ackebom",
    code: "N8QFVP",
    acceptedSessions: [
      {
        code: "VJMYK8",
        title: "SVM Protocol Design",
      },
    ],
  },
  {
    name: "Casey Carr",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Diffractions Collective",
    },
    code: "MX9MGS",
    acceptedSessions: [
      {
        code: "TJ7FEP",
        title:
          "Swarming by the STIX: Exploring decentralized Traffic Light Protocol (TLP) and Semaphore for Spyware Honeytrapper indicator-sharing in highly-surveilled environments",
      },
    ],
  },
  {
    name: "Thomas Hsueh",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "topology.gg",
    },
    twitter: "https://x.com/guiltygyoza",
    code: "QFCEN9",
    acceptedSessions: [],
  },
  {
    name: "Frederik Luehrs",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Phylax Systems",
    },
    twitter: "https://x.com/FredLuehrs",
    code: "8Z89AT",
    acceptedSessions: [],
  },
  {
    name: "Lukas",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "ZeroSync",
    },
    code: "N8HWF7",
    acceptedSessions: [],
  },
  {
    name: "Shawn Tabrizi",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Polkadot",
    },
    github: "https://github.com/shawntabrizi",
    code: "7ZGFWB",
    acceptedSessions: [
      {
        code: "C3EHHJ",
        title: "PolkaVM: A fast and secure RISC-V based virtual machine",
      },
    ],
  },
  {
    name: "Daniel Norman",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Interplanetary Shipyard",
    },
    website: "https://ipshipyard.com/",
    code: "GT9CJP",
    acceptedSessions: [
      {
        code: "KPXZ9K",
        title: "Don’t Trust, Verify: IPFS for (D)App Distribution on the Web in 2025",
      },
    ],
  },
  {
    name: "Alejandro Ranchal-Pedrosa",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Scroll",
    },
    code: "CH3MTN",
    acceptedSessions: [
      {
        code: "ZY83BS",
        title: "Rebased Rollups: Achieving Credibly Neutral Synchronous Composability with Low Latency and Cost",
      },
    ],
  },
  {
    name: "Bastian Köcher",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Polkadot",
    },
    twitter: "https://x.com/bkchr",
    code: "KQ7ERU",
    acceptedSessions: [
      {
        code: "8TPXVT",
        title: "CorePlay - An actor-like framework for blockchains",
      },
    ],
  },
  {
    name: "Barnabé Monnot",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Ethereum Foundation Research",
    },
    twitter: "https://x.com/barnabemonnot",
    code: "XTVGXJ",
    acceptedSessions: [
      {
        code: "VKDPKG",
        title: "What we want from our nodes",
      },
    ],
  },
  {
    name: "Sergey Fedorov",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "Replica_IO",
    },
    github: "https://github.com/sergefdrv",
    code: "UQP3UF",
    acceptedSessions: [
      {
        code: "QHGJDW",
        title: "New insights into distributed and concurrent programming",
      },
    ],
  },
  {
    name: "Leo Alt",
    image: require("./images/speakers/placeholder.jpg"),
    organization: {
      name: "powdr labs",
    },
    twitter: "https://twitter.com/leonardoalt",
    code: "ZUNRYM",
    acceptedSessions: [
      {
        code: "RRFHHB",
        title: "Compiler-based optimizations for zkVMs",
      },
    ],
  },
  {
    name: "François Garillot",
    image: require("./images/speakers/placeholder.jpg"),
    website: "https://www.garillot.net/",
    code: "HQHFTY",
    acceptedSessions: [
      {
        code: "XSAXXE",
        title: "Modern Multi-proposer consensus implementations",
      },
    ],
  },
];

const shuffledSpeakers = speakers.sort(() => (Math.random() > 0.5 ? 1 : -1));

export default shuffledSpeakers;
