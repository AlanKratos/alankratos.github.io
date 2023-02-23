import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tasfwca', 'template_nzkwzpf', form.current, 'YPCKJDVfud_AxGJpu')

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contatc__option-icon' />
            <h4>Email</h4>
            <h5>alanrodriguesalmeida89@gmail.com</h5>
            <a href='mailto:alanrodriguesalmeida89@gmail.com'>Enviar um email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contatc__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 (32) 99904-8972</h5>
            <a href='https://wa.me/+5532999048972' target='_blank'>Enviar uma mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name="email" placeholder='Seu email' />
          <textarea type="message" name="message" rows='7' placeholder='Sua mensagem' required />
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact