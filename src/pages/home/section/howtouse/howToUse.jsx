import PresciptionIlustration from "../../../../assets/images/priscription.png"
import Steps from "./steps/steps"
const HowToUseSection=()=>{
    const allSteps=[
        {
            title:"Sign Up:",
            description:"Click on Get Started to create your ePrescripto account. It's quick, easy, and free."
        },
        {
            title: "Upload Prescriptions:",
            description:"Upload images or PDFs of your prescriptions. Our platform securely stores your prescription history."
        },
        {
            title:"Set Medication Reminders:" ,
            description:"Create personalized medication schedules. Receive timely reminders via email or SMS."
        },
        {
            title:"Stay Organized:",
            description:"Access your complete prescription history and track your health journey effortlessly."
        },
        {
            title:"Family-Friendly:",
            description:"Add and manage prescriptions for multiple family members within one account."
        },
        {
            title:"Experience Convenience:",
            description:"Simplify your healthcare management with ePrescripto and enjoy peace of mind."
        },
    ]
    return(
        <>
        <section className="how-to-use-section section-fonts" id="learn-more">
            <div className="steps-container">
                <img src={PresciptionIlustration} alt="Priscription illustrations" className="illustration"/>
                <h3 className="heading">Getting Started with ePrescripto</h3>
                <span>
                    Welcome to ePrescripto! We're here to make managing your prescriptions and healthcare a breeze.
                    Follow
                    these simple steps to get started:
                </span>
                <ol>
                    {allSteps.map((element,index)=>{
                        return (<Steps element={element} key={index}/>)
                    })}
                </ol>
            </div>
        </section>
        </>
    )
}
export default HowToUseSection