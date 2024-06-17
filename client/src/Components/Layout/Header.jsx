import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/IMG-20240611-WA0100.jpg";
import Girl from "../../assets/1.webp";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isUserMenuOpen1, setIsUserMenuOpen1] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle user dropdown menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  const toggleUserMenu1 = () => {
    setIsUserMenuOpen1(!isUserMenuOpen1);
  };

  return (
    <nav className="bg-white  border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={Logo}
            className="w-full h-32 object-cover"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="border-l-2 border-black h-12 ml-6">
            <ul className="ml-5 pr-6 flex justify-between items-center">
              <li>
                <button className="font-PlayfairDisplay font-bold ">
                  Login
                </button>
              </li>
              <li>
                <button className="bg-black text-white ml-9 py-2 px-7 font-PlayfairDisplay">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={toggleUserMenu}
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isUserMenuOpen ? "true" : "false"}
            aria-controls="user-dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={Girl}
              alt="user photo"
            />
          </button>
          <ul>
            <li>cart(0)</li>
          </ul>
          {/* User Dropdown menu */}
          {isUserMenuOpen && (
            <div
              className="absolute top-20 right-2 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-black shadow-sm dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <NavLink
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          {/* Hamburger menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-label="Open main menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Main navigation links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="#"
                className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:hover:border-b-2 border-black  md:hover:text-[#C0C0C0] md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={toggleUserMenu1}
                className="flex text-sm rounded-full md:me-0"
                id="user-menu-button"
                aria-expanded={isUserMenuOpen1 ? "true" : "false"}
                aria-controls="user-dropdown"
              >
                Discover{" "}
                <span className="text-2xl">
                  <RiArrowDropDownLine />
                </span>
              </button>
              {/* User Dropdown menu */}
              {isUserMenuOpen1 && (
                <div
                  className="absolute top-20 r-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-black shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Policy
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <li>
              <NavLink
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:border-b-2 border-black md:hover:text-[#C0C0C0] md:p-0 dark:text-white md:dark:hover:text-[#C0C0C0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:border-b-2 border-black md:hover:text-[#C0C0C0] md:p-0 dark:text-white md:dark:hover:text-[#C0C0C0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
