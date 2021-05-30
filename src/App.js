import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ParticlesBg from "particles-bg";
import { object } from "prop-types";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import ReactGA from 'react-ga';
import "./App.css";
import Heading from './components/Heading';
import Profile from "./components/Profile";
import References from "./components/References";
import Skills from './components/Skills';
import Work from './components/Work';
import GlobalStyles from "./GlobalStyles";
import About from "./sections/About";
import Education from "./sections/Education";
import theme from "./theme";

ReactGA.initialize('UA-87915010-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function Copyright() {
  return (
    <Typography variant="body2" className="copywrite" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://johnm.org/">
        Johnm.org      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = (props) => {
  const {
    jsonObj: { basics, work, skills, education, references },
  } = props;
  const profileData = basics;
  const aboutData = profileData.summary;
  const workData = work;
  const skillsData = skills;
  const educationData = education;
  const referenceData = references;
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(
      document.body.clientHeight)
  }, [])
  
  return (
    <MuiThemeProvider theme={theme}>

      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<Fragment />}>

        <div className="wrapper">

          <div style={{ width: "100%", height: height, position: "absolute", zIndex: "-1", top: "0px", left: "0px" }}>

            <ParticlesBg id="ParticlesBg" type="cobweb" num={1000} bg={true} color="#46cc46" />
          </div>
          <header>
            <Heading profileData={profileData}></Heading>
           
          </header>
          <div className="container">

            <Paper elevation={1}  >

              <aside>
                <div className=" ">
                  <Profile profileData={profileData}  />

                </div>
              </aside>
            </Paper>

            <main>
              <div className="inne2r">
                <Paper elevation={2} >

                  <About aboutData={aboutData} />
                </Paper>
                <Paper elevation={3}>

                  <Work workData={workData} />
                </Paper>
                <Paper elevation={3}>

                  <Skills skillsData={skillsData} />
                </Paper>
                <Paper elevation={3}>

                  <References referenceData={referenceData} />
                </Paper>
                <Paper elevation={3}>

                  <Education educationData={educationData} />
                </Paper>
              </div>
            </main>

          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>

      </Suspense>
    </MuiThemeProvider >
  );
};

App.propTypes = {
  jsonObj: object.isRequired,
};

export default App;
