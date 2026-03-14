export default function Navbar(){

return(

<nav className="flex justify-between items-center p-6 bg-black sticky top-0">

<h1 className="text-xl font-bold">
Portfolio
</h1>

<div className="space-x-6">

<a href="#home">Home</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#experience">Experience</a>

<a href="#contact">Contact</a>

</div>

</nav>

)

}