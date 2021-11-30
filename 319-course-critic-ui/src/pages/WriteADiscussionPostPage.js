import React from 'react'
import {Link} from "react-router-dom";

export default function WriteADiscussionPostPage() {
    return (
        <div className="WriteADiscussionPostPage">
            <h1><u>Write A Discussion Post-Assignment Name</u></h1>
 
            <form>
                <label for="title"><b>Title:</b></label><br/>
                <input type="text" id="title" size="103" name="title" placeholder="Title of Class"/><br/><br></br>
                <label for="comments"><b>Comments:</b></label><br/>
                <textarea rows= "25" cols="100" id="comments" maxlength="1000" name="comments"placeholder="Enter Comments About Class Here"></textarea><br/>
                <input type="submit" value="Submit"/>
            </form><br></br> 

            <div>
                <Link to="/AssignmentDiscussion"><button>
                    Back to Assignments Discussion
                </button>
                </Link>
            </div>

        </div>
    )
}
