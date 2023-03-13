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

const DecentralizationPage = () => {
  return (
    <main className="my-24">
    <header className="text-center">
      <h1 className="font-bold">Protocol Berg</h1>
      <p className="italic text-center">
        The decentralized protocol and infrastructure conference.
      </p>
    </header>
      <section>
        <h2 className="font-bold">About Us</h2>
        <p>
          Protocol Berg is organized by the Department of Decentralization, a
          collective of people from various crypto- and blockchain communities
          in and around Berlin. The group assembled in 2018 to organize
          ETHBerlin and has been active since.
        </p>
        <p>
        We aim to be an agnostic vehicle to drive adoption, educate
        newcomers, and raise awareness of the challenges and benefits of
        decentralization and open-source software.
        </p>
        <p>Our projects to date:</p>
        <ul>
          <li>
            <span className="font-bold">ETHBerlin (2018):</span> Hackathon,
            conference, and the first event that ran almost entirely using
            decentralized applications:{" "}
            <a href="https://ethberlin.com" target="_blank">
              ethberlin.com
            </a>
          </li>
          <li>
            <span className="font-bold">GoerliCon 0 (2019): </span>The Ethereum
            testnet and infrastructure conference where the Goerli Testnet was
            launched live on stage: <a href="https://goerli.net/" target="_blank">
              goerli.net
            </a>
          </li>
          <li>
            <span className="font-bold">Goerli Testnet (2019): </span>Born at
            ETHBerlin and launched at GoerliCon, the Goerli Testnet is now
            the essential public-facing Ethereum testnets after the Merge.
          </li>
          <li>
            <span className="font-bold">
              Blockstars Education Program (2019):
            </span>{" "}
            A partnership with <a href="https://b9lab.com/" target="_blank">B9lab</a>
            {" "}to onboard new hackers to web3.
          </li>
          <li>
            <span className="font-bold">
              There is no such thing as Blockchain Art (2019):{" "}
            </span>
            a study to explore the art world and the intersection with our
            systems.
          </li>
          <li>
            <span className="font-bold">ETHBerlin ZWEI (2019): </span>hackathon,
            conference, and cultural festival, second edition:{" "}
            <a href="https://ethberlinzwei.com" target="_blank">
              ethberlinzwei.com
            </a>
          </li>
          <li>
            <span className="font-bold">Ecosystem Job-Openings (2019): </span>
            connecting talents with web3-companies during the bear market.
          </li>
          <li>
            <span className="font-bold">
              ETHParis 2 (2020) - The Un-Hackathon:{" "}
            </span>
            ETHParis 2 was hosted by the Department of Decentralization and
            Ethereum France as an unconference-style hackathon in the
            engineering school l'ESGI: {" "}
            <a href="https://web.archive.org/web/20200318163540/https://www.hackparis.io/" target="_blank">hackparis.com</a>
          </li>
          <li>
            <span className="font-bold">
              TwoPointFive (2020) - The Talk Show:{" "}
            </span>
            TwoPointFive was a white-label virtual conference. No shill, no
            sponsors, from the community for the community and truly in it for the
            tech:{" "}
            <a href="https://web.archive.org/web/20220426113132/https://twopointfive.online/" target="_blank">twopointfive.online</a>
          </li>
          <li>
            <span className="font-bold">StrikeDAO (2022):</span> The Ethereum
            domain of Bundeskunsthalle was squatted by artist Hito Steyerl and the
            DoD. The StrikeDAO voted on three models of the future governance of this
            squatted domain quadratically:{" "}
            <a href="https://strikedao.com" target="_blank">strikedao.com</a>
          </li>
          <li>
            <span className="font-bold">ETHBerlin³ - to the power of 3 (2022):</span>{" "}
            hackathon, conference, and cultural festival, third edition:{" "}
            <a href="https://ethberlin.ooo" target="_blank">
              ethberlin.ooo
            </a>
          </li>
        </ul>
        <p className="mt-8">
          Currently, the Department is primarily run from Berlin. The collective
          is composed of around a dozen members who contribute voluntarily.
        </p>
      </section>
    </main>
  )
}

export default DecentralizationPage

export const Head = () => <title>Protocol Berg - About Us</title>
