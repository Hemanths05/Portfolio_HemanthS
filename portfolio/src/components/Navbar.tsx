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
            <FaLinkedin/>
            <FaGithub/>
            <FaHackerrank/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar
