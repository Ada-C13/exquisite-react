import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>{props.submission}</h3>
      <p className="RecentSubmission__submission">{`${props.start} ${props.recentPoem.firstAdjective} ${props.recentPoem.firstNoun} ${props.recentPoem.adverb} ${props.recentPoem.verb} ${props.mid} ${props.recentPoem.secondAdjective} ${props.recentPoem.secondNoun} ${props.end}`}</p>
    </div>
  );
}

export default RecentSubmission;
