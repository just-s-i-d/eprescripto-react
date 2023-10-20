import { useState } from "react"
import "../../styles/prescription.css"
import PrescriptionModal from "./modal/modal"
import PrescriptionTable from "./table/table"

const PrescriptionsPage = () => {
    const [isAddPrescriptionBoxVisible,setIsAddPrescriptionBoxVisible]=useState(false)
    const showBoxHandler=(event)=>{
        event.preventDefault()
        setIsAddPrescriptionBoxVisible(!isAddPrescriptionBoxVisible)
    }
    return (
        <main>
            <header>
                <div className="top-bar flex">
                    <h2>Prescriptions</h2>
                    <button className="dashboard styled" id="show-prescription-box" onClick={showBoxHandler}>Add Prescription</button>
                </div>
            </header>
            {isAddPrescriptionBoxVisible&&<PrescriptionModal onClick={showBoxHandler}/>}
            <PrescriptionTable />
        </main>
    )
}
export default PrescriptionsPage