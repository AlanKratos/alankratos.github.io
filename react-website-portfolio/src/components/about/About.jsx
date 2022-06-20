import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça me</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>12+ anos trabalhando com ERPs</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ Clientes atendidos</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>40+ Concluídos</small>
            </article>
          </div>
          <p>
            Meu nome é Alan, trabalhei como consultor de sistemas por 12 anos e e meu último trabalho foi como Analista de Integrações de ERPs para a empresa Blu.<br></br><br></br>
            Sempre fui apaixonado pela área de desenvolvimento. Estou estudando nos últimos anos com intúito de me tornar um desenvolvedor conceituado.<br></br>    
          </p>
          <a href='#contact' className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About