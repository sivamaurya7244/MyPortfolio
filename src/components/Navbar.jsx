import React, { useState } from 'react'
import pic from '../../public/photo.avif'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';



function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experiance"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-18 fixed top-0 left-0 right-0 z-50 bg-white'>
            <div className='flex justify-between items-center h-18 '>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full' alt="" />

                    <h1 className='font-semibold cursor-pointer'>Siv<span className='text-green-500 text-2xl'>a</span>
                        <p className='text-sm'>Software Developer</p>
                    </h1>

                </div>
                {/* desktop navbar */}
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {navItems.map((item) => (
                            <li key={item.id} className='cursor-pointer hover:scale-105 duration-200 hover:text-green-500 font-semibold'>
                                <Link to={item.text} smooth={true} duration={500} offset={-70} activeClass="active">
                                    {item.text}
                                </Link>
                            </li>

                        ))}
                    </ul>
                    <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer' >{menu ? <IoCloseSharp size={24} /> : <TiThMenu size={24} />}</div>


                </div>
            </div>
            {/* mobile navbar */}
            {menu && (

                <div className='bg-white'>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 '>
                        {navItems.map((items) => (
                            <li key={items.id} className='cursor-pointer hover:text-green-500 hover:scale-130 duration-200 font-semibold'>
                                <Link onClick={() => setMenu(!menu)}
                                 to={items.text} smooth={true} duration={500} offset={-70} activeClass="active">
                                    {items.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
