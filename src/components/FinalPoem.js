import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({ poemList }) => {
  // console.log("FinalPoem List as destructured props:");
  // console.log(poemList);
  // 0 -> obj
  // 1 -> obj
  
  const showWholePoem = poemList => {
    
    return poemList.map((item, index) => {
      return (
          <p key={index}>
            {`The ${item.adj1} ${item.noun1} ${item.adv} ${item.verb} the ${item.adj2} ${item.noun2}.`}
          </p>
        );
    });
  }

  // const onFinalPoemSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted");
  //   console.log(props);
  // }
  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {showWholePoem(poemList)}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          // onSubmit={onFinalPoemSubmit}
        />
      </div>
    </div>
  );
}

export default FinalPoem;
