import { useContext, useEffect, useState } from "react"
import { addNewPrescription, showPrescriptionDetails, validatePrescriptionDetails } from "../../../utility/prescription"
import { UserContext } from "../../../context/user"
import Input from "../../../components/ui/input/input"
import Error from "../../../components/error/error"

const defaultFormFields = {
    alias: "",
    docName: "",
    hospitalName: "",
    prescriptionDate: "",
    imgLink: ""
}

const PrescriptionModal = ({ onClick }) => {
    const { prescriptionId, setPrescriptionId } = useContext(UserContext)
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [error, setError] = useState("")
    const runValidations = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
        const result = validatePrescriptionDetails(event.target)
        if (result === true) {
            console.log(result)
        }
        else {
            event.target.classList.add("active")
            setError(result)
            setTimeout(() => {
                event.target.classList.remove("active")
                setError("")
            }, 2000)
        }
    }

    const curUser = JSON.parse(sessionStorage.getItem("currentUser"))

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (prescriptionId) {
            addNewPrescription(formFields, prescriptionId)
        }
        else {
            addNewPrescription(formFields)
        }
    }
    useEffect(() => {
        if (prescriptionId) {
            const details = async () => {
                const prescription = await showPrescriptionDetails(prescriptionId)
                setFormFields({ ...prescription })
            }
            details()
        }
    }, [])

    return (
        <section className="prescription-section">
            <div className="prescription-card flex-col">
                <h3>Add New Prescription</h3>
                <span id="close-prescrition-modal" onClick={onClick}>&times;</span>
                <form action="" id="prescription-form" className="prescription-form-container" onSubmit={onSubmitHandler}>
                    <div className="form-field flex">
                        <label htmlFor="alias">Prescription Name :</label>
                        <div>
                            <Input type="text" id="alias" name="alias" onBlur={runValidations} defaultValue={formFields.alias} errorName="error-alias" error={error}/>
                        </div>
                    </div>
                    <div className="form-field flex">
                        <label htmlFor="doc-name">Doctor Name :</label>
                        <div>
                            <Input type="text" id="doc-name" name="docName" onBlur={runValidations} defaultValue={formFields.docName} errorName="error-name" error={error}/>
                        </div>
                    </div>
                    <div className="form-field flex">
                        <label htmlFor="hospital-name">Hospital Name :</label>
                        <div>
                            <Input type="text" name="hospitalName" id="hospital-name" onBlur={runValidations} defaultValue={formFields.hospitalName} errorName="error-hospital-name" error={error}/>
                        </div>
                    </div>
                    <div className="form-field flex">
                        <label htmlFor="prescription-date">Prescription Date :</label>
                        <div>
                            <Input type="date" id="prescription-date" name="prescriptionDate" onBlur={runValidations} defaultValue={formFields.prescriptionDate} errorName="error-date" error={error}/>
                        </div>
                    </div>
                    <div className="form-field flex">
                        <label htmlFor="img-link">Image Url :</label>
                        <div>
                            <Input type="url" id="img-link" name="imgLink" onBlur={runValidations} defaultValue={formFields.imgLink} errorName="error-img" error={error}/>   
                        </div>
                    </div>
                    <div className="prescription-btn-container flex">
                        <button id="add-new-prescription" className="dashboard styled" >Add Prescription</button>
                        <button id="save-prescription-btn" className="dashboard styled">Save Changes</button>
                        <button id="cancel-prescription-btn" className="dashboard styled" onClick={onClick}>Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default PrescriptionModal