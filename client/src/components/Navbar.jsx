import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../img/icons/peacemaking-logo.png'
import userPlusImg from '../img/icons/user-plus.svg'

export const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-[35px] border-b border-[#1e1e1e] bg-black'>
            <NavLink to={'/'}>
                <img src={logoImg} alt="Logo" className='w-[100px]' />
            </NavLink>
            <div className='flex items-center gap-x-4'>
                <NavLink to={'register'} className='flex items-center gap-x-3 py-2 px-5 bg-orange font-black text-xs rounded-[5px] hover:bg-orangeHover transition-all duration-300'>
                    <img src={userPlusImg} alt="User Plus" />
                    Register
                </NavLink>
                <NavLink to={'login'} className='bg-gray text-blue py-2 px-5 font-black text-xs rounded-[5px] hover:bg-[#C1C1C1] transition-all duration-300'>Login</NavLink>
            </div>
        </nav>
    )
}
