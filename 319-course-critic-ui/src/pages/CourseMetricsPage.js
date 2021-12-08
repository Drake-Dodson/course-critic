import React from 'react'
import './CourseMetricsPage.css'
import Sidebar from "../components/Sidebar/Sidebar";

export default function CourseMetricsPage() {
    return (
      
        <div className="CourserMetricsPage">
          <h1><u>Com S 319 Course Metrics</u></h1>

          <div class="squareonecm">
            <p>Rating
              4.7/5
            </p>
          </div>

          <div class="squaretwocm">
            <p>Difficulty
              3.2/5
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
              <h3>84.5%</h3>
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
