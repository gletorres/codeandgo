import React from "react"
import { ButtonWrapper } from "../blogElements"

export const Button = ({ href, children }) => {
  return <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>
}
