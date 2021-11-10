import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";
export default function AssignmentFeed() {

    return (
    <html>
        <head>
        <title>
            Assignment Feed
        </title>
    </head>
    <body>
        <h1>
            [course name]: Assignments
        </h1>
        <div className='asBorder'>
            <h2>[Assignment name]</h2>
            <p>Description of assignment goes here</p>
            <Link to="/assignmentdiscussion"><button>
              View Discussion
            </button>
            </Link>
        </div>
    </body>
    </html>
    )
    
}
