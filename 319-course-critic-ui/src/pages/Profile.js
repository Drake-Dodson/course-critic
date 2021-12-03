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
                        
                        <div class="column left">
                            <h2>User Information</h2>
                            <div className="buttons">
                                <p>""UserName""</p>
                            </div>
                            <div className="buttons">
                                <a class="btn btn-primary" href="/Reviews">Reviewed Courses</a>
                            </div>
                            <div className="buttons">
                                <a class="btn btn-primary" href="/Profile">Change Username</a>
                            </div>
                            <div className="buttons">
                                <a class="btn btn-primary" href="/">Log Out</a>
                            </div>
                        </div>
                        
                        <div class="column right">
                            <div class="center_text">
                                <h2>Change Password</h2>
                            </div>
                            <form>
                            
                                <div className="input">
                                    <p> Please enter your account email, old password, and new password: </p>
                                </div>
                                <div className="input">
                                    <input type="text" id="email" name="email" size="30" placeholder="Email" required></input>  
                                </div>
                                <div className="input">
                                    <input type="password" id="old_pass" name="old_pass" size="30" placeholder="Old Password" required></input>
                                </div>
                                <div className="input">
                                    <input type="password" id="new_pass" name="new_pass" size="30" placeholder="New Password" required></input>
                                </div>
                                <div className="input">
                                    <input type="password" id="new_pass_confirm" name="new_pass_confirm" size="30"  placeholder="Confirm New Password"required></input>
                                </div>
                                <div class="container">
                                    <div class="center">
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