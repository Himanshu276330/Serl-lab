
export default function card_project_publication({ data }) {
    if(data==null){
        data=[{
            name:"Demo",
            email:"Demo",
            link:"Demo",
            decs:"Demo",
            img_link:"https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg"
        }]
    }
    return (
        <>
            {
                data.map(events => {
                    return (
                        <>
                            <div className="card_project_publication">
                                <div className="card_project_publication_header">
                                    <h3>{events.name}</h3>
                                    <br />
                                    <p><b>Email: </b>{events.email}</p>
                                </div>
                                <div className="card_project_publication_body">
                                    <div className="card_project_publication_body_img">
                                        <img src={events.img_link}/>
                                    </div>
                                    <div className="card_project_publication_body_detail">
                                        <p><b>Publication/Project Name: </b> {events.name}</p>
                                        <br />
                                        <p><b>Deployed Link: </b> {events.link} </p>
                                        <br />
                                        <p><b>About Publication/Project: </b> {events.decs}.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    );
}

