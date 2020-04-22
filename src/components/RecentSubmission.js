import React from "react";
import PropTypes from "prop-types";
import "./RecentSubmission.css";

const RecentSubmission = ({ mostRecentSubmission, isGameOver }) => {
  //if the game over is true do not show this

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{mostRecentSubmission}</p>
    </div>
  );
};
RecentSubmission.propTypes = {
  mostRecentSubmission: PropTypes.array,
  isGameOver: PropTypes.bool.isRequired,
};
export default RecentSubmission;
