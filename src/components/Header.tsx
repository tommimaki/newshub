import React, { useState, useEffect, useContext } from 'react';
import newspaper from '../assets/newspaper.png'
import AuthModal from '../auth/Auth';
import AuthContext from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from '../assets/icons';

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);



    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    }

    const handleModalToggle = () => {
        setModalOpen(!isModalOpen);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }


    return (
        <header className="flex items-center justify-center border-b-2 mx-auto max-w-6xl">


            <nav className="flex justify-between items-center w-[92%] mx-auto" >
                <div className="">
                    <img className="w-12 h-12 cursor-pointer" src={newspaper} alt="newspaper logo" />

                </div>
                <div
                    className={`nav-links duration-500 ${isMenuOpen ? "top-[9%]" : "top-[-100%]"
                        } md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 min-w-[50%]">
                        <li>
                            <Link className="hover:text-gray-500" to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500" to={'/foryou'}>
                                For You
                            </Link>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Preferences
                            </a>
                        </li>
                        {
                            isLoggedIn &&
                            <li>
                                <Link className="hover:text-gray-500" to={"/profile"}>
                                    Profile
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
                <div className="flex items-center p-4 gap-6">
                    {isLoggedIn ? (
                        <>
                            <button
                                className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
                            onClick={handleModalToggle}
                        >
                            Sign in
                        </button>
                    )}

                    <button
                        className="text-3xl cursor-pointer md:hidden"
                        onClick={handleMenuToggle}
                    >
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </ nav>
            {!isLoggedIn && isModalOpen && <AuthModal closeModal={handleModalToggle} />}


        </header >
    );
};

export default Header;
