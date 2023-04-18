import Axios, * as others from 'axios';
import { Button } from "../component/Main_Login";
import Navbar from "../component/navbar";
import Project_card from '../component/Project_card';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';

// const jwt = require('jsonwebtoken');
// const JWT_KEY = "himansu";

export default function profile({session,user,project}) {
  
  // console.log(session);
  // console.log(user);
  // console.log(project);
  
  if (session){
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="box">
            <img src={session.user.image} alt="" />
            <ul>
              <li>{session.user.name}</li>
              <li>{session.user.email}</li>
              <li>Age: {user.age}</li>
              <li><Button
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >SignOut
              </Button></li>
            </ul>
          </div>

          <div className="About">
            <ul>
              <h1>about</h1>
            </ul>
            <ul>
              <h3>Address</h3>
              <li>IIIT ALLAHABAD</li>
            </ul>
            <ul>
              <h3>My Projects</h3>
              <br/>
              <Project_card 
                data={project}
              />
            </ul>
            <ul>
              <h3>My Research</h3>
              
            </ul>
            <ul>
              <h3>More Info</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                layout.</p>
            </ul>
            <ul>
              <h3>Contact</h3>
              <li>{user.email}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="box">
            <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" alt="" />
            <ul>
              <li>Name</li>
              <li>Mail</li>
              <li>18 years</li>
              <li><Button
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >SignIn
              </Button></li>
            </ul>
          </div>

          <div className="About">
            <ul>
              <h1>about</h1>
            </ul>
            <ul>
              <h3>Address</h3>
              <li>IIIT ALLAHABAD</li>
            </ul>
            <ul>
              <h3>My Recent Projects</h3>
              <li>Project 1</li>
              <li>Project 2</li>
            </ul>
            <ul>
              <h3>More Info</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).</p>
            </ul>
            <ul>
              <h3>Contact</h3>
              <li>shivani14306@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(context) {

    const session = await getSession(context);

    if(session){
      const response = await Axios.post("http://localhost:3001/user",
      {
        email:session.user.email
      }
      );

      const project_res = await Axios.post("http://localhost:3001/project",
      {
        email:session.user.email
      }
      );

      const user = await response.data;
      const project = await project_res.data;
      return{
        props:{
          session:session,
          user: user,
          project: project
        }
      }
    }else{
      return{
        props:{
          session:session,
          user: null,
          project: null
        }
      }
    }
}
