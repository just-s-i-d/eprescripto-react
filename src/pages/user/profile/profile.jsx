import { useContext, useEffect, useState } from "react"
import { deleteUserAccount } from "../../../utility/user"
import { UserContext } from "../../../context/user"
import Delete from "../../../components/delete/delete"

const defaultFields = {
    email: "",
    fullName: "",
    age: "",
    gender: ""
}

const Profile = ({ onClick }) => {
    const [fields, setFields] = useState(defaultFields)
    const { isConfirmBoxVisible, setIsConfirmBoxVisible } = useContext(UserContext)
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))

    const deleteAccountHandler = () => {
        setIsConfirmBoxVisible(!isConfirmBoxVisible)
    }
    useEffect(() => {
        setFields({ ...currentUser })
    }, [])

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
            <button className="dashboard styled" id="delete-btn" onClick={deleteAccountHandler}>Delete Account</button>
            
        </div>
    )
}
export default Profile