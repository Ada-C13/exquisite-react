import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = ({line}) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{line}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  line: PropTypes.string.isRequired,
};

export default RecentSubmission;
