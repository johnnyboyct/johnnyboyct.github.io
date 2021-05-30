import Chip from "@material-ui/core/Chip";
import React from "react";
import { arrayOf, object } from "prop-types";

const Skills = (props) => {
  const { skillsData } = props;

  const getSkills = skillsData.map(function (item, index) {
    return (
      <li key={index}>
        <Chip color="secondary" size="small" label={item.name} />
      </li>
    );
  });

  return (
    <section className="skills">
      <h2 className="text-uppercase">
        <i className="fa fa-lg fa-code"></i> Skills
      </h2>
      <ul className="skills-list">{getSkills}</ul>
    </section>
  );
};

Skills.propTypes = {
  skillsData: arrayOf(object).isRequired,
};

export default Skills;
