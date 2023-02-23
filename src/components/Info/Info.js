import React from 'react'
import logo from '../../assets/img/intro_logo.jpg'
import './Info.css'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'

const Info = () => {
  return (
    <div className='info_container'>
        <div className='info_top'>
            <img src={logo} alt=''/>
            <div className='details'>
                <h1 className='name'>Thanh Thai</h1>
                <h2 className='job'>Frontend Intern</h2>
            </div>
        </div>
        <div className='info_bottom'>
            <button className='email_btn'><AiOutlineMail/>Email</button>
            <button className='linkedln_btn'><AiFillLinkedin/>Linkedln</button>
        </div>
    </div>
  )
}

export default Info