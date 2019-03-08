import React from 'react'
import {Input, Button} from 'antd'
const index = () => {
  return (
    <div>
      <Input type={Input.email}></Input>
      <Input type={Input.text}></Input>
      <Input type={Input.TextArea}></Input>
      <Button></Button>
    </div>
  )
}

export default index
