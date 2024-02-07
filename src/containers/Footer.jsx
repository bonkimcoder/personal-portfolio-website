import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className="relative bg-teal-700 text-white text-xl">
      <section className="max-w-5xl mx-auto p-6 flex flex-col sm:flex-row sm:justify-between items-center justify-center">
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#skills" className="hover:opacity-90">
            My Skills
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact Me
          </a>
        </nav>
        <div className="flex space-x-6">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>

        <div className="flex flex-col sm:gap-2 text-sm mt-2 gap-2 sm:text-xl">
          <p className="text-right">
            Copyright &copy; <span id="year">{currentYear}</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
      <div className="absolute right-5 top-2" title="Scroll Up">
        <a href="#">
          <IoIosArrowUp size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
