import React from 'react';
import PropTypes from 'prop-types';
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
