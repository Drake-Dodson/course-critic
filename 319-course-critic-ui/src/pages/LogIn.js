import React from 'react'
import {Link} from "react-router-dom";

export default function AssignmentDiscussion() {

    return (
        <html>

<head>
<meta charset = "utf-8"/>
<style>
 .redB{
 background-color: #C8102E ; position: absolute;
width: 10%;
height: 1024px;
left: 0px;
top: 0px;
}
 .realContent{
 background-color: #FFFFFF ; position: absolute;
width: 90%;
height: 1024px;
left: 600px;
top: 0px;
}
</style>
</head>

<body>

<div class="content">
<div class="redB">
 <p style="color: #F1BE48; text-align:center">Course<br> Critic</p>

<div class="redB">
<div class="content">





<div class="content">
<div class="realContent">
<h1 style="font-size: 6rem; color: #F1BE48; text-align:center" >Course <br>Critic</h1>
  <form style="text-align:center" id="User Information" action="" >
   
	<p id="UserNameTitle">
    <label  for="UserNameTitle">UserName:</label>
    </p>
     
	<p id="UserName">
    <input id="UserName" name="UserName" type="text" />
    </p>
	
	<p id="PasswordTitle">
    <label for="PasswordTitle">Password:</label>
    </p>
     
	<p id="Password">
    <input id="Password" name="Password" type="password" />
    </p>
	<p>
    <input type="button" id="submit" name="submit" value="Submit"/>
	</p>
	<p id="ToSignup">
    <label for="ToSignup">Dont have an account?</label>
    </p>
   
	<p><a href="SignUp.html" style="text-align:center">SignUp:</a></p>
   
  </form>
  
  <div class="realContent">
<div class="content">
  
</body>

</html>

    )
}
