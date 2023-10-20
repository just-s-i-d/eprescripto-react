import Button from "../../../../../components/ui/button/button"
import ContactUsImg from "../../../../../assets/images/contact-us.png"
const ContactForm=({onClick})=>{
    return(
            <div className="contact-form flex-col">
                <h2 className="heading">Get in touch with us</h2>
                <div className="contact-form-container flex">
                    <form>
                        <input type="text" placeholder="Full Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="tel" placeholder="Phone Number"/>
                        <textarea name="" id="" cols="60" rows="3" placeholder="Message"></textarea>
                        <Button id="send" onClick={onClick}>Send</Button>
                    </form>
                    <img src={ContactUsImg} alt="contact-us" className="contact-us-img"/>
                </div>
            </div>
    )
}
export default ContactForm