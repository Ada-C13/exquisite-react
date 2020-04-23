import React from 'react';
import './RecentSubmission.css';
import PropTypes from "prop-types"

const RecentSubmission = (props) => {

  const {firstAdjective, firstNoun, adverb, verb, secondAdjective, secondNoun} = props.poem;
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{`The ${firstAdjective} ${firstNoun} ${adverb} ${verb} the ${secondAdjective} ${secondNoun}`}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  poem: PropTypes.shape({
    firstAdjective: PropTypes.string.isRequired,
    firstNoun: PropTypes.string.isRequired,
    adverb: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    secondAdjective: PropTypes.string.isRequired,
    secondNoun: PropTypes.string.isRequired,
  })
};

export default RecentSubmission;