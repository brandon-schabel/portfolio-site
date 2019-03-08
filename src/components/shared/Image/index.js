import React from "react"
import { StyledImage } from "./styles"

const index = (props) => {
  return <StyledImage props={props} src={props.src} alt={props.alt} />
}

export default index
