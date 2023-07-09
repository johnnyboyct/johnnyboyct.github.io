import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@mui/icons-material/Code';
import React from 'react';
import YoutubeEmbed from '../YoutubeEmbed';
import './Projects.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

function ReactRender(components) {
    return (
        <>
            {components}
        </>
    )
}

const ProjectItem = (props) => {
    const classes = useStyles();
    const { projectItemData } = props;
    const getProjectItemDates = () => {
        const startdate = new Date(projectItemData.startDate);

        return (
            <span className="startdate">
                {startdate.toLocaleDateString()}
            </span>
        );
    };
    const getYoutubeEmbed = (s, name) => {
        let match = s.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#%?=~_|!:,.;]*[-A-Z0-9+&@#%=~_|])/ig);
        let final = { tag: null, full: null }
        final.full = s;

        if (s.includes('youtu')) {
            match.map(url => {
                let id = url.split("/").pop();
                final.tag = <YoutubeEmbed embedId={id} text={s.replace(url, "")} />
                return final;
            });
        } else {
            match.map(url => {
                // s.replace(url, "<a href=\"" + url + "\" target=\"_BLANK\">" + url + "</a>")
                final.tag = <Link href={url} target={'_BLANK'}>
                    {s.replace(url, "")}
                </Link>
                return final;
            });
        }

        return final;
    }

    const summ = getYoutubeEmbed(projectItemData.summary, projectItemData.name);

    return (
        <ListItem >
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <CodeIcon />
                    }

                    title={projectItemData.name}
                    subheader={getProjectItemDates()}
                />
                <CardContent>
                    <Link href={projectItemData.url} target={'_BLANK'}>
                        {projectItemData.name}
                    </Link>
                    {ReactRender(summ.tag)}
                </CardContent>
            </Card>

        </ListItem>
    );
};

const Projects = props => {
    const classes = useStyles();

    const getProjectData = () => {
        const { projectData } = props;

        const projectItems = [];
        projectData.forEach((val, index) => {
            projectItems.push(<ProjectItem key={index} projectItemData={val} />);
        });
        return projectItems;
    };
    return (
        <section className="Projects">
            <h2 className="text-uppercase">
                <i className="fas fa-project-diagram"></i> Projects
        </h2>
            <List className={classes.root}>

                {getProjectData()}
            </List>
        </section>
    );
}

export default Projects;