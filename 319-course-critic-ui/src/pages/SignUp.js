import React from 'react'
import {Link} from "react-router-dom";

export default function SignUpPage() {

    return (
        <html>
<head>
<meta charset = "utf-8"/>
<style>

</style>
<script src="./SignUpValidation.js"></script>
</head>

<body>

 <form style="text-align:center" id="User Information" action="" >
<h1 style="font-size: 6rem; color: #F1BE48; text-align:center" >Course <br>Critic</h1>
     
	   <p id="email">
        <label>Email:<br></label>
        <input id="Email" name="Email" type="text" />
      </p>
   
     
	   <p id="password">
        <label>Password:<br></label>
        <input id="Password" name="Password" type="password" />
      </p>
	  
	  <p>
      </p>
     
	   <p id="passwordConf">
        <label>Password Confirmation:<br></label>
        <input id="PasswordConf" name="PasswordConf" type="password" />
      </p>
	  
	  <p id="submit">
	  
	    <input type="button" id="Submit" name="Submit" value="Submit"/>
		</p>
		<p>
        <label>Have an account?<br></label>
	<a href="LogIn.js">Login:</a></p>
   
  </form>
  
</body>

</html>

    )
}
