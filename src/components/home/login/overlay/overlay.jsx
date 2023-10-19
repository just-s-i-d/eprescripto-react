import Button from "../../../ui/button/button";

const LoginOverlay = () => {
  return (
    <div className="overlay-container flex-col">
      <div className="overlay">
        <div className="overlay-panel overlay-right flex-col">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <Button id="signIn">Sign In</Button>
        </div>
        <div className="overlay-panel overlay-left flex-col active">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <Button id="signUp">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
export default LoginOverlay
