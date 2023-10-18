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
            className={`w-full max-w-xs sm:w-auto h-auto ${
              isDarkMode ? "invert" : ""
            }`}
            src={logo}
            alt="Protocol Berg Logo"
          />
        </div>
        <p className="italic text-center">
          The decentralized protocol and infrastructure conference.
        </p>
        <p className="text-center">
          September 15, 2023, Kreuzberg, Berlin;
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
          Protocol Berg is a novel summit providing a location specifically for
          protocol research, decentralized infrastructure, and core-developer
          experience. The one-day event with two stages, opportunities for
          technical workshops, and protocol community gatherings brings together
          protocol researchers and other stakeholders from different
          decentralized protocols. Attendance is free of charge. The event will
          not host any sponsors or commercial talks.
        </small>
      </div>
      <div>
        <h2 className="font-bold" id="toc">
          Table of Contents
        </h2>
        <ol className="pl-6 text-lg">
          <li>
            <a href="#conference">1. Conference</a>
            <ul className="pl-6">
              <li>
                <a href="#schedule">1.1 Schedule</a>
              </li>
            </ul>
            <ul className="pl-6">
              <li>
                <a href="#speakers">1.2 Speakers</a>
              </li>
            </ul>
            <ul className="pl-6">
              <li>
                <a href="#stream">1.3 Recordings</a>
              </li>
            </ul>
            <ul className="pl-6">
              <li>
                <a href="#gallery">1.4 Gallery</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#cfp">2. Call for Participation</a>
            <ul className="pl-6">
              <li>
                <a href="#cfp-speakers">2.1 Speakers</a>
              </li>
              <li>
                <a href="#cfp-volunteers">2.2 Volunteers</a>
              </li>
              <li>
                <a href="#cfp-attendees">2.3 Attendees</a>
              </li>
              <li>
                <a href="#cfp-updates">2.4 Updates</a>
              </li>
            </ul>
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
          Protocol Berg was a one-day technical conference targeting an audience
          of protocol/system/network engineers, decentralized-infrastructure
          administrators, researchers, and other curious minds. Protocol Berg
          aimed to bring distributed technology ecosystems together to exchange
          concepts and technology, talk about shared open problems, and learn
          from each other.
        </p>
        <p>
          Topics covered by the event orbited mainly around consensus protocols,
          distributed virtual machines, peer-to-peer networking, decentralized
          infrastructure, open-source governance, and protocol research.
        </p>
        <p>
          We welcomed 650 attendees, and tickets were free, as in{" "}
          <span className="italic">free lemonade</span>. All attendees had to
          adhere to the event's <a href="/conduct">Code of Conduct</a>.
        </p>
        <p>
          Protocol Berg was a donation-backed, non-profit event. Therefore, there
          were no sponsors.
        </p>
      </section>
      <section>
        <h3 className="font-bold" id="schedule">
          1.1 Schedule
        </h3>
        <div className="">
          <Schedule isDarkMode={isDarkMode} />
        </div>
      </section>
      <section>
        <h3 className="font-bold" id="speakers">
          1.2 Speakers
        </h3>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {speakers.map((speaker, index) => (
              <div className="text-center" key={index}>
                <Speaker speaker={speaker} index={index} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center text-lg">
            <p>Figure 1: Speakers of Protocol Berg, 2023. </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-bold" id="stream">
          1.3 Recordings
        </h3>
        <div>
        <p>
          Recordings are provided by StreamETH:{" "}
        </p>
        <p>
          <a
            href="https://watch.protocol.berlin/ethberlin/protocol_berg"
            target="_blank"
            rel="noreferrer"
            className="ml-12"
          >
            watch.protocol.berlin
          </a>
        </p>
        <p>
          A mirror of all sessions is also available on our YouTube channel:{" "}
        </p>
        <p>
          <a
            href="https://www.youtube.com/@departmentofdecentralization/playlists"
            target="_blank"
            rel="noreferrer"
            className="ml-12"
          >
            youtube.com/@departmentofdecentralization
          </a>
        </p>
        </div>
      </section>
      <section>
        <h3 className="font-bold" id="gallery">
          1.4 Gallery
        </h3>
        <div>
        <p>
          <a
            href="https://www.antontal.com/"
            target="_blank"
            rel="noreferrer"
          >
          Anton Tal
          </a>
          {" "}
          helped us to document Protocol Berg's unique atmosphere and people.
        </p>
        <p>
          <a
            href="/gallery"
            className="ml-12"
          >
            /gallery
          </a>
        </p>
        <p>
          If you like the photos, please consider sending Anton a donation to
          <code>antontal.eth</code>
        </p>
        </div>
      </section>
      <section>
        <h2 className="font-bold" id="cfp">
          2. Call for Participation
        </h2>
        <h3 className="font-bold" id="cfp-speakers">
          2.1 Speakers
        </h3>
        <p>
          The call for participation is now <b>closed</b>. To modify or confirm your{" "}
          talk or workshop proposal, use our Pretalx interface:{" "}
        </p>
        <p>
          <a
            href="https://speak.protocol.berlin/protocol-berg/"
            target="_blank"
            rel="noreferrer"
            className="ml-12"
          >
            speak.protocol.berlin
          </a>
        </p>
        <p>Talk and workshop proposals should align with one of our tracks:</p>
        <ul className="list-disc pl-6">
          <li>
            <b>Consensus:</b> validation concepts, fork choice, and finality
            considerations
          </li>
          <li>
            <b>Networking:</b> communication in federated, distributed, and
            decentralized systems
          </li>
          <li>
            <b>Infrastructure:</b> distributed clusters, testing and testnet
            infrastructure, blockchain operations
          </li>
          <li>
            <b>Databases:</b> efficient storage and retrieval of complex system
            states
          </li>
          <li>
            <b>Cryptography:</b> key management, zero-knowledge technologies,
            hash functions, encryption
          </li>
          <li>
            <b>Governance &amp; Society:</b> broader concepts of protocol
            research and development, social protocols, philosophical musings on
            human coordination and decentralized, open-source, off-chain and
            on-chain governance structures and processes
          </li>
        </ul>
        <h3 className="font-bold" id="cfp-volunteers">
          2.2 Volunteers
        </h3>
        <p>
          Volunteer applications are now <b>closed</b>. Thanks for supporting Protocol
          Berg!
        </p>
        <h3 className="font-bold" id="cfp-attendees">
          2.3 Attendees
        </h3>
        <p>
          General admission applications are now <b>closed</b>. Watch your inbox and
          see you soon!
        </p>
        <p>
          Ticket vouchers will be distributed on a "first come first serve"
          basis for all eligible applications.
        </p>
        <p>
          In addition to the public application form, there are two more ways to
          get tickets:
        </p>
        <ol>
          <li>
            {" "}
            Each confirmed speaker will receive 4 vouchers to distribute at
            their discretion.
          </li>
          <li>
            {" "}
            We will allocate a certain contingent of ticket vouchers for the
            Ethereum, COSMOS, IPFS/Filecoin & Polkadot ecosystems to distribute
            to their communities.
          </li>
        </ol>
        <p>
          Attendance is free of charge. Note that a voucher needs to be redeemed
          and turned into a ticket in our{" "}
          <a
            href="https://tickets.protocol.berlin/protocol-berg/"
            target="_blanks"
            rel="noreferrer"
          >
            ticket shop
          </a>
          . A voucher is not a ticket. No ticket, no entry.
        </p>
        <h3 className="font-bold" id="cfp-updates">
          2.4 Updates
        </h3>
        <p>
          To follow us for updates, find us on Bluesky, Lens, or Twitter:
          <br />
          <span className="ml-12">
            Bluesky:{" "}
            <a href="https://bsky.app/profile/protocol.berlin" target="_blank">
              @protocol.berlin
            </a>
          </span>
          <br />
          <span className="ml-12">
            Lenster:{" "}
            <a href="https://lenster.xyz/u/ethberlin" target="_blank">
              @ethberlin
            </a>
          </span>
          <br />
          <span className="ml-12">
            Twitter:{" "}
            <a href="https://twitter.com/ETHBerlin" target="_blank">
              @ETHBerlin
            </a>
          </span>
        </p>
        <p>
          To connect to the Protocol Berg community, join our [matrix] space:{" "}
          <br />
          <a
            href="https://matrix.to/#/%23protocol:tchncs.de"
            target="_blank"
            className="ml-12"
          >
            &#x23;protocol:tchncs.de
          </a>
        </p>
        <p>
          To provide feedback or ask questions, please{" "}
          <a href="mailto:hello@protocol.berlin">email us</a>.
        </p>
      </section>

      <section>
        <h2 className="font-bold" id="venue">
          3. Venue
        </h2>
        <p>
          The <span className="italic">Heeresbäckerei</span> (magazine in the
          army bakery)
          <Ref src={refs.heeresbaeckerei} /> in Berlin-Kreuzberg is an
          impressive industrial monument located directly at the river Spree.
          The magazine in the west wing was used as a warehouse since 1890.
          Lorries with flour and grain travelled on rails between the magazine
          and the bakery. The brick building has retained its substance over the
          years. Cast iron columns carry a five-meter-high ceiling. The parquet
          is made of old beech. Deep arched windows open the room to the light.
          The result is a magnificent venue with charm - perhaps one of the most
          beautiful in Berlin-Kreuzberg
          <Ref src={refs.xberg} />.
        </p>
        <p>
          The venue will be equipped with two stages. In addition, there will be
          workshop areas for deep technical study and knowledge-sharing classes.
        </p>
        <p>
          Latitude/Longitude:
          <br />
          <a
            href="https://nominatim.openstreetmap.org/ui/search.html?q=52.504853%2C13.434746"
            target="_blank"
            className="ml-12"
          >
            52.504853, 13.434746
          </a>
          <br />
          Street Address:
          <br />
          <a
            href="https://nominatim.openstreetmap.org/ui/search.html?q=K%C3%B6penicker+Stra%C3%9Fe+16%2C+10997+Berlin"
            target="_blank"
            className="ml-12"
          >
            K&ouml;penicker Stra&szlig;e 16-17, 10997 Berlin-Kreuzberg
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
          is a collective of people from various crypto, decentralization, and
          blockchain communities in and around Berlin. The group assembled in
          2018 to organize events such as ETHBerlin
          <Ref src={refs.ethberlin} />
          <Ref src={refs.ethb2rlin} />
          <Ref src={refs.ethb3rlin} /> or GoerliCon
          <Ref src={refs.goerli} /> and has been active since.
        </p>
        <p>
          The aim is to be an agnostic vehicle to drive adoption, educate
          newcomers, and raise awareness of the challenges and benefits of
          decentralization and open-source software. Currently, the Department
          is primarily run from Berlin. The collective is composed of around a
          dozen members who contribute voluntarily.
        </p>
        <h3 className="font-bold" id="contact">4.1 Contact</h3>
        <p>
          To connect to the Protocol Berg community, join our [matrix] space:{" "}
          <br />
          <a href="https://matrix.to/#/%23protocol:tchncs.de" target="_blank" className="ml-12">
            &#x23;protocol:tchncs.de{" "}
          </a>
        </p>
        <p>
          To provide feedback or ask questions, please email us:{" "}
          <br />
          <a href="mailto:hello@protocol.berlin" className="ml-12">
            hello@protocol.berlin{" "}
          </a>
        </p>
        <h3 className="font-bold" id="donations">4.2 Donations</h3>
        <p>
          The Department of Decentralization is a non-profit organization
          accepting donations either via cryptographic transactions or
          traditional wire transfers.
        </p>
        <p>
          Donations on Ethereum mainnet: <code>dezent.eth</code>; on other EVM chains: <code>0x59cc3Fc56B8B2988F259EC1E6f3446907130f728</code>
        </p>
        <p>
          Donations on Polkadot: <code>14DfiBmme3pjph6aD86MyGfYRbAUtwCJqjECope8rpvhv6gu</code>; Substrate: <code>5FHNZrWhnGZGPA64FV3Mq7qPZyAqCdeAmEVieXenJjuBjYP1</code>
        </p>
        <p>
          Wire (SEPA) donations:<br />
          Beneficiary: <code>Goerli Dezentral gGmbH</code><br />
          International Bank Account Number: <code>DE16 1005 0000 0190 8447 44</code><br />
          Bank Identifier Code: <code>BELADEBEXXX</code><br />
          Subject: <code>Spende Protocol Berg</code>
        </p>
        <p>
          To donate on other platforms or to get a donation receipt,
          please message us at {" "}
          <a href="mailto:donations@protocol.berlin">donations@protocol.berlin</a>.
        </p>
        <h3 className="font-bold" id="imprint">4.3 Impressum</h3>
        <p>
          Angaben gem&auml;&szlig; &sect; 5 TMG: Goerli Dezentral gGmbH,
          Mariannenstra&szlig;e 9-10, 10999 Berlin, Handelsregister: HRB 207663
          B, Registergericht: Amtsgericht, Charlottenburg, Berlin,
          Umstatzsteuer-ID: DE325917754, vertreten durch A. Schoedon, Telefon:
          +49 (0) 30 20613410, E-Mail:{" "}
          <a href="mailto:schoedon@protocol.berlin">schoedon@protocol.berlin</a>.
        </p>
        <p>
          Goerli Dezentral gGmbH is a non-profit organization serving
          tax-privileged purposes, according to the articles of association. The
          organization meets the statutory requirements under &sect;&sect; 51,
          59, 60, and 61 AO in Germany.
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
