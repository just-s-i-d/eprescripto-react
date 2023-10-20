import "../../styles/user.css"
import UserSettings from "./settings/settings"
import Profile from "./profile/profile"
import UserImg from "../../assets/images/profilepic.png"
import { useState } from "react"
const UserPage = () => {
    const [isUserSettingsBoxVisible,setIsUserSettingsBoxVisible]=useState(false)
    const showUserSettings=()=>{
        setIsUserSettingsBoxVisible(!isUserSettingsBoxVisible)
    }
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
                    {isUserSettingsBoxVisible===true?<UserSettings onClick={showUserSettings}/>:<Profile onClick={showUserSettings}/>}
                </div>
            </section>
        </main>
    )
}
export default UserPage