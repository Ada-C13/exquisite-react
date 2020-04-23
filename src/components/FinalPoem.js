import React, {useState} from 'react';
import './FinalPoem.css';


const FinalPoem = (props) => {

  const listOfSentences = props.submissions.map(submission => {
    return (
      <p>The {submission.adj1} {submission.noun1} {submission.adv} {submission.verb} the {submission.ajd2} {submission.noun2}.</p>
    );
  })



  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {listOfSentences}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
