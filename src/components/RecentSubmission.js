import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  if (props.recentLineVisibility) {
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p>{props.lastPoemLine}</p>
        <p className="RecentSubmission__submission">{  }</p>
      </div>
    );
  }else {
    return (
      <div></div>
    )
  }
}

export default RecentSubmission;
