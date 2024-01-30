import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const initApp = () => {
      const hamburgerBtn = document.getElementById("hamburger-button");
      const mobileMenu = document.getElementById("mobile-menu");

      const handleOutsideClick = () => {
        // if (mobileMenu.contains(event.target)) return;
        setMobileMenuOpen(false);
      };

      hamburgerBtn.addEventListener("click", toggleMenu);
      document.addEventListener("click", handleOutsideClick);

      return () => {
        hamburgerBtn.removeEventListener("click", toggleMenu);
        document.removeEventListener("click", handleOutsideClick);
      };
    };

    initApp();
  }, []);
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-5xl mx-auto p-6 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero" className="flex gap-2 justify-center items-center">
            <img src={logo} alt="" className="max-h-8" />
            <h1>Boniface</h1>
          </a>
        </h1>
        <div>
          <button id="hamburger-button" className="text-3xl md:hidden">
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#hero" className="hover:opacity-90 active:scale-95">
              Home
            </a>
            <a href="#skills" className="hover:opacity-90">
              Skills
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`absolute top-0 bg-teal-700 w-full text-2xl flex-col justify-content-center origin-top animate-open-menu ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <button className="text-5xl self-end px-6">&times;</button>
        <nav className="flex flex-col min-h-screen items-start px-8 py-4">
          <a href="#hero" className="w-full py-6 hover:opacity-90">
            Home
          </a>
          <a href="#skills" className="w-full  py-6 hover:opacity-90">
            Skills
          </a>
          <a href="#testmonials" className="w-full  py-6 hover:opacity-90">
            Testmonials
          </a>
          <a href="#contact" className="w-full py-6 hover:opacity-90">
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
