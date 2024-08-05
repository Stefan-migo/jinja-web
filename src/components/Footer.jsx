import React from 'react';
import logo from '../assets/footer/logo.svg';
import leyend from '../assets/footer/leyend.svg';
import whatsappIcon from '../assets/footer/whatsapp.svg';
import instagramIcon from '../assets/footer/instagram.svg';
import likeIcon from '../assets/footer/like.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative h-[16rem] bg-cover bg-center bg-no-repeat bg-footer-mobile lg:bg-footer-desktop">

      {/* Green block for logo and leyend */}
      <div className="hidden lg:flex absolute left-0 top-0 h-full w-1/3 items-center justify-center pr-[50px]">
        <div className="flex flex-col items-center pr-16">
          <img src={logo} alt="Logo" className="h-14 w-auto mb-2" />
          <img src={leyend} alt="Leyend" className="h-[1.25rem] w-auto" />
        </div>
      </div>

      <div className="hidden lg:block absolute top-14 left-[40%] w-auto text-center z-5">
        <div className="inline-flex flex-col items-center space-y-2">
          <Link to="/about-us">
            <p className="text-sm text-color-2">¿Quiénes Somos?</p>
          </Link>
          <Link to="/about-us">
            <p className="text-sm text-color-2">¿Qué Hacemos?</p>
          </Link>
          <Link to="/preguntas-frecuentes">
            <p className="text-sm text-color-2">Preguntas Frecuentes</p>
          </Link>
        </div>
      </div>

      {/* Second Block (Center Links - Above Copyright Text) */}
      <div className="hidden lg:block absolute top-14 left-[43.6%] w-1/3 text-center">
        <div className="inline-flex flex-col items-center space-y-2">
          <Link to="/catalogo">
            <p className="text-sm text-color-2">Catálogo</p>
          </Link>
          <Link to="/galeria">
            <p className="text-sm text-color-2">Galería</p>
          </Link>
          <Link to="/category/recipe">
            <p className="text-sm text-color-2">Recetas</p>
          </Link>
          <Link to="/">
            <p className="text-sm text-color-2">Recicla tu Botella</p>
          </Link>
        </div>
      </div>

      {/* Third Block (Text and Icons - Right Aligned, Above Line Gradient) */}
      <div className="bottom-[40px] pt-[30px] lg:pt-0 right-0 flex flex-col items-center text-center lg:text-start lg:items-end lg:absolute space-y-2 lg:pr-[50px]">
        <div className="text-sm text-color-2">
          <p className="mb-3 text-lg">Contacto</p>
          <p className="mb-2">+5412345646</p>
          <p className="mb-2">fermentarte.creaciones@gmail.com</p>
          <p className="mb-2">Córdoba, Argentina</p>
        </div>
        <div className="flex items-center space-x-4 pb-4">
          <Link to={`https://wa.me/1234567890`} target='blank'>
          <img src={whatsappIcon} alt="WhatsApp" className="w-20 h-10" />
          </Link>
          <Link to={`https://www.instagram.com/jinja.beer/`} target='blank'>
          <img src={instagramIcon} alt="Instagram" className="w-20 h-10" />
          </Link>
          <img src={likeIcon} alt="Like" className="w-20 h-10" />
        </div>
      </div>

      {/* Copyright text (Below Line Gradient) */}
      <div className="absolute px-[5rem] pt-4 lg:px-0 bottom-[0.5rem] left-0 right-0 text-center text-sm text-color-2">
        © 2024 Jinja Beer y Fermentarte Creaciones, producto registrado.
      </div>
    </footer>
  );
}

export default Footer;

