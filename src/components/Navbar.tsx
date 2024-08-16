import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navItems = [
    {
      navItem: "About Us",
      item: [
        {
          title: "About Ministry",
          options: [
            "Commerce Ministry History",
            "Mission and Vision",
            "Secretary list",
            "Members of the Standing Committee",
            "Organogram",
            "Allocation of Business",
            "Success and achievement",
          ],
        },
        {
          title: "Employee",
          options: [
            "Officers",
            "Work Distribution",
            "Information Officer",
            "GRS Officer",
            "Appellate Officer",
            "Focal Point Officers",
          ],
        },
        {
          title: "Services",
          options: [
            "Citizen Charter",
            "List of Citizen e-Services",
            "Business Fair",
          ],
        },
      ],
    },
    {
      navItem: "Office",
      item: [
        {
          title: "Attached Department",
          options: [
            "Bangladesh Trade and Tariff Commission",
            "Export Promotion Bureau",
            "Trading Corporation of Bangladesh",
            "Directorate Of National Consumer Rights Protection",
            "Office of the Registrar of Joint Stock Companies and Firms",
            "Office of Chief Controller of Imports and Exports (CCI&E)",
          ],
        },
        {
          title: "More Department",
          options: [
            "Bangladesh Tea Board",
            "Bangladesh Competition commission",
            "Bangladesh Foreign Trade Institute",
            "Business Promotion Council",
            "The Institute of Cost and Management Accountants of Bangladesh",
            "The Institute of Chartered Accountants of Bangladesh",
            "Institute of Chartered Secretaries of Bangladesh",
          ],
        },
      ],
    },
    {
      navItem: "Projects",
      item: [
        {
          title: "Running",
          options: ["Running Project"],
        },
        {
          title: "Completed",
          options: ["Completed Project"],
        },
      ],
    },
    {
      navItem: "Contact",
      item: [
        {
          title: "Contact",
          options: ["Office Address"],
        },
        {
          title: "Comments",
          options: ["Your Question and Comments"],
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex md:flex-row-reverse justify-between my-4">
        <div>
          <h2 className="text-xl font-bold">
            <span className="rounded">
              <span className="ml-2 text-green-700">
                Commerce Ministry of Bangladesh
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
              <div className="absolute top-0 left-[-4.5rem] z-10">
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
                      {navItems.map((navItem, index) => (
                        <li
                          key={index}
                          onClick={() => setShowNavbar(!showNavbar)}
                          className="p-2"
                        >
                          {navItem.navItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <nav className="">
            <ul className="hidden md:flex gap-4 items-center">
              {navItems.map((navItem, index) => (
                <li
                  key={index}
                  className="relative border-b-2 text-green-700 cursor-pointer border-transparent hover:border-b-2 hover:border-red-600 hover:bg-gray-100 p-2"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {navItem.navItem}
                  {hoverIndex === index && (
                    <div className="w-96 absolute top-full left-0 bg-white shadow-md mt-2 z-10 grid grid-cols-2 p-4">
                      {navItem.item.map((subItem, subIndex) => (
                        <div key={subIndex} className="">
                          <div className="">
                            <h3 className="font-semibold">{subItem.title}</h3>
                            <ul>
                              {subItem.options.map((option, optIndex) => (
                                <li
                                  key={optIndex}
                                  className="p-1 hover:bg-gray-200"
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
