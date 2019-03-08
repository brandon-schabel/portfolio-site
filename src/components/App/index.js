import React, { useState } from "react"
import {ThemeProvider} from "styled-components"
import {Section, Nav, Footer, Interests, ContactMe, AboutMe} from '../index'

const themes = [
  {
    name: "light",
    primaryColor: "white",
    secondaryColor: "black",
    borderColor: "#ccc"
  },

  {
    name: "dark",
    primaryColor: "black",
    secondaryColor: "white",
    borderColor: "#ccc"
  }
]

const App = () => {
  const [theme, setTheme] = useState(themes[0]);



  return (
    <ThemeProvider theme={theme}>
      <div >
      <Nav></Nav>
        <Section>
          
        </Section>
        test
      </div>
      </ThemeProvider>
      
    
  )
}

export default App
