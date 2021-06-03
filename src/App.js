import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { object } from "prop-types";
import React, { Fragment, Suspense } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Certificates from "./components/Certificates";
// import Education from "./sections/Education";
import Education from "./components/Education";
import Heading from "./components/Heading";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import References from "./components/References";
import Skills from "./components/Skills";
import Work from "./components/Work";
import GlobalStyles from "./GlobalStyles";
import About from "./sections/About";
import theme from "./theme";
import GitHubForkRibbon from 'react-github-fork-ribbon';
import Fade from 'react-reveal/Fade';

ReactGA.initialize("UA-87915010-1");
ReactGA.pageview(window.location.pathname + window.location.search);
function Copyright() {
  return (
    <Typography variant="body2" className="copywrite" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://johnm.org/">
        Johnm.org{" "}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const App = (props) => {
  const {
    jsonObj: {
      basics,
      work,
      skills,
      education,
      references,
      projects,
      certificates,
    },
  } = props;
  const profileData = basics;
  const aboutData = profileData.summary;
  const workData = work;
  const skillsData = skills;
  const educationData = education;
  const referenceData = references;
  const projectData = projects;
  const certificatesData = certificates;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<Fragment />}>
      <Fade duration={1000} delay={300} distance="30px">

        <GitHubForkRibbon href="https://github.com/johnnyboyct/johnnyboyct.github.io"
          target="_blank"
          color="green"
          position="right">
          Fork me on GitHub
  </GitHubForkRibbon>
        <Container maxWidth="xl" >
          <Grid container spacing={2} direction="row" >

            <Box className="hg"
              component={Grid}
              item
              xs={12}
              direction="row"

              display={{ xs: "none", lg: "block" }}
            >
              <Heading profileData={profileData}></Heading>
            </Box>
          </Grid>
          <Grid container spacing={2} direction="row">
            <Grid item xs md={4} className="leftcol">
              <Grid container spacing={2} direction="row">
                <Paper elevation={1} rounded>
                  <Profile profileData={profileData} />
                </Paper>

                <Paper elevation={1} className="margintop">
                  <Skills skillsData={skillsData} />
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs>
              <Paper elevation={2}>
                <About aboutData={aboutData} />
              </Paper>
              <Paper elevation={3}>
                <Work workData={workData} />
              </Paper>

              <Paper elevation={0}>
                <References referenceData={referenceData} />
              </Paper>
              <Paper elevation={0}>
                <Projects projectData={projectData} />
              </Paper>

              <Paper elevation={3}>
                <Education educationData={educationData} />
              </Paper>
              <Paper elevation={3}>
                <Certificates certificatesData={certificatesData} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row">
            <Grid item xs={12}>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Grid>
          </Grid>
        </Container>
        </Fade>
      </Suspense>
    </MuiThemeProvider>
  );
};
App.propTypes = {
  jsonObj: object.isRequired,
};
export default App;
