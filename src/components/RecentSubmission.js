import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const mostRecent = props.recent.map((line) => {
    const { adj1, noun1, adverb, verb, adj2, noun2 } = line
    
    const sentence = `The ${adj1} ${noun1} ${adverb} ${verb} the ${adj2} ${noun2}.` 
      return <p>{sentence}</p>; 
  })

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ mostRecent }</p>
    </div>
  );
}

export default RecentSubmission;
