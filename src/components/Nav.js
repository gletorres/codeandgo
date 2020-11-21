import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"

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
        <img src={data.logo.publicURL} alt="My Code Logo" />
      </Link>

      <Link to="/">BLOG</Link>
      <Link to="/">SYNTAX</Link>
      <Link to="/">COURSES</Link>
    </NavWrapper>
  )
}
