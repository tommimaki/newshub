// Profile.tsx
import React, { useContext, useState } from 'react';
import AuthContext from '../auth/AuthContext';

const Profile: React.FC = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [username, setUsername] = useState('YOUR_USERNAME');
    const [email, setEmail] = useState('YOUR_EMAIL');
    const [preferences, setPreferences] = useState('YOUR_PREFERENCES');

    const handleUpdateUserData = async (event: React.FormEvent) => {
        event.preventDefault();
        // Call your server-side endpoint to update user data
    };

    const handleUpdatePreferences = async (event: React.FormEvent) => {
        event.preventDefault();
        // Call your server-side endpoint to update preferences
    };

    if (!isLoggedIn) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl text-red-500">You must be logged in to view this page</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

            <div className="w-64 h-64 rounded-full overflow-hidden mb-4">
                <img
                    src="YOUR_PROFILE_IMAGE_URL"
                    alt="Profile"
                    className="object-cover w-full h-full"
                />
            </div>

            <form onSubmit={handleUpdateUserData} className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Update User Data</h2>
                <input
                    className="block w-full p-2 border rounded mb-2"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    className="block w-full p-2 border rounded mb-2"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <button className="block w-full p-2 bg-blue-500 text-white rounded" type="submit">Update</button>
            </form>

            <form onSubmit={handleUpdatePreferences} className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Update Preferences</h2>
                <input
                    className="block w-full p-2 border rounded mb-2"
                    type="text"
                    value={preferences}
                    onChange={e => setPreferences(e.target.value)}
                    placeholder="Preferences"
                />
                <button className="block w-full p-2 bg-blue-500 text-white rounded" type="submit">Update</button>
            </form>
        </div>
    );
};

export default Profile;
