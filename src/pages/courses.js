import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../blogComponents"
import { H1, P } from "../blogElements"

const courses = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 color="light1" textAlign="center" margin="0 0 1rem 0">
          THIS IS THE COURSES CONTENT
        </H1>
        <P color="light2">
          This is where all the COURSES live This is it is it it
        </P>
      </Content>
    </Container>
  )
}

export default courses

export const coursesQuery = graphql`
  query coursesQuery {
    imageSharp(fixed: { originalName: { eq: "codeandgo-logo.png" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
