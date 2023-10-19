import Button from "../../ui/button/button"
import LoginOverlay from "./overlay/overlay"
import HomeSignIn from "./signIn/signIn"
import HomeSignUp from "./signUp/signUp"
const Login=()=>{
    return(
        <>
        <section className="login-box-container">
                <div className="container flex" id="container">
                    <span id="close-login">&times;</span>
                    <HomeSignUp/>
                    <HomeSignIn/>
                    <LoginOverlay/>
                </div>
            </section>
        </>
    )
}
export default Login