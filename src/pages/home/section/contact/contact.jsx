import ContactThanks from "./thanks/thanks";
import { useState } from "react";
import ContactForm from "./form/form";
const SectionContact = () => {
  const [isThanksVisible, setIsThanksVisible] = useState(false);
  const showThanksboxHandler = (event) => {
    event.preventDefault()
    setIsThanksVisible(!isThanksVisible);
    setTimeout(()=>{
        setIsThanksVisible(false)
    },3000)
  };
  return (
    <section className="contact-section section-fonts flex-col" id="contact-us">
      <div className="contact-main-container flex">
        {isThanksVisible === false ? <ContactForm onClick={showThanksboxHandler}/> : <ContactThanks />}
      </div>
    </section>
  );
};
export default SectionContact;
