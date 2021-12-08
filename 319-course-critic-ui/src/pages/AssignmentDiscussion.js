import React, { useEffect } from 'react'
import './AssignmentFeed.css'
import {Link, useParams} from "react-router-dom";
import ReactDOM from 'react-dom'
import DiscussionPost from '../components/DiscussionPost.js'
import Sidebar from "../components/Sidebar/Sidebar";

export default function AssignmentDiscussion() {

    let {classID} = useParams();

    useEffect(() => {
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
      }, []);

    function clearstorage() {
        sessionStorage.clear();
    }
    
    return (
        <div id="test">
            <div className='topMargin'>
                <Link to={"/class/" + classID + "/assignments"}><button className='isuColorButton'>
                    Back to Assignments
                </button>
                </Link>
                <button onClick={clearstorage}>clear</button><br/><br/>
                <h1 id="aName">[Assignment name]: Discussion</h1>
                <h2>Recent Posts</h2><br/>
                </div>
                <div id="discussion_posts">
                </div>
                <div className='bottomMargin'>
                <Link to={"/class/" + classID + "/assignments/discussion/create"}><button className='isuColorButton'>
                    Create Post
                </button>
                </Link>
            </div>
            <Sidebar
                login={false}
            />
        </div>
    )
}