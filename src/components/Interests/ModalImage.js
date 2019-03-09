import React, { useState } from "react"
import { Header, Modal, Button, Icon } from "semantic-ui-react"
import {
  photography,
  computers,
  electricCar,
  electronics
} from "./Descriptions"

const ModalImage = ({ data, closeModalHandler, openModalHandler, children  }) => {

  const handleCloseModal = () => {
    closeModalHandler(data)
  }

  const handleOpenModal = () => {
    openModalHandler(data)
  }

  return (
      <Modal
        trigger={<div onClick={handleOpenModal}>{children}</div>}
        basic
        size="small"
        open={data.isOpen}
        onClose={handleCloseModal}>
        <Header icon={data.icon} content={data.modalTitle} />
        <Modal.Content>
          <p>{data.modalDescription}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="white" inverted onClick={handleCloseModal}>
            <Icon name="remove" />
            Close
          </Button>
        </Modal.Actions>
      </Modal>
  )
}

export default ModalImage
