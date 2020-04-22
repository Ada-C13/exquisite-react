import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const {firstAdjective, firstNoun, adverb, verb, secondAdjective, secondNoun} = props.poem;
  return (
    <div className="RecentSubmission">
      <h3>{`${props.recentSubmission}`}</h3>
      <p className="RecentSubmission__submission">{`The ${firstAdjective} ${firstNoun} ${adverb} ${verb} the ${secondAdjective} ${secondNoun}`}</p>
    </div>
  );
}

export default RecentSubmission;