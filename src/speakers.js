const speakers = [
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
    name: "cheeky-gorilla",
    organization: {
      name: "Protocol Guild",
      url: "https://twitter.com/ProtocolGuild",
    },
    image: require("./images/speakers/cheeky.jpg"),
    twitter: "https://twitter.com/ProtocolGuild",
  },
  {
    name: "Jannik",
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
    name: "Sam Hart",
    organization: {
      name: "Skip",
      url: "https://skip.money/",
    },
    twitter: "https://twitter.com/hxrts",
    image: require("./images/speakers/sam.jpg"),
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
    name: "Garrett Macdonald",
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
    name: "Kaitlin Beegle",
    organization: {
      name: "Filecoin Foundation",
      url: "https://filecoin.io/",
    },
    image: require("./images/speakers/kaitlin.jpg"),
    twitter: "https://twitter.com/kaitlin_beegle",
  },
];

const shuffledSpeakers = speakers.sort(() => (
  Math.random() > .5) ? 1 : -1
);

console.log(shuffledSpeakers);
export default shuffledSpeakers;
