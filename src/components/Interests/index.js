import React, { useState } from "react"
import { Section, Image, sizes } from "../index"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import ModalImage from "./ModalImage"

const initModalData = [
  {
    name: "camera",
    isOpen: false,
    modalTitle: "Photography",
    modalDescription: "This is the description"
  },
  {
    name: "computer",
    isOpen: false,
    modalTitle: "Computers and Programming",
    modalDescription: "This is the description"
  },
  {
    name: "car",
    isOpen: false,
    modalTitle: "Electric Vehicles and Renewable Energy",
    modalDescription: "This is the description"
  },
  {
    name: "electronics",
    isOpen: false,
    modalTitle: "DIY Electronics",
    modalDescription: "This is the description"
  }
]

const index = () => {
  const [modalData, setModalData] = useState(initModalData)

  const imageClickHandler = e => {
    let newModalData = modalData
    newModalData.forEach(el => {
      if (el.name === e.target.name) {
        el.isOpen = true
      }
    })

    setModalData(newModalData)
  }

  const closeModalHandler = modalData => {
    let newModaData = modalData

    newModaData.forEach(el => {
      if (el.name === modalData.name) {
        el.isOpen = false
      }
    })

    setModalData(newModaData)
  }

  return (
    <Section desktopHeight="550px" tabletHeight="500px" mobileHeight="1000px">
      Interests
      <Desktop
        modalData={modalData}
        imageClickHandler={imageClickHandler}
        closeModalHandler={closeModalHandler}
      />
      <Mobile
        modalData={modalData}
        imageClickHandler={imageClickHandler}
        closeModalHandler={closeModalHandler}
      />
    </Section>
  )
}

export default index
