import React, { useState, useEffect } from "react";
import { MdMenu, MdAccountCircle, MdClose } from "react-icons/md";
import logo from "../../assets/logo.png";

import Content from "../HeroSection/Content";
import RegisterSlide from "../HeroSection/RegisterSlide";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Help", link: "/Help" },
  { id: 3, title: "ContactUs", link: "/ContactUs" },
  { id: 4, title: "Logout", link: "/Logout" },
];

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <>
      <div className="min-h-[1000px]">
        <div className="relative min-h-[700px] bg-[url('/src/assets/mainbuilding.jpg')] bg-cover bg-no-repeat bg-center text-white">
          <div className="absolute inset-0 bg-blue-500/40"></div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              className="relative block w-full h-32 sm:h-40"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
            >
              {/* U-shaped path */}
              <path
                d="M0,200 
                   C0,100 0,100 0,0 
                   Q600,200 1200,0 
                   C1200,100 1200,100 1200,200 
                   Z"
                className="fill-white"
              ></path>
            </svg>
          </div>

          <nav
            className={`fixed top-0 left-0 w-full z-50 ${
              isScrolled ? "bg-darkBlue shadow-lg" : "bg-transparent"
            }`}
          >
            <div className="flex justify-between items-center min-h-[100px] px-4 sm:px-6 lg:px-8">
              {/* Logo */}
              <div className="flex items-center">
                <a href="#" className="flex items-center space-x-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                  <span className="text-white font-normal text-sm md:hidden lg:block">
                    University of Computer Studies Mandalay
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <ul className="flex items-center gap-4 text-white font-semibold">
                  {NavbarMenu.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className="inline-block text-sm py-2 px-3 uppercase hover:text-blue-400 transition-colors duration-300"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Account Name */}
                <div className="flex items-center ml-6">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-white"
                  >
                    <MdAccountCircle className="text-2xl" />
                    <span className="text-sm sm:text-base font-medium">
                      AccountName
                    </span>
                  </a>
                </div>
              </div>

              {/* Mobile Menu Icon */}
              <div className="md:hidden flex items-center justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-white p-2 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <MdClose className="text-4xl" />
                  ) : (
                    <MdMenu className="text-4xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu List - appears as dropdown */}
            {isMenuOpen && (
              <div
                data-aos="slide-down"
                className="md:hidden bg-darkBlue shadow-lg text-xs"
              >
                <ul className="flex flex-col text-center items-center py-1 justify-center">
                  {NavbarMenu.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        onClick={handleNavClick}
                        className="flex items-center px-6 py-3 text-lg font-medium  transition-all duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  {/* Account section in mobile menu */}
                  <li className="px-6 py-3 border-t border-white/10">
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-lg font-medium"
                    >
                      <MdAccountCircle className="text-2xl" />
                      <span>AccountName</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>

          <RegisterSlide />
        </div>

        <div className="bg-white">
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
