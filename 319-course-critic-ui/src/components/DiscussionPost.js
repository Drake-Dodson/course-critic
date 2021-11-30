import React from 'react'
import ReactHtmlParser from 'react-html-parser';

class DiscussionPost extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            posts: []
        }
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
        const ret = (
            <div id={ReactHtmlParser(postString)}>
                <div className='asBorder'>
                    <h3>{ReactHtmlParser(titleText)}</h3>
                    <p>{ReactHtmlParser(commentText)}</p>
                    <a href="/creatediscussionreply">
                        <button onClick={ () => this.setReplyPost(currPostIdx) } className='replyButton' id={ReactHtmlParser(replyString)}>
                    Reply
                </button>
                </a>
                </div>
            </div>
        );
        this.state.posts.push(ret);

        return (
            this.state.posts
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
export default DiscussionPost;