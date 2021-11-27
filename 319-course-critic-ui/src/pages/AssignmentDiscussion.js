import React, { useEffect } from 'react'
import './AssignmentFeed.css'
import {Link} from "react-router-dom";

export default function AssignmentDiscussion() {
    useEffect(() => {
        getPosts();
      }, []);

    function getPosts() {
        var i = 0;
        while (i < sessionStorage.length)
        {
            if (sessionStorage.getItem('post' + i) != null)
            {
                document.getElementById("discussion_posts").innerHTML += sessionStorage.getItem('post' + i);
                document.getElementById("reply" + i).onclick = setReplyPost(i);
            }
            i++;
        }
        i = 0;
        while (i < sessionStorage.length)
        {
            if (sessionStorage.getItem('reply' + i) != null)
            {
                document.getElementById("post" + i).innerHTML += sessionStorage.getItem('reply' + i);
            }
            i++;
        }
        console.log(document.getElementById("test").innerHTML);
        console.log(sessionStorage);
    }

    function setReplyPost(postIdx) {
        sessionStorage.setItem('selectedReply', postIdx)
    }

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
                <Link to="/assignmentfeed"><button>
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
                <Link to="/creatediscussionpost"><button>
                    Create Post
                </button>
                </Link>
                </div>
                </div>
            </body>
        </html>
    )
}