import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav style={{}} className="bg-cyan-300 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start h-16">
            <div className="flex-shrink-0 grow">
              <Link to="/">
                {" "}
                <img
                  src="https://image.freepik.com/free-vector/green-eco-logo-icon_126523-706.jpg"
                  alt=""
                  className="h-16 w-24"
                />
              </Link>
            </div>{" "}
            <div className="flex flex-shrink-0 grow items-start justify-start">
              <div className="hidden md:block">
                <div className="ml-10 flex items-center justify-center space-x-4">
                  <div></div>
                  <div>
                    <Link
                      to="/"
                      className=" hover:bg-blue-300  text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>

                    <Link
                      to="/solutions"
                      className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Solutions
                    </Link>

                    <Link
                      to="/blog"
                      className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Blog
                    </Link>
                    <Link
                      to=""
                      className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>

                    <Link
                      to="/"
                      className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>

                    <Link
                      to="/"
                      // onClick={handleLogOut}
                      className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </Link>

                    <Link
                      to="/login"
                      className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: text-gray-800 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center"
              >
                <Link
                  to="/"
                  className="hover:bg-blue-300  text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/solutions"
                  className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Solututions
                </Link>
                <Link
                  to="/"
                  className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Resume
                </Link>

                <Link
                  to="/"
                  className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>

                <Link
                  to="/"
                  // onClick={handleLogOut}
                  className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </Link>

                <Link
                  to="/login"
                  className="text-gray-800 hover:bg-blue-300 hover: text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
