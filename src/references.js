const references = {
  dod: {
    author: "Department of Decentralization",
    description: "Huge Logo",
    year: "2023",
    url: "https://dod.ngo/",
    accessed: "17.10.2023",
  },
  heeresbaeckerei: {
    author: "Helmchen Events",
    description: "Magazin in der Heeresbäckerei",
    url: "https://www.magazin-heeresbaeckerei.de/en/",
    accessed: "22.02.2023",
  },
  xberg: {
    author: "Visit Berlin",
    description: "Friedrichshain-Kreuzberg",
    year: "2023",
    url: "https://www.visitberlin.de/en/bezirke/friedrichshain-kreuzberg",
    accessed: "22.02.2023",
  },
  ethberlin: {
    author: "ETHBerlin",
    description: "Hackathon, Workshops, Talks",
    year: "2018",
    url: "https://ethberlin.com/",
    accessed: "22.02.2023",
  },
  ethb2rlin: {
    author: "ETHBerlin ZWEI",
    description: "Hackathon, Workshops, Talks",
    year: "2019",
    url: "https://ethberlinzwei.com/",
    accessed: "22.02.2023",
  },
  ethb3rlin: {
    author: "ETHB3RLIN",
    description: "Only a Hackathon",
    year: "2022",
    url: "https://ethberlin.ooo/",
    accessed: "22.02.2023",
  },
  goerli: {
    author: "Goerli Testnet Initiative",
    description: "GoerliCon #0",
    year: "2019",
    url: "https://goerli.net/",
    accessed: "22.02.2023",
  },
};

// iterate over references and assign their id to their count
const referencesWithId = Object.entries(references).reduce(
  (acc, [key, value], index) => {
    acc[key] = { ...value, id: index + 1 };
    return acc;
  },
  {}
);

export default referencesWithId;
