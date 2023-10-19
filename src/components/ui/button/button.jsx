import "./button.css"
const Button=({children,props})=>{
    return(
        <button className="styled" {...props}>{children}</button>
    )
}
export default Button