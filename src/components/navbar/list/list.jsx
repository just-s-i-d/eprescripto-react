import { Link } from "react-router-dom"

const NavBarList=(props)=>{
    const {list}=props
    return(
        <ul className="flex nav-items-container">
            {list.map((element,index)=>{
                const {title,props}=element
                return (
                    <li {...props} key={index}><Link>{title}</Link></li>
                )
            })}
        </ul>
    )
}
export default NavBarList