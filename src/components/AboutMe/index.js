import React from "react"
import { Section, FlexWrapper } from "../index"
import {
  leftColumnTitle,
  leftColumnDescription,
  rightColumnTitle,
  rightColumnDescription
} from "./Descriptions"

const index = () => {
  return (
    <Section
      // backgroundColor="#2980b9"
      // mobileFlexDirection="column"
      // tabletFlexDirection=""
      tabletFlexDirection="row"
      desktopFlexDirection="row"
      desktopHeight="750px"
      tabletHeight="750px"
      mobileHeight="1500px">
      <FlexWrapper mobileHeight="100%" desktopWidth="35%">
        <h3>{`${leftColumnTitle}`}</h3>
        <div>{`${leftColumnDescription}`}</div>
      </FlexWrapper>
      <FlexWrapper mobileHeight="100%" desktopWidth="35%">
        <h3>{`${rightColumnTitle}`}</h3>
        <div>{`${rightColumnDescription}`}</div>
      </FlexWrapper>
    </Section>
  )
}

export default index
