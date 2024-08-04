// File: src/components/AboutUsPageLayout.jsx

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';;
import Section from './Section';
import Carousel from './Carousel';
import FAQ from './FAQ';
import imgCouple from '../assets/aboutUs/imgCouple.jpg';

function AboutUsPageLayout() {
    const videoRef = useRef(null);
    const hasPlayedOnce = useRef(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!hasPlayedOnce.current) {
                        hasPlayedOnce.current = true;
                        videoRef.current.play().catch((error) => {
                            console.error('Autoplay failed:', error);
                        });
                    } else {
                        videoRef.current.play();
                    }
                } else {
                    videoRef.current.pause();
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div>
            {/* Introducción */}
            <section className="relative w-full h-full lg:h-screen" id="about">
                <Section className="flex flex-col items-center justify-center h-full text-center z-10 px-4 md:px-10">
                    <div className="max-w-3xl mx-auto">
                        <img
                            src={imgCouple} // Asegúrate de que la ruta es correcta
                            alt="Fundadores"
                            className="w-full h-auto max-h-96 object-cover mb-4 rounded-lg shadow-lg"
                        />
                    </div>
                </Section>
            </section>
            
            {/* Nuestra Historia */}
            <section className="relative w-full h-full lg:h-screen" id="about">
                <Section className="flex flex-col items-center justify-center h-full text-center z-10 px-4 md:px-10">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-color-4 mb-4">Sobre Nosotros</h2>
                        <p className="text-base md:text-lg lg:text-lg text-color-4 mb-4">
                            Jinja Beer se fundó en 2023 por Stefan Miranda y Daniela Mariguin, inspirados por la necesidad de producir una bebida de jengibre artesanal y saludable. La obsesión de Stefan por el ginger beer lo llevó a explorar la producción artesanal, resultando en una bebida que hoy se comparte con el mundo.
                        </p>
                    </div>
                </Section>
            </section>
            
            {/* Qué Hacemos */}
            <section className="py-16" id="que-hacemos">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <Carousel />
                    </div>
                    <div className="lg:w-1/2 lg:pl-20 flex flex-col justify-center text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-color-4 mb-4">Qué Hacemos</h2>
                        <p className="text-base md:text-lg lg:text-lg text-color-4 mb-4">
                            En Jinja Beer, creemos en el poder de la naturaleza y la tradición. Nuestra bebida artesanal de jengibre fermentado es el resultado de años de dedicación y pasión por los fermentos saludables.
                        </p>
                        <p className="text-base md:text-lg lg:text-lg text-color-4">
                            Desde nuestros inicios en Villarrica, Chile, hasta nuestro traslado a Córdoba, Argentina, nos hemos comprometido a ofrecer una bebida deliciosa y beneficiosa para la salud. Utilizamos productos locales de alta calidad y una combinación única de especias que dan a Jinja su sabor original.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Nuestra Visión */}
            <section className="relative w-full h-full lg:h-screen" id="vision">
                <Section className="flex flex-col items-center justify-center h-full text-center z-10 px-4 md:px-10">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-color-4 mb-4">Nuestra Visión</h2>
                        <p className="text-base md:text-lg lg:text-lg text-color-4 mb-4">
                            Nuestra misión es aportar a la comunidad una bebida saludable con un sabor original, rescatando recetas tradicionales y promoviendo los beneficios de los probióticos. En Jinja Beer, entendemos la comida como medicina y trabajamos en equipo para crear productos que beneficien a la sociedad.
                        </p>
                        <p className="text-base md:text-lg lg:text-lg text-color-4">
                            Nuestro objetivo a largo plazo es ser referentes en bebidas fermentadas y probióticas en Argentina, Chile y toda Latinoamérica, manteniendo siempre nuestra esencia artesanal.
                        </p>
                    </div>
                </Section>
            </section>

            {/* Preguntas Frecuentes */}
            <section className="py-16" id="preguntas-frecuentes">
                <div className="container mx-auto">
                    <FAQ />
                </div>
            </section>
        </div>
    );
}

export default AboutUsPageLayout;

