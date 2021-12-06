import React from 'react';

const ReviewCard = (props) =>{

    return (
        <div className='review'>
            <h2 id="header">{"" + props.title}</h2>
            <p>{"Difficulty: " + props.difficultyScore}</p>
            <p>{"Enjoyment: " + props.enjoyment}</p>
            <p>{"Grade: " + props.grade}</p>
            <p>{"Comment: " + props.description}</p>
        </div>
    )
}
export default ReviewCard
