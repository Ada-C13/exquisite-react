import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({ poem }) => {
  let submission = []
  let mostRecentSubmission = poem.slice(-1)[0];


// As a player, I only want to see the "The Most Recent Submission" section if 
// there has already been at least one submission. If no submission, return empty string.
  if (mostRecentSubmission === undefined) {
    submission.push('')
  } else {
    submission.push(Object.values(mostRecentSubmission).join(" ").concat('.'));
  }
  
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        { submission }
        </p>
    </div>
  );
}



export default RecentSubmission;
