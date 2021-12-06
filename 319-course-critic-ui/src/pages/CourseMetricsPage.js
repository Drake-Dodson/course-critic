import React from 'react'
import './CourseMetricsPage.css'

export default function CourseMetricsPage() {
    return (
      
        <div className="CourserMetricsPage">
          <h1><u>Com S 319 Course Metrics</u></h1>

          {/* <div class="row">
            <div class="column">
              <h2>Rating</h2>
              <h3>4.7</h3>
              <h3>5</h3>
            </div>
            <div class="column">
              <h2>Difficulty</h2>
              <div>
              <h3>3.2</h3>
              <h3>5</h3>
              </div>
            </div>
            <div class="column">
              <h2>Time Commitment</h2>
              <h3>1.2</h3>
              <h3>5</h3>
            </div>
          </div> */}

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

          {/* <p>Average grade:</p>
            <table>
              <tr>
                <td>84.5%</td>
              </tr>
            </table>
          <p>Time spent per assignment:</p>
          <table>
              <tr>
                <td>5.4 Hours</td>
              </tr>
            </table>
          <p>Time spent per test:</p>
          <table>
              <tr>
                <td>1 Hour 17 minutes</td>
              </tr>
            </table> */}

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


        </div>

        
    )
}
