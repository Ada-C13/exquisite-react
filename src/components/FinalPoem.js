import React from "react";
import "./FinalPoem.css";

const FinalPoem = ({ isGameOver, onFinalClick }) => {
  //when the user clicks on button I need to return the final poem

  return (
    <div className="FinalPoem">
      {isGameOver ? (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
      ) : (
        <div className="FinalPoem__reveal-btn-container">
          <input
            onClick={onFinalClick} //
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
          />
        </div>
      )}
    </div>
  );
};

export default FinalPoem;
