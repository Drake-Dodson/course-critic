import React from 'react'
import './AssignmentFeed.css'
import {Link} from "react-router-dom";
import WriteADiscussionPostPage from './WriteADiscussionPostPage';



export default function AssignmentDiscussion() {
    return (
        <html>
            <head>
                <title>Assignment Discussion</title>
            </head>
            <body>
            <div className='topMargin'>
                <Link to="/assignmentfeed"><button>
                    Back to Assignments
                </button>
                </Link>
                <h1 id="aName">[Assignment name]: Discussion</h1>
                <h2>Recent Posts</h2>
                </div>
                <div className='asBorder' id="discussion_posts">
                    <h3>Title1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                

                <div className='bottomMargin'>
                <Link to="/creatediscussionpost"><button>
                    Create Post
                </button>
                </Link>
                </div>
            </body>
        </html>
    )
}
