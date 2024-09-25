import logo from "../assets/Navlog.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaHackerrank} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 h-7 "   src={logo} alt=""/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/hemanths5/" target="_blank">
            <FaLinkedin/>
            </a>
            <a href="https://github.com/Hemanths05" target="_blank">
            <FaGithub/>
            </a>
            <a href="https://www.hackerrank.com/profile/hemanthsiet05" target="_blank" >
            <FaHackerrank/>
            </a>
            <a href="https://leetcode.com/u/PRUZirrN7u/" target="_blank">
            <img  width={24} height={24} src="https://leetcode.com/favicon.ico"
             alt="LeetCode"/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar
