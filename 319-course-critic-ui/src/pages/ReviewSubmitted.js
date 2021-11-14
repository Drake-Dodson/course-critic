import React from 'react'
import './Reviews.css'
import {Link } from "react-router-dom";

function ReviewSubmitted() { 
    return (
        <div className="classes">
            <h1>
                Write a Review
            </h1>
            
            <div className="submitted">
                <h2 className="center_submitted">
                    Review has been submitted!
                </h2>

                <div className="center_submitted">
                    <Link to="/create_review">
                    <button class="btn submit">Create Another Review</button>
                    </Link>
                </div>

                <div className="center_submitted">
                    <Link to="/">
                    <button class="btn submit">Return to Home Page</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ReviewSubmitted