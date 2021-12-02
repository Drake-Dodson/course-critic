import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";

export default function WriteDiscussionReply() {

function addToPosts() {
    var currReplyIdx = sessionStorage.getItem('selectedReply');
    var replyArr = [];
    if (sessionStorage.getItem('reply' + currReplyIdx) != null)
    {
        replyArr = JSON.parse(sessionStorage.getItem('reply' + currReplyIdx));
    }
    var titleText = "" + document.getElementById("title").value;
    var commentText = "" + document.getElementById("comments").value;
    replyArr.push(titleText);
    replyArr.push(commentText);
    sessionStorage.setItem('reply' + currReplyIdx, JSON.stringify(replyArr));
    console.log(currReplyIdx);
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
            <Link to="/assignmentdiscussion"><button onClick={addToPosts}>Submit</button><br/></Link>
        </div>
        </html>
    )
}
