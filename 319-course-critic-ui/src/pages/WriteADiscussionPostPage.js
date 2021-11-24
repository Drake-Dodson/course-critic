import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";
import { useState } from 'react';
import AssignmentDiscussion from './AssignmentDiscussion';

export default function WriteADiscussionPostPage() {
    var currPost = sessionStorage.length-1;
function addToPosts() {
    currPost++;
    var titleText = "" + document.getElementById("title").value;
    var commentText = "" + document.getElementById("comments").value;
    var newDiv = "<div className='asBorder'>\n<h3>" + titleText + "</h3>\n<p>" + commentText + "</p>\n</div>";
    sessionStorage.setItem(currPost, newDiv)
}

    return (
        <html>
        <div className='leftMargin'>
            <h1><u>Write a Discussion Post-Assignment Name</u></h1>
 
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title"/><br/>
                <label for="comments">Comments:</label><br/>
                <input type="text" id="comments" name="comments"/><br/>
                <Link to="/assignmentdiscussion"><button onClick={addToPosts}>Submit</button>
                </Link>
            </form> 

            <Link to="/assignmentdiscussion"><button>
                    Back to Assignment Discussion
                </button>
                </Link>
                

        </div>
        </html>
    )
    
}