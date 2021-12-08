import React from 'react'
import './AssignmentFeed.css'
import {Link, useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function WriteDiscussionReply() {
    let {classID} = useParams();

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
        <div className="WriteADiscussionPostPage">
            <h1><u>Write a Discussion Reply</u></h1>
            <form>
            <label for="title"><b>Title:</b></label><br/>
                <input type="text" id="title" size="103" name="title" placeholder="Title of Class"/><br/><br></br>
                <label for="comments"><b>Comments:</b></label><br/>
                <textarea rows= "25" cols="100" id="comments" maxlength="1000" name="comments"placeholder="Enter Comments About Class Here"></textarea><br/>
            </form><br></br>
            <Link to={"/class/" + classID + "/assignments/discussion"}><button className='isuColorButton' onClick={addToPosts}>Submit</button><br/></Link>
            <Sidebar
                login={false}
            />
        </div>
    )
}
