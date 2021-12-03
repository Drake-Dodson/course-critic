import React from 'react'
import './Reviews.css'
import {Link } from "react-router-dom";

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

                <div className='review'>
                    <h2 id="a1">This class is pretty great</h2>
                    <p>Difficulty: 3</p>
                    <p>Enjoyment: 4</p>
                    <p>Grade: B</p>
                    <p>Comment: bla bla bla</p>
                </div>
                <div className='review'>
                    <h2 id="a2">I love this class!</h2>
                    <p>Difficulty: 2</p>
                    <p>Enjoyment: 5</p>
                    <p>Grade: A</p>
                    <p>Comment: bla bla bla</p>
                </div>
                <div className='review'>
                    <h2 id="a3">This class is the worst!!</h2>
                    <p>Difficulty: 5</p>
                    <p>Enjoyment: 1</p>
                    <p>Grade: C-</p>
                    <p>Comment: bla bla bla</p>
                </div>
                <div className='review'>
                    <h2 id="a4">If you're looking for an easy A, look elsewhere</h2>
                    <p>Difficulty: 5</p>
                    <p>Enjoyment: 2</p>
                    <p>Grade: B-</p>
                    <p>Comment: bla bla bla</p>
                </div>
                <div className='review'>
                    <h2 id="a5">Fun but difficult</h2>
                    <p>Difficulty: 4</p>
                    <p>Enjoyment: 4</p>
                    <p>Grade: A-</p>
                    <p>Comment: bla bla bla</p>
                </div>

                <div className='review_button'>
                    <a class="btn btn-primary" href="/create_review">Create Review</a>
                </div>
            </body>
        </html>
    )
}

export default CourseReviews