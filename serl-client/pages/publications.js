import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Card_project_publication from "../component/card_project_publication";
import { useSession, getSession } from 'next-auth/react';
import Axios, * as others from 'axios';

export default function publications({session,publication_data}){
    
    return(
        <>
            <Navbar/>
            <Card_project_publication
                data={publication_data}
            />
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession(context);
  
    if (session) {
      const  received_data= await Axios.post("http://localhost:3001/publication");
      const publication_data = await received_data.data;
      return {
        props: {
            session: session,
            publication_data: publication_data
        }
      }
    } else {
      return {
        props: {
          session: session,
          publication_data: null
        }
      }
    }
  }
  