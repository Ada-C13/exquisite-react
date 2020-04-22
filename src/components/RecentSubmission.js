import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {


  
  // let lastPoemLine = null;
  // if (props.player > 1) {
  //   lastPoemLine = "The " + props.lastLine.adj1 + " " + props.lastLine.noun1 + " " + props.lastLine.adv + " " + props.lastLine.verb + " the " + props.lastLine.adj2 + " " + props.lastLine.noun2 + "."
  // }

  let lastPoemLineBlock = null;
  if (props.player > 1) {
    const lastPoemLine = "The " + props.lastLine.adj1 + " " + props.lastLine.noun1 + " " + props.lastLine.adv + " " + props.lastLine.verb + " the " + props.lastLine.adj2 + " " + props.lastLine.noun2 + "."

    lastPoemLineBlock = (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{lastPoemLine}</p>
      </div>
    )
  }

  return (
    <div>{lastPoemLineBlock}</div>
  );
}

export default RecentSubmission;
