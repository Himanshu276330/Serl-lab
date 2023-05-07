import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useState } from "react";
import Axios, * as others from 'axios';
import { useSession, getSession } from 'next-auth/react';


export default function form({ session }) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [decs, setDecs] = useState("");

    console.log(session.user);

    const save_details = async () => {
        console.log("test");
        
        const response = await Axios.post("http://localhost:3001/add_publication_and_project",
            {
                //add image link
                email: session.user.email,      //session
                name: name,                     // project name
                link: link,                     //host
                img_link: session.user.image,   //session
                decs: decs                      //about
            }
        );
        console.log(response);
        
    }

    // name:"Demo",
    // email:"Demo",
    // link:"Demo",
    // decs:"Demo"

    return (
        <div className="form-box">
            <h1>Add Your Publication/Project</h1>
            <form action="">
                <div className="form-input-box">
                    <input type="text" name="name" required
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                    <label for="">Name</label>
                </div>
                {/* <div className="form-input-box">
                    <input type="text" name="email" required
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                    <label for="">Email</label>
                </div> */}
                <div className="form-input-box">
                    <input type="text" name="link" required
                        onChange={(event) => {
                            setLink(event.target.value)
                        }}
                    />
                    <label for="">Link</label>
                </div>
                <div className="form-input-box">
                    <input type="text" name="decs" required
                        onChange={(event) => {
                            setDecs(event.target.value)
                        }}
                    />
                    <label for="">About</label>
                </div>
                <button className="form-btn" onClick={save_details}>Submit</button>
            </form>
        </div>
    );
}

export async function getServerSideProps(context) {

    const session = await getSession(context);
    return {
        props: {
            session: session,
        }
    }
}