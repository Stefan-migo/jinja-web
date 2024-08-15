import React from 'react';
import WhatsAppIcon from '../assets/footer/whatsapp.svg'; 

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/5493518013341'; // Replace with your number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <img src={WhatsAppIcon} alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
