import {  CgMenuRightAlt } from "react-icons/cg";
import { HashLink } from "react-router-hash-link";

const navItems = <>
  <li><HashLink smooth to="/">Home</HashLink></li>
  <li><HashLink smooth to="#skills">Skills</HashLink> </li>
  <li><HashLink smooth to="#about">About Me</HashLink></li>
  <li><HashLink smooth to="#projects">Projects</HashLink></li>
  <li><HashLink smooth to="#contact">Contact With Me</HashLink></li>
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