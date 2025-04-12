const references = {
  dod: {
    author: "Department of Decentralization",
    description: "collective of people from various communities",
    url: "https://dod.ngo",
    accessed: "24.10.2024",
  },
  prenzlauerBerg: {
    author: "BerlinOnline",
    description: "Prenzlauer Berg.",
    url: "https://www.berlin.de/en/districts/prenzlauer-berg/",
    accessed: "24.10.2024",
  },
  ethberlin: {
    author: "ETHBerlin",
    description: "Hackathon, Workshops, Talks.",
    year: "2018",
    url: "https://ethberlin.com",
    accessed: "24.10.2024",
  },
  ethb2rlin: {
    author: "ETHBerlin ZWEI",
    description: "Hackathon, Workshops, Talks.",
    year: "2019",
    url: "https://ethberlinzwei.com",
    accessed: "24.10.2024",
  },
  ethb3rlin: {
    author: "ETHB3RLIN",
    description: "to the power of 3.",
    year: "2022",
    url: "https://ethberlin.ooo",
    accessed: "24.10.2024",
  },
  ethb4rlin: {
    author: "ETHBerlin 04",
    description: "Identity Crisis.",
    year: "2024",
    url: "https://ethberlin.org",
    accessed: "25.10.2024",
  },
  protocol2023: {
    author: "Protocol Berg v1",
    description: "The decentralized protocol and infrastructure conference.",
    year: "2023",
    url: "https://v1.protocol.berlin",
    accessed: "25.10.2024",
  },
  colosseum: {
    author: "Colosseum",
    description: "Event Location.",
    url: "https://www.colosseumberlin.com",
    accessed: "24.10.2024",
  },
  goerli: {
    author: "Goerli Testnet Initiative",
    description: "GoerliCon #0.",
    year: "2019",
    url: "https://goerli.net",
    accessed: "24.10.2024",
  },
};

// iterate over references and assign their id to their count
const referencesWithId = Object.entries(references).reduce((acc, [key, value], index) => {
  acc[key] = { ...value, id: index + 1 };
  return acc;
}, {});

export default referencesWithId;
