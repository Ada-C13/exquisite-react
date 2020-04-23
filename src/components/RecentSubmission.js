import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';
const RecentSubmission = (props) => {
  const submissions = props.submissions.map(input =>{
    return(
      `The ${input.adjective1} 
      ${input.noun1} 
      ${input.adverb} 
      ${input.verb} the
      ${input.adjective2} 
      ${input.noun2}`
    )
  })
  
  return (
    <div className="RecentSubmission">
      <h3>{props.mostRecentSubmissionText}</h3>
      <p className="RecentSubmission__submission">{submissions[submissions.length - 1]}</p>
    </div> 
  );
}

RecentSubmission.propTypes = {
  submissions: PropTypes.arrayOf(PropTypes.object),
  mostRecentSubmissionText: PropTypes.string
}

export default RecentSubmission;
