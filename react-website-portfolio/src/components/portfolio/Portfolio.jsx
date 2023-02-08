import React from 'react'
import './portfolio.css'
import { portfolio } from '../../data/portfolio'
import { FaGithub } from 'react-icons/fa'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfólio</h2>
      <div className="container portfolio__container">
        {
          portfolio.map(({ id, image, title, github, demo, description }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <br></br>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'><FaGithub /> Github</a>
                  {/*<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>*/}
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio