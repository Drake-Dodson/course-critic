import React, { useEffect } from 'react'
import './AssignmentFeed.css'
import {Link } from "react-router-dom";
export default function AssignmentFeed() {

  useEffect(() => {
    var i = 1;
    while (i < 7)
    {
      document.getElementById("a" + i + "btn").onclick = setSelectedAssignment("a" + i);
      i++;
    }
    console.log(sessionStorage.getItem('selectedAssignment'));
  }, []);

  function setSelectedAssignment(assignmentId) {
    sessionStorage.setItem('selectedAssignment', document.getElementById(assignmentId).textContent);
}

    return (
    <html>
        <head>
        <title>
            Assignment Feed
        </title>
    </head>
    <body>
        <div className='center'>
            <h1>
                [course name]: Assignments
            </h1>
        </div>

        <div className='asBorder'>
            <h2 id="a1">Assignment 1</h2>
            <p>Description of assignment goes here</p>
            <Link to="/assignmentdiscussion"><button id="a1btn">
              View Discussion
            </button>
            </Link>
        </div>
        <div className='asBorder'>
            <h2 id="a2">Assignment 2</h2>
            <p>Description of assignment goes here</p>
            <Link to="/assignmentdiscussion"><button id="a2btn">
              View Discussion
            </button>
            </Link>
        </div>
        <div className='asBorder'>
            <h2 id="a3">Assignment 3</h2>
            <p>Description of assignment goes here</p>
            <Link to="/assignmentdiscussion"><button id="a3btn">
              View Discussion
            </button>
            </Link>
        </div>
        <div className='asBorder'>
            <h2 id="a4">Assignment 4</h2>
            <p>Description of assignment goes here</p>
            <Link to="/assignmentdiscussion"><button id="a4btn">
              View Discussion
            </button>
            </Link>
        </div>
        <div className='asBorder'>
            <h2 id="a5">Assignment 5</h2>
            <p>Description of assignment goes here</p>
            <Link to="/assignmentdiscussion"><button id="a5btn">
              View Discussion
            </button>
            </Link>
        </div>
        <div className='asBorder'>
            <h2 id="a6">Assignment 6</h2>
            <p>Description of assignment goes here</p>
            <Link to="/assignmentdiscussion"><button id="a6btn">
              View Discussion
            </button>
            </Link>
        </div>
    </body>
    </html>
    )
    
}
