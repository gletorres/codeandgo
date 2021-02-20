import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../blogComponents"
import { H1, CardWrapper } from "../blogElements"
import { Link } from "gatsby"
import "../../syntax.css"

const syntax = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 color="light2">HOOKS</H1>
        <CardWrapper>
          <Link className="link-wrapper" to="/use-state">
            <div className="syntax-wrapper">
              <H1 color="light2" margin="0 0 1rem 0">
                useState
              </H1>
              <p className="learn-more" margin="0 0 1rem 0">
                Learn More
              </p>
            </div>
          </Link>
        </CardWrapper>
        <CardWrapper>
          <Link className="link-wrapper" to="/use-effect">
            <div className="syntax-wrapper">
              <H1 color="light2" margin="0 0 1rem 0">
                useEffect
              </H1>
              <p className="learn-more" margin="0 0 1rem 0">
                Learn More
              </p>
            </div>
          </Link>
        </CardWrapper>
        <CardWrapper>
          <Link className="link-wrapper" to="/use-memo">
            <div className="syntax-wrapper">
              <H1 color="light2" margin="0 0 1rem 0">
                useMemo
              </H1>
              <p className="learn-more" margin="0 0 1rem 0">
                Learn More
              </p>
            </div>
          </Link>
        </CardWrapper>
        <CardWrapper>
          <Link className="link-wrapper" to="/use-selector">
            <div className="syntax-wrapper">
              <H1 color="light2" margin="0 0 1rem 0">
                useSelector
              </H1>
              <p className="learn-more" margin="0 0 1rem 0">
                Learn More
              </p>
            </div>
          </Link>
        </CardWrapper>
        <CardWrapper>
          <Link className="link-wrapper" to="/use-reducer">
            <div className="syntax-wrapper">
              <H1 color="light2" margin="0 0 1rem 0">
                useReducer
              </H1>
              <p className="learn-more" margin="0 0 1rem 0">
                Learn More
              </p>
            </div>
          </Link>
        </CardWrapper>
        <CardWrapper>
          <Link className="link-wrapper" to="/use-context">
            <div className="syntax-wrapper">
              <H1 color="light2" margin="0 0 1rem 0">
                useContext
              </H1>
              <p className="learn-more" margin="0 0 1rem 0">
                Learn More
              </p>
            </div>
          </Link>
        </CardWrapper>
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
