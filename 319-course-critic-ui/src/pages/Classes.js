import React from 'react'
import './Classes.css'
import { Link, useParams } from "react-router-dom";
import {StaticBackend} from "../repositories/StaticBackend";
import Sidebar from "../components/Sidebar/Sidebar";

function Classes() {
	let { classID } = useParams();
	let CourseArray = StaticBackend.getClassByID(classID);
	let Course = CourseArray[0];

	return (
		<div className="classes">

			<div class="titleunderline">
			</div>
			<div class="title">
				<p>{Course.classNameShort}</p>
			</div>
			<div class="classscore">
				<p>Class Score:</p>
			</div>
			<div className="classscoredata">
				<p className="score" id="ClassScoreData">{Course.classScore}</p>
				<p className="outta"> /5</p>
			</div>
			<div class="courselinksmainbox">
				<Link className="assign-link" to={"/class/" + classID + "/assignments"}>
					<span>Assignments</span>
				</Link>
				<Link className="metrics-link" to={"/class/" + classID + "/metrics"}>
					<span>Metrics</span>
				</Link>
				<Link className="reviews-link"to={"/class/" + classID + "/reviews"}>
					<span>Reviews</span>
				</Link>
			</div>
			<div class="courselinksheaderbox">
				<p>Course Links</p>
			</div>
			<div class="coursediscriptionbox">
				<p>Course Description:<br/>{Course.description}</p>
			</div>
			<Sidebar
				login={false}
			/>

		</div>
	)
}

export default Classes
