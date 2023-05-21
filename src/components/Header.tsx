import React, { useState } from 'react';
import newspaper from '../assets/newspaper.png'
import { MenuIcon, CloseIcon } from '../assets/icons';

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-white  border-b-2">
            <nav className="flex justify-between items-center w-[92%] mx-auto" >
                <div className='p-4'>
                    <img className="w-12 cursor-pointer" src={newspaper} alt="newspaper logo" />
                </div>
                <div
                    className={`nav-links duration-500 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="#">Home</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Categories</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Preferences</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Profile?</a>
                        </li>

                    </ul>
                </div>
                <div className="flex items-center p-4 gap-6">
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                    <button className="text-3xl cursor-pointer md:hidden" onClick={handleMenuToggle}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
