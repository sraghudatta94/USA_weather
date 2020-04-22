import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";
import './index.scss'
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';
import {categoryAddRemove} from "../../utilities";
import * as _ from 'lodash'

const LeftContainer = (props) => {
	
	const handleToggle = (value) => () => {
		const {dataList, isMessage} = categoryAddRemove(props.checked, value)
		if (isMessage) {
			ToastsStore.error("Only 5 cities are allowed at a time")
		} else {
			props.setChecked(dataList);
		}
	};
	
	const {checked} = props || {}
	
	let fetchButton = <Button
		variant="contained"
		size="large"
		color="secondary"
		fullWidth={ true }
		onClick={ props.onFetchData }
	>Fetch Weather</Button>
	
	if (_.isEmpty(checked)) {
		fetchButton =
			<Tooltip title="Please select at least once city" placement="top-center">
				<span>
				<Button disabled variant="contained" color="secondary" fullWidth={ true }>Fetch Weather</Button>
				</span>
			</Tooltip>
	}
	
	return (
		<Paper className='left-container'>
			<ToastsContainer store={ ToastsStore } position={ ToastsContainerPosition.BOTTOM_LEFT } className={ 'test' }/>
			<List className='left-container-inner-list'>
				{ props.dataList.map((item) => {
					const labelId = `checkbox-list-label-${ item.id }`;
					return (
						<ListItem key={ item.id } role={ undefined } dense button onClick={ handleToggle(item.id) }>
							<ListItemIcon>
								<Checkbox
									edge="start"
									checked={ props.checked.indexOf(item.id) !== -1 }
									tabIndex={ -1 }
									disableRipple
									inputProps={ {'aria-labelledby': labelId} }
								/>
							</ListItemIcon>
							<ListItemText id={ labelId } primary={ item.title }/>
						</ListItem>
					);
				}) }
			</List>
			<div className='left-container-inner-button-container'>
				{ props.isLoadMore && <Button
					variant="outlined"
					color="primary"
					fullWidth={ true }
					style={ {marginBottom: 10} }
					onClick={ props.onLoadMore }
				>Load More</Button> }
				{ fetchButton }
			</div>
		</Paper>
	);
}

export default LeftContainer
