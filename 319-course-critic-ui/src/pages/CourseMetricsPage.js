import React from 'react'
import './CourseMetricsPage.css'
import Sidebar from "../components/Sidebar/Sidebar";
import {useParams} from "react-router-dom";
import {StaticBackend} from "../repositories/StaticBackend";

export default function CourseMetricsPage() {

    let { classID } = useParams();
    let CourseArray = StaticBackend.getClassByID(classID);
    let Course = CourseArray[0];

    StaticBackend.updateClassMetrics();

    return (
      
        <div className="CourserMetricsPage">
          <h1><u>{Course.classNameShort + " Metrics"}</u></h1>

          <div class="squareonecm">
          <p>{"Rating \n" + Course.classScore + "/5"}
          </p>
          </div>

          <div class="squaretwocm">
            <p>{"Difficulty\n" + Course.classDifficulty + "/5"}
            </p>
          </div>

          <div class="squarethreecm">
            <p>Time
              1.2/5
            </p>
          </div>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>



          <div class="row">
            <div class="column">
              <h2>Average Grade</h2>
              <h3>{Course.averageGrade + "%"}</h3>
            </div>
            <div class="column">
              <h2>Time Spent Per Assignment</h2>
              <h3>5.4 Hours</h3>
            </div>
            <div class="column">
              <h2>Time Spent Per Test</h2>
              <h3>1.25 Hours</h3>
            </div>
          </div>


            <Sidebar
                login={false}
            />
        </div>


    )
}
