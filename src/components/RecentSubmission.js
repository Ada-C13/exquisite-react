import React from 'react';
import './RecentSubmission.css';


const RecentSubmission = (props) => {
  if (!props.poem || props.gameon ){
    return ''
  }else {
  return (
    <div className="RecentSubmission" >
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission"> {props.poem.the1} {props.poem.adj1} {props.poem.noun1} {props.poem.adv} {props.poem.verb} {props.poem.the2} {props.poem.adj2} {props.poem.noun2} {props.poem.dot}</p>
    </div>
  );
}
}

export default RecentSubmission;
