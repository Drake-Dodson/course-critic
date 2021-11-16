import React from 'react'
import {Link} from "react-router-dom";

export default function LogInPage() {

    return (
        <html>

<head>
<meta charset = "utf-8"/>
<style>

</style>
</head>

<body>

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
   
	<p><a href="SignUp.js" style="text-align:center">SignUp:</a></p>
   
  </form>
  

  
</body>

</html>

    )
}
