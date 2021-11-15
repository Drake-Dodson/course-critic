import React from 'react'
import './UserFeed.css'

export default function UserFeed()
{
    return (
        <html>
            <head>
            <title>
                Course Reviews
            </title>
            </head>
            
            <body>
                <div className='center_text'>
                    <h1>
                        User Feed
                    </h1>
                </div>

                <div className='recent-assignment'>
                <h2 id="a1">No Recent Assignments</h2>
                </div>
                <div className='recent-assignment-title'>
                    <h2 id="a1">Recent Assignments</h2>
                </div>
                <div className='recent-reviews'>
                <h2 id="a1">No Recent Reviews</h2>
                </div>
                <div className='recent-reviews-title'>
                    <h2 id="a1">Recent Reviews</h2>
                </div>
                <div className='recent-discussions'>
                <h2 id="a1">No Recent Discussions</h2>
                </div>
                <div className='recent-discussions-title'>
                    <h2 id="a1">Recent Discussions</h2>
                </div>
             
               
            </body>
        </html>
    )
}
