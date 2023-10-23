import { useContext, useEffect, useState } from "react"
import "../../styles/prescription.css"
import PrescriptionModal from "./modal/modal"
import PrescriptionTable from "./table/table"
import { getPrescriptions } from "../../utility/prescription"
import { toast } from "../../utility/login"
import { UserContext } from "../../context/user"

const PrescriptionsPage = () => {

    const [isAddPrescriptionBoxVisible, setIsAddPrescriptionBoxVisible] = useState(false)
    const { setPrescriptionId } = useContext(UserContext)
    const [prescriptions, setPrescriptions] = useState()
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))

    const showBoxHandler = (event) => {
        event.preventDefault()
        const id = event.currentTarget.id || null
        if (id) {
            setPrescriptionId(id)
        }
        setIsAddPrescriptionBoxVisible(!isAddPrescriptionBoxVisible)
    }

    useEffect(() => {
        async function getDetails() {
            const response = await getPrescriptions(currentUser.id)
            if (!response.prescriptions) {
                toast("No prescriptions available", "error")
            }
            else {
                setPrescriptions(response.prescriptions)
            }
        }
        getDetails()
    }, [])

    return (
        <main className="user">
            <header>
                <div className="top-bar flex">
                    <h2>Prescriptions</h2>
                    <button className="dashboard styled" id="show-prescription-box" onClick={showBoxHandler}>Add Prescription</button>
                </div>
            </header>
            {isAddPrescriptionBoxVisible && <PrescriptionModal onClick={showBoxHandler} />}
            <PrescriptionTable prescriptions={prescriptions} edit={showBoxHandler} />
        </main>
    )
}
export default PrescriptionsPage