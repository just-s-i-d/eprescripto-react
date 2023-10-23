import Error from "../../error/error"

const Input = ({ errorName,error, ...otherProps }) => {
    
    return (
        <div>
            <input {...otherProps}/><br />
            <Error className={errorName}>{error}</Error>
        </div>
    )
}
export default Input
