import React, { useState } from "react"
import { Section } from "../index"
import Desktop from "./Desktop"
import Mobile from "./Mobile"

const initModalData = [
  {
    name: "camera",
    isOpen: false,
    modalTitle: "Photography",
    modalDescription: "This is the description",
    modalIcon: ""
  },
  {
    name: "computer",
    isOpen: false,
    modalTitle: "Computers and Programming",
    modalDescription: "This is the description",
    modalIcon: ""
  },
  {
    name: "car",
    isOpen: false,
    modalTitle: "Electric Vehicles and Renewable Energy",
    modalDescription: "This is the description",
    modalIcon: ""
  },
  {
    name: "electronics",
    isOpen: false,
    modalTitle: "DIY Electronics",
    modalDescription: "This is the description",
    modalIcon: ""
  }
]

const index = () => {
  const [modalData, setModalData] = useState(initModalData)

  const openModalHandler = data => {
    let newModalData = modalData

    newModalData.forEach(el => {
      if (el.name === data.name) {
        el.isOpen = true
      }
    })

    setModalData([...newModalData])
  }

  const closeModalHandler = data => {
    let newModalData = modalData

    newModalData.forEach(el => {
      if (el.name === data.name) {
        el.isOpen = false
      }
    })

    setModalData([...newModalData])
  }

  return (
    <Section desktopHeight="625px" tabletHeight="625px" mobileHeight="1000px" backgroundColor="#34495e">
      <h2 style={{color: 'white'}}>Interests</h2>
      <Desktop
        modalData={modalData}
        openModalHandler={openModalHandler}
        closeModalHandler={closeModalHandler}
      />
      <Mobile
        modalData={modalData}
        openModalHandler={openModalHandler}
        closeModalHandler={closeModalHandler}
      />
    </Section>
  )
}

export default index
