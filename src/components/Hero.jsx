import { motion } from "framer-motion"
import profile from "../assets/profile.jpeg"

export default function Hero(){

return(

<section id="home" className="min-h-screen flex items-center justify-center px-6">

<div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center -mt-50">

{/* Profile Image */}

<div className="flex justify-center md:justify-end">

<img
src={profile}
alt="Raja Sree"
className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
/>

</div>

{/* Intro Content */}

<div className="text-left">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-5xl font-bold mb-3"
>

Raja Sree Gorrepati

</motion.h1>

<p className="text-blue-400 text-xl mb-4">
Software Engineer • AI Systems • Cloud
</p>

<p className="text-gray-400 leading-relaxed mb-4">

Master’s graduate in Computer Science passionate about building scalable
backend systems and intelligent applications. Experienced in developing
AI-powered solutions including Retrieval-Augmented Generation (RAG)
pipelines using large language models and vector databases.

</p>

<p className="text-gray-400 leading-relaxed mb-6">

Skilled in backend development with Python and Java, API development,
and deploying cloud-native applications using AWS, Docker, and Kubernetes.

</p>

{/* Buttons */}

<div className="flex gap-4 flex-wrap">

<a
href="#projects"
className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
>
View Projects
</a>

<a
href="/resume.pdf"
target="_blank"
className="border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-400"
>
View Resume
</a>

<a
href="#contact"
className="border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-400"
>
Contact
</a>

</div>

</div>

</div>

</section>

)

}