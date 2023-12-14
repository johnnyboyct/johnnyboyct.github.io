import React from 'react';
import { object } from 'prop-types';
import Profile from './sections/Profile';
import About from './sections/About';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Education from './sections/Education';
import { motion } from 'framer-motion';

import './App.css'

const App = props => {
  const { jsonObj: { basics, work, skills, education } } = props
  const profileData = basics;
  const aboutData = profileData.summary;
  const workData = work;
  const skillsData = skills;
  const educationData = education;
  return (
    <div className="container">
      <aside>
        <div className="inner">
          <Profile profileData={profileData} />
        </div>
      </aside>
      <main>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold text-white"
        >
          Your Name
        </motion.h1>
        <div className="inner">
          <About aboutData={aboutData} />
          <Work workData={workData} />
          <Skills skillsData={skillsData} />
          <Education educationData={educationData} />
        </div>
      </main>
    </div>
    )
};

App.propTypes = {
    jsonObj: object.isRequired
}

export default App;
