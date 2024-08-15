import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <div className="flex justify-between my-4">
        <div>
          <h2 className="text-xl font-bold">
            <span className="  rounded">
              <span className=" ml-2 text-green-700">
                Commerce ministry of Bangladesh
              </span>
            </span>
          </h2>
        </div>
        <div>
          <div className="lg:hidden me-2 relative">
            {!showNavbar && (
              <button onClick={() => setShowNavbar(!showNavbar)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            )}
            {showNavbar && (
              <div className="absolute top-0 left-[-4.5rem]  z-10">
                <div className="">
                  <div className="flex justify-end bg-transparent mb-4">
                    <button onClick={() => setShowNavbar(!showNavbar)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-gray-900 text-white">
                    <ul className="flex flex-col justify-start">
                      <li
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="p-2"
                      >
                        About
                      </li>

                      <li
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="p-2"
                      >
                        Office
                      </li>
                      <li
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="p-2"
                      >
                        Projects
                      </li>
                      <li
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="p-2"
                      >
                        Contact
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <nav className="">
            <ul className="hidden md:flex gap-4 items-center">
              <li className="border-b-2 text-green-700 cursor-pointer border-transparent hover:border-b-2 hover:border-green-600 hover:bg-gray-100 hover:text-red-600 p-2 ">
                About Us
              </li>

              <li className="border-b-2 text-green-700 cursor-pointer border-transparent hover:border-b-2  hover:border-green-600 hover:bg-gray-100 p-2  hover:text-red-600">
                Office
              </li>
              <li className="border-b-2 text-green-700 cursor-pointer border-transparent hover:border-b-2  hover:border-green-600 hover:bg-gray-100 p-2  hover:text-red-600">
                Projects
              </li>
              <li className="border-b-2 text-green-700 cursor-pointer border-transparent hover:border-b-2  hover:border-green-600 hover:bg-gray-100 p-2  hover:text-red-600">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
