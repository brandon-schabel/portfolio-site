import React from 'react'
import {StyledSection} from './styles'

const Section = (props) => {
  return (
    <StyledSection {...props}>
      {props.children}
    </StyledSection>
  )
}

export default Section