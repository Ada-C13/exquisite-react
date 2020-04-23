import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = ({ lastPoem }) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        {`The ${lastPoem.adj1} ${lastPoem.noun1} ${lastPoem.adv} ${lastPoem.verb} the ${lastPoem.adj2} ${lastPoem.noun2}.`} 
      </p>
    </div>
  );
}

RecentSubmission.propTypes = {
  lastPoem: PropTypes.object.isRequired,
};

export default RecentSubmission;