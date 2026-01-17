import Image from "next/image"; // Optional: Use Next.js Image for better performance if preferred

export default function Skills() {
    const skills = [
        {
            name: 'AI & Machine Learning',
            icon: '/assets/graphics-icon.png', // You can swap this for a brain/robot icon
            description: 'Building intelligent agents, RAG pipelines, and predictive models using Python, TensorFlow, and LangChain.',
            link: '#',
        },
        {
            name: 'Full Stack Development',
            icon: '/assets/web-icon.png',
            description: 'Developing scalable web applications with Next.js, React, Django, and FastAPI, integrated with SQL databases.',
            link: '#',
        },
        {
            name: 'Data Structures & Algorithms',
            icon: '/assets/ui-icon.png', 
            description: 'Strong problem-solving skills with a focus on Arrays, Matrices, and dynamic programming in Python.',
            link: '#',
        },
        {
            name: 'Achievements',
            icon: '/assets/mobile-icon.png', 
            description: 'Winner of Smart India Hackathon (internal) and solved 50+ problems on LeetCode.',
            link: '#',
        }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I bring to the table</h4>
            <h2 className="text-center text-5xl font-Ovo">Technical Proficiency</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I combine advanced AI knowledge with robust full-stack engineering to build modern, intelligent solutions.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {skills.map((skill) => (
                    <div key={skill.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={skill.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{skill.description}</p>
                        {/* Removed the "Read More" link as it's less necessary for skills, but you can keep it if you have pages for them */}
                    </div>
                ))}
            </div>
        </div>
    )
}