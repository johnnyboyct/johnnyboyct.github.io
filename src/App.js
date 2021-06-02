import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { object } from "prop-types";
import React, { Fragment, Suspense } from "react";
import ReactGA from 'react-ga';
import Heading from './components/Heading';
import Profile from "./components/Profile";
import References from "./components/References";
import Skills from './components/Skills';
import Work from './components/Work';
import About from "./sections/About";
import Education from "./sections/Education";
import theme from "./theme";
import "./App.css";
import GlobalStyles from "./GlobalStyles";

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
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<Fragment />}>
        <Container maxWidth="xl">
          <Grid container spacing={2} direction="row" >
            <Grid item xs={12}  >
              <Heading profileData={profileData}></Heading>
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row">
            <Grid item xs md={4}>
              <Paper elevation={1}  >
                <Profile profileData={profileData} />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper elevation={2} >
                <About aboutData={aboutData} />
              </Paper>
              <Paper elevation={3}>
                <Work workData={workData} />
              </Paper>
              <Paper elevation={3}>
                <Skills skillsData={skillsData} />
              </Paper>
              <Paper elevation={0}>
                <References referenceData={referenceData} />
              </Paper>
              <Paper elevation={3}>
                <Education educationData={educationData} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={12} >
              <Box mt={5}>
                <Copyright />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Suspense>
    </MuiThemeProvider >
  );
};
App.propTypes = {
  jsonObj: object.isRequired,
};
export default App;
