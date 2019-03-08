import React from 'react'

const index = () => {
  const socialLinks = [
    {
      name: '',
      link: '',
      logo: '',
      color: 'red'
    },
    {
      name: '',
      link: '',
      logo: '',
      color: 'green'
    },
    {
      name: '',
      link: '',
      logo: '',
      color: 'blue'
    },
  ]

  const pageLinks =[
    {
      label: 'About Me',
      link: '',
    },
    {
      label: 'Interests',
      link: '',
    },
    {
      label: 'Contact',
      link: '',
    },
  ]
  return (
    <nav style={{display: 'flex', flexDirection: 'row'}}>
      <h2>Brandon Schabel</h2>
      {socialLinks.map(el => <div style={{width: '50px', height:'50px', color: el.color}}></div>)}

      {pageLinks.map(el => <h3>{el.label}</h3>)}
      
    </nav>
  )
}

export default index
