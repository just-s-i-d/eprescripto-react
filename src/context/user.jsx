import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    isLoginBoxShow: false,
    setIsLoginBoxShow: () => null,
    currentUser: "",
    setCurrentUser: () => null,
    isConfirmBoxVisible: false,
    setIsConfirmBoxVisible: () => null,
    prescriptionId: false,
    setPrescriptionId: () => null,
    isAddPrescriptionBoxVisible: false,
    setIsAddPrescriptionBoxVisible: () => null
})

export const UserProvider = ({ children }) => {
    const [isLoginBoxVisible, setIsLoginBoxVisible] = useState(false)
    const [isAddPrescriptionBoxVisible, setIsAddPrescriptionBoxVisible] = useState(false)
    const [isConfirmBoxVisible, setIsConfirmBoxVisible] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [prescriptionId, setPrescriptionId] = useState(false)
    const user = JSON.parse(sessionStorage.getItem("currentUser"))
    useEffect(() => {
        if (user) {
            setCurrentUser(user)
        }
    }, [])

    const value = {
        isLoginBoxVisible, setIsLoginBoxVisible,
        currentUser, setCurrentUser,
        isConfirmBoxVisible, setIsConfirmBoxVisible,
        prescriptionId, setPrescriptionId,
        isAddPrescriptionBoxVisible, setIsAddPrescriptionBoxVisible
    }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}