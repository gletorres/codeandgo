import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../blogComponents"
import { H1, P } from "../blogElements"

const syntax = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 color="light2" textAlign="center" margin="0 0 1rem 0">
          THIS IS THE SYNTAX CONTENT
        </H1>
        <P color="light2">
          This is where all the codes or syntax live This is where all the codes
          or syntax live This is where all the codes or syntax live This is
          where all the codes or syntax live This is where all the codes or
          syntax liveThis is where all the codes or syntax liveThis is where all
          the codes or syntax liveThis is where all the codes or syntax liveThis
          is where all the codes or syntax liveThis is where all the codes or
          syntax liveThis is where all the codes or syntax liveThis is where all
          the codes or syntax live where all the codes or syntax live
        </P>
      </Content>
    </Container>
  )
}

export default syntax

export const maindQuery = graphql`
  query maindQuery {
    imageSharp(fixed: { originalName: { eq: "codeandgo-logo.png" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
