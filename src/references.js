const references = {
  dod: {
    author: "Department of Decentralization",
    description: "Huge Logo",
    year: "2023",
    url: "https://dod.ngo/",
    accessed: "24.10.2024",
  },
  prenzlauerBerg: {
    author: "Visit Berlin",
    description: "Prenzlauer Berg",
    year: "2024",
    url: "https://www.berlin.de/en/districts/prenzlauer-berg/",
    accessed: "24.10.2024",
  },
  ethberlin: {
    author: "ETHBerlin 04",
    description: "Hackathon, Workshops, Talks",
    year: "2018",
    url: "https://ethberlin.com/",
    accessed: "24.10.2024",
  },
  ethb2rlin: {
    author: "ETHBerlin ZWEI",
    description: "Hackathon, Workshops, Talks",
    year: "2019",
    url: "https://ethberlinzwei.com/",
    accessed: "24.10.2024",
  },
  ethb3rlin: {
    author: "ETHB3RLIN",
    description: "Only a Hackathon",
    year: "2022",
    url: "https://ethberlin.ooo/",
    accessed: "24.10.2024",
  },
  protocol2023: {
    author: "Protocol Berg 2023",
    description: "The decentralized protocol and infrastructure conference",
    year: "2023",
    url: "https://protocol.berlin/",
    accessed: "24.10.2024",
  },
  colosseum: {
    author: "Colosseum Event Berlin GmbH",
    description:
      "Umschlingend der Pferde-Eisenbahn Hallen, die bereits seit 130 Jahren Bestand haben, erhebt sich das prächtige Kino-Komplex der Colosseum Berlin Event GmbH. Diese einzigartige Eventfläche verbindet das historische Mauerwerk mit modernem Flair.",
    url: "https://www.colosseumberlin.com/",
    accessed: "24.10.2024",
  },
  goerli: {
    author: "Goerli Testnet Initiative",
    description: "GoerliCon #0",
    year: "2019",
    url: "https://goerli.net/",
    accessed: "24.10.2024",
  },
};

// iterate over references and assign their id to their count
const referencesWithId = Object.entries(references).reduce((acc, [key, value], index) => {
  acc[key] = { ...value, id: index + 1 };
  return acc;
}, {});

export default referencesWithId;
