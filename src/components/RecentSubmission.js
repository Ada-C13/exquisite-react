import React from 'react';
import './RecentSubmission.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        {props.newLine}
      </p>
    </div>
  );
}

export default RecentSubmission;

//TO DO: this needs to be sent connected with Game
//TO DO: Game needs to be connected to App
//TO DO: Use state to reveal final answer? Or use length of array in conditional style (IE array.length === 6 ? hide : reveal)
//TO DO: change compiledSubmissions to take in PlayerSubmissionForms one at a time, not mapping from elsewhere (I think?)