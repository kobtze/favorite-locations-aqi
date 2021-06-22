import React from 'react';
import { FavoriteLocationsList } from '../components/FavoriteLocationsList';
import { LocationsToAddList } from '../components/LocationsToAddList';

const favoriteLocationsMock = [
    {
        "id": 1,
        "name": "London",
        "lon": -0.1,
        "lat": 51.52,
    },
    {
        "id": 2,
        "name": "New York",
        "lon": -73.94,
        "lat": 40.67,
    },
    {
        "id": 3,
        "name": "Haifa",
        "lon": 32.79,
        "lat": 34.94,
    },
    {
        "id": 4,
        "name": "Mexico City",
        "lon": -99.14,
        "lat": 19.43,
    }
]

export const FavoriteLocations = () => {
	
	return (
		<div>
			<FavoriteLocationsList locations={favoriteLocationsMock} />
			<LocationsToAddList />
		</div>
	);
};
