import { useState } from "react";
import Button from "../../ui/button/button";
import OverlayPanel from "./panel/panel";
const LoginOverlay = () => {
  const [isRightOverlay, setIsRightOverlay] = useState(false);
  const overlayHandler = () => {
    setIsRightOverlay(!isRightOverlay);
  };
  return (
    <div
      className={`overlay-container flex-col ${
        isRightOverlay === true ? "" : "active"
      }`}
    >
      <div className="overlay">
        <OverlayPanel
          side="right"
          id="signIn"
          text="Sign In"
          onClick={overlayHandler}
        >
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
        </OverlayPanel>
        <OverlayPanel
          side="left"
          id="signUp"
          text="Sign Up"
          onClick={overlayHandler}
        >
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
        </OverlayPanel>
      </div>
    </div>
  );
};
export default LoginOverlay;
