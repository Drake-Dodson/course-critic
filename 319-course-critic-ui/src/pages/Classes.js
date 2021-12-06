import React from 'react'
import {Link, useParams} from "react-router-dom";

function Classes() {
    let {classID} = useParams();

    return (
        <div className="classes">
            <h1>
                Here is where the Class page would go
            </h1>
            <p>
                Hello, is anyone there? I am scared, I don't know where I am. Everything is white
            </p>
            <Link to={"/class/" + classID + "/reviews"}>
                Link to reviews
            </Link>
        </div>
    )
}

export default Classes
