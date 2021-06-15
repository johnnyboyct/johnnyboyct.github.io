import React from 'react';
import {
  ScrollingProvider,
  useScrollSections,
  Section,
} from 'react-scroll-section';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    rootNav: {
        position: 'fixed',
        zIndex: 1,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'table',
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 0
    },
    rootNavLi: {
        display: 'inline-block',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.25s',
        margin: 0,
        padding:'25px 10px',
        fontWeight: 'bold',
        fontSize: '20px',
        userSelect: 'none'
    },
}));

export const DynamicMenu = () => {
  const sections = useScrollSections();
  const classes = useStyles();

  return (
    <ul className={classes.rootNav}>
      {sections.map(({ id, onClick, selected }) => (
        <li key={id} onClick={onClick} selected={selected} className={classes.rootNavLi}>
          {id.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};
export default DynamicMenu;