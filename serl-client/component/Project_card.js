
export default function Project_card({data}) {
    
    return(
      <>
        {
          data.map(event => {
              return(
                <>
                  <li>Name: {event.name}</li>
                  <li>Link: <a href={event.link}>{event.link}</a></li>
                  <li>About: {event.decs}</li>
                  <br/>
                </>
              )
          })
        }
      </>
    )
}