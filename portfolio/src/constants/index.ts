import IOT from "../assets/IOT.jpeg";
import eco from "../assets/eco.jpeg";
import Learnify from "../assets/lmsImage.png";
import SmartFarming from "../assets/image.png";
export const HERO_CONTENT = `As a skilled software developer, I specialize in turning innovative ideas into elegant,
 functional digital solutions. With a deep understanding of both frontend and backend development, I'm adept at 
 bridging the gap between design and functionality, creating experiences that are not only visually appealing but 
 also intuitive and efficient. Let's collaborate to build the future together.`;

export const ABOUT_CONTENT = `I am a passionate and driven Software Developer with hands-on experience across a diverse tech stack 
including Java, C Programming, React.js, Express.js, Node.js, Next.js, MongoDB, MySQL, GraphQL, Postman, Git, GitHub, and AWS (Basics), 
along with foundational knowledge in Blockchain and Machine Learning, which I’ve applied by integrating FaceAPI for emotion analysis in 
one of my projects. Skilled in both MERN stack and Java full-stack development, I have successfully led multiple college projects as a team leader, 
honing my leadership and collaboration abilities. I thrive in dynamic environments, enjoy solving complex problems, and am always eager to learn and 
work on innovative, real-world solutions.`;

export const EXPERIENCE = [

    {
        year:"Oct 2024 - Jan 2025",
        role:"Full Stack Development Intern",
        company:"BrewBrain Solutions",
        description:"Worked as a Full Stack Development Intern, developing a real-time School Management System using the MERN stack, with features like student dashboards, mark allotments, and evaluation-free workflows, handling both front-end and back-end development.",
        technologies:["React.JS","Node.JS","Express.JS","MongoDB","AWS"]
    },

    {
        year:"Aug 2024 - Sep 2024",
        role:"Java Development",
        company:"ShadowFox",
        description:"As a Java Development Intern at Shadowfox, I worked with JUnit testing, developed back-end services using Spring Boot, and implemented MySQL connectivity for data management. This role enhanced my skills in Java development and building scalable applications.",
        technologies:["Java","JUnit testing","Spring","JDBC connectivity"]
    },

    
]

export const PROJECTS = [

    {
        title: "Learnify - AI-Powered Learning Management System",
        image: Learnify,
        description: `Built an innovative Learning Management System using Next.js, GraphQL, and Hygraph, focused on student engagement and adaptive learning. Integrated FaceAPI to analyze learners’ emotions (happy, sad, angry, fearful, neutral) during video playback. When disengagement is detected, the system pauses the course and redirects the user to a game session for relaxation. After 10 minutes, learners resume their progress. This smart mechanism boosts focus, enhances retention, and improves overall learning outcomes.`,
        technologies: ["Next.js", "GraphQL", "Hygraph", "FaceAPI", "JavaScript", "CSS"]
    },

    {
        title: "Smart Contract Based Farming System",
        image: SmartFarming,
        description: `Developed a decentralized farming agreement platform where buyers can select a farmer, review agreement terms, and trigger a blockchain-based smart contract deployment. Integrated with a React frontend and Ganache for local Ethereum blockchain simulation. On agreement approval, a smart contract is automatically created and the contract address is displayed to the user. This system enhances trust, transparency, and automation in agricultural trade, eliminating the need for intermediaries.`,
        technologies: ["Solidity", "React.JS","Node.JS", "MongoDB","Express.JS","MetaMask", "Ganache", "Ethereum", "JavaScript", "Web3.js"]
    },
     
    {
        title:"E-Commerce Website",
        image: eco,
        description : `Developed a full-stack e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform features a user-friendly interface for browsing and purchasing products, secure user authentication, and a scalable backend for managing inventory and orders. Integrated payment gateway and optimized for performance, the site provides a seamless shopping experience.`,
        technologies : ["React JS","Node JS","Express Js","MongoDB"]
    },

    {
        title:"Electric transformer health monitoring by mobile embedded system(IoT)",
        image: IOT,
        description : `Developed a mobile embedded system for transformer health monitoring, addressing the limitations of traditional methods that rely on manual inspections. The system utilizes advanced sensor technology to continuously monitor critical parameters such as temperature, oil quality, and load current. Data is wirelessly transmitted to a central monitoring station for real-time analysis and predictive maintenance. With a user-friendly interface, operators can access health status updates and alerts remotely, enhancing fault detection, reducing downtime, and optimizing maintenance strategies.`,
        technologies : ["Aurdino","Firebase","IoT","HTML","CSS","Javascript"]
    },
]

export const CONTACT = {
    address : "13/2 Madukkari, Coimbatore - 641105, TamilNadu ",
    phone : 6383322781,
    email : "hemanthsiet05@gmail.com"
};