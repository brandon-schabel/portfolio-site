import React from "react"
import { FlexWrapper, Image, sizes } from "../index"
import MediaQuery from "react-responsive"

import Camera from "./assets/camera2.png"
import Computer from "./assets/coding.png"
import Car from "./assets/electric-car.png"
import Electronics from "./assets/electronic.png"

const Desktop = () => {
  return (
    <MediaQuery minWidth={sizes.tablet + 1}>
      <FlexWrapper
        desktopFlexDirection="row"
        tabletFlexDirection="row"
        mobileFlexDirection="Column"
        mobileHeight="100%">
        <Image src={Camera} alt="camera" height="250px" width="250px" paddingRight="20px" />

        <Image src={Computer} alt="computer" height="250px" width="250px"  paddingLeft="20px"/>
      </FlexWrapper>
      <FlexWrapper
        desktopFlexDirection="row"
        tabletFlexDirection="row"
        mobileFlexDirection="Column"
        mobileHeight="100%">
        <Image src={Car} alt="car" height="250px" width="250px" paddingRight="20px"  />

        <Image src={Electronics} alt="electronics" height="250px" width="250px" paddingRight="20px"/>
      </FlexWrapper>
    </MediaQuery>
  )
}

export default Desktop
