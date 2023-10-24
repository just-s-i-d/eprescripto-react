import Button from "../ui/button/button";
import LoginOverlay from "./overlay/overlay";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import "./login.css"
import { useContext } from "react";
import { UserContext } from "../../context/user";
const Login = () => {
  const { isLoginBoxVisible, setIsLoginBoxVisible } = useContext(UserContext)
  const showLoginBox = () => {
    setIsLoginBoxVisible(!isLoginBoxVisible)
  }
  return (
    <section className="login-box-container">
      <div className="container flex" id="container">
        <button id="close-login" onClick={showLoginBox}>&times;</button>
        <SignUp />
        <SignIn />
        <LoginOverlay />
      </div>
    </section>
  );
};
export default Login;
