import Navbar from "../component/navbar";

export default function Signup() {
    return (
        <div>
            <Navbar/>
            <section id="contact">
                <div className="contact-box">
                    <div className="contact-links">
                        <h2>Sign Up:</h2>
                    </div>
                    <div className="contact-form-wrapper">
                        <form>
                        <a href="" className="alreadyRegistered">Already Registered</a>
                            <br></br>
                            <br></br>
                            <div className="form-item">
                            <input type="text" name="sender" required />
                            <label>Full Name:</label>
                            </div>
                            <div className="form-item">
                            <input type="text" name="email" required />
                            <label>Mobile No.:</label>
                            </div>

                            <div className="form-item">
                            <input type="text" name="phone" required />
                            <label>Email id.:</label>
                            </div>
                            <div className="form-item">
                                <input type="text" name="phone" required />
                                <label>Age.:</label>
                            </div>
                            {/* <div className="form-item">
                                <input type="text" name="phone" required />
                                <label>Gender.:</label>
                            </div> */}
                            {/* <div className="form-item">
                                <input type="text" name="phone" required />
                                <label>Blood Group:</label>
                            </div> */}
                            {/* <div className="form-item">
                                <input type="text" name="phone" required />
                                <label>Aadhar card no.:</label>
                            </div> */}
                            <div className="form-item">
                                <textarea className="" name="message" required></textarea>
                                <label>Address:</label>
                            </div>
                            <button className="submit-btn"><a href="loggedin-mainPage.html">Submit</a></button> 
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
