import profilePicture from "../assets/dava.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>DAVA CRISTOVEL</h3>
        <p>PROGRAMMING</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/nainggolan_321/?utm_source=qr&igsh=MWd3djBvdHF3M2pvZw%3D%3D#">
            <FaInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
