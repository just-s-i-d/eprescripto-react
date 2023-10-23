import { nameValidations } from "./login"

export function getUserDetails() {
    let idb = indexedDB.open("crude", 1)
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
    idb.onsuccess = () => {
        let res = idb.result
        let tx = res.transaction("users", "readonly")
        let store = tx.objectStore("users")
        let cursor = store.get(currentUser.email)
        cursor.onsuccess = () => {
            let userData = cursor.result
            const { email, fullName, id } = userData
            sessionStorage.setItem("currentUser", JSON.stringify(userData))
        }
        cursor.onerror = () => {
            // toast("Cannot get your details", "error", "reload")
        }
    }
}

function ageValidator(age) {
    if (!age) {
        return "Enter an age"
    }
    else if (age < 18 || age > 50) {
        return "Enter an age between 18 to 50"
    }
}

function genderValidator(gender) {
    if (gender === "Select your gender")
        return "Select your gender"
}

export function validateUserDetails(field) {
    const { name, value } = field
    if (name === "fullName") {
        return nameValidations(value.trim())
    }
    else if (name === "age") {
        return ageValidator(value)
    }
    else if (name === "gender") {
        return genderValidator(value)
    }
}
const url = "http://localhost:3000/users"
