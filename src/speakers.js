const speakers = [
  {
    name: "Will Scott",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: require("./images/speakers/will.jpg"),
  },
  {
    name: "Barnabé Monnot",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: require("./images/speakers/barnabe.jpg"),
    twitter: "https://twitter.com/barnabemonnot",
    github: "https://github.com/barnabemonnot",
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
  },
  {
    name: "Parithosh",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: require("./images/speakers/pari.jpg"),
    twitter: "https://twitter.com/parithosh_j",
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
      name: "Protocol Guild Contributor",
      url: "https://twitter.com/ProtocolGuild",
    },
    image: require("./images/speakers/cheeky.jpg"),
    twitter: "https://twitter.com/cheekygorilla0x",
  },
  {
    name: "Jannik",
    organization: {
      name: "Brainbot",
      url: "https://brainbot.com/",
    },
    image: require("./images/speakers/jannik.png"),
    twitter: "https://twitter.com/AnotherJannik",
  },
  {
    name: "Masih Derkani",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: require("./images/speakers/masih.jpg"),
  },
  {
    name: "Molly Mackinlay",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: require("./images/speakers/molly.jpg"),
    twitter: "https://twitter.com/momack28",
  },
  {
    name: "Richard Meissner",
    organization: {
      name: "Safe",
      url: "https://safe.global/",
    },
    image: require("./images/speakers/richard.jpg"),
    twitter: "https://twitter.com/rimeissner",
  },
  {
    name: "Robert Habermeier",
    organization: {
      name: "Polkadot",
      url: "https://polkadot.network/",
    },
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
  },
  {
    name: "tomaka",
    image: require("./images/speakers/tomaka.png"),
    twitter: "https://twitter.com/tomaka17",
  },
  {
    name: "Viet",
    image: require("./images/speakers/viet.jpg"),
  },
  {
    name: "Yajin (Andy) Zhou",
    organization: {
      name: "BlockSec",
      url: "https://blocksec.com/",
    },
    image: require("./images/speakers/yajin.jpg"),
    twitter: "https://twitter.com/yajinzhou",
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
    twitter: "https://twitter.com/bitcoingarrett",
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

const sortedSpeakers = speakers.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(sortedSpeakers);
export default sortedSpeakers;
