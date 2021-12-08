import React, { useEffect } from 'react'
import './AssignmentFeed.css'
import ReactDOM from 'react-dom'
import Assignment from '../components/Assignment.js'
import Sidebar from "../components/Sidebar/Sidebar";
import {StaticBackend} from "../repositories/StaticBackend";
import {useParams} from "react-router-dom";

export default function AssignmentFeed() {

    let {classID} = useParams();
    let CourseArray = StaticBackend.getClassByID(classID);
    let Course = CourseArray[0];

    useEffect(() => {
        ReactDOM.render(
            React.createElement(Assignment, {courseName: Course.classNameShort}), 
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
        React.createElement(Assignment, {name: aTitle, description: aDescription, index: aIdx, courseName: Course.classNameShort}), 
        document.getElementById('allAssignments')
      );
    }

    return (
        <div className='Assignment-Feed'>
            <div className='afcenter'>
                <h1>
                    {Course.classNameShort  + " Assignments"}
                </h1>
                <form>
                    <label for="assignmentTitle" className='aFeedTitleComment'>Title:</label><br/>
                    <input type="text" className='inputText' id="assignmentTitle" name="assignmentTitle"/><br/>
                    <label for="assignmentDescription" className='aFeedTitleComment'>Description:</label><br/>
                    <input type="text" className='inputText' id="assignmentDescription" name="assignmentDescription"/>
                </form>
                <button onClick={addAssignment} className='isuColorButton'>Add Assignment</button><br/><br/>
            </div>
            <div id='allAssignments'/>
            <Sidebar
                login={false}
            />
        </div>
    )
    
}
