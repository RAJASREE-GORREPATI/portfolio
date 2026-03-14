import { motion } from "framer-motion"

import rag from "../assets/rag.png"
import qa from "../assets/qa.png"
import cloud from "../assets/cloud.png"
import zinnia from "../assets/zinnia.png"

const projects = [

{
title:"Agentic RAG System",
desc:"AI system retrieving knowledge using embeddings and vector search.",
tech:"Python • LangChain • Pinecone",
image: rag,
github:"https://github.com/RAJASREE-GORREPATI/smartknow",
demo:"#"
},

{
title:"Zinnia Magic E-Commerce",
desc:"Full-stack e-commerce website with product categories, cart functionality and admin dashboard.",
tech:"HTML • CSS • PHP • MySQL",
image: zinnia,
github:"https://github.com/RAJASREE-GORREPATI/zinnia",
demo:"#"
},

{
title:"AI Document QA",
desc:"Upload documents and ask questions using LLM powered retrieval.",
tech:"Python • LLM APIs",
image: qa,
github:"#",
demo:"#"
},

{
title:"Cloud Microservices",
desc:"Built scalable APIs and deployed microservices using Docker and Kubernetes.",
tech:"Java • AWS • Docker",
image: cloud,
github:"#",
demo:"#"
}

]

export default function Projects(){

return(

<section id="projects" className="py-20 flex justify-center">

<div className="max-w-4xl w-full bg-gray-800 p-8 rounded-xl shadow-lg">

<h2 className="text-2xl font-bold mb-8 text-center">
Projects
</h2>

<div className="grid grid-cols-2 gap-6 justify-items-center">

{projects.map(project => (

<motion.div
key={project.title}
whileHover={{scale:1.05}}
transition={{duration:0.25}}
className="w-85 border border-gray-900 rounded-lg overflow-hidden bg-gray-900 hover:border-blue-400"
>

<img
src={project.image}
alt={project.title}
className="w-full h-32 object-cover"
/>

<div className="p-4">

<h3 className="text-sm font-semibold mb-1">
{project.title}
</h3>

<p className="text-gray-400 text-xs">
{project.desc}
</p>

<p className="text-blue-400 mt-1 text-xs">
{project.tech}
</p>

<div className="flex gap-2 mt-3">

<a
href={project.github}
className="bg-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-700"
>
GitHub
</a>

<a
href={project.demo}
className="border border-blue-400 px-2 py-1 rounded text-xs hover:bg-blue-400 hover:text-black"
>
Demo
</a>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}