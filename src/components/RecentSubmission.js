import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const displayRecentSubmission = () =>  {
    if (props.recentlySubmitted !== undefined) {
      return (<p>{Object.values(props.recentlySubmitted).join(" ")}</p>);
    }
  }


  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      {displayRecentSubmission()}
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

export default RecentSubmission;
