import React from 'react';
import './RecentSubmission.css';
import PropTypes from "prop-types";

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>'The Most Recent Submission'</h3>
      <p className="RecentSubmission__submission">{`The ${props.recentPoem.firstAdjective} ${props.recentPoem.firstNoun} ${props.recentPoem.adverb} ${props.recentPoem.verb} the ${props.recentPoem.secondAdjective} ${props.recentPoem.secondNoun}.`}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  recentPoem: PropTypes.shape({
    firstAdjective: PropTypes.string.isRequired,
    firstNoun: PropTypes.string.isRequired,
    adverb: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    secondAdjective: PropTypes.string.isRequired,
    secondNoun: PropTypes.string.isRequired,
  })
};
export default RecentSubmission;
