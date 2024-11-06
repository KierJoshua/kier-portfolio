import React from "react";
import resume from './File/resume.pdf'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar bg-slate-950 text-light-blue fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="hover:bg-light-blue hover:text-white transition duration-300">Home</a>
            </li>
            <li>
              <a className="hover:bg-light-blue hover:text-white transition duration-300">About</a>
            </li>
            <li>
              <a className="hover:bg-light-blue hover:text-white transition duration-300">Projects</a>
            </li>
            <li>
              <a className="hover:bg-light-blue hover:text-white transition duration-300">Tech Skills</a>
            </li>
            <li>
              <a className="hover:bg-light-blue hover:text-white transition duration-300">Contact Me</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Kier <span className="text-light-blue">Dev</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:bg-light-blue hover:text-white transition duration-200">Home</a>
          </li>
          <li>
            <Link to='/About' className="hover:bg-light-blue hover:text-white transition duration-200">About</Link>
          </li>
          <li>
            <a className="hover:bg-light-blue hover:text-white transition duration-200">Projects</a>
          </li>
          <li>
            <a className="hover:bg-light-blue hover:text-white transition duration-200">Tech Skills</a>
          </li>
          <li>
            <a className="hover:bg-light-blue hover:text-white transition duration-200">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-light-blue text-light-blue hover:bg-light-blue" download="Resume" href={resume}>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
