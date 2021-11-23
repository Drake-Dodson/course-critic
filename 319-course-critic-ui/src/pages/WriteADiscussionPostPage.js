import React from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";
import { useState } from 'react';
import AssignmentDiscussion from './AssignmentDiscussion';

export default function WriteADiscussionPostPage() {
    const postDivs = [];
function addToPosts() {
    alert("getposts called");
    var titleText = document.getElementById("title");
    var commentText = document.getElementById("comments");
    postDivs.push(
        <div className='asBorder'>
            <h3>{titleText}</h3>
            <p>{commentText}</p>
        </div>
    )
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
                <button onClick={addToPosts}>Submit</button>
            </form> 

            <Link to="/assignmentdiscussion"><button>
                    Back to Assignment Discussion
                </button>
                </Link>
                

        </div>
        </html>
    )
}
