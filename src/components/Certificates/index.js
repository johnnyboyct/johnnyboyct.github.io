import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import './Certificates.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const CertificatesItem = (props) => {
    const classes = useStyles();
    const { certificatesItemData } = props;

    return (
        <ListItem >
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <i className="fas fa-certificate fa-2x" />
                    }

                    title={certificatesItemData.title}
                    subheader={certificatesItemData.issuer}
                />
                <CardContent>
                    <Link href={certificatesItemData.url} target={'_BLANK'}>
                        {certificatesItemData.title}
                    </Link>
                </CardContent>
            </Card>

        </ListItem>
    );
};

const Certificates = props => {
    const classes = useStyles();

    const getcertificatesData = () => {
        const { certificatesData } = props;

        const certificatesItems = [];
        certificatesData.forEach((val, index) => {
            certificatesItems.push(<CertificatesItem key={index} certificatesItemData={val} />);
        });
        return certificatesItems;
    };
    return (
        <section className="Certificates">
            <h2 className="text-uppercase">
                <i className="fas fa-certificate"></i> Certificates
            </h2>
            <List className={classes.root}>

                {getcertificatesData()}
            </List>
        </section>
    );
}

export default Certificates;