import React, { useState, useEffect } from 'react';
import { cityService } from '../services/cityService';

export const LocationsToAddList = () => {
    const [ locations, setLocations ] = useState([]);
    
    useEffect(() => {
		const fetch = async () => {
			const res = await cityService.getCities();
            setLocations(res)
		};
        fetch()
	}, []);

    if (!locations) return null
    else return (
        <div>
            <h3>Locations to add</h3>
            <ul>
                {locations.map(el => (
                    <li key={el.id}>
                        {el.name}
                    </li>
                ))}
			</ul>
        </div>
    )
}
