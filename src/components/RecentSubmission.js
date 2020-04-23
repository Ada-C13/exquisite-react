import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {

  const showingLastPoemePiece = () => {
    const lastPoemIdx = props.poems.length - 1
    return (
      <p key={lastPoemIdx}>{props.poems[lastPoemIdx]}</p>
    )
  };

  // It returns false if there is not poems within the array.
  const shouldDisplay = () => {
    if (props.poems.length === 0) {
      return false;
    } else {
      return props.playing;
    }
  }

  return (
    // If the result of sholdDisplay is true -> Display the Most Recent. 
    // React does not render anything if the return of our func is false. 
    shouldDisplay() && (
      <div className="RecentSubmission">
        {/* See only the most recent submission of poetry in the section */}
        <h3>The Most Recent Submission</h3>
        {showingLastPoemePiece()}
        <p className="RecentSubmission__submission">{}</p>
      </div>
    )
  );
}

RecentSubmission.propTypes = {
  poems: PropTypes.array.isRequired,
  playing: PropTypes.bool.isRequired,
};


export default RecentSubmission;
