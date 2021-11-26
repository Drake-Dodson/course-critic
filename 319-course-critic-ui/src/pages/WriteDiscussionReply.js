import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";

export default function WriteDiscussionReply() {
    var currPostIdx = sessionStorage.length-1;
function addToPosts() {
    currPostIdx++;
    var titleText = "" + document.getElementById("title").value;
    var commentText = "" + document.getElementById("comments").value;
    var newDiv = "<div class='asReplyBorder'>" + 
    "<h3>" + titleText + "</h3>" + 
    "<p>" + commentText + "</p>" + 
    "</div>";
    sessionStorage.setItem('post' + currPostIdx, newDiv);
    console.log(sessionStorage);
}

    return (
        <html>
        <div className='leftMargin'>
            <h1><u>Write a Discussion Reply</u></h1>
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title"/><br/>
                <label for="comments">Comments:</label><br/>
                <input type="text" id="comments" name="comments"/><br/>
            </form> 
            <button onClick={addToPosts}>Submit</button><br/>

            <Link to="/assignmentdiscussion"><button>
                    Back to Assignment Discussion
                </button>
                </Link>
        </div>
        </html>
    )
}
