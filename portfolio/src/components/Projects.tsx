import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <h2 className="my-20 text-center text-4xl">Projects</h2>
       <div>{PROJECTS.map((projects,index)=>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
          <motion.div
          whileInView={{opacity : 1,x:0}}
          initial = {{opacity:0,x:-100}}
          transition = {{duration:1}}
          className="w-full lg:w-1/4 mt-2">
          <img src={projects.image} width={250} height={250} alt={projects.title}  
           className="mb-6 rounded "></img>
          </motion.div>
          <motion.div 
          whileInView={{opacity : 1,x:0}}
          initial = {{opacity:0,x:100}}
          transition = {{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{projects.title}</h6>
          <p className="mb-4 text-neutral-400 text-justify">{projects.description}</p>
          {projects.technologies.map((tech, index)=>(
              <span key={index} className=" inline-flex flex-wrap gap-2 mt-4 mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-900" >
                {tech} 
              </span>
          ))}
          </motion.div>
        </div>
       ))}
       </div>
       
    </div>
  )
}

export default Projects
