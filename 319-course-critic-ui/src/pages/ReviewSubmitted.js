import React from 'react'
import './Reviews.css'
import {Link, useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

function ReviewSubmitted() {

    let {classID} = useParams();

    return (
        <div className="classes">
            <h1>
                Write a Review
            </h1>
            
            <div className="submitted">
                <h2 className="center_submitted">
                    Review has been submitted!
                </h2>

                <div className="center_submitted">
                    <Link to={"/class/" + classID + "/review"}>
                        <button class="btn submit">Create Another Review</button>
                    </Link>
                </div>

                <div className="center_submitted">
                    <Link to={"/class/" + classID}>
                    <button class="btn submit">Return to Course Page</button>
                    </Link>
                </div>

                <div className="center_submitted">
                    <Link to={"/class/" + classID + "/reviews"}>
                        <button className="btn submit">View Class Reviews</button>
                    </Link>
                </div>

            </div>
            <Sidebar
                login={false}
            />
        </div>
    )
}

export default ReviewSubmitted