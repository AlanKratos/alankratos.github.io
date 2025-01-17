import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Lang from './Lang'

const Header = () => {
  return (
    <header>

      <div className="container header__container">

        {/* <Lang /> */}

        <h5>Olá, eu sou</h5>
        <h1>Alan Rodrigues</h1>
        <h5 className='text-light'>Analista Desenvolvedor de Software</h5>

        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>


    </header>
  )
}

export default Header