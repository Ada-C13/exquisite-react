import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const showingLastPoemePiece =() => {
    // 
    const lastPoemIdx = props.poems.length - 1
    return (
      <p key={lastPoemIdx}>{props.poems[lastPoemIdx]}</p>
    )
  };

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      { showingLastPoemePiece() }
      <p className="RecentSubmission__submission">{ }</p>
    </div>
  );
}

export default RecentSubmission;
