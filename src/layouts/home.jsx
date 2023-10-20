import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Login from "../components/login";
import { useContext } from "react";
import { UserContext } from "../context/user";
import Footer from "../components/footer";

const HomeLayout = () => {
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
export default HomeLayout;
