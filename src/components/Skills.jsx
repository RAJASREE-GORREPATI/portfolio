import { motion } from "framer-motion"

const skillCategories = [

{
title:"Programming",
skills:[
{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
{name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
{name:"C++",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"}
]
},

{
title:"AI / Machine Learning",
skills:[
{name:"LangChain",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
{name:"RAG Systems",icon:"https://cdn-icons-png.flaticon.com/512/4712/4712105.png"},
{name:"LLM Integration",icon:"https://cdn-icons-png.flaticon.com/512/2103/2103633.png"},
{name:"NLP",icon:"https://cdn-icons-png.flaticon.com/512/4616/4616734.png"}
]
},

{
title:"Cloud & DevOps",
skills:[
{name:"AWS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
{name:"Docker",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
{name:"Kubernetes",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"},
{name:"Linux",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"}
]
},

{
title:"Databases & Tools",
skills:[
{name:"SQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
{name:"Git",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
{name:"VS Code",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"}
]
}

]

export default function Skills(){

return(

<section id="skills" className="py-20 flex justify-center">

<div className="max-w-4xl w-full bg-gray-900 p-10 rounded-xl shadow-lg">

<h2 className="text-3xl font-bold mb-10 text-center">
Skills
</h2>

<div className="grid md:grid-cols-2 gap-10">

{skillCategories.map(category => (

<div key={category.title}>

<h3 className="text-lg font-semibold mb-4 text-blue-400">
{category.title}
</h3>

<div className="grid grid-cols-4 gap-4">

{category.skills.map(skill => (

<motion.div
key={skill.name}
whileHover={{scale:1.1}}
className="flex flex-col items-center gap-1 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400"
>

<img
src={skill.icon}
alt={skill.name}
className="w-8 h-8"
/>

<span className="text-xs text-center">
{skill.name}
</span>

</motion.div>

))}

</div>

</div>

))}

</div>

</div>

</section>

)

}