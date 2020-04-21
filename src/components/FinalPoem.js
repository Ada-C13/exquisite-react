import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      { props.showPoem ? 
        <div>
        {props.allSubmissions}
        </div>
        :
        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn" 
            onClick={props.onShowPoem}/>
        </div>
      }
    </div>
  );
}

export default FinalPoem;
