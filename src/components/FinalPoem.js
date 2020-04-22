import React from "react";
import PropTypes from "prop-types";
import "./FinalPoem.css";

const FinalPoem = ({ isGameOver, onFinalClick, finalList }) => {
  return (
    <div className="FinalPoem">
      {isGameOver ? (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <h4>{finalList}</h4>
        </section>
      ) : (
        <div className="FinalPoem__reveal-btn-container">
          <input
            onClick={onFinalClick}
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
          />
        </div>
      )}
    </div>
  );
};

FinalPoem.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  onFinalClick: PropTypes.func.isRequired,
  finalList: PropTypes.array.isRequired,
};

export default FinalPoem;
