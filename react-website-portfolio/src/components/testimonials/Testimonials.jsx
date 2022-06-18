import React from 'react'
import './testimonials.css'
import testimonial from '../../data/testimonial'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Recomendações Linkedin</h5>
      <h2>Recomendações</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          testimonial.map(({ id, image, title, name, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
              {/* <div className="client__avatar"> 
                  <img src={image} alt={name} />
              </div>*/}
                <h4 className='client__name'>{name}</h4>
                <h5 className='client__name'>{title}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
