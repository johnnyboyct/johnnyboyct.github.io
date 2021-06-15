import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Profile from '../Profile';
import Skills from '../Skills';

const Left = (props) => {
	const { skillsData, profileData } = props;

	return (
		<Grid item xs md={3} className='leftcol'>
			<Grid container spacing={2} direction='row'>
				<Box
					component={Grid}
					item
					xs={12}
				>
					<Paper>
						<Profile profileData={profileData} />
					</Paper>
					<Paper className='margintop'>
						<Skills skillsData={skillsData} />
					</Paper>
				</Box>
			</Grid>
		</Grid>
	);
}

export default Left;