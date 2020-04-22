import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  if (!props.isFinal && props.poem.length > 0){
   
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{ props.poem[props.poem.length - 1] }</p>
      </div>
    );
  } else {
    return (
      <div className="RecentSubmission">
      </div>
    )
  }

}

export default RecentSubmission;