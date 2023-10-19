import Button from "../ui/button/button";
import LoginOverlay from "./overlay/overlay";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
const Login = () => {
  return (
    <section className="login-box-container">
      <div className="container flex" id="container">
        <span id="close-login">&times;</span>
        <SignUp />
        <SignIn />
        <LoginOverlay />
      </div>
    </section>
  );
};
export default Login;
