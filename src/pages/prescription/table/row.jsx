import { useContext, useState } from "react"
import DeletePng from "../../../assets/images/delete.png"
import EditPng from "../../../assets/images/edit.png"
import Button from "../../../components/ui/button/button"
import { UserContext } from "../../../context/user"
import { newWindow } from "../../../utility/prescription"

const TableRow = ({ prescription, index,edit}) => {
    const { isConfirmBoxVisible, setIsConfirmBoxVisible } = useContext(UserContext)
    const { setPrescriptionId } = useContext(UserContext)
    const { alias,
        docName,
        hospitalName,
        prescriptionDate,
        imgLink
    } = prescription

    const deleteBtnHandler = (id) => {
        setPrescriptionId(id)
        setIsConfirmBoxVisible(!isConfirmBoxVisible)
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{alias}</td>
            <td>{docName}</td>
            <td>{hospitalName}</td>
            <td>{prescriptionDate}</td>
            <td><Button onClick={(event)=>newWindow(event,imgLink)}>Show</Button></td>
            <td className="action-btns-container">
                <img className="edit-prescription action-btn" id={index} src={EditPng} alt="edit Button" onClick={(event=>edit(event,event.target.id))} />
                <img className="delete-prescription action-btn" id={index} src={DeletePng} alt="Delete Button" onClick={(event) => deleteBtnHandler(event.currentTarget.id)} />
            </td>
        </tr>
    )
}
export default TableRow