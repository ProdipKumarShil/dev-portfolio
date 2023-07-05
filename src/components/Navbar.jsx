import { useState } from "react";
import { CgMenuRight, CgMenuRightAlt } from "react-icons/cg";


const navItems = <>
  <li><a>Home</a></li>
  <li><a>Skills</a></li>
  <li><a>Projects</a></li>
  <li><a>About Me</a></li>
  <li><a>Contact With Me</a></li>
</>

const Navbar = () => {

  

  return (
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">PK</a>
      </div>
      <div className="flex-none hidden md:inline">
        <ul className="menu menu-horizontal px-1 ">
          {navItems}
        </ul>
      </div>
      {/* <div onClick={handleMenu} className="flex-none md:hidden cursor-pointer active:scale-95 hover:bg-zinc-300 rounded-lg">
        {menu ? <CgMenuRightAlt className="scale-150 m-4" /> : <CgMenuRight className="scale-150 m-4" />}
      </div> */}
      {/* <div className="relative">
        {
          !menu && <div className="absolute md:hidden -right-2 top-8 p-4 rounded-lg bg-green-500 transition ease-in-out delay-150 ">
          <ul className="menu menu-horizontal px-1 md:hidden inline-block">
            {navItems}
          </ul>
        </div>
      }
      </div> */}
      <div className="drawer drawer-end md:hidden justify-end z-10">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn  "> <CgMenuRightAlt className="text-xl"/> </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {navItems}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;