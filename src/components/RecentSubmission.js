import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>'The Most Recent Submission'</h3>
      <p className="RecentSubmission__submission">{`The ${props.recentPoem.firstAdjective} ${props.recentPoem.firstNoun} ${props.recentPoem.adverb} ${props.recentPoem.verb} the ${props.recentPoem.secondAdjective} ${props.recentPoem.secondNoun}.`}</p>
    </div>
  );
}

export default RecentSubmission;
