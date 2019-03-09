import React, { useState } from "react"
import { Section, FlexWrapper, SimpleFlex } from "../index"
import {
  leftColumnTitle,
  leftColumnShortDescription,
  leftModalDescription,
  rightColumnShortDescription,
  rightModalDescription,
  rightColumnTitle
} from "./Descriptions"

import { DescriptionWrapper, StyledA } from "./styles"

import { Modal, Button, Icon, Header } from "semantic-ui-react"

const index = () => {
  const [isModal1Open, setIsModal1Open] = useState(false)
  const [isModal2Open, setIsModal2Open] = useState(false)

  const openModal1 = () => setIsModal1Open(true)
  const openModal2 = () => setIsModal2Open(true)

  const closeModal1 = () => setIsModal1Open(false)
  const closeModal2 = () => setIsModal2Open(false)

  return (
    <Section
      tabletFlexDirection="row"
      desktopFlexDirection="row"
      desktopHeight="400px"
      tabletHeight="400px"
      mobileHeight="500px">
      <FlexWrapper
        mobileHeight="100%"
        desktopWidth="25%"
        tabletWidth="40%"
        mobileWidth="80%">
        <DescriptionWrapper paddingLeft="10px" paddingRight="10px">
          <SimpleFlex alignItems="center">
            <h3>{leftColumnTitle}</h3>
          </SimpleFlex>
          <p>{leftColumnShortDescription}</p>
        </DescriptionWrapper>
        <Modal
          trigger={
            <StyledA>
              <p onClick={openModal1}>Read More Here...</p>
            </StyledA>
          }
          basic
          size="small"
          open={isModal1Open}
          onClose={closeModal1}>
          <Header icon="fighter jet" content={leftColumnTitle} />
          <Modal.Content>
            <p>{leftModalDescription}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="white" inverted onClick={closeModal1}>
              <Icon name="remove" /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      </FlexWrapper>
      <FlexWrapper
        mobileHeight="100%"
        desktopWidth="25%"
        tabletWidth="40%"
        mobileWidth="80%">
        <DescriptionWrapper paddingLeft="10px" paddingRight="10px">
          <SimpleFlex alignItems="center">
            <h3>{rightColumnTitle} </h3>
          </SimpleFlex>
          <p>{rightColumnShortDescription}</p>
        </DescriptionWrapper>
        <Modal
          trigger={
            <StyledA>
              <p onClick={openModal2}>Read More Here...</p>
            </StyledA>
          }
          basic
          size="small"
          open={isModal2Open}
          onClose={closeModal2}>
          <Header icon="terminal" content={rightColumnTitle} />
          <Modal.Content>
            <p>{rightModalDescription}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="white" inverted onClick={closeModal2}>
              <Icon name="remove" /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      </FlexWrapper>
    </Section>
  )
}

export default index
