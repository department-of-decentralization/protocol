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
  },
  {
    name: "Gavin Wood",
    organization: {
      name: "Polkadot Network, Parity Technologies",
    },
    image: require("./images/speakers/gavin.jpeg"),
    github: "https://github.com/gavofyork",
  },
  {
    name: "Ann Brody",
    image: require("./images/speakers/ann.jpg"),
    website: "https://annbrody.com/",
  },
  {
    name: "Molly Mackinlay",
    image: require("./images/speakers/molly.jpg"),
    twitter: "https://twitter.com/momack28",
  },
  {
    name: "Edmund Edgar",
    organization: {
      name: "reality.eth",
      url: "https://reality.eth.limo/",
    },
    image: require("./images/speakers/edmund.jpg"),
    github: "https://github.com/edmundedgar",
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
  },
  {
    name: "erin",
    image: require("./images/speakers/erin.jpg"),
    organization: {
      name: "Polkadot Network",
      url: "https://polkadot.com/",
    },
    twitter: "https://x.com/byteboro",
  },
  {
    name: "Guillaume Ballet",
    image: require("./images/speakers/guillaume.jpg"),
    github: "https://github.com/gballet",
  },
  {
    name: "Manu Alzuru",
    image: require("./images/speakers/manu.jpg"),
    organization: {
      name: "Blockravers & Lovepunks",
    },
  },
  {
    name: "Michal Rostecki",
    image: null,
  },
  {
    name: "Pedro Gomes",
    image: require("./images/speakers/pedro.jpg"),
    organization: {
      name: "WalletConnect Foundation",
    },
    website: "https://walletconnect.network",
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
    name: "Constanza Gallo",
    image: require("./images/speakers/constanza.jpg"),
    twitter: "https://x.com/costgallo",
  },
  {
    name: "Fatemeh Fannizadeh",
    image: require("./images/speakers/fatemeh.jpg"),
    twitter: "https://x.com/fatalmeh",
  },
  {
    name: "Robert Habermeier",
    image: require("./images/speakers/robert.jpg"),
    github: "https://github.com/rphmeier",
  },
  {
    name: "Wassim Alsindi",
    image: require("./images/speakers/wassim.jpg"),
    organization: {
      name: "0xSalon",
      url: "https://0xsalon.pubpub.org/",
    },
    website: "https://www.wassim.xyz",
  },
  {
    name: "Tim Beiko",
    image: require("./images/speakers/tim.jpg"),
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    farcaster: "https://warpcast.com/tim",
  },
  {
    name: "Michelle Lee",
    image: require("./images/speakers/michelle.jpg"),
    bluesky: "https://bsky.app/profile/mosh.bsky.social",
    organization: {
      name: "IPFS Foundation",
    },
  },
  {
    name: "Jaya Klara Brekke",
    image: require("./images/speakers/jaya.jpg"),
    organization: {
      name: "Nym",
      url: "https://nym.com/",
    },
  },
  {
    name: "Hudson Jameson",
    image: require("./images/speakers/hudson.jpg"),
    organization: {
      name: "Polygon, Former EF and Flashbots",
    },
    twitter: "https://x.com/hudsonjameson",
  },
  {
    name: "Lefteris Karapetsas",
    image: require("./images/speakers/lefteris.jpg"),
    organization: {
      name: "rotki",
    },
    github: "https://github.com/LefterisJP",
  },
  {
    name: "Gajinder",
    image: require("./images/speakers/gajinder.jpg"),
    organization: {
      name: "Zeam, Ethereumjs, Lodestar",
    },
    twitter: "https://x.com/Gajpower",
  },
  {
    name: "odysseas",
    image: require("./images/speakers/odysseas.jpg"),
    organization: {
      name: "Phylax Systems",
    },
    twitter: "https://twitter.com/odysseas_eth",
  },
  {
    name: "Esad Yusuf Atik",
    image: require("./images/speakers/esad.jpg"),
    organization: {
      name: "Citrea",
    },
    github: "https://github.com/chainwayxyz/citrea",
  },
  {
    name: "Arik Galansky",
    image: require("./images/speakers/arik.jpg"),
    twitter: "https://x.com/arik_g",
  },
  {
    name: "Axel Eckerbom",
    image: require("./images/speakers/axel.jpg"),
    organization: {
      name: "X1 Labs",
      url: "https://x1.network/",
    },
    twitter: "https://x.com/ackebom",
  },
  {
    name: "Casey Carr",
    image: require("./images/speakers/casey.jpg"),
    organization: {
      name: "Diffractions Collective",
    },
  },
  {
    name: "Thomas Hsueh",
    image: require("./images/speakers/thomas.jpg"),
    organization: {
      name: "topology.gg",
    },
    twitter: "https://x.com/guiltygyoza",
  },
  {
    name: "Frederik Luehrs",
    image: require("./images/speakers/frederik.jpg"),
    organization: {
      name: "Phylax Systems",
    },
    twitter: "https://x.com/FredLuehrs",
  },
  {
    name: "Lukas",
    image: require("./images/speakers/lukas.jpg"),
    organization: {
      name: "ZeroSync",
    },
  },
  {
    name: "Shawn Tabrizi",
    image: require("./images/speakers/shawn.jpg"),
    organization: {
      name: "Polkadot",
    },
    github: "https://github.com/shawntabrizi",
  },
  {
    name: "Daniel Norman",
    image: require("./images/speakers/daniel.jpg"),
    organization: {
      name: "Interplanetary Shipyard",
    },
    website: "https://ipshipyard.com/",
  },
  {
    name: "Alejandro Ranchal-Pedrosa",
    image: require("./images/speakers/alejandro.jpg"),
    organization: {
      name: "Scroll",
    },
  },
  {
    name: "Bastian Köcher",
    image: require("./images/speakers/bastian.jpg"),
    organization: {
      name: "Polkadot",
    },
    twitter: "https://x.com/bkchr",
  },
  {
    name: "Barnabé Monnot",
    image: require("./images/speakers/barnabe.jpg"),
    organization: {
      name: "Ethereum Foundation Research",
    },
    twitter: "https://x.com/barnabemonnot",
  },
  {
    name: "Sergey Fedorov",
    image: require("./images/speakers/sergey.jpg"),
    organization: {
      name: "Replica_IO",
    },
    github: "https://github.com/sergefdrv",
  },
  {
    name: "Leo Alt",
    image: require("./images/speakers/leo.jpg"),
    organization: {
      name: "powdr labs",
    },
    twitter: "https://twitter.com/leonardoalt",
  },
  {
    name: "François Garillot",
    image: require("./images/speakers/francois.jpg"),
    website: "https://www.garillot.net/",
  },
];
const shuffledSpeakers = speakers.sort(() => (Math.random() > 0.5 ? 1 : -1));
export default shuffledSpeakers;
