import { string } from 'prop-types';
import React from 'react';

const About = props => {
  const { aboutData } = props
  return (
    <section className="about">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
      <p>{aboutData}</p>
    </section>
  );
};

About.propTypes = {
  aboutData: string.isRequired
}

export default About;
