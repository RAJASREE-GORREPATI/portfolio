import { motion } from "framer-motion"

export default function Contact(){

return(

<section id="contact" className="py-20 flex justify-center bg-gray-900">

<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.5}}
className="max-w-xl w-full bg-gray-800 p-8 rounded-xl shadow-lg text-center"
>

<h2 className="text-3xl font-bold mb-4">
Contact
</h2>

<motion.a
whileHover={{scale:1.05}}
href="mailto:rajasreegorrepati24@gmail.com"
className="block text-blue-400 mb-6 hover:text-blue-300"
>
📧 rajasreegorrepati@gmail.com
</motion.a>

<div className="flex justify-center gap-6 flex-wrap">

<motion.a
whileHover={{scale:1.1}}
href="https://github.com/RAJASREE-GORREPATI"
target="_blank"
className="border border-gray-600 px-4 py-2 rounded-lg hover:border-blue-400"
>
🐙 GitHub
</motion.a>

<motion.a
whileHover={{scale:1.1}}
href="https://www.linkedin.com/in/rajasree-gorrepati"
target="_blank"
className="border border-gray-600 px-4 py-2 rounded-lg hover:border-blue-400"
>
💼 LinkedIn
</motion.a>

<motion.a
whileHover={{scale:1.1}}
href="/resume.pdf"
target="_blank"
className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
>
📄 Resume
</motion.a>

</div>

</motion.div>

</section>

)

}