import React from 'react'
import './Reviews.css'
import {Link} from "react-router-dom";

function CourseReviews() { 
    return (
        <html>
            <head>
            <title>
                Course Reviews
            </title>
            </head>
            
            <body>
                <div className='center_text'>
                    <h1>
                        Course Reviews for [COMS 319]
                    </h1>
                </div>



                <div className='review_button'>
                    <Link to="/create_review" className="btn btn-primary">
                        Create Review
                    </Link >
                </div>
            </body>
        </html>
    )
}

export default CourseReviews