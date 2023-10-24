import { useContext } from "react"
import Delete from "../../../components/delete/delete"
import TableRow from "./row"
import { UserContext } from "../../../context/user"
import { deletePrescription } from "../../../utility/prescription"

const PrescriptionTable = ({ prescriptions,edit}) => {
    
    const {prescriptionId}=useContext(UserContext)
    const {isConfirmBoxVisible}=useContext(UserContext)

    return (
        <section className="prescription-table-section">
            <div className="prescription-table-container">
                <table id="prescription-table">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Prescription Name</th>
                            <th>Doctor Name</th>
                            <th>Hospital Name</th>
                            <th>Prescription Date</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-data">
                        {prescriptions?.map((prescription,index)=>{
                            return <TableRow prescription={prescription} key={index} index={index} edit={edit}/>
                        })}
                    </tbody>
                </table>
                <div className={`empty-table ${(!prescriptions||!prescriptions.length) && "active"}`}>No prescriptions added.</div>
                {isConfirmBoxVisible && <Delete onClick={()=>deletePrescription(prescriptionId)}/>}
            </div>
        </section>
    )
}

export default PrescriptionTable