import React, { useState } from "react"
import ThemeProvider from "styled-components"

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

  return <div>test</div>
}

export default App
