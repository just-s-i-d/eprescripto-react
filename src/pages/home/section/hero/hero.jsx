import "./hero.css";
import DoctorIlustration from "../../../../assets/doc-priscription.jpg";
import Logo from "../../../../components/ui/logo/logo";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="brand-tagline-container">
          <h1 className="brand">e-Prescripto</h1>
          <h3 className="tagline">Simplify, Organise, Thrieve with ePrescripto</h3>
          <p className="description">
            With ePrescripto, managing your prescriptions is both convenient and
            secure. Join us today for a healthier, stress-free tomorrow.
          </p>
          <div className="btn-container">
            <a>
              <button className="styled get-started login">Get Started</button>
            </a>
          </div>
        </div>
        <img
          src={DoctorIlustration}
          alt="Priscription illustrations"
          className="illustration"
        />
      </div>
    </section>
  );
};
export default HeroSection;
