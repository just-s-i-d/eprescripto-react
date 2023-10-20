const TestimonialSlides=({slide})=>{
    const {text,author}=slide
    return(
        <div className="testimonial">
        <blockquote>
          "{text}"
        </blockquote>
        <cite>- {author}</cite>
      </div>
    )
}
export default TestimonialSlides