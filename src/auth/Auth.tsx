import { useState } from 'react';
import axios from 'axios';

type AuthModalProps = {
    closeModal: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ closeModal }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!isLogin && password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const url = `${process.env.REACT_APP_BACKEND_URL}api/auth/${isLogin ? 'login' : 'register'}`;

        try {
            const { data } = await axios.post(url, { username, password });

            localStorage.setItem('token', data.token);
            alert(`${isLogin ? 'Login' : 'Registration'} successful`);
        } catch (error) {
            console.error(error);
            alert(`Error during ${isLogin ? 'login' : 'registration'}`);
        }
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">{isLogin ? 'Log in' : 'Register'}</h3>

                        <form onSubmit={handleSubmit}>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {!isLogin && (
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            )}

                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {isLogin ? 'Log in' : 'Register'}
                            </button>
                        </form>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                            >
                                {isLogin ? 'New user? Register' : 'Have an account? Log in'}
                            </button>
                        </span>

                        <div className="flex items-center justify-end">
                            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
