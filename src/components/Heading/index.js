import React from 'react';
import Typist from 'react-typist';
import './Heading.css';
const Heading = props => {
  const { profileData } = props;
  return (

    <Typist avgTypingDelay={120}
      cursor={{
        show: true,
        blink: true
      }}
    >
      <span className="intro-title">
        {"hi, "}
        <Typist.Backspace count={4} delay={400} />
        {"Hi, Im "}
        <span className="intro-name">{"John Marczak"}</span>
        {"."}
        <div className="summary">{profileData.summary}</div>

      </span>
    </Typist>
  )
}

export default Heading;