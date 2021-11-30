import React from 'react'
import {Link } from "react-router-dom";

class DiscussionPost extends React.Component {

    constructor (props) {
        super(props);
    }

    setReplyPost(currPostIdx) {
        sessionStorage.setItem('selectedReply', currPostIdx)
    }

    render() {
        var currPostIdx = this.props.postIdx;
        var titleText = this.props.title;
        var commentText = this.props.comment;
        var postString = "post" + currPostIdx;
        var replyString = "reply" + currPostIdx;

        return (
            <div id={postString}>
                <div className='asBorder'>
                    <h3>{titleText}</h3>
                    <p>{commentText}</p>
                    <Link to="/creatediscussionreply">
                        <button onClick={this.setReplyPost(currPostIdx)} className='replyButton' id={replyString}>
                    Reply
                </button>
                </Link>
                </div>
            </div>
            //document.getElementById("reply" + i).onclick = setReplyPost(i);
    //         "<div id='post" + currPostIdx + "'>" + 
    // "<div class='asBorder'>" + 
    // "<h3>" + titleText + "</h3>" + 
    // "<p>" + commentText + "</p>" + 
    // "<a href='/creatediscussionreply'><button class='replyButton' id='reply" + currPostIdx + "'>Reply</button></a>" +
    // "</div>" + 
    // "</div>";
        )
    }

}