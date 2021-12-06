import React from 'react'
import {Link, useParams} from "react-router-dom";

function Classes() {
    let {classID} = useParams();

    return (
        <div className="classes">
            <body>
	<div class="content">
 <form id="Main Course View" action="" >
   
    <div class="titleunderline"></div>
	<div class="title">
		<p>COM S 319</p>
	</div>
	<div class="classscore">
		<p>Class Score:</p>
	</div>
	<div class="classscoredata">
		<p id="ClassScoreData">4.7</p>
	</div>
	<div class="courselinksmainbox">
		<p id="Course Assigments" onclick="" >Assignments</p>
		<p><br/><br/>Metrics</p>
        <p>
		<Link to={"/class/" + classID + "/reviews"}>
                <br/><br/><br/>reviews
            </Link>
            </p>
	</div>
	<div class="courselinksheaderbox">
		<p>Course Links</p>
	</div>
	<div class="coursediscriptionbox">
		<p>Discription:<br/>-insert here-</p>
	</div>
	 
	 
  </form>
  </div>
  
</body>

        </div>
    )
}

export default Classes
