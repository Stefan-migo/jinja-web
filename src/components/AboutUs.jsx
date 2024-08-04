import React, { useEffect, useRef } from 'react';
import Bg from '../assets/aboutUs/bg.svg';
import { Link } from 'react-router-dom';
import Section from './Section';
import videoSrc from '../assets/aboutUs/JinjaVideo.mov';

function AboutUs() {
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
        <section
            className="relative w-full h-full lg:h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Bg})` }} id="about"
        >
            <Section className="flex flex-col items-center justify-center h-full text-center z-10 px-4 md:px-10" >
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="relative flex justify-center lg:justify-start mb-8 lg:mb-0 lg:w-1/2">
                        <div className="relative w-full h-full lg:h-[500px] flex justify-center items-center">
                            <div className="w-full max-w-[600px] lg:max-w-[800px] aspect-auto border-4 border-color-4 shadow-xl rounded-lg overflow-hidden">
                                <video
                                    ref={videoRef}
                                    src={videoSrc}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-20 flex flex-col justify-center text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-color-4 mb-4">Descubre Nuestra Historia</h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-base md:text-lg lg:text-lg text-color-4 mb-4">
                            En Jinja Beer, creemos en el poder de la naturaleza y la tradición. Nuestra bebida artesanal de jengibre fermentado es el resultado de años de dedicación y pasión por los fermentos saludables.
                            </p>
                            <p className="text-base md:text-lg lg:text-lg text-color-4">
                            Desde nuestros inicios en Villarrica, Chile, hasta nuestro traslado a Córdoba, Argentina, nos hemos comprometido a ofrecer una bebida deliciosa y beneficiosa para la salud. Utilizamos productos locales de alta calidad y una combinación única de especias que dan a Jinja su sabor original.
                            </p>
                        </div>
                        <div className="text-center my-4">
                          <Link to={`/about-us`}>
                            <span className="button items-center justify-center box-border py-5 mt-2 mb-3 mr-5 ml-10 text-center rounded-2xl px-7 transition duration-500 ease transform hover:-translate-y-1 inline-flex bg-color-4 text-color-2 hover:text-color-3 cursor-pointer">Leer más...</span>
                          </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </section>
    );
}

export default AboutUs;
