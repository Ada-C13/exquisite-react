import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({poem}) => {
  let submission = []
  let mostRecentSubmission = poem.slice(-1)[0];

  // if most recent submission is not yet made, return ''
  if (mostRecentSubmission === undefined) {
    submission.push('')
  } else {
    submission.push(Object.values(mostRecentSubmission).join(" ").concat('.'));
  }

  console.log(`this is recent submission ${submission}`);
  console.log(`this is poem:`);
  console.log(mostRecentSubmission);

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        {submission}
        </p>
    </div>
  );
}

export default RecentSubmission;
