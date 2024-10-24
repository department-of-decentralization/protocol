import * as React from "react";
import refs from "../references";
import { SEO } from "../components/seo";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import speakers from "../speakers";
import Speaker from "../components/Speaker";
import Schedule from "../components/schedule";
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
            alt="Protocol Berg V2 Logo"
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
          Protocol Berg V2 is a two day summit providing a location specifically for protocol research, decentralized
          infrastructure, and core-developer experience. The one-day event with two stages, opportunities for technical
          workshops, and protocol community gatherings brings together protocol researchers and other stakeholders from
          different decentralized protocols. Attendance is free of charge. The event will not host any sponsors or
          commercial talks.
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
            <a href="#cfp">2. Call for Participation</a>
          </li>
          <li>
            <a href="#venue">3. Venue</a>
          </li>
          <li>
            <a href="#host">4. About the Host</a>
            <ul className="pl-6">
              <li>
                <a href="#contact">4.1 Contact</a>
              </li>
              <li>
                <a href="#donations">4.2 Donations</a>
              </li>
              <li>
                <a href="#imprint">4.3 Impressum</a>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <section>
        <h2 className="font-bold" id="conference">
          1. Conference
        </h2>
        <p>
          Protocol Berg V2 is a two-day technical conference targeting an audience of protocol/system/network engineers,
          decentralized-infrastructure administrators, researchers, and other curious minds. Protocol Berg V2 aims to
          bring distributed technology ecosystems together to exchange concepts and technology, talk about shared open
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
        <p>Protocol Berg V2 is a donation-backed, non-profit event. Therefore, there will be no sponsors.</p>
        <p>
          Follow us in{" "}
          <a href="https://x.com/protocol_berg" target="_blank" rel="noreferrer">
            Twitter
          </a>{" "}
          or{" "}
          <a href="https://matrix.to/#/%23protocol:tchncs.de" target="_blank" rel="noreferrer">
            Matrix
          </a>{" "}
          for updates.
        </p>
        <p>
          For last year's event, see{" "}
          <a href="https://2023.protocol.berlin" target="_blank" rel="noreferrer">
            Protocol Berg V1
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-bold" id="venue">
          3. Venue
        </h2>
        <p>
          The <span className="italic">Colosseum</span>
          <Ref src={refs.colosseum} /> in Berlin-Prenzlauer Berg is ....
          <Ref src={refs.prenzlauerBerg} />.
        </p>
        <p>
          The venue will be equipped with two stages. In addition, there will be workshop areas for deep technical study
          and knowledge-sharing classes.
        </p>
        <p>
          Latitude/Longitude:
          <br />
          <a
            href="https://nominatim.openstreetmap.org/ui/search.html?q=52.504853%2C13.434746"
            target="_blank"
            className="ml-12"
          >
            (CHANGE HERE) 52.504853, 13.434746
          </a>
          <br />
          Street Address:
          <br />
          <a
            href="https://nominatim.openstreetmap.org/ui/search.html?q=K%C3%B6penicker+Stra%C3%9Fe+16%2C+10997+Berlin"
            target="_blank"
            className="ml-12"
          >
            (CHANGE HERE) K&ouml;penicker Stra&szlig;e 16-17, 10997 Berlin-Kreuzberg
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
          <a href="/decentralization" className="italic">
            Department of Decentralization
          </a>{" "}
          is a collective of people from various crypto, decentralization, and blockchain communities in and around
          Berlin. The group assembled in 2018 to organize events such as ETHBerlin
          <Ref src={refs.ethberlin} />
          <Ref src={refs.ethb2rlin} />
          <Ref src={refs.ethb3rlin} />, Protocol Berg 2023
          <Ref src={refs.protocol2023} /> and GoerliCon
          <Ref src={refs.goerli} /> and has been active since.
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
          To connect to the Protocol Berg V2 community, join our [matrix] space: <br />
          <a href="https://matrix.to/#/%23protocol:tchncs.de" target="_blank" className="ml-12">
            &#x23;protocol:tchncs.de{" "}
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
          The Department of Decentralization is a non-profit organization accepting donations either via cryptographic
          transactions or traditional wire transfers.
        </p>
        <p>
          Donations on Ethereum mainnet: <code>dezent.eth</code>; on other EVM chains:{" "}
          <code>0x59cc3Fc56B8B2988F259EC1E6f3446907130f728</code>
        </p>
        <p>
          Donations on Polkadot: <code>14DfiBmme3pjph6aD86MyGfYRbAUtwCJqjECope8rpvhv6gu</code>; Substrate:{" "}
          <code>5FHNZrWhnGZGPA64FV3Mq7qPZyAqCdeAmEVieXenJjuBjYP1</code>
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
          Subject: <code>Spende Protocol Berg V2</code>
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
          DE325917754, vertreten durch A. Schoedon, Telefon: +49 (0) 30 20613410, E-Mail:{" "}
          <a href="mailto:schoedon@protocol.berlin">schoedon@protocol.berlin</a>.
        </p>
        <p>
          Goerli Dezentral gGmbH is a non-profit organization serving tax-privileged purposes, according to the articles
          of association. The organization meets the statutory requirements under &sect;&sect; 51, 59, 60, and 61 AO in
          Germany.
        </p>
        <p>
          The content of this website is available through IPFS:
          <br />
          <span className="ml-12">
            IPNS:{" "}
            <a href="ipns://protocol.berlin" target="_blank">
              ipns://protocol.berlin
            </a>
          </span>
          <br />
          <span className="ml-12">
            ENS:{" "}
            <a href="https://dezent.eth" target="_blank">
              https://dezent.eth
            </a>
          </span>
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
