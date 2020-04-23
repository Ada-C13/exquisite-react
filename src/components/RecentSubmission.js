import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const displayRecentSubmission = () =>  {
    if (props.recentlySubmitted !== undefined) {
      return (<p>{props.formatLineCallback(props.recentlySubmitted)}</p>);
    }
  }

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      {displayRecentSubmission()}
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  recentlySubmitted: PropTypes.func.isRequired,
  formatLineCallback: PropTypes.func.isRequired,
};

export default RecentSubmission;
