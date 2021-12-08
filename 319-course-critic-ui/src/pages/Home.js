import React from 'react'
import './Home.css'
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
    return (
		<div className='home'>
			<div className="content">
				<form id="Main Page" action="">

					<div className="squareone">

						<p>Course</p>

					</div>
					<div className="squaretwo">

						<p>Course</p>

					</div>
					<div className="squarethree">

						<p>Course</p>

					</div>
					<div className="squarefour">

						<p>Course</p>

					</div>
					<div className="squarefive">

						<p>Course</p>

					</div>
					<div className="squaresix">

						<p>Course</p>

					</div>
					<div className="feedbacksquare">
					</div>
					<div className="feedbacksquaretext">

						<p>Recent Feedback</p>

					</div>

					<div className="notificationtextone">
						<p>Notification</p>
					</div>
					<div className="notificationtexttwo">
						<p>Notification</p>
					</div>
					<div className="notificationtextthree">
						<p>Notification</p>
					</div>

				</form>
			</div>
			<Sidebar
				login={false}
			/>
		</div>
    )
}

export default Home

