const speakers = [
  {
    name: "Will Scott",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: "https://speak.protocol.berlin/media/avatars/profile_znqIAz5.jpg",
  },
  {
    name: "Barnabé Monnot",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: require("./images/speakers/barnabe-monnot.jpg"),
    twitter: "https://twitter.com/barnabemonnot",
    github: "https://github.com/barnabemonnot",
  },
  {
    name: "Federico Kunze Küllmer",
    organization: {
      name: "Evmos",
      url: "https://evmos.org/",
    },
    image: null,
  },
  {
    name: "Daniel Burckhardt",
    organization: {
      name: "Evmos",
      url: "https://evmos.org/",
    },
    image: null,
  },
  {
    name: "Parithosh",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image:
      "https://speak.protocol.berlin/media/avatars/x5MkzrAf_400x400_410A3ST.jpg",
    twitter: "https://twitter.com/parithosh_j",
  },
  {
    name: "Barnabas Busa",
    organization: {
      name: "Ethereum Foundation",
      url: "https://ethereum.foundation/",
    },
    image: "https://www.gravatar.com/avatar/4d75b40bb5562c0cf36a98c921b389be",
  },
  {
    name: "Robert H",
    organization: {
      name: "Evmos",
      url: "https://evmos.org/",
    },
    image: null,
  },
  {
    name: "cheeky-gorilla",
    organization: {
      name: "Protocol Guild Contributor",
      url: null,
    },
    image:
      "https://speak.protocol.berlin/media/avatars/cheeky-gorilla_6Fc0sGz.jpeg",
    twitter: "https://twitter.com/ProtocolGuild",
  },
  {
    name: "Jannik",
    organization: {
      name: null,
      url: null,
    },
    image: null,
  },
  {
    name: "Sam Hart",
    organization: {
      name: "Skip",
      url: null,
    },
    image: null,
    twitter: "https://twitter.com/hxrts",
  },
  {
    name: "Masih Derkani",
    organization: {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
    },
    image: "https://speak.protocol.berlin/media/avatars/i3_6xFXZDN.jpg",
  },
];

const sortedSpeakers = speakers.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(sortedSpeakers);
export default sortedSpeakers;
