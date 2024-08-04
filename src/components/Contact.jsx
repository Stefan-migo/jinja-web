import React, { useState } from 'react';
import Section from './Section';
import locationIcon from '../assets/contact/location.svg';
import whatsappIcon from '../assets/contact/whatsapp.svg';
import instagramIcon from '../assets/contact/instagram.svg';
import emailIcon from '../assets/contact/email.svg';
import '../styles/contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSendForm = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const accessKey = import.meta.env.VITE_WEB3_KEY;

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (response.success) {
        console.log("SUCCESS!", response);
        alert('Message sent successfully!');
      } else {
        console.error('FAILED...', response);
        alert('Failed to send the message, please try again later.');
      }
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send the message, please try again later.');
    }

    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <section
      className="relative w-full min-h-screen justify-center bg-cover bg-center flex items-center lg:bg-contact-desktop bg-contact-mobile"
      id="contact"
    >
      <Section className="container grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-8 relative">
        <div className="md:col-span-8 lg:col-span-6 flex flex-col space-y-8 px-4 md:px-8 lg:pl-48 lg:pt-8 lg:ml-auto">
          <form onSubmit={handleSendForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="input-container">
                <input
                  type="text"
                  className="input-field"
                  id="nombre"
                  name="nombre"
                  placeholder=" "
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <span className="placeholder">Nombre</span>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="input-field"
                  id="apellido"
                  name="apellido"
                  placeholder=" "
                  required
                  value={formData.apellido}
                  onChange={handleChange}
                />
                <span className="placeholder">Apellido</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="input-container">
                <input
                  type="email"
                  className="input-field"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className="placeholder">Email</span>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="input-field"
                  id="telefono"
                  name="telefono"
                  placeholder=" "
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <span className="placeholder">Teléfono</span>
              </div>
            </div>
            <div className="input-container">
              <textarea
                className="input-field textarea"
                id="mensaje"
                name="mensaje"
                placeholder=" "
                required
                value={formData.mensaje}
                onChange={handleChange}
              />
              <span className="placeholder">Mensaje</span>
            </div>
            <button className="button items-center justify-center box-border py-5 mt-2 mb-3 text-center rounded-2xl px-7 transition duration-500 ease transform hover:-translate-y-1 inline-flex bg-color-4 text-color-2 hover:text-color-3 cursor-pointer" type="submit">
              Enviar
            </button>
          </form>
        </div>
        <div className="hidden md:block md:col-span-2 lg:pl-4 lg:pt-10 lg:col-span-6 relative">
          <div className="relative space-y-8">
            <div className="hidden absolute lg:flex items-start space-x-4" style={{ top: '0px', left: '-40px' }}>
              <img src={locationIcon} alt="Location" className="w-8 h-8" />
              <p className="text-lg text-color-4">
                Cordoba, Argentina
              </p>
            </div>

            <div className="absolute flex items-center space-x-4" style={{ top: '70px', left: '-40px' }}>
              <Link to={`https://wa.me/1234567890`} target='blank'>
                <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" /></Link>
              <Link to={`https://wa.me/1234567890`} target='blank'>
                <p className="text-lg text-color-4">123456789</p>
              </Link>
            </div>
            <div className="absolute flex items-center space-x-4" style={{ top: '165px', left: '-40px' }}>
              <Link to={`https://www.instagram.com/jinja.beer/`} target='blank'>
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </Link>
              <Link to={`https://www.instagram.com/jinja.beer/`} target='blank'>
                <p className="text-lg text-color-4">jinja.beer</p>
              </Link>
            </div>
            <div className="absolute flex items-center space-x-4" style={{ top: '350px', left: '-40px' }}>
              <img src={emailIcon} alt="Email" className="w-8 h-8" />
              <p className="text-lg text-color-4">fermentarte.creaciones@gmail.com</p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Contact;
