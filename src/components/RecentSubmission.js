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


  const shouldDisplay =() => {
    if (props.poems.length === 0) {
      return false;
    } else {
      return props.playing;
    }
  }

  return (
    shouldDisplay() && (
    <div className="RecentSubmission">
      {/* See only the most recent submission of poetry in the section */}
      <h3>The Most Recent Submission</h3>
      { showingLastPoemePiece() }
      <p className="RecentSubmission__submission">{ }</p>
    </div>
    )
  );
}

export default RecentSubmission;
