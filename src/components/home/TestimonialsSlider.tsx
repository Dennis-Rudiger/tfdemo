import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, ABC Corporation",
    content: "Tronraft Africa delivered exceptional quality on our commercial building project. Their team's professionalism and attention to detail exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Director, XYZ Industries",
    content: "Working with Tronraft Africa has been a game-changer for our infrastructure projects. Their consultancy services have saved us both time and resources.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 3,
    name: "Michael Ochieng",
    position: "Property Developer",
    content: "I've worked with many construction firms, but Tronraft stands out for their commitment to timeline and budget adherence while maintaining top quality.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 4,
    name: "Amina Wanjiku",
    position: "Project Manager, Government Housing Initiative",
    content: "The Tronraft team's expertise in civil works helped us overcome challenging terrain issues. Their innovative solutions saved us significant costs.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const TestimonialsSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative px-4">
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-2">
            <div className="testimonial-card h-full">
              <FaQuoteLeft className="text-primary opacity-20 text-2xl md:text-3xl mb-3 md:mb-4" />
              <p className="italic text-gray-700 mb-4 md:mb-6 text-sm md:text-base line-clamp-3 md:line-clamp-none">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 overflow-hidden relative">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Navigation Arrows - smaller on mobile */}
      <button 
        onClick={goToPrev} 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center focus:outline-none z-10 hover:bg-primary hover:text-white transition-colors duration-300"
        aria-label="Previous testimonial"
      >
        <FaChevronLeft className="text-xs md:text-base" />
      </button>
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center focus:outline-none z-10 hover:bg-primary hover:text-white transition-colors duration-300"
        aria-label="Next testimonial"
      >
        <FaChevronRight className="text-xs md:text-base" />
      </button>
    </div>
  );
};

export default TestimonialsSlider;
