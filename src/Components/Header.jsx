import React from 'react';
import { AppBar, Toolbar  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
	
import { Auth } from '../Pages/Auth';

const useStyles = makeStyles(() => ({
	root: {
		background: '#409CE5',
	},
	toolbar: {
		justifyContent: 'flex-end',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar className={ classes.root }>
			<Toolbar className={ classes.toolbar }>
				<Auth />
			</Toolbar>
		</AppBar>
	);
};

export { Header };