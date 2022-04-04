import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header flex justify-between items-center mx-24 p-5'>
            <Link to='/' className="logo h-14">
                <img className='h-full' src={logo} alt="" />
            </Link>
            <div className="navbar uppercase font-medium flex items-center justify-center">
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink className='ml-4' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='ml-4' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='ml-4' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='ml-4' to='/about'>About</CustomLink>
            </div>

        </div>
    );
};

export default Header;