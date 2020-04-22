import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        {/* REQ: 
         - At the beginning, there is no section showing the most recent poetry submission visible
         - Verify: submitting the form clears the line and updates the form header to Player #2
         - Verify: a new section showing the most recent poetry submission is accurately updated */}
        {props.newLine}
      </p>
    </div>
  );
}

export default RecentSubmission;
