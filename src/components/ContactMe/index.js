import React, {useState} from 'react'
import {Input, Button} from 'antd'
import axios from 'axios'
const {TextArea} = Input;

const contactMeAPI = process.env.REACT_APP_AWS_API
const initialFormData = {
  name: '',
  contactEmail: '',
  message: ''
}

const index = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [formSubmitted, setFormSubmitted] = useState(false)


  const handleChange = e => {
    const currFormData = formData
    currFormData[e.target.name] = e.target.value
    setFormData(currFormData);
  }

  const handleSubmit = e => {
    console.log(contactMeAPI);
    axios.post(contactMeAPI, formData).then( response => {
      console.log(response)
      if(response.status === 200 || response.status === 204) {
        setFormData({name: '', contactEmail: '', message: ''})
        setFormSubmitted(true)
      }
    }).catch((error) => {
      console.log(error)
      console.log(error.response)
    })
  }
  return (
    <div>
    {formSubmitted && <h3>Thank you for contacting me, I will get back to you shortly.</h3>}
      Name: 
      <Input name="name" onChange={handleChange}></Input>
      Email: 
      <Input name="contactEmail" onChange={handleChange}></Input>
      Message: 
      <TextArea name="message" onChange={handleChange}></TextArea>
      <Button onClick={handleSubmit} disabled={formSubmitted}>Submit</Button>
    </div>
  )
}

export default index
