import React from 'react';
import { object } from 'prop-types';

const WorkItem = props => {
  const { workItemData } = props
  const getWorkDates = () => {
    const startdate = workItemData.startDate;
    let enddate = null;
    if (workItemData.endDate !== '') {
      enddate = workItemData.endDate;
    } else {
      enddate = 'Present';
    }

    return <span className='startdate'>{startdate} - {enddate}</span>
  }

  const getHighlights = workItemData.highlights.map(function (item, index) {
    return (<li key={index}>{item}</li>)
  });

  const formatSummary = (s) => {
    return s.replace(/\n/g, '<br />');
  }
  const htmlDecode = (input) => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  return (
    <div className="workItem">
      <h3>{workItemData.position}, <span>{workItemData.company}</span></h3>
      <p className="workDates">{getWorkDates()}</p>
      <p>{workItemData.summary.split("\n").map(function(item, idx) {
        return (
            <span key={idx}>
                {item}
                <br/>
            </span>
         )
    })}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlDecode(formatSummary(workItemData.summary)) }} />

      <ul>{getHighlights}</ul>
    </div>
  )
};

WorkItem.propTypes = {
  workItemData: object.isRequired
}

export default WorkItem;
