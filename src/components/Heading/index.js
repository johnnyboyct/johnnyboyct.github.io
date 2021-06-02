import React from 'react';
import Typist from 'react-typist';
import './Heading.css'
import Box from '@material-ui/core/Box';

const Heading = props => {
  const { profileData } = props;
  return (
<Box display={{ xl: 'none',lg: 'none',md: 'none', sm: 'block' }}>

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
    </Box>
  )
}

export default Heading;