import { Outlet } from "react-router-dom";
import NavBar from "../../components/ui/navbar";
import Login from "../../components/login";
import { useContext } from "react";
import { UserContext } from "../../components/context/user";
import Footer from "../../components/ui/footer";

const LayoutDefault = () => {
    const {isLoginBoxVisible}=useContext(UserContext)
  return (
    <>
      <NavBar />
      {isLoginBoxVisible&&<Login/>}
      <Outlet />
      <Footer/>
    </>
  );
};
export default LayoutDefault;
