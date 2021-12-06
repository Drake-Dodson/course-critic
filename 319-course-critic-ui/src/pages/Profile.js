import React from 'react'
import './Profile.css'
import {Link } from "react-router-dom";

function Profile() { 
    
    var valCheck = true;

    function validate2() {
        var result_email_check = emailCheck(document.forms["password_reset"]["email"].value);
        var result_password_check = password_check(document.forms["password_reset"]["new_pass"].value);
        var result_passconf_check = password_match(document.forms["password_reset"]["new_pass"].value, document.forms["password_reset"]["new_pass_confirm"].value);
        
        //var image1 = getImage(Boolean(result_email_check), "email");
        //var image2 = getImage(Boolean(result_password_check), "new_pass");
        //var image3 = getImage(Boolean(result_passconf_check), "new_pass_confirm");
        
        var labelNotifyEmail=get_email_Notif(Boolean(result_email_check), "email") ;    
        //document.getElementById("Email").appendChild(image1);
        document.getElementById("Email").appendChild(labelNotifyEmail);
        
        var labelNotify_password=get_password_Notif(Boolean(result_password_check), "new_pass") ;
        //document.getElementById("PASSWORD_1").appendChild(image2);
        document.getElementById("PASSWORD_1").appendChild(labelNotify_password);	
            
        var labelNotify_passconf=get_passconf_Notif(Boolean(result_passconf_check), "new_pass_confirm") ;
        //document.getElementById("PASSWORD_2").appendChild(image3);
        document.getElementById("PASSWORD_2").appendChild(labelNotify_passconf);
    }
    
    function get_email_Notif(bool, ID) {
        var label = document.getElementById("labelNotify" + ID);
        if (label == null) {
            label = document.createElement("LABEL");
            label.id = "labelNotify" + ID;
            // label.className = "errorMessage";
            label.setAttribute( 'class', 'errorMessage' );
          }
    
        label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
        return label;
    }

    function get_password_Notif(bool, ID) {
        var label = document.getElementById("labelNotify" + ID);
        if (label == null) {
            label = document.createElement("LABEL");
            label.id = "labelNotify" + ID;
            // label.className = "errorMessage";
            label.setAttribute( 'class', 'errorMessage' );
          }
    
        label.innerHTML = bool ? "" : "Password should be at least 8 characters including at least 1 uppercase, 1 lowercase, 1 number and one symbol";
        return label;
    }

    function get_passconf_Notif(bool, ID) {
        var label = document.getElementById("labelNotify" + ID);
        if (label == null) {
            label = document.createElement("LABEL");
            label.id = "labelNotify" + ID;
            // label.className = "errorMessage";
            label.setAttribute( 'class', 'errorMessage' );
          }
    
        label.innerHTML = bool ? "" : "passwords do not match";
        return label;
    }
    
    function getImage(bool, ID) {
        var image = document.getElementById("image" + ID);
        if (image == null) {
            image = new Image(15, 15);
            image.id = "image" + ID;
        }
        image.src = bool ? './correct.png' : './wrong.png';
        return image;
    }
    
    function emailCheck(email) {
        var atSplit = email.split('@');
        if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
            var periodSplit = atSplit[1].split('.')
            if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
                return true;
            }
        }
        valCheck = false;
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
    
    // regex found here https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    // password requirement: at least 8 characters and at least 1 of each: number, lowercase letter, uppercase letter, symbol
    function password_check(password) {
        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (password != null && password.match(regex)) {
            return true;
        } 
        else {
            return false;
        }
    }
    
    function password_match(password1, password2) {
        if (password1 == password2) {
            return true;
        }
        else {
            return false;
        }
    }
    
    return (
        <html>
            <head>
            <title>
                User Settings
            </title>
            </head>
            
            <body>
                <div class="profile">
                    <div class="row">
                        
                        <div class="profile_column left">
                            <h2>User Information</h2>
                            <div className="profile_buttons">
                                <p>""UserName""</p>
                            </div>
                            <div className="profile_buttons">
                                <a class="btn btn-primary" href="/Reviews">Reviewed Courses</a>
                            </div>
                            <div className="profile_buttons">
                                <a class="btn btn-primary" href="/Profile">Change Username</a>
                            </div>
                            <div className="profile_buttons">
                                <a class="btn btn-primary" href="/">Log Out</a>
                            </div>
                        </div>
                        
                        <div class="profile_column right">
                            <div class="center_text">
                                <h2>Change Password</h2>
                            </div>
                            <form id="password_reset" className="profile_form">
                            
                                <div className="profile_text">
                                    <p>Please enter your account email, old password, and new password:</p>
                                </div>
                                <div className="profile_input">
                                <p id="Email">
                                    <input type="text" id="email" name="email" size="30" placeholder="Email" required></input>  
                                </p>
                                </div>
                                <div className="profile_input">
                                <p id="PASSWORD_OLD">
                                    <input type="password" id="old_pass" name="old_pass" size="30" placeholder="Old Password" required></input>
                                </p>
                                </div>
                                <div className="profile_input">
                                <p id="PASSWORD_1">
                                    <input type="password" id="new_pass" name="new_pass" size="30" placeholder="New Password" required></input>
                                </p>
                                </div>
                                <div className="profile_input">
                                <p id="PASSWORD_2">
                                    <input type="password" id="new_pass_confirm" name="new_pass_confirm" size="30"  placeholder="Confirm New Password"required></input>
                                </p>
                                </div>
                                
                            </form>
                            <div class="profile_container">
                                    <div class="profile_center">
                                        <button class="btn submit" onClick={validate2}>Submit</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default Profile

