import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from '../About';
import Certificates from '../Certificates';
import Education from '../Education';
import Projects from '../Projects';
import References from '../References';
import Work from '../Work';

function Switcher(props) {
    const {
        jsonObj: {
            basics,
            work,

            education,
            references,
            projects,
            certificates
        }
    } = props
    const profileData = basics
    const aboutData = profileData.summary
    const workData = work
    const educationData = education
    const referenceData = references
    const projectData = projects
    const certificatesData = certificates
    return (
        <>

            {/* <Nav className={clsx(classes.appBar, open && classes.appBarShift)} /> */}
            <TransitionGroup>
                <CSSTransition classNames='fade' timeout={300}>

                    <Switch>
                        {/* <Route
                                exact
                                path='/'
                                render={props => (
                                    <Work {...props} workData={workData} />
                                )}
                            /> */}
                        <Route
                            path='/About'
                            render={props => (
                                <About {...props} aboutData={aboutData} />
                            )}
                        />
                        <Route
                            path='/References'
                            render={props => (
                                <References
                                    {...props}
                                    referenceData={referenceData}
                                />
                            )}
                        />
                        <Route
                            path='/Projects'
                            render={props => (
                                <Projects {...props} projectData={projectData} />
                            )}
                        />
                        <Route
                            path='/Education'
                            render={props => (
                                <Education {...props} educationData={educationData} />
                            )}
                        />
                        <Route
                            path='/Certificates'
                            render={props => (
                                <Certificates
                                    {...props}
                                    certificatesData={certificatesData}
                                />
                            )}
                        />
                        <Route path="*">
                            <About {...props} aboutData={aboutData} />

                            <Work {...props} workData={workData} />

                            <References
                                {...props}
                                referenceData={referenceData}
                            />
                            <Projects {...props} projectData={projectData} />

                            <Education {...props} educationData={educationData} />
                            <Certificates
                                {...props}
                                certificatesData={certificatesData}
                            />         
                             </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default Switcher;