import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const display = "The "+ 
  props.recentPoem.adj1 + " " + 
  props.recentPoem.noun1 + " " + 
  props.recentPoem.adv + " " + 
  props.recentPoem.verb + " the " + 
  props.recentPoem.adj2 + " " + props.recentPoem.noun2 + "."
  ;

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ display}</p>
    </div>
  );
}

export default RecentSubmission;
