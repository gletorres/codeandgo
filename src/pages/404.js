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
        <H1 color="slategrey" textAlign="center" margin="0 0 1rem 0">
          Uh oh.. Cannot be found.
        </H1>
        <P color="slategrey" textAlign="center" margin="0 0 1rem 0">
          You might reach the end of the page.
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
