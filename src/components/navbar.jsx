import React, {useState} from 'react'
import { Link } from "react-router-dom";

import Tentang from './tntg';

import Hambur from "../assets/hambur.png"

const NavBar =() => {
const[nav,setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

    return(
        <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white'>
            <div className='px-6'>
            <h1 className="ukrn font-bold"><span className="wrn ">Trip</span>Trap</h1>
            </div>
            <ul className='hidden sm:flex px-4 font-semibold'>
                <li className='px-5 py-1'>
                    <a href="beranda.jsx">Beranda</a>
                </li>
                <li onClick={Tentang} className='px-5 py-1'>
                    <a href="tentang.jsx">Tentang</a>
                </li>
                <li className='px-5 py-1'>
                    <a href="/kontak">Kontak</a>
                </li>
                <li className='px-5 py-1'>
                    <a href="/jelajah">Jelajah</a>
                </li>
            </ul>
            {/* hamburgur */}
        <div onClick={handleNav} className='sm:hidden z-10'>
            <img src={Hambur} size={20} className='mr-4 cursor-pointer' />
            </div>

            {/* tampilan di hp */}
            <div 
            onClick={handleNav}
            className={
                nav
                     ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='h-full w-full text-center pt-12'>
                <li className='text-2xl py-8'>
                    <a href="/">Beranda</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="/tentang">Tentang</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="/kontak">Kontak</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="/jelajah">Jelajah</a>
                </li>
            </ul> 
        </div>
    </div>
        
    )
}
  
 export default NavBar;
  