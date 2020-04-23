import React from "react";
import PropTypes from "prop-types";
import "./RecentSubmission.css";

const RecentSubmission = (props) => {
  const showRecentSubmission = () => {
    if (props.revealBox) {
      return (
        <div className="RecentSubmission">
          <h3>{props.recentSubmission ? "The Most Recent Submission" : ""}</h3>
          <p className="RecentSubmission__submission">
            {props.recentSubmission}
          </p>
        </div>
      );
    }
  };
  return <div>{showRecentSubmission()}</div>;
};
RecentSubmission.propTypes = {
  recentSubmission: PropTypes.string,
  revealBox: PropTypes.bool.isRequired,
};

export default RecentSubmission;
