import Feature from "./feature/feature"

const SectionFeatures=()=>{
    const content=[
        {
        title:"Medication Reminders",
        text:"Never miss a dose again! ePrescripto's intuitive medication reminders keep you on track with your prescriptions."
    },
        {
        title:"Priscription History",
        text:"Access your complete prescription history at your fingertips. ePrescripto securely records and organizes your medications"
    },
        {
        title:"Family Profiles",
        text:"You can manage prescriptions for multiple family members all in one account. Streamline your loved ones' health journeys effortlessly"
    },
]

    return(
        <div className="features-main-container">
        <h1 className="heading">Features</h1>
        <div className="features-container">
            {content.map((element,index)=>{
                return (
                    <Feature element={element} key={index}/>
                )
            })}
        </div>
    </div>
    )
}
export default SectionFeatures