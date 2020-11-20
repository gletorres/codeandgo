import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      youtube: file(relativePath: { eq: "youtube.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={data.facebook.publicURL} alt="Facebook logo" />
          </a>
          <a
            href="https://linkedin.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin logo" />
          </a>
          <a
            href="https://twitter.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={data.twitter.publicURL} alt="Twitter logo" />
          </a>
          <a
            href="https://youtube.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={data.youtube.publicURL} alt="Youtube logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          2020 codeandgo. All rights reserved
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
