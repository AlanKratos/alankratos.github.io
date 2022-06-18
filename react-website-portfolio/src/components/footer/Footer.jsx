import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      {/* <a href='#' className='footer__logo'>Alan Rodrigues</a> */}

      <ul className='permalinks'>
        <li><a href='#'>Início</a></li>
        <li><a href='#about'>Sobre</a></li>
        <li><a href='#experience'>Experiência</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li><a href='#portfolio'>Portfólio</a></li>
        <li><a href='#testimonials'>Recomendações</a></li>
        <li><a href='#contact'>Contato</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/alan-rodrigues-de-almeida/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/alanralmeida' target='_blank'><FaGithub /></a>
        <a href='https://www.instagram.com/alanrodrigues.a/' target='_blank'><FaInstagram /></a>
        <a href='https://api.whatsapp.com/send?phone+5532999048972' target='_blank'><FaWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alan Rodrigues. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer