import Button from "../../../ui/button/button"
const OverlayPanel=({children,side,text,...otherProps})=>{
    return(
        <div className={`overlay-panel overlay-${side} flex-col`} >
          {children}
          <Button {...otherProps} >{text}</Button>
        </div>
    )
}
export default OverlayPanel