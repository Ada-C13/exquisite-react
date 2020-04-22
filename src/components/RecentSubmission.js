import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({isDone, lastLine}) => {
  const shouldDisplay = () => {
    return (!isDone && lastLine);
  }
  return (
      shouldDisplay() && (
        <div className="RecentSubmission">
          <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{ lastLine }</p>
        </div>
      )
  );
}

export default RecentSubmission;
