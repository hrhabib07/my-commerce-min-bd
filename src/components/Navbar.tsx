const Navbar = () => {
  return (
    <>
      <div className="flex justify-between my-4">
        <div>
          <h2 className="text-xl font-bold">Commerce min BD</h2>
        </div>
        <div>
          <nav>
            <ul className="flex gap-4 items-center">
              <li className="border-b-2 border-transparent hover:border-b-2 hover:border-green-600 hover:bg-gray-100 p-2">
                About Us
              </li>

              <li className="border-b-2 border-transparent hover:border-b-2 hover:border-green-600 hover:bg-gray-100 p-2">
                Office
              </li>
              <li className="border-b-2 border-transparent hover:border-b-2 hover:border-green-600 hover:bg-gray-100 p-2">
                Projects
              </li>
              <li className="border-b-2 border-transparent hover:border-b-2 hover:border-green-600 hover:bg-gray-100 p-2">
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
