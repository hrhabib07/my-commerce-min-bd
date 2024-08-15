const Navbar = () => {
  return (
    <>
      <div className="flex justify-between my-4">
        <div>
          <h2 className="text-xl font-bold">
            <span className="  rounded">
              <span className=" ml-2 custom-text">
                Commerce ministry of Bangladesh
              </span>
            </span>
          </h2>
        </div>
        <div>
          <nav>
            <ul className="flex gap-4 items-center">
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
