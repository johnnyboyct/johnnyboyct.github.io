import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import Copyright from '../Copyright';

const handleEnd = ({ steps, values }) => {
	<Redirect to={'/' + values[0]} />
}

class Footer extends Component {
	render() {
		return (
			<Grid container spacing={2} direction='row'>
				<Grid item xs={12}>
					<Box mt={5}>
						<ChatBot
							floating={true}
							botDelay={0}
							cache={true}
							userDelay={0}
							customDelay={0}
							handleEnd={handleEnd}
							steps={[
								{
									id: '1',
									message: 'Pick a number',
									trigger: '2'
								},
								{
									id: '2',
									options: [
										{ value: 'About', label: 'About', trigger: '3' },
										{
											value: 'References',
											label: 'References',
											trigger: '3'
										},
										{ value: 'Projects', label: 'Projects', trigger: '3' },
										{
											value: 'Education',
											label: 'Education',
											trigger: '3'
										},
										{
											value: 'Certificates',
											label: 'Certificates',
											trigger: '3'
										}
									]
								},
								{
									id: '3',
									message: 'A callback message was called!',
									end: true
								}
							]}
						/>
						<Copyright />
					</Box>
				</Grid>
			</Grid>
		);
	}
}

export default Footer;