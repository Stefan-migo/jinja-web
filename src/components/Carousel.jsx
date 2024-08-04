// File: src/components/Carousel.jsx

import React, { useState, useEffect } from 'react';
import img1 from '../assets/aboutUs/image1.jpg';
import img2 from '../assets/aboutUs/image2.jpg';
import img3 from '../assets/aboutUs/image3.jpg';
import img4 from '../assets/aboutUs/image4.jpg';

const images = [img1, img2, img3, img4];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, []);

    return (
        <div className="relative w-full max-w-[800px] mx-auto">
            <div className="overflow-hidden rounded-lg shadow-xl">
                <img src={images[currentIndex]} alt="carousel" className="w-full h-auto" />
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">❮</button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">❯</button>
        </div>
    );
};

export default Carousel;
