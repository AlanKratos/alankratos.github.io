import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/alan-rodrigues-de-almeida/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/alanralmeida' target='_blank'><FaGithub /></a>
      <a href='https://www.instagram.com/alanrodrigues.a/' target='_blank'><FaInstagram /></a>
      <a href='https://wa.me/+5532999048972' target='_blank'><FaWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials