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
<script src="./validation1.js"></script>
</head>

<body>

<div class="content">
<div class="redB">
 <p style="color: #F1BE48; text-align:center">Course<br> Critic</p>

<div class="redB">
<div class="content">


<div class="content">
<div class="realContent">
 <form style="text-align:center" id="User Information" action="" >
   <h1 style="font-size: 6rem; color: #F1BE48; text-align:center" >Course <br>Critic</h1>
   <p id="EmailTitle">
        <label for="EmailTitle">Email:</label>
      </p>
     
	   <p id="Email">
        <input id="Email" name="Email" type="text" />
      </p>
   
	<p id="UserNameTitle">
        <label for="UserNameTitle">UserName:</label>
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
	  
	  <p id="PasswordConfTitle">
        <label for="PasswordConfTitle">Password Confirmation:</label>
      </p>
     
	   <p id="PasswordConf">
        <input id="PasswordConf" name="PasswordConf" type="PasswordConf" />
      </p>
	  <p>
	  
        <input type="button" id="submit" name="submit" value="Submit"/>
		</p>
		<p id="ToSignup">
        <label for="ToSignup">Have an account?</label>
      </p>  
	<p><a href="LogIn.html">Login:</a></p>
   
  </form>
<div class="realContent">
<div class="content">
  
</body>

</html>

    )
}
