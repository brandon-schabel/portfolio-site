import React, { useState } from "react"
import { Header, Modal, Button, Icon } from "semantic-ui-react"
import {
  photography,
  computers,
  electricCar,
  electronics
} from "./Descriptions"
import {Image} from '../index'

const ModalImage = ({data, closeModalHandler, children}) => {
  console.log(data)

  return (
    <div>
      <Modal
        trigger={
          <div>
            {children}
          </div>
        }
        basic
        size="small"
        open={data.isOpen}>
        {/* onClose={closeModal1}> */}
        <Header icon="fighter jet" content={data.modalTitle} />
        <Modal.Content>
          <p>{data.modalDescription}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="white" inverted onClick={handleCloseModal}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default ModalImage
