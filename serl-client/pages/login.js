

import Navbar from "../component/navbar";
// import Footer from "../component/BottomBar";

export default function login() {
    return (
        <div>
             <Navbar/>
            <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2>Sign In</h2>
          <div className="links">
            <div className="link"></div>
            <div className="link"></div>
            <div className="link"></div>
            <div className="link"></div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form>
            <div className="form-item">
            <input className="email" type="text" name="email" required />
            <label>Email:</label>
            </div>
            <div className="form-item">
              <input className="email" type="text" name="email" required />
              <label>Password:</label>
            </div>
            <div className="form-check d-flex justify-content-start mb-4">
              {/* <label className="form-check-label" for="form1Example3">
                Remember password
              </label> */}
              {/* <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              /> */}
              
            </div> 
            <button className="submit-btn"><a href="loggedin-mainPage.html">Login</a></button>
            <br />
            <hr />
            <br />
            <button className="google">Sign in with Google</button>
            <br />
            <button className="google1">Sign in with Facebook</button>
          </form>
        </div>
      </div>
    </section>
  
        </div>
       
    );
    
   
}