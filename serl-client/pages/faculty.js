import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Faculty_Card from "../component/faculty_card";
import { useSession, getSession } from 'next-auth/react';
import Axios, * as others from 'axios';

export default function Faculty({session,faculty_data}) {
  return (
    <>
        <Navbar/>
        <Faculty_Card
            data={faculty_data}
        />
        <Footer/>
    </>
  );
}

export async function getServerSideProps(context) {

    const session = await getSession(context);
  
    if (session) {
      const  received_data= await Axios.post("http://localhost:3001/faculty");
      const faculty_data = await received_data.data;
      return {
        props: {
            session: session,
            faculty_data: faculty_data
        }
      }
    } else {
      return {
        props: {
          session: session,
          faculty_data: null
        }
      }
    }
  }
  