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
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-color-4 mb-4">Un Viaje de Autenticidad, Tradición y Salud</h2>
                        <p className="text-base md:text-lg lg:text-lg text-color-4 mb-4">
                        En Jinja, creemos que cada botella cuenta una historia, una que conecta a las personas con la tierra, la tradición y el bienestar. Nacimos en Villarrica, Chile, en un territorio donde la naturaleza es una constante inspiración para ir a la raíz. Desde nuestros origenes en Chile hasta nuestro nuevo hogar en Córdoba. hemos mantenido intacta la esencia artesanal que define cada gota de Jinja.
                        </p>
                        <p className="text-base md:text-lg lg:text-lg text-color-4 mb-4">
                            Somos más que una bebida; somos un símbolo de autenticidad y conexión con lo que realmente importa. Nuestro proceso de fermentación es un homenaje a la paciencia y al respeto por la naturaleza. Cada botella de Jinja es el resultado de un compromiso profundo con la calidad, la tradición y el bienestar. Es un tributo a aquellos que valoran lo artesanal, lo auténtico, y lo que se hace con el corazón.</p>
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
                        {/* <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-color-4 mb-4">Qué Hacemos</h2> */}
                        <p className="text-base md:text-lg lg:text-lg text-color-4 mb-4">
                        En Jinja, entendemos que un estilo de vida consciente no es solo una elección, sino una forma de ser. Nos enorgullece ofrecer una bebida que nutre el cuerpo y el espíritu, que te invita a disfrutar de los pequeños placeres de la vida con quienes más quieres. Nuestro compromiso es con la tierra, con la herencia cultural y con todos aquellos que buscan en cada sorbo una conexión genuina con el mundo natural.
                        </p>
                        <p className="text-base md:text-lg lg:text-lg text-color-4">
                        Te invitamos a formar parte de esta comunidad, a descubrir el poder de la fermentación artesanal y a vivir cada día con la autenticidad y el respeto que Jinja representa. Este es nuestro manifiesto, y lo compartimos con todos aquellos que valoran la calidad, la tradición y la verdadera esencia de lo artesanal.
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


//Jinja Beer se fundó en 2023 por Stefan Miranda y Daniela Mariguin, inspirados por la necesidad de producir una bebida de jengibre artesanal y saludable. La obsesión de Stefan por el ginger beer lo llevó a explorar la producción artesanal, resultando en una bebida que hoy se comparte con el mundo.