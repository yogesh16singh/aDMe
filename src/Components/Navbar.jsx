import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const OpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex bg-white justify-center w-full m-0">
      <div className=" ml-3 flex-1  p-4  mt-4 mb-2">
        <h2 className="font-bold">aDMe</h2>
      </div>
      <div className="flex flex-col  md:flex-row md:h-16   p-4  mt-2 mb-2 rounded-[25px] w-full justify-center items-center ">
        <div className="flex flex-row">
          <div className="mt-1 mr-3 ml-4 md:hidden " onClick={OpenMenu}>
            <IoMdMenu size={25} />
          </div>
        </div>

        <div
          className={` md:flex md:flex-row md:space-x-7 md:mt-2 md:text-xl md:font-light mr-8 ${
            menuOpen ? "" : "hidden"
          }`}
        >
          Image Gallery
        </div>
      </div>
    </div>
  );
};

export default Navbar;
