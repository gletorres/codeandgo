import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../blogElements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "codeandgo-logo.png" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="codeandgo" />
      </Link>

      <Link
        to="/"
        activeStyle={{ color: "red" }}
        style={{
          textDecoration: "none",
          color: "slategrey",
          fontSize: "18px",
        }}
      >
        BLOG
      </Link>

      <Link
        to="/syntax/"
        activeStyle={{ color: "red" }}
        style={{
          textDecoration: "none",
          color: "slategrey",
          fontSize: "18px",
        }}
      >
        SYNTAX
      </Link>
    </NavWrapper>
  )
}
