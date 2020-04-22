import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
	root: {
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const CustomAppBar = (props) => {
	const classes = useStyles();
	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar>
					<Hidden only={ [ 'md', 'lg', 'xl' ] }>
						<IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu" onClick={props.onDrawrClick}>
							<MenuIcon/>
						</IconButton>
					</Hidden>
					<Typography variant="h6" className={ classes.title }>
						{props.title}
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default CustomAppBar
