import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Nav, Footer, Interests, ContactMe, AboutMe, Header } from "../index"

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
  const [theme, setTheme] = useState(themes[0])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header/>
        <AboutMe />
        <Interests />
        <ContactMe />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
