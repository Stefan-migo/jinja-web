import React, { useEffect } from "react";
import Section from "./Section";
import curve from "../assets/hero/curve.png";
import Button from "./Button";
import { navigation } from "../constants";
import heroBackground from "../assets/hero/heroBackground.svg";
import heroBottle from "../assets/hero/heroBottle.svg";
import mobileBottle from "../assets/hero/mobileBottles.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const rect = heroSection.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (inView) {
        heroSection.classList.add("animate"); // Assuming 'animate' class adds animation styles
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative top-0 left-0 w-full lg:h-screen bg-cover bg-center bg-fixed" id="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <Section className="flex flex-col items-center justify-center h-full text-center z-10 px-4 md:px-10" >
        <div className="container mt-[5rem] lg:mt-[-55px] flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 fade-in">
            <h1 className="relative h1 mb-6">
              ¡Explora el sabor del <span className="relative inline-block">Jengibre!<img src={curve} className="absolute top-full left-0 w-full xl:" width={624} height={28} alt="Curve" /></span>
            </h1>
            <p className="max-w-3xl mx-[2.5rem] lg:mx-auto  mb-6 text-color-4 lg:mb-8">Descubre Jinja Beer, una bebida artesanal de jengibre que combina lo mejor de la naturaleza con el arte de la fermentación. Saludable, refrescante y 100% artesanal.</p>
            <Link to={`/catalog`}>
                            <span className="button items-center justify-center box-border py-5 mt-2 mb-3 mr-5 ml-10 
    text-center rounded-2xl px-7 transition duration-500 ease transform hover:-translate-y-1 inline-flex bg-color-4 text-color-2 hover:text-color-3 cursor-pointer">Catálogo</span>
                        </Link>
          </div>
          <div className="hidden lg:flex justify-end fade-in">
            <img src={heroBottle} className="w-auto h-auto max-h-full max-w-full" alt="Hero Bottle"/>
          </div>
          <div className="flex lg:hidden justify-center fade-in">
            <img src={mobileBottle} className="w-3/4 h-auto max-h-full max-w-full" alt="Mobile Hero Bottle"/>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Hero;
