import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const ContactPage = () => {
  return (
    <main className="my-24">
    <header className="text-center">
      <h1 className="font-bold">Protocol Berg</h1>
      <p className="italic text-center">
        The decentralized protocol and infrastructure conference.
      </p>
    </header>
      <section>
        <h2 className="font-bold" id="contact">Contact</h2>
        <p>
          To attend the conference, please wait for official announcements:{" "}
          <br />
          <a href="/" className="ml-12">protocol.berlin</a>
        </p>
        <p>
          To connect to the protocol community, join our matrix space:{" "}
          <br />
          <a href="https://matrix.to/#/%23protocol:tchncs.de" target="_blank" className="ml-12">
            &#x23;protocol:tchncs.de{" "}
          </a>
        </p>
        <p>
          To submit a technical talk or workshop proposal, use our Pretalx
          interface: <br />
          <a
            href="https://speak.protocol.berlin"
            target="_blank"
            className="ml-12"
          >
            speak.protocol.berlin
          </a>
        </p>
        <p>
          To provide feedback or ask questions, please email us:{" "}
          <br />
          <a href="mailto:hello@protocol.berlin" className="ml-12">
            hello@protocol.berlin{" "}
          </a>
        </p>
      </section>
      <section>
        <h2 className="font-bold" id="donations">Donations</h2>
        <p>
          The Department of Decentralization is a non-profit organization
          accepting donations either via cryptographic transactions or
          traditional wire transfers.
        </p>
        <p>
          ETH & RAI: <code>dezent.eth</code><br />
          (<code>0x59cc3Fc56B8B2988F259EC1E6f3446907130f728</code>)
        </p>
        <p>
          Beneficiary: <code>Goerli Dezentral gGmbH</code><br />
          International Bank Account Number: <code>DE16 1005 0000 0190 8447 44</code><br />
          Bank Identifier Code: <code>BELADEBEXXX</code><br />
          Subject: <code>Spende Protocol Berg</code>
        </p>
        <p>
          Please avoid using central-bank backed or issued tokens such as USDC,
          USDT, or DAI. To donate on other platforms or to get a donation receipt,
          please message us at {" "}
          <a href="mailto:donations@protocol.berlin">donations@protocol.berlin</a>.
        </p>
      </section>
      <section>
        <h2 className="font-bold" id="imprint">Impressum</h2>
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
      </section>
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Protocol Berg - Contact</title>
