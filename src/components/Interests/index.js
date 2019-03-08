import React from "react"
import { Section, FlexWrapper, ItemWrap, Image } from "../index"
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
    <Section desktopHeight="500px">
      <FlexWrapper desktopFlexDirection="row">
        <ItemWrap width="100px" height="100px">
          <Image src={Camera} alt="camera" />
        </ItemWrap>
        <ItemWrap width="100px" height="100px">
          <Image src={Computer} alt="computer" />
        </ItemWrap>
      </FlexWrapper>
      <FlexWrapper desktopFlexDirection="row">
        <ItemWrap width="100px" height="100px">
          <Image src={Car} alt="car" />
        </ItemWrap>
        <ItemWrap width="100px" height="100px">
          <Image src={Electronics} alt="electronics" />
        </ItemWrap>
      </FlexWrapper>
      Interests
    </Section>
  )
}

export default index
