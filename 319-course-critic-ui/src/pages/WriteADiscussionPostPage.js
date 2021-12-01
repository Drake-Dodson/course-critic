import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";

export default function WriteADiscussionPostPage() {
    var currPostIdx;
    if (sessionStorage.getItem('pIdx') != null)
    {
        currPostIdx = sessionStorage.getItem('pIdx');
    }
    else
    {
        currPostIdx = 0;
    }
function addToPosts() {
    currPostIdx++;
    sessionStorage.setItem('pIdx', currPostIdx);
    var titleText = "" + document.getElementById("title").value;
    var commentText = "" + document.getElementById("comments").value;
    sessionStorage.setItem('currPostIdx', currPostIdx);
    sessionStorage.setItem('currTitleText', titleText);
    sessionStorage.setItem('currCommentText', commentText);
}

    return (
        <html>
        <div className='leftMargin' id='test2'>
            <h1><u>Write a Discussion Post-Assignment Name</u></h1>
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title"/><br/>
                <label for="comments">Comments:</label><br/>
                <input type="text" id="comments" name="comments"/><br/>
            </form> 
            <Link to="/assignmentdiscussion"><button onClick={addToPosts}>Submit</button><br/></Link>
        </div>
        </html>
    )
    
}