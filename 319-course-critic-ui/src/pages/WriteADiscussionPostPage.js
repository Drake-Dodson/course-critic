import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";

export default function WriteADiscussionPostPage() {
    var currPostIdx = sessionStorage.length-1;
function addToPosts() {
    currPostIdx++;
    var titleText = "" + document.getElementById("title").value;
    var commentText = "" + document.getElementById("comments").value;
    var newDiv = "<div id='post" + currPostIdx + "'>" + 
    "<div class='asBorder'>" + 
    "<h3>" + titleText + "</h3>" + 
    "<p>" + commentText + "</p>" + 
    "<a href='/creatediscussionreply'><button class='replyButton' id='reply" + currPostIdx + "'>Reply</button></a>" +
    "</div>" + 
    "</div>";
    sessionStorage.setItem('post' + currPostIdx, newDiv);
    console.log(document.getElementById('test2').innerHTML);
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
            <button onClick={addToPosts}>Submit</button><br/>

            <Link to="/assignmentdiscussion"><button>
                    Back to Assignment Discussion
                </button>
                </Link>
        </div>
        </html>
    )
    
}