import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className={props.className}>
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{props.line}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  line: PropTypes.string,
  className: PropTypes.string,
};
export default RecentSubmission;
