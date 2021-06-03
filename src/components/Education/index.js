import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './Education.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const EducationItem = (props) => {
    const classes = useStyles();
    const { educationItemData } = props;
    const getEducationItemDates = () => {
        const startdate = new Date(educationItemData.startDate);
        let enddate = null;
        if (educationItemData.endDate !== "") {
            enddate = new Date(educationItemData.endDate);
            enddate = enddate.toLocaleDateString();
        } 

        return (
            <span className="startdate">
                {startdate.toLocaleDateString()}-{enddate}
            </span>
        );
    };

    return (
        <ListItem >
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <i className="fas fa-school fa-2x"></i>
                    }

                    title={educationItemData.institution}
                    subheader={getEducationItemDates()}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {educationItemData.studyType} :{educationItemData.area}
                    </Typography>

                </CardContent>
            </Card>

        </ListItem>
    );
};

const Education = props => {
    const classes = useStyles();

    const getEducationData = () => {
        const { educationData } = props;

        const educationItems = [];
        educationData.forEach((val, index) => {
            educationItems.push(<EducationItem key={index} educationItemData={val} />);
        });
        return educationItems;
    };
    return (
        <section className="Education">
            <h2 className="text-uppercase">
                <i className="fas fa-school"></i> Education
        </h2>
            <List className={classes.root}>
                {getEducationData()}

            </List>
        </section>
    );
}

export default Education;