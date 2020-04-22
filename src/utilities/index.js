import * as _ from 'lodash'

export const categoryAddRemove = (prevDataList, id) => {
	let updateDataList = []
	let isMessage = false
	if (_.includes(prevDataList, id)) {
		updateDataList = _.filter(prevDataList, (prevId) => prevId !== id)
	} else {
		if (_.size(prevDataList) >= 5) {
			isMessage = true
		} else {
			updateDataList = [ ...prevDataList, id ]
		}
	}
	return {dataList: updateDataList, isMessage}
}
