const NavBarList=(props)=>{
    const {list}=props
    return(
        <ul className="flex nav-items-container">
            {list.map((element,index)=> <li key={index}>{element}</li>)}
        </ul>
    )
}
export default NavBarList