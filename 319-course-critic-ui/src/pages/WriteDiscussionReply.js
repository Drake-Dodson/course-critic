import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";

export default function WriteDiscussionReply() {

function addToPosts() {
    var currReplyIdx = sessionStorage.getItem('selectedReply');
    var preReply = sessionStorage.getItem('post' + currReplyIdx);
    var titleText = "" + document.getElementById("title").value;
    var commentText = "" + document.getElementById("comments").value;
    var newDiv = preReply + "<div class='asReplyBorder'>" + 
    "<h3>" + titleText + "</h3>" + 
    "<p>" + commentText + "</p>" + 
    "</div>";
    sessionStorage.setItem('reply' + currReplyIdx, newDiv);
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
