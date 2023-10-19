import Logo from "../logo/logo";
import NavBarList from "./list/list";
import "./navBar.css"
const NavBar = () => {
  const list1 = ["Home", "Doctor", "About", "Contact"];
  const list2 = ["Login", "Account", "Logout"];
  return (
    <div className="navbar-container flex">
      <Logo />
      <NavBarList list={list1} className="navbar-container-left"/>
      <NavBarList list={list2} className="navbar-container-right"/>
    </div>
  );
};
export default NavBar;
