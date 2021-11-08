import React from 'react'
import './AssignmentFeed.css'

export default function AssignmentFeed() {
    return (
    <html>
        <head>
        <title>
            Assignment Feed
        </title>
    </head>
    <body>
        <h1>
            [course name]: Assignments
        </h1>
        <div className='asBorder'>
            <h2>[Assignment name]</h2>
            <p>Description of assignment goes here</p>
            <input type="button" id="viewDiscussion" name="viewDiscussion" value="View Discussion"></input>
        </div>
    </body>
    </html>
    )
}
