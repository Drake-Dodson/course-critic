import React from 'react'
import './Reviews.css'
import {Link, useParams} from "react-router-dom";
import {StaticBackend} from "../repositories/StaticBackend";
import Sidebar from "../components/Sidebar/Sidebar";

const CreateReview = () => {

    let {classID} = useParams();
    let CourseArray = StaticBackend.getClassByID(classID);
    let Course = CourseArray[0];

    function submit() {
        StaticBackend.addReview(
            document.getElementById("title").value,
            parseInt(document.getElementById("difficult").value),
            parseInt(document.getElementById("enjoy").value),
            document.getElementById("grade").value,
            document.getElementById("description").value,
            classID
        );
    }

    return (
        <div className="classes">
            <h1>
                {"Write a Review for " + Course.classNameShort}
            </h1>
            <form>
                <div className="textfield">
                    <label for="title">Title:</label><br/>
                    <input type="text" id="title" name="title" size="50" required/>
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
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="C-">C-</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="D-">D-</option>
                        <option value="F">F</option>
                    </select>
                </div>

                <div className="textfield">
                    <label for="comment">Comments:</label><br/>
                    <textarea id="description" name="comment" rows="10" cols="100">
                        Write any comments you have here.
                    </textarea>
                </div>
            </form>

            <div className="textfield">
                <Link to= {"/class/" + classID + "/review_submitted"}>
                    <button className="btn submit" onClick={submit}>Submit</button>
                </Link>
            </div>
            <div className="textfield">
                <Link to= {"/class/" + classID + "/reviews"}>
                    <button className="btn submit" onClick={submit}>Cancel</button>
                </Link>
            </div>
            <Sidebar
                login={false}
            />
        </div>
    )
}

export default CreateReview