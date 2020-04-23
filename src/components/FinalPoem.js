import React, {useState} from 'react';
import './FinalPoem.css';


const FinalPoem = (props) => {

  const emptyList = <p></p>
  const listOfSentences = props.submissions.map(submission => {
    return (
      <p>The {submission.adj1} {submission.noun1} {submission.adv} {submission.verb} the {submission.ajd2} {submission.noun2}.</p>
    );
  })

  const [reveal, setReveal] = useState(false)

  const revealSentences = () => { 
    props.setGameOverCallback(true);
    setReveal(true);
  }




  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {reveal ? listOfSentences : emptyList}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        {reveal ? "" : <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={revealSentences}/>}
      </div>
    </div>
  );
}

export default FinalPoem;
