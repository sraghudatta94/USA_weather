import './App.scss';
import React from 'react';
import * as _ from 'lodash'
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import {Hidden} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios'
import {API_BASE_URL, CITIES_LIST, WEATHER_DUMMY_DATA} from "./constants";
import {CustomAppBar, LeftContainer, RightContainer} from './components'

const App = () => {
	const [ citiesList, setCitiesList ] = React.useState(CITIES_LIST.slice(0, 3));
	const [ weatherData, setWeatherData ] = React.useState([]);
	const [ isLoading, setLoading ] = React.useState(false);
	const [ isDrawer, toggleDrawer ] = React.useState(false);
	const [ checked, setChecked ] = React.useState([]);
	const leftContainer = <LeftContainer
		checked={ checked }
		setChecked={ setChecked }
		dataList={ citiesList }
		isLoadMore={ _.size(citiesList) < 15 }
		onLoadMore={ () => {
			if (_.size(citiesList) >= 15) {
				return
			}
			const updatedIndex = _.size(citiesList) + 5;
			setCitiesList(CITIES_LIST.slice(0, updatedIndex))
		} }
		onFetchData={ () => {
			toggleDrawer(false);
			setWeatherData([]);
			if (_.isEmpty(checked)) {
				return
			}
			setLoading(true);
			
			axios.get(API_BASE_URL, {
				params: {zipCodes: `[${ checked }]`},
			}).then((response) => {
				const data = _.get(response, 'data.data', []);
				setWeatherData(data)
			}).catch(() => {
			}).finally(() => {
				setLoading(false)
			})
		} }
	/>;
	
	return (
		<div className="app-root">
			<Drawer anchor={ 'left' } open={ isDrawer } onClose={ () => toggleDrawer(false) }>
				<div style={ {width: 300} }>
					{ leftContainer }
				</div>
			</Drawer>
			<CustomAppBar title={ 'Weather Updates' } onDrawrClick={ () => toggleDrawer(true) }/>
			<Box className='app-root-body'>
				<Hidden only={ [ 'xs', 'sm' ] }>
					<Grid item md={ 3 } lg={ 3 } xl={ 3 }>
						{ leftContainer }
					</Grid>
				</Hidden>
				<Grid item xs={ 12 } md={ 9 }>
					<RightContainer dataList={ weatherData } isLoading={ isLoading }/>
				</Grid>
			</Box>
		</div>
	);
};

export default App;
