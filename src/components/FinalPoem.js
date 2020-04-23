import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onPoemReveal = (event) => {
    props.onPoemFinishCallback(false);
  }

  return (
    <div className="FinalPoem">

      { props.gameStatus ? "" :       
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>
          {props.allSubmissions.map(line => <p>{line}</p>)}
        </div>
      </section> }

      { props.gameStatus ? 
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" onClick={onPoemReveal} className="FinalPoem__reveal-btn" />
      </div> : "" }
    </div>
  );
}

export default FinalPoem;