import React, { useState, useEffect } from 'react';
import { airQualityService } from '../services/airQualityService';

const Item = ({ el }) => {
    const [airQuality, setAirQuality] = useState(null);
    
    useEffect(() => {
		const fetch = async (lat, lon) => {
			const res = await airQualityService.getAirQuality(lat, lon);
            setAirQuality(res.aqi)
		};
        if (el) fetch(el.lat, el.lon)
	}, [el]);

    if (!el || !airQuality) return null;
    else return (
        <li key={el.id} className="favorite-location-item">
            <div className="favorite-location-name">
                {el.name}
            </div>
            <div className="favorite-location-air-quality">
                {airQuality}/100
            </div>
        </li>
    )
};

export const FavoriteLocationsList = ({ locations }) => {
	if (!locations || !locations.length) return null;
	else
		return (
			<div>
				<h3>Favorite Locations</h3>
				<ul className="favorite-location-list">
					{locations.map(el => (
						<Item el={el} key={el.id}/>
					))}
				</ul>
			</div>
		);
};
