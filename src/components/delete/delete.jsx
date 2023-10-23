import { useContext } from "react"
import { UserContext } from "../../context/user"

const Delete = ({onClick}) => {
    const {setIsConfirmBoxVisible}=useContext(UserContext)
    return (
        <div className="pop-up-delete active">
            <h3>Click on delete to confirm</h3>
            <div className="btn-container">
                <button className="styled delete" onClick={onClick}>Delete</button>
                <button className="styled cancel" onClick={()=> setIsConfirmBoxVisible(false)} id="cancel-btn">Cancel</button>
            </div>
        </div>
    )
}

export default Delete