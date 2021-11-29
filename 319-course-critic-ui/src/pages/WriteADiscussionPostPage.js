import React from 'react'

export default function WriteADiscussionPostPage() {
    return (
        <div className="WriteADiscussionPostPage">
            <h1><u>Write a Discussion Post-Assignment Name</u></h1>
 
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title" value="Title of Class"/><br/>
                <label for="comments">Comments:</label><br/>
                <input type="text" id="comments" name="comments" value="Enter Comments About Class Here"/><br/>
                <input type="submit" value="Submit"/>
            </form> 

            <button type="button" onclick="alert('Hello world!')">Back to Assignment Discussion</button>

        </div>
    )
}
