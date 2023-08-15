import * as React from "react";
import refs from "../references";
import { SEO } from "../components/seo";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import speakers from "../speakers";
import Speaker from "../components/Speaker";
import Schedule from "../components/schedule";

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

const DarkModeButton = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("latex-dark");
  };
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
  return (
    <main>
      <DarkModeButton />
      <header className="text-center my-24">
        <h1 className="font-bold">Protocol Berg</h1>
        <p className="italic text-center">
          The decentralized protocol and infrastructure conference.
        </p>
        <p className="text-center">
          September 15, 2023, Kreuzberg, Berlin;
          <br />
          a Department-of-Decentralization
          <Ref src={refs.dod} /> event;
          <br />
          edition 0b11111100111.
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
          </li>
          <li>
            <a href="#cfp">3. Call for Participation</a>
            <ul className="pl-6">
              <li>
                <a href="#cfp-speakers">3.1 Speakers</a>
              </li>
              <li>
                <a href="#cfp-volunteers">3.2 Volunteers</a>
              </li>
              <li>
                <a href="#cfp-attendees">3.3 Attendees</a>
              </li>
              <li>
                <a href="#cfp-updates">3.4 Updates</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#venue">4. Venue</a>
          </li>
          <li>
            <a href="#host">5. About the Host</a>
          </li>
        </ol>
      </div>
      <section>
        <h2 className="font-bold" id="conference">
          1. Conference
        </h2>
        <p>
          Protocol Berg is a one-day technical conference targeting an audience
          of protocol/system/network engineers, decentralized-infrastructure
          administrators, researchers, and other curious minds. Protocol Berg
          aims to bring distributed technology ecosystems together to exchange
          concepts and technology, talk about shared open problems, and learn
          from each other.
        </p>
        <p>
          Topics covered by the event orbit mainly around consensus protocols,
          distributed virtual machines, peer-to-peer networking, decentralized
          infrastructure, open-source governance, and protocol research.
        </p>
        <p>
          We expect 500-600 attendees, and tickets will be free, as in{" "}
          <span className="italic">free lemonade</span>. All attendees have to
          adhere to the event's <a href="/conduct">Code of Conduct</a>.
        </p>
        <p>
          Protocol Berg is a donation-backed non-profit event. Therefore, there
          will be no sponsors.
        </p>
      </section>
      <section>
        <h2 className="font-bold" id="schedule">
          1.1 Schedule
        </h2>
        <div className="">
          <Schedule />
        </div>
      </section>
      <section>
        <h2 className="font-bold" id="speakers">
          1.2 Speakers
        </h2>
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
        <h2 className="font-bold" id="cfp">
          3. Call for Participation
        </h2>
        <h3 className="font-bold" id="cfp-speakers">
          3.1 Speakers
        </h3>
        <p>
          The call for participation is now closed. To modify or confirm your{" "}
          <b>talk or workshop proposal</b>, use our Pretalx interface:{" "}
        </p>
        <p>
          <a
            href="https://speak.protocol.berlin"
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
          3.2 Volunteers
        </h3>
        <p>Volunteer applications are now closed. Thanks for supporting Protocol Berg!</p>
        <h3 className="font-bold" id="cfp-attendees">
          3.3 Attendees
        </h3>
        <p>General admission applications are now closed. Watch your inbox and see you soon!</p>
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
          and turned into a ticket in our
          <a href="https://tickets.protocol.berlin" target="_blanks" rel="noreferrer">ticket shop</a>.
          No ticket, no entry.
        </p>
        <h3 className="font-bold" id="cfp-updates">
          3.4 Updates
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
          4. Venue
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
          5. About the Host
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
        <p>
          <a href="/contact">Contact</a>.{" "}
          <a href="/contact#imprint">Impressum</a> gem&auml;&szlig; &sect; 5
          TMG.
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
