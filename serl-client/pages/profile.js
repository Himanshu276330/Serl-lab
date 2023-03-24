import Navbar from "../component/navbar";

export default function profile() {
    return (
       
      <div>
     <Navbar/>
        <div className="container">
          <div className="box">
            <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" alt="" />
            <ul>
            <li>Shivani Pal</li>
            <li>18 years</li>
            <li>Artificial Intelligent</li>
            {/* <li><i style={{fontSize: '24px'}} className="fa"></i>
                <i style={{fontSize: '24px'}} className="fa"></i>
                <i style={{fontSize: '24px'}} className="fa"></i></li> */}
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
              <h3>Project Description</h3>
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
