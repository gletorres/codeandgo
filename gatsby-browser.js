import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import theme from "./src/themes/theme"
import { Code } from "./src/components"
import "./language-tabs.css"

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body, html{
    color: ${props => props.theme.fonts.light4};
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background: ${props => props.theme.colors.dark2};
}
`

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  //for MDXProvider
  <MDXProvider components={components}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
