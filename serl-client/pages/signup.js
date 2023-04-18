import Navbar from "../component/navbar";
import { useState } from "react";
import Axios from "axios";

export default function Signup() {

    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");

    const addLoginDetails = async ()=>{
        if(password.length<=0 || email.length<=0 || name.length<=0){
            alert("Please fill all details");
        }else{

            try{
                const user_data=await Axios.post("http://localhost:3001/signup",{
                    name: name,
                    mobile: mobile,
                    email: email,
                    password: password,
                    age: age,
                    address: address
                });
                console.log(user_data);
                if(user_data.data.sucess){
                    localStorage.setItem("user_token",user_data.data.token);
                }else{
                    console.log("Error = signup fail");
                }
            }catch(err){
                console.log("Error: "+err);
            }
        }
    };

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
                            <input type="text" name="name" required 
                                onChange={(event)=>{
                                    setName(event.target.value);
                                }}
                            />
                            <label>Full Name:</label>
                            </div>
                            
                            <div className="form-item">
                            <input type="text" name="mobile" required
                                onChange={(event)=>{
                                    setMobile(event.target.value);
                                }}
                            />
                            <label>Mobile No.:</label>
                            </div>

                            <div className="form-item">
                            <input type="text" name="email" required 
                                onChange={(event)=>{
                                    setEmail(event.target.value);
                                }}
                            />
                            <label>Email id.:</label>
                            </div>

                            <div className="form-item">
                                <input type="text" name="password" required 
                                    onChange={(event)=>{
                                        setPassword(event.target.value);
                                    }}
                                />
                                <label>Password:</label>
                            </div>

                            <div className="form-item">
                                <input type="text" name="age" required 
                                    onChange={(event)=>{
                                        setAge(event.target.value);
                                    }}
                                />
                                <label>Age.:</label>
                            </div>
                            
                            <div className="form-item">
                                <textarea className="" name="address" required
                                    onChange={(event)=>{
                                        setAddress(event.target.value);
                                    }}
                                ></textarea>
                                <label>Address:</label>
                            </div>
                            <button className="submit-btn"><a href="#"
                                onClick={addLoginDetails}
                            >Submit</a></button> 
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
