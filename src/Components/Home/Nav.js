import React from 'react';
import { Menu } from './Function';

const Nav = () => {
    return (
        <nav className='
        flex 
        justify-between 
        h-[100px] 
        px-8 sm:px-12
        items-center
        '>
            <div>
                <img src='/img/Logo.png' alt='logo'/>
            </div>
            <div>
                <ul className='flex gap-[32px]'>
                    <Menu/>
                </ul>
            </div>
            <div>
                <button className='
                text-[21px]
                text-white
                bg-[#FF6B00]
                px-[32px]
                py-[15px]
                rounded-[6px]
                font-[500]
                '>Contact Us</button>
            </div>
        </nav>
    );
};

export default Nav;