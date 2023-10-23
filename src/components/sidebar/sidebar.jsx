import { Link } from "react-router-dom"
import "./sidebar.css"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/user"
const SideBar=()=>{
    const {setCurrentUser}=useContext(UserContext)
    function logoutHandler(){
        setCurrentUser("")
        sessionStorage.removeItem("currentUser")
        location.assign("http://localhost:5174/home")
    }
    return(
        <aside className="flex-col sidebar">
            <h1 className="brand-name">ePrescripto</h1>
            <nav className="dashboard-nav-bar-container default">
                <div className="nav-bar-container flex-col">
                    <ul className="main-side-nav-bar">
                        <li>Dashboard</li>
                        <li>Family Memebers</li>
                        <Link to="prescriptions">
                            <li className={location.pathname==="/dashboard/prescriptions"?"active":"" }>Prescriptions</li>
                        </Link>
                        <Link to="settings">
                            <li className={location.pathname==="/dashboard/settings"?"active":""}>Settings</li>
                        </Link>
                        <li>Help</li>
                    </ul>
                    <ul className="logout-container">
                        <li className="logout" onClick={logoutHandler}>Logout</li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}
export default SideBar