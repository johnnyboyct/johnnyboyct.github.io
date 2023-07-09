import React from 'react';
import { object } from 'prop-types';
import Moment from "react-moment";

const WorkItem = props => {
  const { workItemData } = props
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
              format="Y [years] M [months] d [days]"
              date={startdate}
              durationFromNow
            />
          </span>

        </span>
      )
    } else {
      ds = (
        <div className="ds">

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
        </div>
      );
    }

    return (
      <span className="startdate">

        {ds}
      </span>
    );
  };

  const getHighlights = workItemData.highlights.map(function (item, index) {
    return (<li key={index}>{item}</li>)
  });


  return (
    <div className="workItem">
      <h3 className='workTitle'><span className='workPosition'>{workItemData.position}</span>, <span className='workPlace'>{workItemData.name}</span></h3>
      <div className="workDates">{getWorkDates()}</div>
      <div className='workSummary'>{workItemData.summary.split("\n").map(function (item, idx) {
        return (
          <span key={idx}>
            {item}
            <br />
          </span>
        )
      })}</div>

      <ul>{getHighlights}</ul>
    </div>
  )
};

WorkItem.propTypes = {
  workItemData: object.isRequired
}

export default WorkItem;
