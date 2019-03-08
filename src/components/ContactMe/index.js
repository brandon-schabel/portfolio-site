import React, { useState } from "react"
import { Button, Input, TextArea, Form, Lab, Label } from "semantic-ui-react"
import axios from "axios"
import { Section, FlexWrapper, ItemWrap } from "../index"
import { StyledForm } from "./styles"

const contactMeAPI = process.env.REACT_APP_AWS_API
const initialFormData = {
  name: "",
  contactEmail: "",
  message: ""
}

const index = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = e => {
    const currFormData = formData
    currFormData[e.target.name] = e.target.value
    setFormData(currFormData)
  }

  const handleSubmit = e => {
    setFormSubmitted(true)
    axios
      .post(contactMeAPI, formData)
      .then(response => {
        if (response.status === 200 || response.status === 204) {
          setFormData({ name: "", contactEmail: "", message: "" })
        }
      })
      .catch(error => {
        setFormSubmitted(false)
        console.log(error)
      })
  }
  return (
    <Section desktopHeight="500px" tabletHeight="600px" mobileHeight="600px">
      <h3>Questions? Please Contact Me Below!</h3>
      {formSubmitted && (
        <div>
          <h3>Thank you for contacting me, I will get back to you shortly.</h3>
          <br />
        </div>
      )}
      <FlexWrapper
        desktopWidth="30%"
        tabletWidth="50%"
        mobileWidth="80%"
        mobileHeight="100%">
        <StyledForm>
          <Form.Field>
            <label>Your Name</label>
            <input
              name="name"
              placeholder="First Name"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Contact Email</label>
            <input
              name="contactEmail"
              placeholder="Contact Email"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field
            name="message"
            label="Message"
            control="textarea"
            rows="3"
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleSubmit} disabled={formSubmitted}>
            Submit
          </Button>
        </StyledForm>
      </FlexWrapper>
    </Section>
  )
}

export default index

// <Form>
//       <FlexWrapper mobileWidth="60%" tabletWidth="50%" desktopWidth="100%" height="500px">

//         <ItemWrap marginTop="20px">
//           <Input name="name" onChange={handleChange} label="Your Name"/>
//         </ItemWrap>
//         <ItemWrap marginTop="20px">
//           <Input name="contactEmail" onChange={handleChange} label="Email" />
//         </ItemWrap>
//         <ItemWrap marginTop="20px">
//           <TextArea name="message" onChange={handleChange} placeholder='Message' label="Message" />

//         </ItemWrap>
//           <Button onClick={handleSubmit} disabled={formSubmitted}>
//             Submit
//           </Button>
//       </FlexWrapper>
//       </Form>
