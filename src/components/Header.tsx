import React, { useState } from 'react';
import newspaper from '../assets/newspaper.png'
import AuthModal from '../auth/Auth';
import { MenuIcon, CloseIcon } from '../assets/icons';

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    }

    const handleModalToggle = () => {
        setModalOpen(!isModalOpen);
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
                            <a className="hover:text-gray-500" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Categories
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Preferences
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Profile?
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center p-4 gap-6">
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] "
                        onClick={handleModalToggle}
                    >
                        Sign in
                    </button>
                    <button
                        className="text-3xl cursor-pointer md:hidden"
                        onClick={handleMenuToggle}
                    >
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </ nav>
            {isModalOpen && <AuthModal closeModal={handleModalToggle} />}

        </header >
    );
};

export default Header;
