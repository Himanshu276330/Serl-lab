import Navbar from "../component/navbar";
import { useState } from "react";
// import Footer from "../component/BottomBar";

export default function login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login_func = ()=>{
      if(password.length<=0 || email.length<=0){
        alert("Please fill all details");
    }else{
        Axios.post("http://localhost:3001/login",{
            email: email,
            password: password
        }).then(()=>{
            console.log("Login");
        });
    }
    };

    return (
        <div>
             <Navbar/>
            <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2>Login</h2>
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
            <input className="email" type="text" name="email" required 
              onChange={(event)=>{
                setEmail(event.target.value)
              }}
            />
            <label>Email:</label>
            </div>
            <div className="form-item">
              <input className="email" type="text" name="email" required 
                onChange={(event)=>{
                  setPassword(event.target.value)
                }}
              />
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
            <button className="submit-btn"
                onClick={login_func}
              >
              <a href="#">Login</a>
            </button>
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