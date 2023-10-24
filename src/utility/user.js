import { nameValidations, toast } from "./login"

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
    else {
        return true
    }
}

function genderValidator(gender) {
    if (gender === "Select your gender")
        return "Select your gender"
    else
        return true
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

export async function updateUserDetails(currentUser, formFields) {
    const idb = indexedDB.open("crude", 1)
    idb.onsuccess = () => {
        const tx = idb.result.transaction("users", "readwrite")
        const store = tx.objectStore("users")
        const cursor = store.get(currentUser.email)
        cursor.onsuccess = () => {
            const curUser = cursor.result
            const newUserData = {
                ...curUser, ...formFields
            }
            console.log(newUserData)
            const res = store.put(newUserData)
            res.onsuccess = () => {
                sessionStorage.setItem("currentUser", JSON.stringify(newUserData))
                toast("User details updated", "success", "reload")
            }
            res.onerror = () => {
                toast("Cannot update details", "error")
            }
        }
        cursor.onerror = () => {
            toast("Cannot update details", "error")
        }
    }
}

export async function deleteUserAccount(userId) {
    try {
        const idb = indexedDB.open("crude", 1)
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
        idb.onsuccess = () => {
            const res = idb.result
            const tx = res.transaction("users", "readwrite")
            const store = tx.objectStore("users")
            const cursor = store.delete(currentUser.email)
            cursor.onsuccess = async () => {
                const response = await fetch(`${url}/${userId}`, {
                    method: "DELETE"
                })
                if (!response.ok) {
                    toast("Cannot connect to server", "error")
                }
                else {
                    sessionStorage.removeItem("currentUser")
                    toast("Account deleted", "success", "/")
                }
            }
            cursor.onerror = () => {
                toast("Cannot get your account", "error", "reload")
            }
        }
    } catch {
        toast("Cannot delete your account")
    }

}