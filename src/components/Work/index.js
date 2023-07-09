import Typography from "@material-ui/core/Typography";
import TimelineIcon from '@mui/icons-material/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import LaptopChromebookTwoToneIcon from '@mui/icons-material/LaptopChromebookTwoTone';
import React from "react";
import Moment from "react-moment";

import "./Work.css";

const WorkItem = (props) => {
  const { workItemData } = props;

  const getWorkDates = () => {
    const startdate = new Date(workItemData.startDate);
    let enddate = null;
    let ds = null;
    if (
      typeof workItemData.endDate !== "undefined" &&
      workItemData.endDate !== ""
    ) {
      enddate = new Date(workItemData.endDate);
      enddate = enddate.toLocaleDateString();
    } else {
      enddate = "Present";
    }

    if (enddate === "Present") {
      ds = (
        <span className="ds">

          <span className="starttoend">
            <Moment format="MMM YYYY" className="s">{startdate}</Moment> -
            Present

        </span>
          <span className="dateinfo">

            <Moment
              format="M [months] d [days]"
              date={startdate}
              durationFromNow
            />
          </span>

        </span>
      )
    } else {
      ds = (
        <span className="ds">

          <span className="starttoend">
            <Moment format="MMM YYYY" className="s">{startdate}</Moment> -
        <Moment format="MMM YYYY" className="e">{enddate}</Moment>
          </span>
          <span className="dateinfo">
            (Total: <Moment from={enddate} ago className="spent">{startdate}</Moment>,
            Left: <Moment fromNow className="ago">
              {enddate}
            </Moment>
          )
        </span>
        </span>
      );
    }

    return (
      <span className="startdate">

        {ds}
      </span>
    );
  };

  return (
    <TimelineItem className="rt">
      <TimelineOppositeContent>
        <Typography variant="body2" className="dates">
          {getWorkDates()}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined">
          <LaptopChromebookTwoToneIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="mt">
        {/* <Paper elevation={3} className={classes.paper + ' '}> */}

        <Typography variant="h6" component="div" className="banner">
          <div className="banner-h2">{workItemData.name}</div>
        </Typography>

        <Typography variant="h5" component="span" className="">
          <h6 className="brackets">{workItemData.position}</h6>
        </Typography>
        <Typography className="summary">{workItemData.summary}</Typography>
        {/* </Paper> */}
      </TimelineContent>
    </TimelineItem>
  );
};

const Work = (props) => {
  const { workData } = props;

  const getWorkExperience = () => {
    const workItems = [];
    workData.forEach((val, index) => {
      workItems.push(<WorkItem key={index} workItemData={val} />);
    });
    return workItems;
  };
  return (
    <section className="work">
      <TimelineIcon align="alternate">
        <h2 className="text-uppercase">
          <i className="fa fa-lg fa-building"></i> Work experience (
          <Moment
            date={workData[workData.length - 1].startDate}
            durationFromNow
          />
          )
        </h2>
        {getWorkExperience()}
      </TimelineIcon>
    </section>
  );
};

export default Work;
