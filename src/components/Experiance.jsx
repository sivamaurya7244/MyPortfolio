import React from 'react'
import html from '../../public/html.png'
import java from '../../public/java.png'
import javaScript from '../../public/javascript.png'
import reactjs from '../../public/reactjs.png'
import Detnet from '../../public/Microsoft_.NET_logo.png'
import sqlServer from '../../public/sqlServer.png'
import css from '../../public/css.jpg'
import dapper from '../../public/dapper.jpg'




export default function Experiance() {
    const cardItem = [
        {
            id: 1,
            title: "HTML",
            image: html
        },
        {
            id: 2,
            title: "CSS",
            image: css
        },
        {
            id: 3,
            title: "JavaScript",
            image: javaScript
        },
        {
            id: 4,
            title: ".NET",
            image: Detnet
        },
        {
            id: 5,
            title: "Java",
            image: java
        },
        {
            id: 6,
            title: "SqlServer",
            image: sqlServer
        },
        {
            id: 7,
            title: "React JS",
            image: reactjs
        },
        
        {
            id: 8,
            title: "Dapper ORM",
            image: dapper
        }
    ]
  return (
        <div name="Experiance"
         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experiance</h1>
                <span className=' font-semibold'>
                    I have experience in below technologies
                    </span>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    {
                        cardItem.map(({id,image,title}) => (
                            <div
                            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 border-white"
                             key={id}>
                              <img src={image} className='w-[120px] rounded-full ' alt="" />
                              <div>
                                <div className=''>{title}</div>
                              </div>
                             
                            </div>
                           
                        ))
                    }
                </div>
            </div>
            
        </div>
    )

}
