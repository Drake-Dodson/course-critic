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
        <div className="WriteADiscussionPostPage">
            <h1><u>Write a Discussion Post-Assignment Name</u></h1>
            <form>
            <label for="title"><b>Title:</b></label><br/>
                <input type="text" id="title" size="103" name="title" placeholder="Title of Class"/><br/><br></br>
                <label for="comments"><b>Comments:</b></label><br/>
                <textarea rows= "25" cols="100" id="comments" maxlength="1000" name="comments"placeholder="Enter Comments About Class Here"></textarea><br/>
            </form><br></br>
            <Link to="/assignmentdiscussion"><button className='isuColorButton' onClick={addToPosts}>Submit</button><br/></Link>
        </div>
        </html>
    )
    
}