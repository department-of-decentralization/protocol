import * as React from "react";
import refs from "../references";
import { SEO } from "../components/seo";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "../images/protocolBerg.png";

const FootNote = ({ id, author, description, year, url, accessed }) => (
  <li id={`fn${id}`} className="flex flex-row">
    <div className="mr-2 leading-5">[{id}]</div>
    <div className="leading-5">
      {author && <span>{author}. </span>}
      {description && <span className="italic">{description}</span>}
      {year && <span className="italic"> ({year}).</span>}
      {url && (
        <>
          <span className="text-sm"> URL: </span>
          <a href={url} target="_blank" className="font-mono text-xs">
            {url}.
          </a>
        </>
      )}
      {accessed && <span> (accessed: {accessed}).</span>}
      <a href={`#ref${id}`}>↩</a>
    </div>
  </li>
);

const Ref = ({ src }) => {
  return (
    <sup>
      <a href={`#fn${src.id}`} id={`ref${src.id}`}>
        {src.id}
      </a>{" "}
    </sup>
  );
};

const DarkModeButton = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className="absolute top-4 right-4"
      size={20}
      sunColor="#444444"
    />
  );
};
const IndexPage = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("latex-dark");
  };

  return (
    <main>
      <DarkModeButton toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <header className="text-center my-24">
        <div className="flex items-center justify-center">
          <img
            className={`w-full max-w-xs sm:w-auto h-auto ${isDarkMode ? "invert" : ""}`}
            src={logo}
            alt="Protocol Berg v2 Logo"
          />
        </div>
        <p className="italic text-center">The decentralized protocol and infrastructure conference.</p>
        <p className="text-center">
          June 12-13, 2025, Prenzlauer Berg, Berlin;
          <br />
          a Department-of-Decentralization
          <Ref src={refs.dod} /> event.
        </p>
        <p className="author">
          <div className="mt-8 text-lg"></div>
        </p>
      </header>

      <div className="abstract">
        <h2 className="font-bold" id="abstract">
          Abstract
        </h2>
        <small className="mt-4">
          Protocol Berg v2 is a conference focusing on protocol research, decentralized infrastructure, and
          core-developer experience. The two-day event with multiple stages, opportunities for technical workshops, and
          protocol community gatherings brings together protocol researchers and other stakeholders from different
          decentralized protocols. Attendance is free of charge. The event will not host any sponsors or commercial
          talks.
        </small>
      </div>
      <div>
        <h2 className="font-bold" id="toc">
          Table of Contents
        </h2>
        <ol className="pl-6 text-lg">
          <li>
            <a href="#conference">1. Conference</a>
          </li>
          <li>
            <a href="#venue">3. Venue</a>
          </li>
          <li>
            <a href="#host">4. About the Host</a>
          </li>
        </ol>
      </div>
      <section>
        <h2 className="font-bold" id="conference">
          1. Conference
        </h2>
        <p>
          Protocol Berg v2 is a two-day technical conference targeting an audience of protocol/system/network engineers,
          decentralized-infrastructure administrators, researchers, and other curious minds. Protocol Berg aims to bring
          distributed technology ecosystems together to exchange concepts and technology, talk about shared open
          problems, and learn from each other.
        </p>
        <p>
          Topics covered by the event orbits mainly around consensus protocols, distributed virtual machines,
          peer-to-peer networking, decentralized infrastructure, open-source governance, and protocol research.
        </p>
        <p>
          Tickets will be free, as in <span className="italic">free lemonade</span>. All attendees had to adhere to the
          event's <a href="/conduct">Code of Conduct</a>.
        </p>
        <p>Protocol Berg v2 is a donation-backed, non-profit event. Therefore, there will be no sponsors.</p>
        <p>
          Follow us on{" "}
          <a href="https://x.com/protocol_berg" target="_blank" rel="noreferrer">
            X
          </a>
          ,{" "}
          <a href="https://bsky.app/profile/protocol.berlin" target="_blank" rel="noreferrer">
            Bluesky
          </a>
          , or{" "}
          <a href="https://matrix.to/#/%23protocol:dod.ngo" target="_blank" rel="noreferrer">
            Matrix
          </a>{" "}
          for updates. For the previous event, see{" "}
          <a href="https://2023.protocol.berlin" target="_blank" rel="noreferrer">
            Protocol Berg 2023
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-bold" id="cfp">
          2. Call for Participation
        </h2>
        <h3 className="font-bold" id="cfp-speakers">
          2.1 Speakers
        </h3>
        <p>
          The call for participation will open soon. Please check back here regulary.
        </p>
        <p>Talk and workshop proposals should align with one of our tracks:</p>
        <ul className="list-disc pl-6">
          <li>
            <b>Networking:</b> communication, peer-to-peer, decentralization,
            federation
          </li>
          <li>
            <b>Storage:</b> reliability, availability, durability, recovery,
            incentives, resilience
          </li>
          <li>
            <b>Consensus:</b> validation concepts, fork choice, finality
            considerations, virtual machines, programming languages
          </li>
          <li>
            <b>Cryptography:</b> key management, zero-knowledge technologies,
            hash functions, encryption, security, privacy
          </li>
          <li>
            <b>Infrastructure:</b> distributed clusters, testing and testnet
            infrastructure, blockchain system operations, orchestration
          </li>
          <li>
            <b>Philosophy:</b> vision, debate, politics, governance,
            coordination, open-source
          </li>
        </ul>
        <h3 className="font-bold" id="cfp-volunteers">
          2.2 Volunteers
        </h3>
        <p>
          Volunteer applications will open soon. Please check back here regulary.
        </p>
        <h3 className="font-bold" id="cfp-attendees">
          2.3 Attendees
        </h3>
        <p>
          General admission applications will open soon. Please check back here regulary.
        </p>
      <section>
        <h2 className="font-bold" id="venue">
          3. Venue
        </h2>
        <p>
          The <span className="italic">Colosseum</span>
          <Ref src={refs.colosseum} /> is a cinema in the Gleimviertel district of Berlin's Prenzlauer Berg
          <Ref src={refs.prenzlauerBerg} /> on the corner of Sch&ouml;nhauser Allee and Gleimstra&szlig;e. The building
          was constructed around 1892 for the Great Berlin Horse Railway. It was later rebuilt and repurposed several
          times and has served as a movie screening facility since 1924.
        </p>
        <p>
          The venue will be equipped with two stages. In addition, there will be workshop areas for deep technical study
          and knowledge-sharing classes.
        </p>
        <p>
          Latitude/Longitude:
          <br />
          <a
            href="https://nominatim.openstreetmap.org/ui/search.html?q=52.5477109%2C13.4125287"
            target="_blank"
            className="ml-12"
          >
            52.5477109, 13.4125287
          </a>
          <br />
          Street Address:
          <br />
          <a
            href="https://nominatim.openstreetmap.org/ui/search.html?q=Gleimstra%C3%9Fe+30%2C+10437+Berlin"
            target="_blank"
            className="ml-12"
          >
            Gleimstra&szlig;e 30, 10437 Berlin-Kreuzberg
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-bold" id="host">
          4. About the Host
        </h2>
        <p>
          The{" "}
          <a href="https://dod.ngo"
            target="_blank"
            className="italic">
            Department of Decentralization
          </a>{" "}
          is a collective of people from various crypto, decentralization, and blockchain communities in and around
          Berlin. The group assembled in 2018 to organize events such as ETHBerlin
          <Ref src={refs.ethberlin} />
          <Ref src={refs.ethb2rlin} />
          <Ref src={refs.ethb3rlin} />
          <Ref src={refs.ethb4rlin} />, Protocol Berg
          <Ref src={refs.protocol2023} />, and GoerliCon
          <Ref src={refs.goerli} />, and has been active since.
        </p>
        <p>
          The aim is to be an agnostic vehicle to drive adoption, educate newcomers, and raise awareness of the
          challenges and benefits of decentralization and open-source software. Currently, the Department is primarily
          run from Berlin. The collective is composed of around a dozen members who contribute voluntarily.
        </p>
        <h3 className="font-bold" id="contact">
          4.1 Contact
        </h3>
        <p>
          To connect to the Protocol Berg v2 community, join our [matrix] space: <br />
          <a href="https://matrix.to/#/%23protocol:dod.ngo" target="_blank" className="ml-12">
            &#x23;protocol:dod.ngo{" "}
          </a>
        </p>
        <p>
          To provide feedback or ask questions, please email us: <br />
          <a href="mailto:hello@protocol.berlin" className="ml-12">
            hello@protocol.berlin{" "}
          </a>
        </p>
        <h3 className="font-bold" id="donations">
          4.2 Donations
        </h3>
        <p>
          The Department of Decentralization is a charitable, non-profit organization accepting donations either via
          cryptographic transactions or traditional wire transfers.
        </p>
        <p>
          Donations on Ethereum mainnet: <code>ethberlin.eth</code>; on other EVM chains:{" "}
          <code>0xd22dC63e2388AE8226b5CAA0341fc0c1294b6B40</code>
        </p>
        <p>
          Wire (SEPA) donations:
          <br />
          Beneficiary: <code>Goerli Dezentral gGmbH</code>
          <br />
          International Bank Account Number: <code>DE16 1005 0000 0190 8447 44</code>
          <br />
          Bank Identifier Code: <code>BELADEBEXXX</code>
          <br />
          Subject: <code>Spende Protocol Berg v2</code>
        </p>
        <p>
          To donate on other platforms or to get a donation receipt, please message us at{" "}
          <a href="mailto:donations@protocol.berlin">donations@protocol.berlin</a>.
        </p>
        <h3 className="font-bold" id="imprint">
          4.3 Impressum
        </h3>
        <p>
          Angaben gem&auml;&szlig; &sect; 5 TMG: Goerli Dezentral gGmbH, Mariannenstra&szlig;e 9-10, 10999 Berlin,
          Handelsregister: HRB 207663 B, Registergericht: Amtsgericht, Charlottenburg, Berlin, Umstatzsteuer-ID:
          DE325917754, vertreten durch A. Schoedon, Telefon: +49 (0) 30 20607944, E-Mail:{" "}
          <a href="mailto:schoedon@protocol.berlin">schoedon@protocol.berlin</a>.
        </p>
        <p>
          Goerli Dezentral gGmbH is a charitable, non-profit organization serving tax-privileged purposes, according to
          the articles of association. The organization meets the statutory requirements under &sect;&sect; 51, 59, 60,
          and 61 AO in Germany.
        </p>
      </section>
      <footer className="footnotes mt-8 break-all">
        <ul>
          {
            // make refs object into an array by sorting their id and map over it
            Object.values(refs)
              .sort((a, b) => a.id - b.id)
              .map((ref) => (
                <FootNote key={ref.id} {...ref} />
              ))
          }
        </ul>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    {" "}
    <SEO />
  </>
);
