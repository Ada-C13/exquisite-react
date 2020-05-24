import React, { useState } from "react";
import "./FinalPoem.css";

const FinalPoem = ({ poem, onSubmitCallBack }) => {
  // hooks/state organized here // used another help in this section
  const [revealPoem, setRevealPoem] = useState("");
  const [showFinalPoemButton, setShowFinalPoemButton] = useState(true);
  let finalPoemSentence = [];

  poem.forEach((poemLine) => {
    finalPoemSentence.push(Object.values(poemLine).join(" ").concat("."));
  });

  const onFinalPoemButtonClick = (event) => {
    // prevent default behavior
    event.preventDefault();

    // creates final poem
    let finalPoem = finalPoemSentence.join("\n");
    setRevealPoem(finalPoem);
    onSubmitCallBack(false);
    setShowFinalPoemButton(false);
  };

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem FinalPoem__display-linebreak ">
        <h3>Final Poem</h3>

        {revealPoem}
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
