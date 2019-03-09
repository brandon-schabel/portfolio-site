import React from "react"
import { Image, sizes } from "../index"
import MediaQuery from "react-responsive"
import ModalImage from "./ModalImage"

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

const Mobile = ({ modalData, openModalHandler, closeModalHandler }) => {
  return (
    <MediaQuery maxWidth={sizes.tablet}>
      <ModalImage
        data={modalData[0]}
        closeModalHandler={closeModalHandler}
        openModalHandler={openModalHandler}>
        <Image
          name="camera"
          src={Camera}
          alt="camera"
          height="225px"
          width="225px"
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
          height="225px"
          width="225px"
        />
      </ModalImage>

      <ModalImage
        data={modalData[2]}
        closeModalHandler={closeModalHandler}
        openModalHandler={openModalHandler}>
        <Image name="car" src={Car} alt="car" height="225px" width="225px" />
      </ModalImage>

      <ModalImage
        data={modalData[3]}
        closeModalHandler={closeModalHandler}
        openModalHandler={openModalHandler}>
        <Image
          name="electronics"
          src={Electronics}
          alt="electronics"
          height="225px"
          width="225px"
          onClick={openModalHandler}
        />
      </ModalImage>
    </MediaQuery>
  )
}

export default Mobile
