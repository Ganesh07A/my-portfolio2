import Link from 'next/link';
import React from 'react';

export default function Work() {
    const work = [
        {
            name: 'CampusBuddy',
            description: 'AI-Powered Digital Campus Assistant. Automates student queries and campus navigation.',
            bgImage: '/assets/work-1.png', // Replace with a screenshot of CampusBuddy
            repoLink: 'https://github.com/Ganesh07A/campus-buddy',
            liveLink: 'https://campus-buddy07.vercel.app/', // Add your Vercel/Render link here
        },
        {
            name: 'Sahayak AI',
            description: 'Personal AI Chatbot built with Python & LangChain. Handles context-aware conversations.',
            bgImage: '/assets/work-2.png',
            repoLink: 'https://github.com/Ganesh07A/Sahayak-chatbot',
            liveLink: '#',
        },
        {
            name: 'Smart Assessment',
            description: 'Online examination platform with AI proctoring and automated grading systems.',
            bgImage: '/assets/work-3.png',
            repoLink: 'https://github.com/Ganesh07A/Smart-Assesment-Platform',
            liveLink: '#',
        },
        {
            name: 'Portfolio Website',
            description: 'Modern portfolio built with Next.js and Tailwind CSS to showcase my journey.',
            bgImage: '/assets/work-4.png',
            repoLink: 'https://github.com/ganesh07a/my-portfolio2',
            liveLink: '#',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">Latest Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Explore my journey in building scalable web applications and intelligent AI systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-10 dark:text-black">
                {work.map((project, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-500 border border-gray-200 dark:border-white/20 group">
                        
                        {/* Project Image Section */}
                        <div 
                            className="h-64 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        ></div>

                        {/* Project Details Section */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-black">{project.name}</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.description}</p>
                            
                            {/* Buttons Container */}
                            <div className="flex items-center gap-4">
                                <Link 
                                    href={project.repoLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm font-medium text-gray-700"
                                >
                                    GitHub
                                </Link>
                                <Link 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-2 px-4 rounded-full bg-black text-white hover:bg-gray-800 transition text-sm font-medium flex items-center justify-center gap-2"
                                >
                                    Live Demo 
                                    <img src="/assets/right-arrow-white.png" alt="" className="w-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link
             href="https://github.com/ganesh07a" target="_blank" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                View more on GitHub
                <img src="/assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="/assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </Link>
        </div>
    )
}