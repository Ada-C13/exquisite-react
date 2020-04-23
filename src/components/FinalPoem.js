import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({isDone, poem, onClickCallback}) => {

  return (
    <div className="FinalPoem">
        {
          isDone && (
            <section className="FinalPoem__poem">
              <h3>Final Poem</h3>
              {poem.map(line => <p>{line}</p>)}
            </section>
          )
        }
      <div className="FinalPoem__reveal-btn-container">
        {
          isDone || 
          <input 
          type="button"
          onClick={onClickCallback}
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn" />
        }
        
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isDone: PropTypes.bool.isRequired,
  poem: PropTypes.array.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};

export default FinalPoem;
