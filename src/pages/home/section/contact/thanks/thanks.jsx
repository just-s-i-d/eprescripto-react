import MessageDone from "../../../../../assets/images/done.png"
const ContactThanks=()=>{
    return(
        <div className="thanks-container flex">
        <div className="thanks">
            <img src={MessageDone} alt="Message Sent"/>
            <h2>Thank You</h2>
            <h4>We will get back to you.</h4>
        </div>
    </div>
    )
}
export default ContactThanks