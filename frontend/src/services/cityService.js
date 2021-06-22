import { httpService } from './httpService';

const getCities = async () => {
    return await httpService.get('city')
}

export const cityService = {
    getCities
}