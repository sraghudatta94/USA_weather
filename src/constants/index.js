export let CITIES_LIST = [
	{id: '10017', zipCode: '10017', title: 'Newyork'},
	{id: '60618', zipCode: '60618', title: 'Chicago'},
	{id: '94114', zipCode: '94114', title: 'San fransico'},
	{id: '90029', zipCode: '90029', title: 'Los Angles'},
	{id: '20022', zipCode: '20022', title: 'Washington DC'},
	{id: '85920', zipCode: '85920', title: 'Amado'},
	{id: '98127', zipCode: '98127', title: 'seattle'},
	{id: '78709', zipCode: '78709', title: 'Austin'},
	{id: '92114', zipCode: '92114', title: 'San Diego'},
	{id: '33130', zipCode: '33130', title: 'Miami'},
	{id: '77018', zipCode: '77018', title: 'Houstan'},
	{id: '75089', zipCode: '75089', title: 'Dallas'},
	{id: '30301', zipCode: '30301', title: 'Atlanta'},
	{id: '73078', zipCode: '73078', title: 'Oklahoma city'},
	{id: '43125', zipCode: '43125', title: 'Columbus'},
]

export const WEATHER_DUMMY_DATA = [
	{
		"coord": {
			"lon": -111.1,
			"lat": 31.67
		},
		"weather": [
			{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}
		],
		"base": "stations",
		"main": {
			"temp": 299.36,
			"feels_like": 296.19,
			"temp_min": 297.59,
			"temp_max": 300.37,
			"pressure": 1037,
			"humidity": 13
		},
		"wind": {
			"speed": 0.89,
			"deg": 268,
			"gust": 8.05
		},
		"clouds": {
			"all": 0
		},
		"dt": 1587508555,
		"sys": {
			"type": 3,
			"id": 96681,
			"country": "US",
			"sunrise": 1587473298,
			"sunset": 1587520636
		},
		"timezone": -25200,
		"id": 0,
		"name": "Amado",
		"cod": 200
	},
	{
		"coord": {
			"lon": -111.1,
			"lat": 31.67
		},
		"weather": [
			{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}
		],
		"base": "stations",
		"main": {
			"temp": 299.36,
			"feels_like": 296.19,
			"temp_min": 297.59,
			"temp_max": 300.37,
			"pressure": 1037,
			"humidity": 13
		},
		"wind": {
			"speed": 0.89,
			"deg": 268,
			"gust": 8.05
		},
		"clouds": {
			"all": 0
		},
		"dt": 1587508555,
		"sys": {
			"type": 3,
			"id": 96681,
			"country": "US",
			"sunrise": 1587473298,
			"sunset": 1587520636
		},
		"timezone": -25200,
		"id": 0,
		"name": "Amado",
		"cod": 200
	}
]

export const API_BASE_URL = 'https://jba69b7to1.execute-api.us-east-1.amazonaws.com/production/weather'
















