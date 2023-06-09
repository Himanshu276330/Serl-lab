import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Card_project_publication from "../component/card_project_publication";
import { useSession, getSession } from 'next-auth/react';
import Axios, * as others from 'axios';

export default function project({project_data}) {
    
    return(
        <>
            <Navbar/>
            <Card_project_publication
                data={project_data}
            />
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession(context);
  
    if (session) {
      const  received_data= await Axios.post("http://localhost:3001/project");
      const project_data = await received_data.data;
      return {
        props: {
            session: session,
            project_data: project_data
        }
      }
    } else {
      return {
        props: {
          session: session,
          project_data: null
        }
      }
    }
  }