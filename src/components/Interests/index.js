import React from "react"
import { Section, FlexWrapper, ItemWrap, Image, sizes } from "../index"
import MediaQuery from "react-responsive"

// https://www.flaticon.com/
//https://www.flaticon.com/free-icon/camera_918194
// https://www.flaticon.com/free-icon/camera_1042339#term=camera&page=1&position=29
// https://www.flaticon.com/free-icon/coding_1149168#term=computer&page=1&position=38
//https://www.flaticon.com/free-icon/electric-car_1579925#term=electric%20car&page=1&position=50
// https://www.flaticon.com/free-icon/electronic_752623#term=electronic%20circuit&page=1&position=79

import Camera from "./assets/camera2.png"
import Computer from "./assets/coding.png"
import Car from "./assets/electric-car.png"
import Electronics from "./assets/electronic.png"

const index = () => {
  return (
    <Section desktopHeight="500px" tabletHeight="500px" mobileHeight="1000px">
      Interests
      <MediaQuery minWidth={sizes.tablet + 1}>
        <FlexWrapper
          desktopFlexDirection="row"
          tabletFlexDirection="row"
          mobileFlexDirection="Column"
          mobileHeight="100%">
          <Image src={Camera} alt="camera" height="200px" width="200px" />

          <Image src={Computer} alt="computer" />
        </FlexWrapper>
        <FlexWrapper
          desktopFlexDirection="row"
          tabletFlexDirection="row"
          mobileFlexDirection="Column"
          mobileHeight="100%">
          <Image src={Car} alt="car" />

          <Image src={Electronics} alt="electronics" />
        </FlexWrapper>
      </MediaQuery>
      <MediaQuery maxWidth={sizes.tablet}>
        <Image src={Camera} alt="camera" height="225px" width="225px" />

        <Image src={Computer} alt="computer" height="225px" width="225px" />
        <Image src={Car} alt="car" height="225px" width="225px" />

        <Image
          src={Electronics}
          alt="electronics"
          height="225px"
          width="225px"
        />
      </MediaQuery>
    </Section>
  )
}

export default index
