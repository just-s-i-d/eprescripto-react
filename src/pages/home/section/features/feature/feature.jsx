const Feature=({element})=>{
    const {title,text}=element
    return(
        <div className="feature">
        <h2>{title}</h2>
        <span>{text}</span>
    </div>
    )
}
export default Feature