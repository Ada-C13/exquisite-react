import React from 'react';
import './FinalPoem.css';

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

export default FinalPoem;
