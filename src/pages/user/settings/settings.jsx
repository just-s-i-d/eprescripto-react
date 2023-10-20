const UserSettings=({onClick})=>{
    return(
        <div className="setting flex-col">
                        <form id="setting-form">
                            <div>
                                <label htmlFor="email">Email :</label>
                                <span className="form-field">
                                    <input type="text" value="Email" name="email" id="email" /><br />
                                    <span className="error-email">Error message</span>
                                </span>
                            </div>
                            <div>
                                <label htmlFor="name">Name :</label>
                                <span className="form-field">
                                    <input type="text" placeholder="Name" name="name" id="name" />
                                    <br />
                                    <span className="error-name">Error message</span>
                                </span>
                            </div>

                            <div>
                                <label htmlFor="age">Age :</label>
                                <span className="form-field">
                                    <input type="number" name="age" placeholder="Enter your age" id="age" /><br />
                                    <span className="error-age">Error message</span>
                                </span>
                            </div>

                            <div>
                                <label htmlFor="gender">Gender :</label>
                                <span className="form-field">
                                    <select name="gender" id="gender" required>
                                        <option selected disabled >Select your gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="other">Other</option>
                                    </select><br />
                                    <span className="error-gender">Error message</span>
                                </span>
                            </div>
                            <button className="dashboard styled" id="save-btn" type="submit">Save</button>
                            <button className="dashboard styled" id="cancel-details-btn" onClick={onClick}>Cancel</button>
                        </form>
                    </div>
    )
}

export default UserSettings