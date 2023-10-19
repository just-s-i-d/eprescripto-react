import { useContext } from "react";
import Login from "../../components/login";
import { UserContext } from "../../components/context/user";
import HeroSection from "./section/hero/hero";
import SectionContainer from "./section/container/container";
import SectionFeatures from "./section/features/features";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SectionContainer>
        <SectionFeatures />
      </SectionContainer>
    </>
  );
};
export default HomePage;
