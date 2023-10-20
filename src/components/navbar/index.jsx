import { useContext } from "react";
import Logo from "../ui/logo/logo";
import NavBarList from "./list/list";
import "./navBar.css"
import { UserContext } from "../../context/user";
const NavBar = () => {
  const {isLoginBoxVisible,setIsLoginBoxVisible}=useContext(UserContext)
  const showLoginBox=()=>{
    setIsLoginBoxVisible(!isLoginBoxVisible)
  }
  const list1=[
    {title:"Home",props:{}},
    {title:"Doctor",props:{}},
    {title:"About",props:{}},
    {title:"Contact",props:{}}
  ]
  const list2=[
    {title:"Login",props:{onClick:showLoginBox}},
    {title:"Account",props:{}},
    {title:"Logout",props:{}},
  ]
  return (
    <div className="navbar-container flex">
      <Logo />
      <NavBarList list={list1} className="navbar-container-left"/>
      <NavBarList list={list2} className="navbar-container-right"/>
    </div>
  );
};
export default NavBar;
