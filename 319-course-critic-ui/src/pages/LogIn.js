import React from 'react'
import {Link} from "react-router-dom";

export default function LogInPage() {

    return (
        <div>
            <h1 style="font-size: 6rem; color: #F1BE48; text-align:center" >Course <br/>Critic</h1>
            <form style="text-align:center" id="User Information" action="" >
            
                <p id="Email">
                <label>Email:<br/></label>
                <input id="email" name="email" type="text"/>
                </p>
                
                <p id="Password">
                <label>Password:<br/></label>
                <input id="password" name="password" type="password" />
                </p>
                
                <p id="Submit">
                <input type="button" id="submit" name="submit" value="Submit"/>
                </p>
                <p>
                <label>Dont have an account?<br/></label>
                <a href="SignUp.js" >SignUp:</a>
                </p>
            </form>
        </div>
    )
}
