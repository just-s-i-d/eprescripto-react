import { useEffect, useState } from "react"

const defaultFields = {
    email: "",
    fullName: "",
    age: "",
    gender: ""
}
const Profile = ({ onClick, currentUser }) => {
    const [fields, setFields] = useState(defaultFields)
    useEffect(() => {
        setFields({...currentUser})
    }, [currentUser])
    return (
        <div className="user-details">
            <div className="detail-field">
                <span>Email :</span>
                <h3 className="email">{fields.email ? fields.email : "Email"}</h3>
            </div>
            <div className="detail-field">
                <span>Full Name :</span>
                <h3 className="name">{fields.fullName ? fields.fullName : "Name"}</h3>
            </div>
            <div className="detail-field">
                <span>Age :</span>
                <h3>{fields.age ? fields.age : "Not Set"}</h3>
            </div>
            <div className="detail-field">
                <span>Gender :</span>
                <h3>{fields.gender ? fields.gender : "Not Set"}</h3>
            </div>
            <button className="dashboard styled" id="update-btn" onClick={onClick}>Edit Details</button>
            <button className="dashboard styled" id="delete-btn">Delete Account</button>
        </div>
    )
}
export default Profile