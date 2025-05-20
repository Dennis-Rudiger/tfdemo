import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
}

interface ClientsMarqueeProps {
  clients: Client[];
  speed?: number; // Speed in pixels per second
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

const ClientsMarquee: React.FC<ClientsMarqueeProps> = ({ 
  clients, 
  speed = 30, 
  direction = 'left',
  pauseOnHover = true
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Client[]>(clients);

  // Duplicate items to create a seamless loop
  useEffect(() => {
    setItems([...clients, ...clients]);
  }, [clients]);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // Animation variables
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.offsetWidth;
    let animationId: number;
    let startTime: number;
    let currentPosition = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      // Calculate how much to move based on elapsed time and speed
      const elapsed = timestamp - startTime;
      const pixelsToMove = (elapsed / 1000) * speed;
      
      // Reset start time
      startTime = timestamp;
      
      // Update position
      if (direction === 'left') {
        currentPosition -= pixelsToMove;
        // Reset when first set of logos is out of view
        if (currentPosition <= -marqueeWidth / 2) {
          currentPosition = 0;
        }
      } else {
        currentPosition += pixelsToMove;
        // Reset when first set of logos is out of view
        if (currentPosition >= 0) {
          currentPosition = -marqueeWidth / 2;
        }
      }
      
      // Apply transform
      marquee.style.transform = `translateX(${currentPosition}px)`;
      
      // Continue animation if not hovering
      if (!pauseOnHover || !isHovering) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    // Start the animation
    if (!pauseOnHover || !isHovering) {
      animationId = requestAnimationFrame(animate);
    }
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed, direction, isHovering, pauseOnHover]);

  return (
    <div 
      className="overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={marqueeRef}
        className="flex items-center"
        style={{
          // Initial direction setting
          transform: direction === 'left' ? 'translateX(0)' : 'translateX(-50%)'
        }}
      >
        {items.map((client, index) => (
          <div 
            key={`${client.name}-${index}`}
            className="flex-shrink-0 mx-3 md:mx-4 py-2 md:py-4"
          >
            <div className="h-12 md:h-16 w-24 md:w-32 bg-white shadow-sm rounded-md p-2 md:p-3 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={120}
                height={60}
                className="object-contain max-h-full max-w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsMarquee;
