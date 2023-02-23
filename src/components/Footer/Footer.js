import React from 'react'
import './Footer.css'
import { AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiOutlineGithub  } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer_container'>
      <AiFillTwitterSquare className='icons'/>
      <AiFillFacebook className='icons'/>
      <AiFillInstagram className='icons'/>
      <AiOutlineGithub className='icons'/>
    </div>
  )
}

export default Footer