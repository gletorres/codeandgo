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
          fontSize: "20px",
        }}
      >
        BLOG
      </Link>

      <Link
        to="/main/"
        activeStyle={{ color: "red" }}
        style={{
          textDecoration: "none",
          color: "slategrey",
          fontSize: "20px",
        }}
      >
        SYNTAX
      </Link>

      <Link
        to="/courses/"
        activeStyle={{ color: "red" }}
        style={{
          textDecoration: "none",
          color: "slategrey",
          fontSize: "20px",
        }}
      >
        COURSES
      </Link>
    </NavWrapper>
  )
}
