// File: src/components/FAQ.jsx

import React, { useState } from 'react';

const faqs = [
    {
        question: '¿Qué es Jinja Beer?',
        answer: 'Jinja Beer es una bebida artesanal fermentada de jengibre, creada con ingredientes locales de alta calidad. Es una opción saludable y deliciosa, rica en probióticos naturales que benefician la salud digestiva y el sistema inmunológico.'
    },
    {
        question: '¿Cuáles son los beneficios de consumir bebidas fermentadas?',
        answer: 'Las bebidas fermentadas, como Jinja Beer, son ricas en probióticos que ayudan a mantener un equilibrio saludable de bacterias en el intestino, mejorando la digestión y fortaleciendo el sistema inmunológico. Además, pueden contribuir a la salud general y proporcionar nutrientes esenciales.'
    },
    {
        question: '¿Dónde se puede comprar Jinja Beer?',
        answer: 'Jinja Beer está disponible en varios puntos de venta locales en Córdoba, Argentina. También puedes comprarla a través de nuestra tienda en línea en nuestro sitio web oficial.'
    },
    {
        question: '¿Cómo se elabora Jinja Beer?',
        answer: 'Jinja Beer se elabora mediante un proceso artesanal que incluye la fermentación natural del jengibre con una combinación única de especias. Utilizamos productos locales de alta calidad y no añadimos CO2, garantizando una fermentación 100% natural y auténtica.'
    },
    {
        question: '¿Jinja Beer contiene alcohol?',
        answer: 'Sí, Jinja Beer contiene una pequeña cantidad de alcohol que se produce de manera natural durante el proceso de fermentación. Por esta razón, recomendamos consumirla con moderación.'
    },
    {
        question: '¿Qué hace que Jinja Beer sea diferente de otras bebidas de jengibre?',
        answer: 'Jinja Beer se diferencia por su proceso artesanal y su compromiso con la calidad. No añadimos CO2, y la fermentación es completamente natural, lo que asegura que cada botella contenga probióticos saludables. Además, nuestra receta única y el uso de ingredientes locales le dan un sabor distintivo y auténtico.'
    },
    {
        question: '¿Puedo reciclar las botellas?',
        answer: 'Sí, nuestras botellas son 100% reciclables. Animamos a nuestros clientes a reciclar las botellas para contribuir a la sostenibilidad y cuidado del medio ambiente.'
    },
    {
        question: '¿Jinja Beer es apta para veganos?',
        answer: 'Sí, Jinja Beer es completamente vegana. No utilizamos ingredientes de origen animal en nuestra receta, por lo que es apta para quienes siguen una alimentación basada en plantas.'
    },
    {
        question: '¿Qué debo saber sobre el almacenamiento de Jinja Beer?',
        answer: 'Jinja Beer debe almacenarse en un lugar fresco y oscuro, preferiblemente en el refrigerador, para mantener su frescura y sabor. Además, debido a la fermentación natural, es importante abrir la botella con cuidado para evitar derrames debido a la presión del gas.'
    },
    {
        question: '¿Jinja Beer tiene algún programa de fidelidad para clientes?',
        answer: 'Actualmente estamos desarrollando un programa de fidelidad para nuestros clientes más frecuentes. ¡Mantente atento a nuestras actualizaciones en el sitio web y redes sociales para más información!'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-color-4 mb-8 text-center">Preguntas Frecuentes</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 w-full">
                    <div className="w-full text-left">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`w-full p-4 px-[15rem] bg-color-4 text-color-2 rounded-lg shadow-lg ${openIndex === index ? 'rounded-b-none' : ''}`}
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <div className="w-full p-4 bg-color-2 text-color-4 rounded-b-lg shadow-inner">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
