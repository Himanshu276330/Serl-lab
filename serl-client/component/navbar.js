import Link from "next/link";
import { useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();

    if (session){
        return (
            <header className="header">
                <img
                    src='image/iiita_logo.png'
                    className="header--image"
                />
                <h2 className="header--title"><a href="/home">SERL LAB</a></h2>
                <h4 className="header--project1"><a href="/home">Home</a></h4>
                <h4 className="header--project2"><a href="/faculty">Faculty</a></h4>
                <h4 className="header--project4"><a href="/publications">Publications</a></h4>
                <h4 className="header--project5"><a href="/projects">Projects</a></h4>
                <h4 className="header--project6"><a href="/resources">Resources</a></h4>
                <h4 className="header--project7"><a href="/contact">Contact Us</a></h4>
                <h4 className="header--project7"><a href="/profile"><img src={session.user.image} className="rounded-circle" width="150"></img></a></h4>
            </header>
        );
    } else {
        return (
            <header className="header">
                <img
                    src='image/iiita_logo.png'
                    className="header--image"
                />
                <h2 className="header--title"><a href="/profile">SERL LAB</a></h2>
                <h4 className="header--project1"><a href="/profile">Home</a></h4>
                <h4 className="header--project2"><a href="/profile">Faculty</a></h4>
                <h4 className="header--project4"><a href="/profile">Publications</a></h4>
                <h4 className="header--project5"><a href="/profile">Projects</a></h4>
                <h4 className="header--project6"><a href="/profile">Resources</a></h4>
                <h4 className="header--project7"><a href="/profile">Contact Us</a></h4>
                <h4 className="header--project7"><a href="/profile"><img src="https://www.pngkey.com/png/detail/202-2024792_profile-icon-png.png" className="rounded-circle" width="150"></img></a></h4>
            </header>
        );
    }
}
