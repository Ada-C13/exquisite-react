import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({ submissions, onButtonClickCallback, revealPoem }) => {
  const finalPoem = submissions.map(submission => <p key={submission.key}>The {submission.adj1} {submission.noun1} {submission.adv} {submission.verb} the {submission.adj2} {submission.noun2}.</p>);

  return (
    <div className="FinalPoem">
      <section className={ revealPoem ? "FinalPoem__poem" : "FinalPoem__hide" }>
        <h3>Final Poem</h3>
        {finalPoem}
      </section>

      <div className={ revealPoem ? "FinalPoem__hide" : "FinalPoem__reveal-btn-container" }>
        <input 
          type="button" 
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={onButtonClickCallback}
          />
      </div>
    </div>
  );
};

FinalPoem.propTypes = {
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      adj1: PropTypes.string.isRequired,
      noun1: PropTypes.string.isRequired,
      adv: PropTypes.string.isRequired,
      verb: PropTypes.string.isRequired,
      adj2: PropTypes.string.isRequired,
      noun2: PropTypes.string.isRequired,
    })
  ),
  onButtonClickCallback: PropTypes.func.isRequired,
  revealPoem: PropTypes.bool.isRequired,
};

export default FinalPoem;
