import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, StyledLink } from "../elements"

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

      <StyledLink>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "slategrey",
          }}
        >
          BLOG
        </Link>
      </StyledLink>
      <StyledLink>
        <Link to="/main" style={{ textDecoration: "none", color: "slategrey" }}>
          SYNTAX
        </Link>
      </StyledLink>
      <StyledLink>
        <Link
          to="/courses"
          style={{ textDecoration: "none", color: "slategrey" }}
        >
          COURSES
        </Link>
      </StyledLink>
    </NavWrapper>
  )
}
