import { json } from "react-router-dom"
import { nameValidations, toast } from "./login"

const url = "http://localhost:3000/users"

function sortPrescriptions(prescriptions) {
    return prescriptions.sort((a, b) => new Date(b.prescriptionDate) - new Date(a.prescriptionDate))
}
function validateDocName(name) {
    return /^(Dr\.?|Doctor)?\s?[A-Za-z\s\.'-]+$/.test(name)
}
function validateHospitalName(name) {
    return /^[A-Za-z\s\.'-]+$/.test(name)
}
function validateUrl(url) {
    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url)
}

function docNameValidations(docName) {
    if (!docName) {
        return "Enter a doctor name"
    }
    else if (!validateDocName(docName)) {
        return "Name cannot contain special characters or numbers"
    }
    else if (docName.length > 20) {
        return "Name should not exceed 20 characters"
    }
    else {
        return true
    }
}
function hospitalNameValidations(hospitalName) {
    if (!hospitalName) {
        return "Enter a hospital name"
    }
    else if (!validateHospitalName(hospitalName)) {
        return "Name cannot contain special characters or numbers"
    }
    else if (hospitalName.length > 20) {
        return "Name should not exceed 20 characters"
    }
    else {
        return true
    }
}

function prescriptionDateValidations(prescriptionDate) {
    const selectedDate = new Date(prescriptionDate)
    const currentDate = new Date()
    if (!prescriptionDate) {
        return "Enter a Date"
    }
    else if (selectedDate > currentDate) {
        return "Date cannot be in future"
    }
    else {
        return true
    }
}

function urlValidation(url) {
    if (!url) {
        return "Enter a URL"
    }
    else if (!validateUrl(url)) {
        return "Enter a valid URL"
    }
    else {
        return true
    }
}

export function validatePrescriptionDetails(field) {
    const fieldName = field.name
    const value = field.value
    if (fieldName === "alias") {
        return nameValidations(value.trim())
    }
    else if (fieldName === "docName") {
        return docNameValidations(value.trim())
    }
    else if (fieldName === "hospitalName") {
        return hospitalNameValidations(value.trim())
    }
    else if (fieldName === "prescriptionDate") {
        return prescriptionDateValidations(value)
    }
    else if (fieldName === "imgLink") {
        return urlValidation(value.trim())
    }
}

export function newWindow(event, imgUrl) {
    event.preventDefault()
    window.open(imgUrl)
}

export async function getPrescriptions(userID) {
    try {
        const response = await fetch(`${url}/${userID}`)
        if (!response.ok) {
            toast("Cannot get your prescriptions", "error", "reload")
        }
        else {
            return await response.json()
        }
    }
    catch {
        toast("Cannot get your prescriptions", "error", "reload")
    }
}

async function updatePrescriptions(userId, prescriptions) {
    try {
        const response = await fetch(`${url}/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({ prescriptions })
        })
        return response
    } catch {
        toast("Server error", "error")
    }
}

export async function addNewPrescription(data, btnId) {
    let { alias, docName, hospitalName, prescriptionDate, imgLink } = data
    alias = alias.trim()
    docName = docName.trim()
    hospitalName = hospitalName.trim()
    imgLink = imgLink.trim()
    const newPresData = {
        alias, docName, hospitalName, prescriptionDate, imgLink
    }
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
    const response = await getPrescriptions(currentUser.id)
    let sortedPrescriptions
    if (!response.prescriptions) {
        response.prescriptions = [newPresData]
        sortedPrescriptions = response.prescriptions
        console.log(sortedPrescriptions)
    }
    else if (btnId) {
        response.prescriptions[btnId] = newPresData
        sortedPrescriptions = sortPrescriptions(response.prescriptions)
    }
    else {
        response.prescriptions.push(newPresData)
        sortedPrescriptions = sortPrescriptions(response.prescriptions)
    }
    const res = await updatePrescriptions(currentUser.id, sortedPrescriptions)
    if (!res.ok) {
        toast("Cannot add prescription", "error", "reload")
    }
    else {
        if (btnId) {
            toast("Prescription updated", "success", "reload")
        }
        else {
            toast("Prescription added", "success", "reload")
        }
    }
}

export function deletePrescription(btnId) {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
    getPrescriptions(currentUser.id)
        .then(userData => {
            const { prescriptions } = userData
            prescriptions.splice(btnId, 1)
            const sortedPrescriptions = sortPrescriptions(prescriptions)
            updatePrescriptions(currentUser.id, sortedPrescriptions)
                .then(response => response.json())
                .then(data => {
                    toast("Prescription deleted", "success", "reload")
                }).catch(() => {
                    toast("Cannot be deleted", "error", "reload")
                })
        })
}

export async function showPrescriptionDetails(prescriptionId) {
    try {
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
        const response = await getPrescriptions(currentUser.id)
        const prescriptions = response.prescriptions
        return prescriptions[prescriptionId]
    } catch {
        toast("Cannot get your prescription", "error")
    }
}



