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
        <h2 className="font-bold">Contact</h2>
        <p>
          To attend the conference, please wait for official announcements:{" "}
          <br />
          <a href="https://protocol.berlin" className="ml-12">
            https://protocol.berlin{" "}
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
            https://speak.protocol.berlin
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
        <h2 className="font-bold">Impressum</h2>
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
