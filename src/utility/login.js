function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name)
}
function validateEmail(email) {
    return /^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)
}

function passwordCheck(password) {
    if (!password) {
        return "Enter a password"
    }
    else if (password.length <= 5) {
        return "Password length should be between 6 to 16"
    }
    else if (password.length > 16) {
        return "Password length should be between 6 to 16"
    } else {
        return true
    }
}

export function nameValidations(fullName) {
    if (!fullName) {
        return "Enter a name"
    }
    else if (!validateName(fullName)) {
        return "Name cannot contain special characters or numbers"
    }
    else if (fullName.length > 20) {
        return "Name should not exceed 20 characters"
    }
    else {
        return true
    }
}

export function emailValidations(email) {
    if (!email) {
        return "Enter an email"
    }
    else if (!validateEmail(email)) {
        return "Enter a valid email"
    }
    else {
        return true
    }
}

export function validateDetails(field) {
    const fieldName = field.name
    const value = field.value
    if (fieldName === "fullName") {
        return nameValidations(value.trim())
    }
    else if (fieldName === "email") {
        return emailValidations(value.trim())
    }
    else if (fieldName === "password") {
        return passwordCheck(value)
    }
    else if (fieldName === "confirmPassword") {
        return passwordCheck(value)
    }
}

const url = "http://localhost:3000/users"
const dashboardUrl="http://localhost:5174/dashboard/settings"
const popUp = document.querySelector("#pop-message")
const popContent = document.querySelector("#pop-message .pop-content")
const closeToast = document.querySelector("#close-toast")
closeToast.onclick=()=>{
    popUp.classList.remove("active")
}
const delay=3000
export function toast(content, type, redirect) {
    popContent.innerText = content
    popUp.classList.add("active")
    popUp.classList.add(type)
    setTimeout(() => {
        popUp.classList.remove("active")
        popUp.classList.remove(type)
        if (redirect === "reload") {
            location.reload()
        }
        else {
            redirect && location.assign(redirect)
        }
    }, delay)
}

export function createAccount(fields) {
    let { email, fullName, password, confirmPassword } = fields
    email = email.trim()
    fullName = fullName.trim()
    const idb = indexedDB.open("crude", 1)
    idb.onupgradeneeded = () => {
        const res = idb.result
        res.createObjectStore("users", { keyPath: "email" })
    }
    idb.onsuccess = () => {
        fetch(url, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ email })
        }).then(response => response.json())
            .then(data => {
                const userData = {
                    fullName,
                    email,
                    id: data.id,
                    password,
                }
                const res = idb.result
                const tx = res.transaction("users", "readwrite")
                const store = tx.objectStore("users")
                const cursor = store.add(userData)
                cursor.onsuccess = () => {
                    const { email, fullName, id } = userData
                    const curUser = { email, fullName, id }
                    sessionStorage.setItem("currentUser", JSON.stringify(curUser))
                    toast("Logging in", "success",dashboardUrl)
                }
                cursor.onerror = (e) => {
                    const error = e.target.error.message
                    if (error == "Key already exists in the object store.") {
                        toast("Email already exists", "error")
                    }
                }
            }).catch(()=> {
                toast("No response from the server","error")
            })
    }
    idb.onerror = () => {
        toast("There is an error in the database", "error")
    }

}


// for sign in
export function signIn(fields){
    let {email,password}=fields
    email=email.trim()
    const userLoginData = {
        email,password
    }
    const idb = indexedDB.open("crude", 1)
    idb.onupgradeneeded = () => {
        const res = idb.result
        res.createObjectStore("users", { keyPath: "email" })
    }
    idb.onsuccess = () => {
        const res = idb.result
        try {
            const tx = res.transaction("users", "readonly")
            const store = tx.objectStore("users")
            const cursor = store.get(userLoginData.email)
            cursor.onsuccess = () => {
                const curRes = cursor.result
                if (curRes) {
                    if (userLoginData.password === curRes.password) {
                        const curUser = { email: curRes.email, name: curRes.fullName, id: curRes.id }
                        sessionStorage.setItem("currentUser", JSON.stringify(curUser))
                        location.assign(dashboardUrl)
                        toast("Logging in", "success", dashboardUrl)
                    }
                    else {
                        toast("Wrong password", "error")
                    }
                }
                else {
                    toast("No users found", "error")
                }
            }
        }
        catch (error) {
            toast("No users found", "error")
        }
    }
    idb.onerror = () => {
        toast("Couldn't find your account.", "error")
    }
}
