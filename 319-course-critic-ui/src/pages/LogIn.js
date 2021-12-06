import React from 'react'
import {Link} from "react-router-dom";
import './LogIn.css';


export default function LogInPage() {



    return (
        <div className="login">
            <h1 className="header" id="header" >Course <br/>Critic</h1>
            <form className="user-information" action="" >
                <p id="Email">
                <label>Email:<br/></label>
                <input id="email" name="email" type="text"/>
                </p>
                
                <p id="Password">
                <label>Password:<br/></label>
                <input id="password" name="password" type="password" />
                </p>
                <p id="Submit">
                <input type="button" id="submit" name="submit" value="Submit" onCLick="LogInValidation()"/>
                </p>
                <p>
                <label>Dont have an account?<br/></label>
                <a href="/signup" >SignUp:</a>
                </p>
            </form>
        </div>
    )
}
