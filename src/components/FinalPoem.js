import React, { useState } from "react";
import "./FinalPoem.css";

const FinalPoem = ({ poem, onSubmitCallBack }) => {
  // hooks/state organized here
  const [showPoem, setShowPoem] = useState("");
  const [showFinalPoemButton, setShowFinalPoemButton] = useState(true);
  let finalPoemSentence = [];

  poem.forEach((poemLine) => {
    finalPoemSentence.push(Object.values(poemLine).join(" ").concat("."));
  });

  const onFinalPoemButtonClick = (event) => {
    // prevent default behavior
    event.preventDefault();

    let finalPoem = finalPoemSentence.join("\n");
    setShowPoem(finalPoem);
    onSubmitCallBack(false);
    setShowFinalPoemButton(false);
  };

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem FinalPoem__display-linebreak ">
        <h3>Final Poem</h3>

        {showPoem}
      </section>

      {showFinalPoemButton && (
        <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            onClick={onFinalPoemButtonClick}
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
          />
        </div>
      )}
    </div>
  );
};

export default FinalPoem;
