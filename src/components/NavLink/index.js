import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = {}

styles.fill = {
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
}

styles.content = {
	...styles.fill,
	top: '40px',
	textAlign: 'center'
}

styles.nav = {
	padding: 0,
	margin: 0,
	position: 'absolute',
	top: 0,
	height: '40px',
	width: '100%',
	display: 'flex'
}

styles.navItem = {
	textAlign: 'center',
	flex: 1,
	listStyleType: 'none',
	padding: '10px'
}

styles.hsl = {
	...styles.fill,
	color: 'white',
	paddingTop: '20px',
	fontSize: '30px'
}

styles.rgb = {
	...styles.fill,
	color: 'white',
	paddingTop: '20px',
	fontSize: '30px'
}

function NavLink(props) {
	const to = props.to;
	return (
		<>
			<Link component={RouterLink} to={to} {...props} >

				{props.children}
			</Link>
		</>
	)
}

export default NavLink;