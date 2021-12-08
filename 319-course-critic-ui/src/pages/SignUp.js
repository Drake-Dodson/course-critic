import React from 'react'
import {Link} from "react-router-dom";
import './SignUp.css'
import Sidebar from "../components/Sidebar/Sidebar";

function validateSignUp() {
        var resultEmailCheck = emailCheck(document.forms["User Information"]["Email"].value);
        var labelNotifyEmail1=getNotification(Boolean(resultEmailCheck), "Email");
        document.getElementById("errorReport1").appendChild(labelNotifyEmail1);
    
        var resultPwdCheck = alphaNumCheck(document.forms["User Information"]["Password"].value);
        var labelNotifyPwd=getNotification(Boolean(resultPwdCheck), "Password");
        document.getElementById("errorReport2").appendChild(labelNotifyPwd);
    
        var resultPwdConfCheck = passwordConfCheck(document.forms["User Information"]["Password"].value, document.forms["User Information"]["passwordConf"].value);
        var labelNotifyPwdConf=getNotification(Boolean(resultPwdConfCheck), "passwordConf");
        document.getElementById("errorReport3").appendChild(labelNotifyPwdConf);
    
        if(resultEmailCheck == true && resultPwdCheck == true && resultPwdConfCheck == true){
            //TODO update
            window.location.href="/";
            
        }
    
    }
    
    function getNotification(bool, ID) {
        var label = document.getElementById("labelNotify" + ID);
        if (label == null) {
            label = document.createElement("LABEL");
            label.id = "labelNotify" + ID;
            // label.className = "errorMessage";
            label.setAttribute( 'class', 'errorMessage' );
          }
    
        
        if(ID == "Email"){
            label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
        
        } else if(ID == "Password"){
            
            label.innerHTML = bool ? "" : "Password should be alpha numeric!";
            
        } else if(ID == "passwordConf"){
            
            label.innerHTML = bool ? "" : "Password confirmation does not match your given password!";
            
        } else{
            
            label.innerHTML = bool ? "" : "Unknown ERROR";
            
        }
        return label;
    }
    
    function passwordConfCheck(entry, entryConf) {
        if (entry == entryConf) {
            return true;
        } else {
            return false;
        }
    }
    
    function emailCheck(email) {
        var atESplit = email.split('@');
        if (atESplit.length == 2 && alphaNumCheck(atESplit[0])) {
            let periodSplit = atESplit[1].split('.')
            if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
                return true;
            }
        }
        return false;
    }
    
    function alphaNumCheck(entry) {
        let regex = /^[a-z0-9]+$/i;
        if (entry != null && entry.match(regex)) {
            return true;
        } else {
            return false;
        }
    }

export default function SignUpPage() {

    
    

    return (
        <div>
            <h1 className="header">Course<br/>Critic</h1>
            <form className="user-information" id="User Information" name="User Information">

                <p id="email"> Email:<br/>
                    <input id="Email" name="Email" type="text"/>
                </p>


                <p id="password">Password:<br/>
                    <input id="Password" name="Password" type="password"/>
                </p>

                <p>
                </p>

                <p id="passwordConf">Password Confirmation:<br/>
                    <input id="passwordConf" name="passwordConf" type="password"/>
                </p>

                <p id="Submit">
                    <input onClick={validateSignUp} type="button" id="submit" name="submit" value="Submit"/>
                </p>
                {/*<Link to="/">
                    <input type="button" id="submit" name="submit" value="Submit"/>
                 </Link>*/}
                <p>Have an account?<br/>
                    <a href="login">Login:</a>
                </p>
                <p id="errorReport1">
                </p>
                <p id="errorReport2">
                </p>
                <p id="errorReport3">
                </p>
            </form>
            <Sidebar
                login={true}
            />
        </div>
    )
}
