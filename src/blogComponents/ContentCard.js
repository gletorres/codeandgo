import React from "react"
import { CardWrapper, P, H2 } from "../blogElements"
import { Button } from "./Button"

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="light1">
        {date}
      </P>
      <H2 textAlign="center" margin="0 0 1rem 0" color="light1">
        {title}
      </H2>

      <P size="small" color="light2" textAlign="left" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <Button href={slug}>Continue</Button>
    </CardWrapper>
  )
}
