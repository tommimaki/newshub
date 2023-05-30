import axios from 'axios';

export const saveUserPreferences = async (userId: number, preferences: {}) => {
    const response = await axios.post('/api/savePreferences', { userId, preferences });

    if (response.status !== 200) {
        throw new Error('Failed to save user preferences');
    }
};
