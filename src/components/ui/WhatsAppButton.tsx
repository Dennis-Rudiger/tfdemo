import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  pulseAnimation?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "Hello, I'd like to inquire about your services.",
  pulseAnimation = true
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Format the phone number to remove any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp API URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <a 
      href={whatsappUrl} 
      className={`whatsapp-float ${pulseAnimation ? 'whatsapp-float-pulse' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
