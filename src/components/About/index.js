import { string } from 'prop-types';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const About = props => {
  const { aboutData } = props
  return (
    <Card>
      <CardHeader className="text-uppercase"
        avatar={
          <i className="fa fa-lg fa-user"></i>
        }

        title="About"
      />
      <CardContent>

        <section className="about">
          <p>{aboutData}</p>
        </section>
      </CardContent>
    </Card>
  );
};

About.propTypes = {
  aboutData: string.isRequired
}

export default About;
