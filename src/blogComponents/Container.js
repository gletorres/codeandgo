import React from "react"
import { ContainerWrapper } from "../blogElements"
import { Nav, Footer } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
