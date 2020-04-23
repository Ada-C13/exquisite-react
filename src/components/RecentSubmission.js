import React from "react";
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

export default RecentSubmission;
