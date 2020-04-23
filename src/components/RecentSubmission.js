import React from "react";
import "./RecentSubmission.css";

const RecentSubmission = ({ poem }) => {
  let submission = [];
  const recentSubmission = poem.slice(-1)[0];

  if (recentSubmission === undefined) {
    submission.push(" ");
  } else {
    submission.push(Object.values(recentSubmission).join(" ").concat("."));
  }

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{submission}</p>
    </div>
  );
};

export default RecentSubmission;
