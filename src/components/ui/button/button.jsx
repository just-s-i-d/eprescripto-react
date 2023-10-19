import "./button.css"
const Button=({children,...otherProps})=>{
    return(
        <button className="styled" {...otherProps}>{children}</button>
    )
}
export default Button