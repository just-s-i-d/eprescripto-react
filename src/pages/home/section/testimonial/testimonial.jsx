import { useEffect, useState } from "react";
import TestimonialSlides from "./slides/slides";


const slides = [
  {
    text: "ePrescripto is a game-changer for me. Managing prescriptions for my entire family has never been this simple.",
    author: "Jane Smith",
  },
  {
    text: "ePrescripto is a game-changer for me. Managing prescriptions for my entire family has never been this simple.",
    author: "Jane Smith",
  },
  {
    text: "ePrescripto is a game-changer for me. Managing prescriptions for my entire family has never been this simple.",
    author: "Jane Smith",
  },
];

const SectionTestimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="testimonial-section">
      <h2 className="heading">Testimonials</h2>
      <div className="testimonial-container">
        <div className="indicators">
          {slides.map((_, index) => (
            <span
              className={`indicator-btn ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleSlideClick(index)}
              key={index}
            ></span>
          ))}
        </div>
        <div className="slider-container">
          <div className="slider-row" style={{ transform: `translateX(-${currentSlide * 1200}px)` }}>
            {slides.map((slide, index) => {
              return <TestimonialSlides slide={slide} key={index}/>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTestimonial;
