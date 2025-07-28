import React from 'react'
import html from '../../public/html.png'
import sqlServer from '../../public/sqlServer.png'
import Detnet from '../../public/Microsoft_.NET_logo.png'
import java from '../../public/java.png'
import javaScript from '../../public/javascript.png'
import reactjs from '../../public/reactjs.png'


export default function Portfolio() {
    const cardItem = [
        {
            id: 1,
            title: 'HTML',
            image: html,
            description: "Skilled in structuring responsive and semantic web pages using HTML5 standards."
        },
        {
            id: 2,
            title: "SQL Server",
            image: sqlServer,
            description: "Experience designing and managing relational databases, writing complex SQL queries, and ensuring data integrity."
        },
        {
            id: 3,
            title: ".NET",
            image: Detnet,
            description: "Developed enterprise-grade web applications and APIs with .NET, focusing on performance and scalability."
        },
        {
            id: 4,
            title: "Java",
            image: java,
            description: "Worked on backend systems and application logic using Java in college time, emphasizing maintainability and efficiency."
        },
        {
            id: 5,
            title: "JavaScript",
            image: javaScript,
            description: "Implemented interactive features and client-side logic using JavaScript (ES6+)."
        },
        {
            id: 6,
            title: "React JS",
            image: reactjs,
            description: "Built dynamic SPAs with React, using hooks, state management, and component-based architecture."
        }
    ]
    return (
        <div name="Portfolio"
         className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 ">
            <div>
                <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
                <span className='underline font-semibold'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
                    {
                        cardItem.map(({id, image, title, description}) => (
                            <div
                            className="md:w-[320px] md:h-[320px] border-[2px] border-white rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 transition-all overflow-visible"
                             key={id}>
                             <img src={image} 
                                className="w-[120px] h-[120px] rounded-full border-[4px] border-white shadow-lg mx-auto object-cover"

                               alt={title} />
                             <div>
                                <div className='font-bold text-lg mb-2 px-2'>{title}</div>
                                <p className='px-2 text-gray-700'>{description}</p>
                             </div>
                             <div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer">Source code</button>
                             </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}
