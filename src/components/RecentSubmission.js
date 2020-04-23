import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = ({mostRecentSubmitted}) => {
  

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{mostRecentSubmitted}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  mostRecentSubmitted: PropTypes.string.isRequired,
}

export default RecentSubmission;
