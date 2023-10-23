import { useContext } from "react";
import Login from "../../components/login";
import { UserContext } from "../../context/user";
import HeroSection from "./section/hero/hero";
import SectionContainer from "./section/container/container";
import SectionFeatures from "./section/features/features";
import HowToUseSection from "./section/howtouse/howToUse";
import "../../styles/home.css"
import SectionDoctor from "./section/doctors/doctors";
import SectionContact from "./section/contact/contact";
import SectionTestimonial from "./section/testimonial/testimonial";

const HomePage = () => {
  const {toast}=useContext(UserContext)
  return (
    <>
      <HeroSection />
      <SectionContainer>
        <SectionFeatures />
      </SectionContainer>
      <HowToUseSection />
      <SectionContainer>
        <SectionDoctor />
      </SectionContainer>
      <SectionTestimonial />
      <SectionContact />
    </>
  );
};
export default HomePage;
