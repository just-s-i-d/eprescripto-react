import { Link } from "react-router-dom"
import "./sidebar.css"
const SideBar=()=>{
    return(
        <aside className="flex-col sidebar">
            <h1 className="brand-name">ePrescripto</h1>
            <nav className="dashboard-nav-bar-container default">
                <div className="nav-bar-container flex-col">
                    <ul className="main-side-nav-bar">
                        <li>Dashboard</li>
                        <li>Family Memebers</li>
                        <Link to="prescriptions">
                            <li>Prescriptions</li>
                        </Link>
                        <Link to="settings">
                            <li className="active">Settings</li>
                        </Link>
                        <li>Help</li>
                    </ul>
                    <ul className="logout-container">
                        <li className="logout">Logout</li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}
export default SideBar