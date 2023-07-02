import axios from 'axios';
import { UserPreferences } from '../types/types';

export const saveUserPreferences = async (userId: string, preferences: UserPreferences) => {
    const response = await axios.post('/api/savePreferences', { userId, preferences });
    console.log(response, userId, preferences)
    if (response.status !== 200) {
        throw new Error('Failed to save user preferences');
    }
};
