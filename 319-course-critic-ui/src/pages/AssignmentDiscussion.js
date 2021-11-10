import React from 'react'
import './AssignmentFeed.css'
import {Link} from "react-router-dom";

export default function AssignmentDiscussion() {
    return (
        <html>
            <head>
                <title>Assignment Discussion</title>
            </head>
            <body>
                <Link to="/"><button>
                    Back to Assignments
                </button>
                </Link>
                <h1>[Assignment name]: Discussion</h1>
                <h2>Recent Posts</h2>

                <div className='asBorder'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>

                <input type="button" id="createAssignmentPost" name="createAssignmentPost" value="Create Post"></input>
            </body>
        </html>
    )
}
