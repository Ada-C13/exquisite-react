import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3> // TODO need to refactor so this doesn't sow
      <p className="RecentSubmission__submission">{ props.recentSubmission }</p> // TODO should probably generate sentence here, not in Game
    </div>
  );
}

export default RecentSubmission;
