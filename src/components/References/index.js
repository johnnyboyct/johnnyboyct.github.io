import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import { deepOrange, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import clsx from 'clsx';
import { arrayOf, object } from "prop-types";
import React from "react";
import "./References.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    listRoot: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
        float: 'left',
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },

    speechBubble: {
        position: "relative",
        background: "#777",
        borderRadius: ".4em",
        color: '#FFF',
        padding: '12px',
        float: 'left',
        width: '80%',
        marginLeft: '4rem',
        '&:after': {
            content: "''",
            position: "absolute",
            left: "0",
            top: "32px",
            width: "0",
            height: "0",
            border: "1.594em solid transparent",
            borderRightColor: "#777",
            borderLeft: "0",
            borderTop: "0",
            marginTop: "-0.797em",
            marginLeft: "-1.594em"
        }
    },

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        fontSize: '1rem',

        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "#46cc46",
    },
    avatar1: {
        color: "#46cc46",
        backgroundColor: '#000'
    },
    cardRoot: {
        padding: 0,
        fontSize: '2rem'
    },
    cardHeader: {
        padding: 0,
        fontSize: '2rem'
    }
}));
const getInitials = (nameString) => {
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
}

const References = (props) => {
    const classes = useStyles();

    const { referenceData } = props;
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getReferences = referenceData.map(function (item, index) {
        return (
            <div key={index}>
                <Card className={classes.cardRoot} elevation={0}>
                    <CardHeader
                        className={classes.cardHeader}
                        avatar={
                            <Avatar aria-label="person" className={(index % 2) ? classes.avatar : classes.avatar1}>
                                {getInitials(item.name)}
                            </Avatar>
                        }

                        title={item.name}
                        subheader={'Reference: '}
                        
                    />
                    <CardContent>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>

                            <Typography
                                component="span"
                                display="block"
                                variant="body1" className={classes.speechBubble}>
                                {item.reference}
                            </Typography>
                        </Collapse>

                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>

                </Card>

            </div>
        );
    });

    return (
        <section className="References">
            <h2 className="text-uppercase">
                <i className="fa fa-lg fa-code"></i> References
      </h2>
            <List className={classes.listRoot + ' reference-list'}>{getReferences}</List>
        </section>
    );
};

References.propTypes = {
    referenceData: arrayOf(object).isRequired,
};

export default References;
