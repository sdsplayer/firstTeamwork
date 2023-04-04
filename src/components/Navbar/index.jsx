import React from 'react'
import { Main } from './style'
import img from '../../assets/icons/logo.svg'
import Button from '@mui/material/Button'

const index = () => {
  return (
    <Main>
      <img src={img} alt="" />
      <ul className='navList'>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <Button variant="contained" sx={{ background: '#ff7143', width: '211px', height: '60px', borderRadius: '10px' }}>
        Get Started
      </Button>
    </Main>
  )
}

export default index