import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../blogComponents"
import { H1, P } from "../blogElements"

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 0.5rem 0" color="light1">
          Uh oh.. Cannot be found.
        </H1>
        <P textAlign="center" margin="0 0 0.5rem 0" color="light1">
          Looks like you've reached the end of the page.
        </P>
      </Content>
    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "codeandgo-logo.png" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
