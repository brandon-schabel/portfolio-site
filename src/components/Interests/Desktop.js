import React from "react"
import { FlexWrapper, Image, sizes } from "../index"
import MediaQuery from "react-responsive"

import ModalImage from './ModalImage'

import Camera from "./assets/camera2.png"
import Computer from "./assets/coding.png"
import Car from "./assets/electric-car.png"
import Electronics from "./assets/electronic.png"

const Desktop = ({ modalData, openModalHandler, closeModalHandler }) => {
  return (
    <MediaQuery minWidth={sizes.tablet + 1}>
      <FlexWrapper
        desktopFlexDirection="row"
        tabletFlexDirection="row"
        mobileFlexDirection="Column"
        mobileHeight="100%">
        <ModalImage
        data={modalData[0]}
        closeModalHandler={closeModalHandler}
        openModalHandler={openModalHandler}>
        <Image
          name="camera"
          src={Camera}
          alt="camera"
          height="250px"
          width="250px"
          paddingRight="10px"
        />
      </ModalImage>
      <ModalImage
        data={modalData[1]}
        closeModalHandler={closeModalHandler}
        openModalHandler={openModalHandler}>
        <Image
          name="computer"
          src={Computer}
          alt="computer"
          height="250px"
          width="250px"
          paddingLeft="10px"
        />
      </ModalImage>
      </FlexWrapper>
      <FlexWrapper
        desktopFlexDirection="row"
        tabletFlexDirection="row"
        mobileFlexDirection="Column"
        mobileHeight="100%">
        <ModalImage
        data={modalData[2]}
        closeModalHandler={closeModalHandler}
        openModalHandler={openModalHandler}>
        <Image name="car" src={Car} alt="car" height="250px" width="250px" paddingRight="10px"/>
      </ModalImage>

      <ModalImage
        data={modalData[3]}
        closeModalHandler={closeModalHandler}
        openModalHandler={openModalHandler}>
        <Image
          name="electronics"
          src={Electronics}
          alt="electronics"
          height="250px"
          width="250px"
          onClick={openModalHandler}
          paddingLeft="10px"
        />
      </ModalImage>
      </FlexWrapper>
    </MediaQuery>
  )
}

export default Desktop
