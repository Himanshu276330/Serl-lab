
export default function card_project_publication({ data }) {
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
                                        <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" />
                                    </div>
                                    <div className="card_project_publication_body_detail">
                                        <p><b>PHD Domain: </b> {events.domain}</p>
                                        <br />
                                        <p><b>Profile Link: </b> {events.link} </p>
                                        <br />
                                        <p><b>About: </b> {events.decs}.</p>
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
