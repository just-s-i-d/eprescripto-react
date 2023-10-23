import { useEffect, useState } from "react"
import { validateUserDetails } from "../../../utility/user"
import Error from "../../../components/error/error"

const defaultFields = {
    email: "",
    fullName: '',
    age: Number,
    gender: ''
}

const UserSettings = ({ onClick, currentUser }) => {
    const [formFields, setFormFields] = useState(defaultFields)
    const [error, setError] = useState("")

    useEffect(() => {
        formFields.email = currentUser.email
        formFields.fullName=currentUser.fullName
    }, [])

    const resetFormFields = () => {
        setFormFields(defaultFields)
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const runValidations = (event) => {
        console.log(event.target)
        const result = validateUserDetails(event.target)
        if (result === true) {

        }
        else {
            event.target.classList.add("active")
            setError(result)
            setTimeout(() => {
                event.target.classList.remove("active")
                setError("")
            }, 3000)
        }
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        let idb = indexedDB.open("crude", 1)
        idb.onsuccess = () => {
            let tx = idb.result.transaction("users", "readwrite")
            let store = tx.objectStore("users")
            let cursor = store.get(currentUser.email)
            cursor.onsuccess = () => {
                let curUser = cursor.result
                const newUserData = {
                    ...curUser, ...formFields
                }
                let res = store.put(newUserData)
                res.onsuccess = () => {
                    location.reload()
                }
            }
        }
    }

    return (
        <div className="setting flex-col">
            <form onSubmit={onSubmitHandler} id="setting-form">
                <div>
                    <label htmlFor="email">Email :</label>
                    <span className="form-field">
                        <input type="text" defaultValue={currentUser?.email} name="email" id="email" onChange={onChangeHandler} onBlur={runValidations} /><br />
                        <Error className="error-email">{error}</Error>
                    </span>
                </div>
                <div>
                    <label htmlFor="name">Name :</label>
                    <span className="form-field">
                        <input type="text" defaultValue={currentUser?.fullName} placeholder="Name" name="fullName" id="name" onChange={onChangeHandler} onBlur={runValidations} />
                        <br />
                        <Error className="error-name">{error}</Error>
                    </span>
                </div>

                <div>
                    <label htmlFor="age">Age :</label>
                    <span className="form-field">
                        <input type="number" defaultValue={currentUser?.age} name="age" placeholder="Enter your age" id="age" onChange={onChangeHandler} onBlur={runValidations} /><br />
                        <Error className="error-age">{error}</Error>
                    </span>
                </div>
                <div>
                    <label htmlFor="gender">Gender :</label>
                    <span className="form-field">
                        <select name="gender" id="gender" required  onChange={onChangeHandler} onBlur={runValidations}>
                            <option disabled selected >Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">Other</option>
                        </select><br />
                        <Error className="error-gender">{error}</Error>
                    </span>
                </div>
                <button className="dashboard styled" id="save-btn" type="submit">Save</button>
                <button className="dashboard styled" id="cancel-details-btn" onClick={onClick}>Cancel</button>
            </form>
        </div>
    )
}

export default UserSettings