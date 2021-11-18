import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";

export default function WriteADiscussionPostPage() {
    return (
        <div className='leftMargin'>
            <h1><u>Write a Discussion Post-Assignment Name</u></h1>
 
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title" value="Title of Post"/><br/>
                <label for="comments">Comments:</label><br/>
                <input type="text" id="comments" name="comments" value="Enter Comments About Class Here"/><br/>
                <input type="submit" value="Submit"/>
            </form> 

            <Link to="/assignmentdiscussion"><button>
              Back to Assignment Discussion
            </button>
            </Link>

        </div>
    )
}
