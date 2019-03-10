import React, { useState } from "react"
import { Section } from "../index"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import {Descriptions} from './Descriptions'

const initModalData = [
  {
    name: "camera",
    isOpen: false,
    modalTitle: "Photography",
    modalDescription: Descriptions.photography,
    modalIcon: ""
  },
  {
    name: "computer",
    isOpen: false,
    modalTitle: "Computers and Programming",
    modalDescription: Descriptions.computers,
    modalIcon: ""
  },
  {
    name: "car",
    isOpen: false,
    modalTitle: "Electric Vehicles and Renewable Energy",
    modalDescription: Descriptions.energyVehicles,
    modalIcon: ""
  },
  {
    name: "electronics",
    isOpen: false,
    modalTitle: "DIY Electronics",
    modalDescription: Descriptions.electronics,
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
    <Section desktopHeight="625px" tabletHeight="625px" mobileHeight="1100px" backgroundColor="#34495e">
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
