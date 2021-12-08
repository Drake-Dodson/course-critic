import React from 'react'
import './Reviews.css'
import {Link} from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import {ReviewRepo} from "../repositories/ReviewRepo";
import {useParams} from "react-router-dom";
import {StaticBackend} from "../repositories/StaticBackend";
import Sidebar from "../components/Sidebar/Sidebar";

function CourseReviews(props) {

    let {classID} = useParams();
    let Reviews = JSON.parse(sessionStorage.getItem("ReviewRepo"));
    let CourseArray = StaticBackend.getClassByID(classID);
    let Course = CourseArray[0];

    return (
        <div className='CourseReviews'>
            <div className='center_text'>
                <h1>
                    {"Class Reviews for " + Course.classNameShort}
                </h1>
            </div>

            <ul>
                {Reviews.map((item, index) => {
                    if(classID == item.classID){
                        return (
                            <li key={index} className='review-card'>
                                <ReviewCard className="review"
                                    title={item.title}
                                    difficultyScore={item.difficultyScore}
                                    enjoyment={item.enjoyment}
                                    grade={item.grade}
                                    description={item.description}
                                />
                            </li>
                        )
                    }
                })}
            </ul>


            <div className='review_button'>
                <Link to={"/class/" + classID + "/review"} className="btn btn-primary">
                    Create Review
                </Link >
            </div><br/><br/>
            <div className='review_button'>
                <Link to={"/class/" + classID} className="btn btn-primary">
                    Course Overview
                </Link >
            </div>
            <Sidebar
                login={false}
            />
        </div>
    )
}

export default CourseReviews