import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>{props.lastSubmission && "The Most Recent Submission"}</h3>
      <p className="RecentSubmission__submission">{props.lastSubmission}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  lastSubmission: PropTypes.string,
};

export default RecentSubmission;
