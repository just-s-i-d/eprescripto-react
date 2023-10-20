
import Doc1 from "../../../../assets/images/team1.jpg";
import Doc2 from "../../../../assets/images/team2.jpg";
import Doc3 from "../../../../assets/images/team3.jpg";
import DoctorCard from "./card/card";
const SectionDoctor = () => {
  const doctors = [
    {
      name: "Dr. Olivia Martinez",
      img: Doc1,
      specialist: "Dermatologist",
    },
    {
      name: "Dr. Emily Davis",
      img: Doc2,
      specialist: "Pediatrician",
    },
    {
      name: "Dr. Robert Johnson",
      img: Doc3,
      specialist: "Orthopedic Surgeon",
    },
  ];
  return (
    <section id="doctors">
      <h1 className="heading">Doctors</h1>
      <div className="doctor-main-container">
        <div className="doctor-info-container">
          {doctors.map((element,index)=>{
            return <DoctorCard element={element} key={index}/>
          })}
        </div>
      </div>
    </section>
  );
};
export default SectionDoctor;
