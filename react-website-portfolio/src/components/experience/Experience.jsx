import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { ExperienceList } from '../../data/experiences.ts'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quais habilidades eu tenho</h5>
      <h2>Minhas experiências</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              ExperienceList.frontend.map(({ id, title, exp }) => {
                return (
                  <article key={id} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{title}</h4>
                      <small className='text-light'>{exp}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {
              ExperienceList.backend.map(({ id, title, exp }) => {
                return (
                  <article key={id} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{title}</h4>
                      <small className='text-light'>{exp}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience