import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


import { DiDotnet } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";

import { ReactTyped, Typed } from "react-typed";

import coder from "../../public/coder1.jpg"



export default function Home() {
    return (
        <>
            <div name="Home"
             className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className="text-xl">Welcome In My Feed</span>
                        <div className='flex space-x-1 text-xl md:text-4xl'>
                            <h1>Hello, I'm a{" "}
                            
                            {/* <span className='text-red-700 font-boldk'>Devloper</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Dot Net Developer", "Coder", "Programmer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                            </h1>
                        </div>
                        <br></br>
                        <p className='text-sm md:text-lg text-justify'>
                            I am a passionate and results-driven .NET Developer with
                            hands-on experience in building dynamic web applications using
                            React for the frontend and .NET Core for the backend.
                            I have a solid understanding of SQL for efficient database management and data-driven functionality,
                             along with experience in jQuery for enhancing interactivity and improving user experience.
                             I take pride in writing clean, maintainable code and continuously strive to learn and implement the latest technologies to deliver high-performance, scalable solutions.
                        </p>

                        <br />
                        {/*social media icons*/}
                        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-4'>
                                    <li>
                                        <a href="https://www.facebook.com/share/15z3FQichX/" target="_blank">
                                            <FaFacebook className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/siva-kant-maurya-5789b9287" target="_blank">
                                            <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/shivam_maurya7244?igsh=b2twYTByZzIxa3cy" target="_blank">
                                            <FaInstagram className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/sivamaurya7244" target="_blank">
                                            <FaGithub className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                    </li>
                                </ul>

                            </div>
                            <div className=" space-y-2">
                                <h1 className="font-bold text-center">Currently working on</h1>
                                <div className="flex space-x-5">
                                    < DiDotnet className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <SiJquery className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <DiReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <DiMsqlServer className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center md:justify-start'>
                        <img src={coder}
                         className="rounded-full md:w-[450px] md:h-[450px] h-[300px] w-[300px] object-fill shadow-2xl hover:scale-105 duration-200 "
                          alt="" />
                    </div>
                </div>
            </div>
            
            <hr/>
        </>
    )
}
