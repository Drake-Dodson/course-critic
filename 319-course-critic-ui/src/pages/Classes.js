import React from 'react'
import './Classes.css'
import { Link, useParams } from "react-router-dom";

function Classes() {
	let { classID } = useParams();

	return (
		<div className="classes">

			<div class="titleunderline">
			</div>
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
				<p1>Assignments</p1>
				<p2>Metrics</p2>
				<p3>Reviews</p3>
			</div>
			<div class="courselinksheaderbox">
				<p>Course Links</p>
			</div>
			<div class="coursediscriptionbox">
				<p>Discription:<br />-insert here-</p>
			</div>

		</div>
	)
}

export default Classes
