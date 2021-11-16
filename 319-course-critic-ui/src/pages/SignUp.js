import React from 'react'
import {Link} from "react-router-dom";

export default function SignUpPage() {

    return (
        <html>
<head>
<meta charset = "utf-8"/>
<style>

</style>
</head>

<body>

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
	<p><a href="LogIn.js">Login:</a></p>
   
  </form>
  
</body>

</html>

    )
}
