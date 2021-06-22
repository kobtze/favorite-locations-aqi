// import { httpService } from './httpService';
import Axios from 'axios';
import { credentials } from '../config/';

const BASE_URL = 'https://api.breezometer.com/air-quality/v2/';

const getAirQuality = async (lat, lon) => {
	try {
		const res = await Axios.get(
			BASE_URL +
			'current-conditions' +
			`?lat=${lat}&lon=${lon}` +
			`&key=${credentials.KEY}`
		)
        return res.data.data.indexes.baqi;
	} catch (err) {
		console.log(err);
	}
};

export const airQualityService = {
	getAirQuality,
};
