import ParticlesBg from 'particles-bg';
import { object } from 'prop-types';
import React from 'react';
import Darkreader from 'react-darkreader';
import ParticleImage, {
  forces,
  ParticleForce, ParticleOptions,
  Vector
} from "react-particle-image";
import './App.css';
import i from './images/name.jpg';
import About from './sections/About';
import Education from './sections/Education';
import Profile from './sections/Profile';
import Skills from './sections/Skills';
import Work from './sections/Work';
// Round number up to nearest step for better canvas performance
const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * .5;
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 7);
};

const App = props => {
  const { jsonObj: { basics, work, skills, education } } = props
  const profileData = basics;
  const aboutData = profileData.summary;
  const workData = work;
  const skillsData = skills;
  const educationData = education;
  // console.log(profileData)
  return (
    <div className="wrapper">
      <ParticleImage
        id="pName"
        src={i}
        width={Number(800)}
        height={Number(90)}
        scale={0.75}
        entropy={30}
        maxParticles={4000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="none"
      />
      <div className="container">


        <aside>
          <div className="inner">
            <Profile profileData={profileData} />
            <Darkreader theme={{
              brightness: 100,
              contrast: 90,
              sepia: 10,
            }} />
          </div>
        </aside>
        <main>

          <div className="inner">
            <About aboutData={aboutData} />
            <Work workData={workData} />
            <Skills skillsData={skillsData} />
            <Education educationData={educationData} />
          </div>
        </main>
      </div>
      <ParticlesBg  id="ParticlesBg" type="cobweb" bg={true} color="#46cc46" />

    </div>
  )
};

App.propTypes = {
  jsonObj: object.isRequired
}

export default App;
