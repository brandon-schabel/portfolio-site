import React from "react"
import { Section, Image, FlexWrapper } from ".."
import ProfilePic from "./assets/profile_pic.jpeg"
import { Icon } from "semantic-ui-react"
import ItemWrap from "../shared/ItemWrap"
import {Line} from './styles'

const index = () => {
  return (
    <Section
      desktopHeight="500px"
      tabletHeight="500px"
      mobileHeight="500px"
      backgroundColor="#2980b9">
      <FlexWrapper mobileHeight="340px"
                  tabletHeight="350px"
                  desktopHeight="370px"
      >
      <Image src={ProfilePic} circle={true} enableBorder={true}/>
      <h2 style={{ color: "white" }}>
        Brandon Schabel
      </h2>
      <Line></Line>
      <h3 style={{ color: "white" }}>
        Software Engineer Located In San Francisco, CA
      </h3>
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
      </FlexWrapper>
    </Section>
  )
}

export default index
