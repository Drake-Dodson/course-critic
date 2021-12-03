import React from 'react'
import './Profile.css'
import {Link } from "react-router-dom";

function Profile() { 
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
                            <form className="profile_form">
                            
                                <div className="profile_input">
                                    <p>Please enter your account email, old password, and new password:</p>
                                </div>
                                <div className="profile_input">
                                    <input type="text" id="email" name="email" size="30" placeholder="Email" required></input>  
                                </div>
                                <div className="profile_input">
                                    <input type="password" id="old_pass" name="old_pass" size="30" placeholder="Old Password" required></input>
                                </div>
                                <div className="profile_input">
                                    <input type="password" id="new_pass" name="new_pass" size="30" placeholder="New Password" required></input>
                                </div>
                                <div className="profile_input">
                                    <input type="password" id="new_pass_confirm" name="new_pass_confirm" size="30"  placeholder="Confirm New Password"required></input>
                                </div>
                                <div class="profile_container">
                                    <div class="profile_center">
                                        <button class="btn submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </body>
        </html>
    )
}

export default Profile