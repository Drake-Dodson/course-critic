import React from 'react'
import './Classes.css'
import { Link, useParams } from "react-router-dom";
import {StaticBackend} from "../repositories/StaticBackend";
import Sidebar from "../components/Sidebar/Sidebar";
import ReviewCard from "../components/ReviewCard";

function Classes() {
	let {classID} = useParams();
	let CourseArray = StaticBackend.getClassByID(classID);
	let Course = CourseArray[0];
	let Reviews = JSON.parse(sessionStorage.getItem("ReviewRepo"));
	let ThisReviews = Reviews.filter(obj => {return obj.classID == classID});

	StaticBackend.updateClassMetrics();

	let RecentReview1 = ThisReviews[ThisReviews.length - 2];
	let RecentReview2 = ThisReviews[ThisReviews.length - 1];

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
				<Link className="reviews-link" to={"/class/" + classID + "/reviews"}>
					<span>Reviews</span>
				</Link>
			</div>
			<div class="courselinksheaderbox">
				<p>Course Links</p>
			</div>
			<div class="coursediscriptionbox">
				<p>Course Description:<br/>{Course.description}</p>
			</div>
			{/*<div className="div-review">*/}
			{/*	<ReviewCard*/}
			{/*		title={RecentReview2.title}*/}
			{/*		difficultyScore={RecentReview2.difficultyScore}*/}
			{/*		enjoyment={RecentReview2.enjoyment}*/}
			{/*		grade={RecentReview2.grade}*/}
			{/*		description={RecentReview2.description}*/}
			{/*	/>*/}
			{/*	<ReviewCard*/}
			{/*		title={RecentReview1.title}*/}
			{/*		difficultyScore={RecentReview1.difficultyScore}*/}
			{/*		enjoyment={RecentReview1.enjoyment}*/}
			{/*		grade={RecentReview1.grade}*/}
			{/*		description={RecentReview1.description}*/}
			{/*	/>*/}
			{/*</div>*/}

			<Sidebar
				login={false}
			/>
		</div>
	)
}

export default Classes
