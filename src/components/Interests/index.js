import React from "react"
import { Section, Image, sizes } from "../index"
import Desktop from './Desktop'
import Mobile from './Mobile'

const index = () => {
  return (
    <Section desktopHeight="550px" tabletHeight="500px" mobileHeight="1000px">
      Interests
      <Desktop></Desktop>
      <Mobile></Mobile>
      
    </Section>
  )
}

export default index
