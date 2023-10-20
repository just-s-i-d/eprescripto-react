const Profile = ({onClick}) => {
    return (
        <div className="user-details">
            <div className="detail-field">
                <span>Email :</span>
                <h3 className="email">Email</h3>
            </div>
            <div className="detail-field">
                <span>Full Name :</span>
                <h3 className="name">Full Name</h3>
            </div>
            <div className="detail-field">
                <span>Age :</span>
                <h3>Not Set</h3>
            </div>
            <div className="detail-field">
                <span>Gender :</span>
                <h3>Not Set</h3>
            </div>
            <button className="dashboard styled" id="update-btn" onClick={onClick}>Edit Details</button>
            <button className="dashboard styled" id="delete-btn">Delete Account</button>
        </div>
    )
}
export default Profile