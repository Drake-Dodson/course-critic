import React from 'react'
import {Link} from "react-router-dom";
import "SignUp.css"
import './SignUpVerification.js'

export default function SignUpPage() {

    return (

<body>

 <h1 className="header">Course<br/>Critic</h1>
<form className="user-information">
    
	   <p id="email"> Email:<br/>
        <input id="Email" name="Email" type="text" />
      </p>
   
     
	   <p id="password">Password:<br/>
        <input id="Password" name="Password" type="password" />
      </p>
	  
	  <p>
      </p>
     
	   <p id="passwordConf">Password Confirmation:<br/>
        <input id="passwordConf" name="passwordConf" type="password" />
      </p>
	  
	  <p id="Submit">
	    <input onCLick="validateSignUp()" type="button" id="submit" name="submit" value="Submit"/>
		</p>
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
  
  
</body>


    )
}
