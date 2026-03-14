import { motion } from "framer-motion"
import screatives from "../assets/screatives.png"
import msu from "../assets/msu.png"

const experiences = [

{
role:"Software Development Engineer",
company:"Screatives Software Services Pvt Ltd",
time:"2022-2023",
icon:"💼",
logo:screatives,
desc:"Developed backend services and RESTful APIs using Java and Python to support web applications. Worked on database integration, optimized queries, and collaborated with the development team to improve system reliability and performance."
},

{
role:"Independent Study – RAG Systems",
company:"Montclair State University",
time:"2025",
icon:"🎓",
logo:msu,
desc:"Designed and implemented Retrieval-Augmented Generation systems using LLMs, embeddings, and vector databases for intelligent document retrieval. Conducted experimentation with NLP models and built a knowledge graph pipeline for AI-assisted learning systems."
}

]

export default function Experience(){

return(

<section id="experience" className="py-20 flex justify-center">

<div className="max-w-4xl w-full bg-gray-800 p-8 rounded-xl shadow-lg">

<h2 className="text-2xl font-bold mb-8 text-center">
Experience
</h2>

<div className="grid md:grid-cols-2 gap-6">

{experiences.map(exp => (

<motion.div
key={exp.role}
whileHover={{scale:1.06, y:-6}}
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.4}}
className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:border-blue-400 cursor-pointer min-h-[260px]"
>

{/* Logo + Header */}

<div className="flex items-start gap-4 mb-4">

<div className="bg-white p-2 rounded-lg flex items-center justify-center shadow">

<img
src={exp.logo}
alt={exp.company}
className="w-12 h-12 object-contain"
/>

</div>

<div>

<h3 className="text-sm font-semibold">
{exp.company}
</h3>

<p className="text-blue-400 text-xs">
{exp.role}
</p>
<div className="flex items-center gap-2 text-gray-400 text-xs mt-1">
<span>{exp.icon}</span>
<span>{exp.time}</span>
</div>
</div>

</div>

<p className="text-gray-400 text-sm leading-relaxed">
{exp.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}