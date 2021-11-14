import React from 'react'
import './Reviews.css'
import {Link } from "react-router-dom";

function CreateReview() { 
    return (
        <div className="classes">
            <h1>
                Write a Review
            </h1>
            <form>
                <div className="textfield">
                    <label for="title">Title:</label><br></br>
                    <input type="text" id="title" name="title" size="50" required></input>
                </div>

                <div className="textfield">
                    <label for="difficult">Difficulty:</label><br></br>
                    <select id="difficult" name="difficult" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="textfield">
                    <label for="enjoy">Enjoyment:</label><br></br>
                    <select id="enjoy" name="enjoy" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                
                <div className="textfield">
                    <label for="grade">Grade Received:</label><br></br>
                    <select id="grade" name="grade" required>
                        <option value="A">A</option>
                        <option value="Aminus">A-</option>
                        <option value="Bplus">B+</option>
                        <option value="B">B</option>
                        <option value="Bminus">B-</option>
                        <option value="Cplus">C+</option>
                        <option value="C">C</option>
                        <option value="Cminus">C-</option>
                        <option value="Dplus">D+</option>
                        <option value="D">D</option>
                        <option value="Dminus">D-</option>
                        <option value="F">F</option>
                    </select>
                </div>

                <div className="textfield">
                    <label for="comment">Comments:</label><br></br>
                    <textarea name="comment" rows="10" cols="100">
                        Write any comments you have here.
                    </textarea>
                </div>
            </form>

            <div className="textfield">
                <Link to="/review_submitted">
                <button class="btn submit">Submit</button>
                </Link>
            </div>
            
        </div>
    )
}

export default CreateReview