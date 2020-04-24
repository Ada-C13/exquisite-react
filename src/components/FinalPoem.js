import React, {useState} from 'react';
import './FinalPoem.css';

const FinalPoem = props => {
  const [seePoem, setSeePoem] = useState(false)

  const finalPoem = props.sentences.map((sentence, i) => {
    return <p key={i}>
      The {sentence[0]} {sentence[1]} {sentence[2]} {sentence[3]} the {sentence[4]} {sentence[5]}. 
    </p>
  });

  const toSee = () => {
    setSeePoem(true);
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {seePoem == true ? finalPoem : '' }
      </section>

      <div className="FinalPoem__reveal-btn-container" >
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={toSee}/>
      </div>
    </div>
  );

}

export default FinalPoem;
