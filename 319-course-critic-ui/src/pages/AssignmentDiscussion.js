import React, { useEffect } from 'react'
import './AssignmentFeed.css'
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import DiscussionPost from '../components/DiscussionPost.js'

export default function AssignmentDiscussion() {
    useEffect(() => {
        // getPosts(); allCurrPostIdx
        var allCurrPostIdx;
        document.getElementById("aName").textContent = sessionStorage.getItem('selectedAssignment');
        ReactDOM.render(
            React.createElement(DiscussionPost, {assId: sessionStorage.getItem('selectedAssignmentId')}), 
            document.getElementById('discussion_posts')
          );

          if (sessionStorage.getItem('currPostIdx') != 'null' && sessionStorage.getItem('currTitleText') != 'null' && sessionStorage.getItem('currCommentText') != 'null')
          {
            ReactDOM.render(
                React.createElement(DiscussionPost, {assId: sessionStorage.getItem('selectedAssignmentId'), postIdx: sessionStorage.getItem('currPostIdx'), title: sessionStorage.getItem('currTitleText'), comment: sessionStorage.getItem('currCommentText')}), 
                document.getElementById('discussion_posts')
              );
              sessionStorage.setItem('currPostIdx', null);
              sessionStorage.setItem('currTitleText', null);
              sessionStorage.setItem('currCommentText', null);
          }

        //   if (sessionStorage.getItem('allCurrPostIdx') != null)
        //   {
        //       allCurrPostIdx = JSON.parse(sessionStorage.getItem('allCurrPostIdx'));
        //       var i = 0;
        //       while (i < allCurrPostIdx.length)
        //       {
        //         if (sessionStorage.getItem('reply' + i) != null)
        //             {
        //                 document.getElementById(sessionStorage.getItem('selectedAssignmentId') + "post" + i).innerHTML += sessionStorage.getItem('reply' + i);
        //             }
        //         i++;
        //       }
        //   }
      }, []);

    // function getPosts() {
    //     var i = 0;
    //     while (i < sessionStorage.length)
    //     {
    //         if (sessionStorage.getItem('post' + i) != null)
    //         {
    //             document.getElementById("discussion_posts").innerHTML += sessionStorage.getItem('post' + i);
    //             document.getElementById("reply" + i).onclick = setReplyPost(i);
    //         }
    //         i++;
    //     }
    //     i = 0;
    //     while (i < sessionStorage.length)
    //     {
    //         if (sessionStorage.getItem('reply' + i) != null)
    //         {
    //             document.getElementById("post" + i).innerHTML += sessionStorage.getItem('reply' + i);
    //         }
    //         i++;
    //     }
    //     console.log(document.getElementById("test").innerHTML);
    //     console.log(sessionStorage);
    // }

    // function setReplyPost(postIdx) {
    //     sessionStorage.setItem('selectedReply', postIdx)
    // }

    function clearstorage() {
        sessionStorage.clear();
    }
    
    return (
        <html>
            <head>
                <title>Assignment Discussion</title>
            </head>
            <body>
                <div id="test">
            <div className='topMargin'>
                <Link to="/assignmentfeed"><button className='isuColorButton'>
                    Back to Assignments
                </button>
                </Link>
                <button onClick={clearstorage}>clear</button>
                <h1 id="aName">[Assignment name]: Discussion</h1>
                <h2>Recent Posts</h2>
                </div>
                <div id="discussion_posts">
                </div>
                <div className='bottomMargin'>
                <Link to="/creatediscussionpost"><button className='isuColorButton'>
                    Create Post
                </button>
                </Link>
                </div>
                </div>
            </body>
        </html>
    )
}