import * as React from "react";
import refs from "../references";

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
          <a href="{url}" className="font-mono text-xs">
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

const IndexPage = () => {
  return (
    <main className="my-24">
      <header className="text-center">
        <h1 className="font-bold">Protocol Berg</h1>
        <p className="italic text-center">
          The decentralized protocol and infrastructure conference
        </p>
        <p className="text-center">WORK IN PROGRESS</p>
        <p className="author">
          Satoshi Nakamoto, Vitalik Buterin, Juan Benet, Molly Mackinley, Gavin
          Wood, Robert Habermeier, Ethan Buchanan, Zaki Manian, Jae Kwon, et
          alia.
          <div className="mt-8 text-lg">
            September 15, 2023, Kreuzberg, Berlin
          </div>
        </p>
        <p className="text-center">
          A Department of Decentralization
          <Ref src={refs.dod} />
          Event
        </p>
      </header>

      <div className="abstract">
        <h2 className="font-bold">Abstract</h2>
        <p>
          There are various conferences addressing end-user applications and
          consumer-grade products
          <Ref src={refs.dappcon} />
          <Ref src={refs.desci} />
          <Ref src={refs.blockchainweek} />. However, not many of them manage to
          create a stage for protocol research, decentralized infrastructure, or
          core-developer experience. Protocol Berg is a novel summit to address
          this shortcoming by creating a one-day event with two parallel stages
          and several opportunities for technical workshops and protocol
          community gatherings. Attendance is free of charge and the event will
          not be influenced by sponsors or commercial vendors.
        </p>
      </div>
      <section>
        <h2 className="font-bold">Conference</h2>
        <p>
          Protocol Berg will be a one-day technical conference targeting an
          audience of protocol engineers, system engineers, network engineers,
          blockchain operation engineers, decentralized infrastructure
          administrators, as well as researchers and other curious minds.
        </p>
        <p>
          Topics covered by the event orbit mainly around consensus protocols,
          distributed virtual machines, peer-to-peer networking, decentralized
          infrastructure, open-source governance, and protocol research.
        </p>
        <p>
          The venue will be equipped with two stages, one for keynotes,
          visionary talks, and events, and one for hands-down technical talks.
          In addition, there will be workshop areas for deep technical study and
          knowledge-sharing classes.
        </p>
        <p>
          We expect 500-600 attendees and tickets will be free as in{" "}
          <span className="italic">free lemonade</span>. There will be no
          sponsors and no swag, or any other distractions whatsoever.
        </p>
      </section>

      <section>
        <h2 className="font-bold">Call for Participation</h2>
        <p>
          To submit a technical talk or workshop proposal, use our Pretalx
          interface: <br />
          <a href="https://speak.protocol.berlin" className="ml-12">
            https://speak.protocol.berlin
          </a>
        </p>
        <p>
          To join our collective as contributor or volunteer, please email us:{" "}
          <br />
          <a href="mailto:hello@ethberlin.org" className="ml-12">
            hello@ethberlin.org{" "}
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-bold">Venue</h2>
        <p>
          The <span className="italic">Heeresbäckerei</span> (magazine in the
          army bakery) <Ref src={refs.heeresbaeckerei} /> in Berlin-Kreuzberg is
          an impressive industrial monument located directly at the Spree. The
          magazine in the west wing was used as a warehouse since 1890, lorries
          with flour and grain traveled on rails between the magazine and the
          bakery. The brick building has retained its substance over the years.
          Cast iron columns carry a five-meter-high ceiling, the parquet is made
          of old beech, deep arched windows open the room to the light.
        </p>
        <p>
          The result is a magnificent hall with a good deal of charm - perhaps
          the most beautiful in Berlin-Kreuzberg <Ref src={refs.xberg} />.{" "}
          <b>Address: Köpenicker Straße 16-17, 10997 Berlin-Kreuzberg</b>.
        </p>
      </section>

      <section>
        <h2 className="font-bold">About the Host</h2>
        <p>
          The <span className="italic">Department of Decentralization</span>{" "}
          <Ref src={refs.dod} /> is a collective of people from various crypto,
          decentralization, and blockchain communities in and around Berlin. The
          group first assembled in 2018 to organize events such as ETHBerlin{" "}
          <Ref src={refs.ethberlin} /> or GoerliCon <Ref src={refs.goerli} />{" "}
          and has been active since.
        </p>
        <p>
          The aim is to be an agnostic vehicle to drive adoption, educate
          newcomers, and raise awareness on the challenges and benefits of
          decentralization and open source software. Currently, the Department
          is primarily run from Berlin. The collective is composed of around a
          dozen members and takes decisions using rough consensus.
        </p>
      </section>
      <footer className="footnotes mt-8">
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

export const Head = () => <title>Home Page</title>;
