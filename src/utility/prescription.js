import { json } from "react-router-dom"
import { toast } from "./login"

const url = "http://localhost:3000/users"

function sortPrescriptions(prescriptions) {
    return prescriptions.sort((a, b) => new Date(b.prescriptionDate) - new Date(a.prescriptionDate))
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
    if (!response.prescriptions) {
        data.prescriptions = [newPresData]
    }
    else if (btnId<=data.prescriptions.length) {
        response.prescriptions[btnId] = newPresData
    }
    else {
        response.prescriptions.push(newPresData)
    }
    const sortedPrescriptions = sortPrescriptions(response.prescriptions)
    const res = await updatePrescriptions(currentUser.id, sortedPrescriptions)
    if (!res.ok) {
        toast("Cannot add prescription", "error", "reload")
    }
    else {
        toast("Prescription added", "success", "reload")
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
        const prescriptions=response.prescriptions
        return prescriptions[prescriptionId]
    } catch {
       toast("Cannot get your prescription","error","reload")
    }
}



