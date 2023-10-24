import { useContext } from "react";
import Logo from "../ui/logo/logo";
import NavBarList from "./list/list";
import { UserContext } from "../../context/user";
import DropDown from "./dropdown/dropdown";
import { toast } from "../../utility/login";

const list1 = [
  { title: "Home", props: {} },
  { title: "Doctor", props: {} },
  { title: "About", props: {} },
  { title: "Contact", props: {} }
]

const NavBar = () => {
  const {currentUser,setCurrentUser}=useContext(UserContext)
  const { isLoginBoxVisible, setIsLoginBoxVisible } = useContext(UserContext)
  
  const showLoginBox = () => {
    setIsLoginBoxVisible(!isLoginBoxVisible)
  }
  function logoutHandler(){
    setCurrentUser("")
    sessionStorage.removeItem("currentUser")
   toast("Logging Out","success","reload")
}
  
  const list2 = [
    { title: "Login", props: { onClick: showLoginBox ,className:"right"} },
  ]
  const list3 = [
    { title: "Account", props: {} },
    { title: "Logout", props: {onClick:logoutHandler} }
  ]
  return (
    <div className="navbar-container flex">
      <Logo/>
      <NavBarList list={list1} className="navbar-container-left" />
      <NavBarList list={currentUser?list3:list2} className="navbar-container-right" />
      <DropDown/>
    </div>
  );
};
export default NavBar;
