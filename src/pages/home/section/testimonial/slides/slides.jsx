const TestimonialSlides=({slide,currentSlide})=>{
    const {text,author}=slide
    return(
        <div className="testimonial" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <blockquote>
          "{text}"
        </blockquote>
        <cite>- {author}</cite>
      </div>
    )
}
export default TestimonialSlides