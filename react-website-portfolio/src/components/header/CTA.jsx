import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download currículo</a>
        <a href='#contact' className='btn'>Vamos conversar</a>
    </div>
  )
}

export default CTA