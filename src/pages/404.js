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

const NotFoundPage = () => {
  return (
    <main className="my-24">
      <header className="text-center">
        <h1 className="font-bold">Page not found</h1>
        <p className="italic text-center">
          Sorry, we couldn't find what you were looking for.
        </p>
        <p className="text-center">
          Have you heard about <Link to="/">Protocol Berg</Link> yet?
        </p>
      </header>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
