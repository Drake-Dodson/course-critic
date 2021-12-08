import React from 'react'
import './Reviews.css'
import {Link} from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import {ReviewRepo} from "../repositories/ReviewRepo";
import {useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

function CourseReviews(props) {

    let Reviews = JSON.parse(sessionStorage.getItem("ReviewRepo"));

    return (
        <div className='CourseReviews'>
            <div className='center_text'>
                <h1>
                    My Reviews
                </h1>
            </div>

            <ul>
                {Reviews.map((item, index) => {
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
                })}
            </ul>
            <Sidebar
                login={false}
            />
        </div>
    )
}

export default CourseReviews