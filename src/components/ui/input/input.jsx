import Error from "../../error/error"

const Input = ({ errorName, error, ...otherProps }) => {

    return (
        <>
            <input {...otherProps}/>
            <Error className={errorName}>{error}</Error>
        </>
    )
}
export default Input
