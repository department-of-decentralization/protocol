const references = {
  dod: {
    author: "Department of Decentralization",
    description: "About Us - ETHBerlin",
    year: "2022",
    url: "https://ethberlin.ooo/decentralization/",
    accessed: "22.02.2023",
  },
  dappcon: {
    author: "DAPPCON",
    description: "Dapp Developer Conference",
    year: "2023",
    url: "https://dappcon.io/",
    accessed: "22.02.2023",
  },
  desci: {
    author: "DeSci Berlin",
    description: "Decentralized Science Conference",
    year: "2023",
    url: "https://desci.berlin/",
    accessed: "22.02.2023",
  },
  blockchainweek: {
    description: "Berlin Blockchain Week",
    year: "2022",
    url: "https://blockchainweek.berlin/",
    accessed: "22.02.2023",
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
    url: "https://www.visitberlin.de/en/bezirke/friedrichshain-kreuzberg",
    accessed: "22.02.2023",
  },
  ethberlin: {
    author: "ETHBerlin",
    description: "Hackathon, Workshop, Talks",
    year: "2018",
    url: "https://ethberlin.com/",
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
