const PrescriptionTable = () => {
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

                    </tbody>
                </table>
                <div className="empty-table">No prescriptions added.</div>
            </div>
        </section>
    )
}
export default PrescriptionTable