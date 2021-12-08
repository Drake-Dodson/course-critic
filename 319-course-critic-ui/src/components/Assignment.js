import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import {useParams} from "react-router-dom";

class Assignment extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            assignments: []
        }
    }

    setSelectedAssignment(assignmentName, assignmentId) {
        sessionStorage.setItem('selectedAssignment', assignmentName);
        sessionStorage.setItem('selectedAssignmentId', assignmentId);
    }

    render() {
        var assignmentArr = [];
        this.state.assignments = [];
        var nameClass = this.props.courseName;
        var ssClassString = nameClass + 'allAssignments';
        if (sessionStorage.getItem(ssClassString) != null)
        {
            assignmentArr = JSON.parse(sessionStorage.getItem(ssClassString));
            var i = 0;
            while (i < assignmentArr.length)
            {
                var tempName = assignmentArr[i];
                i++;
                var tempDesc = assignmentArr[i];
                i++;
                var tempIdx = assignmentArr[i];
                var tempDivId = "a" + tempIdx;
                i++;
                const tempRet = (
                    <div id={ReactHtmlParser(tempDivId)} className='asBorder'>
                <h2>{ReactHtmlParser(tempName)}</h2>
                <p>{ReactHtmlParser(tempDesc)}</p>
                <a href='assignments/discussion'>
                    <button onClick={this.setSelectedAssignment.bind(this, tempName, tempDivId)} className='replyButton'>
                        View Discussion
                    </button>
                </a>
            </div>
                );
                this.state.assignments.push(tempRet);
            }
        }

        if (this.props.name != null && this.props.description != null && this.props.index != null)
        {
            var assignmentName = this.props.name;
            var assignmentDescription = this.props.description;
            var aIdx = this.props.index;
            var divId = "a" + aIdx;
            const ret = (
                <div id={ReactHtmlParser(divId)} className='asBorder'>
                    <h2>{ReactHtmlParser(assignmentName)}</h2>
                    <p>{ReactHtmlParser(assignmentDescription)}</p>
                    <a href='assignments/discussion/'>
                        <button onClick={this.setSelectedAssignment.bind(this, assignmentName, divId)} className='replyButton'>
                            View Discussion
                        </button>
                    </a>
                </div>
            );
            this.state.assignments.push(ret);
            assignmentArr.push(assignmentName);
            assignmentArr.push(assignmentDescription);
            assignmentArr.push(aIdx);
            sessionStorage.setItem(ssClassString, JSON.stringify(assignmentArr));
        }
        
        return (
            this.state.assignments
        )
    }

}

export default Assignment;