import React, { useEffect } from 'react'
import './AssignmentFeed.css'
import ReactDOM from 'react-dom'
import Assignment from '../components/Assignment.js'
export default function AssignmentFeed() {

    useEffect(() => {
        ReactDOM.render(
            React.createElement(Assignment), 
            document.getElementById('allAssignments')
          );
      }, []);

      var aIdx;
      if (sessionStorage.getItem('aIdx') != null)
      {
          aIdx = sessionStorage.getItem('aIdx');
      }
      else
      {
          aIdx = 0;
      }

    function addAssignment () {
      aIdx++;
      sessionStorage.setItem('aIdx', aIdx);
      var aTitle = document.getElementById('assignmentTitle').value;
      var aDescription = document.getElementById('assignmentDescription').value;
      ReactDOM.render(
        React.createElement(Assignment, {name: aTitle, description: aDescription, index: aIdx}), 
        document.getElementById('allAssignments')
      );
    }

    return (
    <html>
        <head>
        <title>
            Assignment Feed
        </title>
    </head>
    <body>
        <div className='afcenter'>
            <h1>
                [course name]: Assignments
            </h1>
            <form>
                <label for="assignmentTitle" className='aFeedTitleComment'>Title:</label><br/>
                <input type="text" className='inputText' id="assignmentTitle" name="assignmentTitle"/><br/>
                <label for="assignmentDescription" className='aFeedTitleComment'>Description:</label><br/>
                <input type="text" className='inputText' id="assignmentDescription" name="assignmentDescription"/>
            </form> 
            <button onClick={addAssignment} className='isuColorButton'>Add Assignment</button><br/><br/>
        </div>
        <div id='allAssignments'>
        </div>
    </body>
    </html>
    )
    
}
