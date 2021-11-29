import React from 'react'

export default function WriteADiscussionPostPage() {
    return (
        <div className="WriteADiscussionPostPage">
            <h1><u>Write a Discussion Post-Assignment Name</u></h1>
 
            <form>
                <label for="title"><b>Title:</b></label><br/>
                <input type="text" id="title" size="150" name="title" value="Title of Class"/><br/><br></br>
                <label for="comments"><b>Comments:</b></label><br/>
                <input type="text" id="comments" maxlength="1000" name="comments" value="Enter Comments About Class Here"/><br/>
                <input type="submit" value="Submit"/>
            </form><br></br> 

            <button type="button" onclick="alert('Hello world!')">Back to Assignment Discussion</button>

        </div>
    )
}
