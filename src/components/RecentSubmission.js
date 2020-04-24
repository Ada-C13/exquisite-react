import React from "react";
import "./RecentSubmission.css";

const RecentSubmission = ({ poem }) => {
  let submission = [];
  const recentSubmission = poem.slice(-1)[0];

  //recentSubmission will be undefined
  if (recentSubmission === null) {
    submission.push(" ");
  } else {
    // push to submission object values of the poem and spliting
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
