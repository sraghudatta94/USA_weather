import './index.scss'
import React from 'react';
import * as _ from 'lodash'
import Card from '@material-ui/core/Card';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {kelvinToCelc, meterSecToMileHour} from "../../utilities/transform";
import moment from "moment";

const useStyles = makeStyles({
	root: {
		width: '100%',
		marginBottom: '20px',
		marginRight: '1%'
	},
});

const HeaderItem = (props) => {
	return <div
		className='col-12 col-sm-6 col-md-6 col-lg-3 d-flex flex-row justify-content-center justify-content-sm-start'>
		<div style={ {fontWeight: 'bold'} }>{ props.title || '' }</div>
		<div className='ml-2'>{ props.subtitle || '' }</div>
	</div>
}


const HeaderItem1 = (props) => {
	return <div style={ {marginRight: 10, width: 160} } className='d-flex justify-content-center'>
		<div className='font-weight-bold'>{ `${ props.title }  :` }</div>
		<div className='font-weight-light'>  { props.subtitle || '' }</div>
	</div>
}

const RightContainer = (props) => {
	const classes = useStyles();
	const {isLoading, dataList = []} = props || {};
	return <Paper className='right-container'>
		<Typography gutterBottom variant="h5" component="h2" className="right-container-title">
			{ (!_.isEmpty(dataList) || isLoading) ? 'Weather' : 'Please select cities to show weather' }
		</Typography>
		{ props.isLoading && <div className='right-container-loading'>
			<CircularProgress/>
		</div> }
		<div className='right-container-inner-list-container'>
			{ _.map(props.dataList, (item = {}, index) => {
				const {name, main = {}, wind = {}} = item || {};
				const {speed, deg} = wind || {};
				const {temp, temp_min, temp_max, pressure, humidity,} = main || {};
				const description = _.get(item, 'weather[0].description', '');
				const icon = _.get(item, 'weather[0].icon', '')
				return <Card className={ classes.root } key={ String(index) }>
					<CardContent>
						<h3>{ name }</h3>
						<div className='header-bar-container row '>
							<HeaderItem title={ 'Wind' } subtitle={ meterSecToMileHour(wind.speed) }/>
							<HeaderItem title={ 'Humidity' } subtitle={ `${ main.humidity }%` }/>
							<HeaderItem title={ 'Pressure' } subtitle={ `${ main.pressure }hpa` }/>
							<HeaderItem title={ 'Sunrise' } subtitle={ moment().format('hh:mm a') }/>
						</div>
						<div className='d-flex justify-content-center'>
							{/*<HeaderItem title={ 'Sunset' } subtitle={ moment().format('hh:mm a') }/>*/ }
						</div>
						<div className=' mt-4 row'>
							<div className='col-12 col-md-5 d-flex justify-content-center justify-content-md-end'>
								<img src={ `http://openweathermap.org/img/wn/${ icon }@2x.png` } style={ {width: 70, height: 70} }/>
							</div>
							<div className='col-12 col-md-7 d-flex flex-column align-items-center align-items-md-start'>
								<h1>{ kelvinToCelc(main.temp) } { description }</h1>
								<div className='flex-column d-flex flex-row flex-md-row'>
									<HeaderItem1 title={ 'Feels-Like' } subtitle={ `${ kelvinToCelc(main.feels_like) }` }/>
									<HeaderItem1 title={ 'Low' } subtitle={ `${ kelvinToCelc(main.temp_min) }` }/>
									<HeaderItem1 title={ 'High' } subtitle={ `${ kelvinToCelc(main.temp_max) }` }/>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			})
			}
		</div>
	</Paper>;
};

export default RightContainer
