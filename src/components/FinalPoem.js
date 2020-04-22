import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const prettyFormat = props.allSubmissions.map ((submission,index) =>
    <p key={index}>{submission}</p>
  )

  const showFinalPoem = () => {
    if (props.showPoem) {
      return (
        <div> {prettyFormat} </div>
      );
    } else {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn" 
            onClick={props.onShowPoem}/>
        </div>
      );
    }
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      {showFinalPoem()}
    </div>
  );
  
}

FinalPoem.propTypes = {
  allSubmissions: PropTypes.arrayOf(PropTypes.string.isRequired),
  showPoem: PropTypes.bool.isRequired,
  onShowPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
