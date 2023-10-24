import "../../styles/user.css"
import UserSettings from "./settings/settings"
import Profile from "./profile/profile"
import UserImg from "../../assets/images/profilepic.png"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/user"
import { deleteUserAccount, getUserDetails } from "../../utility/user"
import Delete from "../../components/delete/delete"

const UserPage = () => {
    const [isUserSettingsBoxVisible,setIsUserSettingsBoxVisible]=useState(false)
    const {currentUser,setCurrentUser}=useContext(UserContext)
    const { isConfirmBoxVisible} = useContext(UserContext)
    const showUserSettings=()=>{
        setIsUserSettingsBoxVisible(!isUserSettingsBoxVisible)
    }

    useEffect(()=>{
        getUserDetails()
        const userData=JSON.parse(sessionStorage.getItem("currentUser"))
        setCurrentUser(userData)
    },[])
    
    return (
        <main>
            <header>
                <div className="top-bar flex">
                    <h2>Profile Settings</h2>
                </div>
            </header>
            <section className="profile-setting-section flex-col default">
                <div className="profile-card details flex-col">
                    <img src={UserImg} alt="profile-pic" className="profile-pic" />
                    {isUserSettingsBoxVisible===true?<UserSettings currentUser={currentUser} onClick={showUserSettings}/>:<Profile currentUser={currentUser} onClick={showUserSettings}/>}
                </div>
            </section>
            {isConfirmBoxVisible&&<Delete onClick={()=>deleteUserAccount(currentUser.id)}/>}
        </main>
    )
}
export default UserPage