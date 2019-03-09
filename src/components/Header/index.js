import React from "react"
import { Section, Image, FlexWrapper } from ".."
import ProfilePic from "./assets/profile_pic.jpeg"
import { Icon } from "semantic-ui-react"
import ItemWrap from "../shared/ItemWrap"

const index = () => {
  return (
    <Section
      desktopHeight="500px"
      tabletHeight="500px"
      mobileHeight="500px"
      backgroundColor="#2980b9">
      <Image src={ProfilePic} circle={true} />
      <h3 style={{ color: "white" }}>
        Software Engineer Located In San Francisco, CA
      </h3>
      <h2 style={{ color: "white" }}>_____________________________</h2>
      <ItemWrap flexDirection="row" alignItems="center"
        justifyContent="center" height="100%"
      >
        <a href="https://www.linkedin.com/in/brandon-schabel-7010b691/"> 
        <Icon size="huge" inverted name="linkedin" />
        </a>
        <a href="https://github.com/brandon-schabel">
        <Icon size="huge" inverted name="github square" />
        </a>
      </ItemWrap>
    </Section>
  )
}

export default index
