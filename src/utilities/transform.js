export const meterSecToMileHour = (speed) => {
	const converted = speed * 0.000621371 / 0.000277778
	return `${ (converted || 0).toFixed(2) } mph`
}

export const kelvinToCelc = (temp) => {
	return `${ (temp - 273).toFixed(2) }°C`
}
