import { Link } from "react-router-dom"

const NavBarList=(props)=>{
    const {list,className}=props
    return(
        <ul className={`nav-items-container ${className}`}>
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