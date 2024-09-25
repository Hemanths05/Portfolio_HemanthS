import { MdDescription } from "react-icons/md";
import hms from "../assets/hms.jpeg";
import IOT from "../assets/IOT.jpeg";
import face from "../assets/face.jpeg";
import eco from "../assets/eco.jpeg";

export const HERO_CONTENT = `As a skilled software developer, I specialize in turning innovative ideas into elegant,
 functional digital solutions. With a deep understanding of both frontend and backend development, I'm adept at 
 bridging the gap between design and functionality, creating experiences that are not only visually appealing but 
 also intuitive and efficient. Let's collaborate to build the future together.`;

export const ABOUT_CONTENT = `I am a passionate software developer with hands-on experience in a wide range of technologies, including HTML,
 CSS, JavaScript, React, Node.js, MySQL, and full-stack development in both the MERN stack and Java.
 Throughout my journey, I have honed strong problem-solving skills, successfully tackling numerous challenges across various projects
As a team lead on several college projects, I have developed leadership and collaboration skills, ensuring successful project delivery. 
I thrive in dynamic environments and am always eager to learn and work on innovative solutions.`;

export const EXPERIENCE = [
    {
        year:"Aug 2024 - Sep 2024",
        role:"Java Development",
        company:"ShadowFox",
        description:"As a Java Development Intern at Shadowfox, I worked with JUnit testing, developed back-end services using Spring Boot, and implemented MySQL connectivity for data management. This role enhanced my skills in Java development and building scalable applications.",
        technologies:["Java","JUnit testing","Spring","JDBC connectivity"]
    },

    {
        year:"July 2024 - Aug 2024",
        role:"Software Engineer Intern",
        company:"HackerRank",
        description:"As a Software Development Intern at HackerRank, I worked on developing web applications using HTML, CSS, and JavaScript. I collaborated with the team on front-end design, debugging, and enhancing user interfaces, gaining valuable experience in building responsive and interactive websites.",
        technologies:["Java","MySQL","HTML","CSS","JS"]
    },
    {
        year:"Sep 2024 - Present",
        role:"IBM Full Stack Software Developer",
        company:"Coursera",
        description:"As a Software Development Intern at Coursera, I applied my skills in cloud computing and software engineering to develop dynamic web applications. I collaborated closely with the team on front-end design and enhancing user interfaces, gaining valuable experience in debugging and optimizing performance for a better user experience. This role helped me deepen my understanding of best practices in software development.",
        technologies:["Cloud Computing","Java","Mobile App Developer"]
    },


]

export const PROJECTS = [
    {
        title:"Electric transformer health monitoring by mobile embedded system(IoT)",
        image: IOT,
        description : `Developed a mobile embedded system for transformer health monitoring, addressing the limitations of traditional methods that rely on manual inspections. The system utilizes advanced sensor technology to continuously monitor critical parameters such as temperature, oil quality, and load current. Data is wirelessly transmitted to a central monitoring station for real-time analysis and predictive maintenance. With a user-friendly interface, operators can access health status updates and alerts remotely, enhancing fault detection, reducing downtime, and optimizing maintenance strategies.`,
        technologies : ["Aurdino","Firebase","IoT","HTML","CSS","Javascript"]
    },
    {
        title:"Hospital management system with ambulance booking services",
        image: hms,
        description : `Developed an innovative hospital management system that integrates an embedded mobile device with online ambulance booking. 
        This solution utilizes advanced sensor technology to streamline emergency response, reducing patient waiting times and enhancing healthcare delivery.
        The system transmits vital patient data wirelessly to a central monitoring station, 
        enabling real-time resource optimization and maintaining comprehensive patient records for effective treatment and follow-up care.`,
        technologies : ["PHP","Postgre SQL"]
    },  
    {
        title:"Facial recongnition based attendance system-(FRAS)",
        image: face,
        description : `Developed FRAS, an automated attendance tracking solution using a standard webcam and machine learning algorithms. It achieves high accuracy in diverse lighting conditions and features a scalable database for user data management. With robust security measures for data privacy, FRAS integrates seamlessly with existing software, significantly reducing manual effort and enhancing attendance recording efficiency.`,
        technologies : ["Python","OpenCV"]
    },
    {
        title:"E-Commerce Website",
        image: eco,
        description : `Developed a full-stack e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform features a user-friendly interface for browsing and purchasing products, secure user authentication, and a scalable backend for managing inventory and orders. Integrated payment gateway and optimized for performance, the site provides a seamless shopping experience.`,
        technologies : ["React JS","Node JS","Express Js","MongoDB"]
    },
]

export const CONTACT = {
    address : "13/2 Madukkari, Coimbatore - 641105, TamilNadu ",
    phone : 6383322781,
    email : "hemanthsiet05@gmail.com"
};