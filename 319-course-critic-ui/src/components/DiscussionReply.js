import React from 'react'
import ReactHtmlParser from 'react-html-parser';

class DiscussionReply extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            replies: []
        }
    }

    render () {
        var postIdx = this.props.index;
        if (sessionStorage.getItem('reply' + postIdx) != null)
                    {
                        var replies = JSON.parse(sessionStorage.getItem('reply' + postIdx));
                        var j = 0;
                        while (j < replies.length)
                        {
                            var replyTitle = replies[j];
                            j++;
                            var replyComment = replies[j];
                            j++;
                            var ret = (
                                <div className='asReplyBorder'>
                                    <h2>{ReactHtmlParser(replyTitle)}</h2>
                                    <p>{ReactHtmlParser(replyComment)}</p>
                                </div>
                            );
                            this.state.replies.push(ret);
                        }
                    }

                    return (
                        this.state.replies
                    );
    }
}
export default DiscussionReply;