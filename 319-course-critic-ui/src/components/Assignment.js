import React from 'react'
import ReactHtmlParser from 'react-html-parser';

class Assignment extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {
            assignments: []
        }
    }

    setSelectedAssignment(assignmentName) {
        sessionStorage.setItem('selectedAssignment', assignmentName);
    }

    render() {
        var assignmentName = this.props.name;
        var assignmentDescription = this.props.description;
        var aIdx = this.props.index;
        var divId = "a" + aIdx;
        const ret = (
            <div id={ReactHtmlParser(divId)} className='asBorder'>
                <h2>{ReactHtmlParser(assignmentName)}</h2>
                <p>{ReactHtmlParser(assignmentDescription)}</p>
                <a href='/assignmentdiscussion'>
                    <button onClick={ () => this.setSelectedAssignment(assignmentName) }>
                        View Discussion
                    </button>
                </a>
            </div>
        );
        this.state.assignments.push(ret);

        return (
            this.state.assignments
        //     <div className='asBorder'>
        //     <h2 id="a1">Assignment 1</h2>
        //     <p>Description of assignment goes here</p>
        //     <Link to="/assignmentdiscussion"><button onclick="setSelectedAssignment('a1')" id="a1btn">
        //       View Discussion
        //     </button>
        //     </Link>
        // </div>
        )
    }

}

export default Assignment;