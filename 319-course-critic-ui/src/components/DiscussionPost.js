import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import DiscussionReply from './DiscussionReply';

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
        if (this.props.assId != null)
        {
            var assignmentId = this.props.assId;
            var postsArr = [];
            var ssPosts = assignmentId + 'posts';
            if (sessionStorage.getItem(ssPosts) != null)
            {
                postsArr = JSON.parse(sessionStorage.getItem(ssPosts));
                var i = 0;
                while (i < postsArr.length)
                {
                    var tempPostIdx = postsArr[i];
                    i++;
                    var tempTitleText = postsArr[i];
                    i++;
                    var tempCommentText = postsArr[i];
                    i++;
                    var tempPostString = assignmentId + 'post' + tempPostIdx;
                    var tempReplyString = assignmentId + 'reply' + tempPostIdx;

                    var tempRet = (
                        <div id={ReactHtmlParser(tempPostString)}>
                    <div className='asBorder'>
                        <h2>{ReactHtmlParser(tempTitleText)}</h2>
                        <p>{ReactHtmlParser(tempCommentText)}</p>
                        <a href="/creatediscussionreply">
                            <button onClick={this.setReplyPost.bind(this, tempPostIdx) } className='replyButton' id={ReactHtmlParser(tempReplyString)}>
                        Reply
                    </button>
                    </a>
                    </div>

                    <DiscussionReply index={tempPostIdx} />
                </div>
                    );
                    this.state.posts.push(tempRet);
                }
            }
    
            if (this.props.postIdx != null && this.props.title != null && this.props.comment != null)
            {
                var currPostIdx = this.props.postIdx;
                var titleText = this.props.title;
                var commentText = this.props.comment;
                var postString = assignmentId + "post" + currPostIdx;
                var replyString = assignmentId + "reply" + currPostIdx;
                var ret = (
                    <div id={ReactHtmlParser(postString)}>
                        <div className='asBorder'>
                            <h2>{ReactHtmlParser(titleText)}</h2>
                            <p>{ReactHtmlParser(commentText)}</p>
                            <a href="/creatediscussionreply">
                                <button onClick={this.setReplyPost.bind(this, currPostIdx) } className='replyButton' id={ReactHtmlParser(replyString)}>
                            Reply
                        </button>
                        </a>
                        </div>
                    </div>
                );
                this.state.posts.push(ret);
                postsArr.push(currPostIdx);
                postsArr.push(titleText);
                postsArr.push(commentText);
                sessionStorage.setItem(ssPosts, JSON.stringify(postsArr));
            }
        }

        return (
            this.state.posts
        )
    }

}
export default DiscussionPost;