
export default function Navbar() {
    return (
        <header className="header">
            <img 
                src='image/iiita_logo.png' 
                className="header--image"
            />
            <h2 className="header--title">SERL LAB</h2>
            <h4 className="header--project1">Home</h4>
            <h4 className="header--project2">Faculty</h4>
            <h4 className="header--project3">Researchers</h4>
            <h4 className="header--project4">Publications</h4>
            <h4 className="header--project5">Projects</h4>
            <h4 className="header--project6">Resources</h4>
            <h4 className="header--project7">Contact Us</h4>
            <h4 className="header--project7"> <img src="https://www.pngkey.com/png/detail/202-2024792_profile-icon-png.png" className="rounded-circle" width="150"></img>
                      </h4>

        {/* <a href="mainPage.html" className="header--project1">Home</a>
        <a href="aboutus.html" className="header--project2">Faculty</a>
       <a href="ContactUs.html" className="header--project3">Researchers</a>
        <a href="signin_updated.html" className="header--project4">Publications</a>
       <a href="signup.html" className="header--project5">Projects</a>
       <a href="signup.html" className="header--project6">Resources</a>
       <a href="signup.html" className="header--project7">Contact Us</a> */}
        </header>
    );
}
