const PrescriptionModal=({onClick})=>{
    return(
        <section className="prescription-section">
        <div className="prescription-card flex-col">
            <h3>Add New Prescription</h3>
            <span id="close-prescrition-modal" onclick="closePrescriptionBox(event)">&times;</span>
            <form action="" id="prescription-form" className="prescription-form-container">
                <div className="form-field flex">
                    <label htmlFor="alias">Prescription Name :</label>
                    <div>
                        <input type="text" id="alias" name="alias" /><br />
                        <span className="error-alias">error</span>
                    </div>
                </div>
                <div className="form-field flex">
                    <label htmlFor="doc-name">Doctor Name :</label>
                    <div>
                        <input type="text" id="doc-name" name="docName" /><br />
                        <span className="error-name">error</span>
                    </div>
                </div>
                <div className="form-field flex">
                    <label htmlFor="hospital-name">Hospital Name :</label>
                    <div>
                        <input type="text" name="hospitalName" id="hospital-name" /><br />
                        <span className="error-hospital-name">error</span>
                    </div>
                </div>
                <div className="form-field flex">
                    <label htmlFor="prescription-date">Prescription Date :</label>
                    <div>
                        <input type="date" id="prescription-date" name="prescriptionDate" /><br />
                        <span className="error-date">error</span>
                    </div>
                </div>
                <div className="form-field flex">
                    <label htmlFor="img-link">Image Url :</label>
                    <div>
                        <input type="url" id="img-link" name="imgLink" />
                        <span className="error-img">error</span>
                    </div>
                </div>
                <div className="prescription-btn-container flex">
                    <button id="add-new-prescription" className="dashboard styled">Add Prescription</button>
                    <button id="save-prescription-btn" className="dashboard styled">Save Changes</button>
                    <button id="cancel-prescription-btn" className="dashboard styled" onClick={onClick}>Cancel</button>
                </div>
            </form>
        </div>
    </section>
    )
}
export default PrescriptionModal