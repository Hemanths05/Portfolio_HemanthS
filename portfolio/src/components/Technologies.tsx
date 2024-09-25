import{RiReactjsLine} from "react-icons/ri";
import { DiJava } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import{SiMongodb} from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = (duration:number) => ({
  initial:{y:-10},
  animate : {
    y:[10,-10],
    transition:{
      duration :duration,
      ease : "linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
       whileInView ={{opacity:1,y:0}}
       initial = {{opacity:0,y:-100}}
       transition = {{duration : 1.0}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView ={{opacity:1,x:0}}
      initial = {{opacity:0,x:-100}}
      transition = {{duration : 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJava className="text-7xl text-[#F89820]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-[#00599C]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(10)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl text-[#898686]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(14)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl "/>  
        </motion.div>
        
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl  text-[#83CD29]"/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(9)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-[#00758F]"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
