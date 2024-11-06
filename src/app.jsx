  import resume from "./components/File/RESUME.pdf";
  import "./app.css";
  import Home from "./components/Home";
  import About from "./components/About";
  import ContactMe from "./components/ContactMe";
  import { BrowserRouter } from "react-router-dom";
  import { HashLink as Link } from "react-router-hash-link";
  import { FaSun, FaMoon } from "react-icons/fa";
  import { useState } from "react"; // 
  import { FaFilePdf } from "react-icons/fa6";
  import NewTechSkills from "./components/NewTechSkills";
  import TryCarousel from "./components/TryCarousel";

  export function App() {
    // State to track the active link
    const [activeLink, setActiveLink] = useState("#home");
    const [isClicked, setIsClicked] = useState(false)

    const handleThemeToggle = () => {
      setIsClicked(!isClicked);
      if (!isClicked) {
        // Set to dark theme
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        // Set to light theme
        document.documentElement.setAttribute('data-theme', 'light');
      }
    };

    const menu = ["home", "about", "skills", "contact"];


    return (
      <BrowserRouter>
        <div className="bg-slate-900 h-screen w-full">
          <div className="navbar bg-slate-950 text-light-blue fixed z-10">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
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
                  {menu.map(section => (
                    <li key={section}>
                      <Link
                        to={`#${section}`}
                        className={`hover:bg-light-blue hover:text-white transition duration-200 ${activeLink === `#${section}` ? "text-white bg-light-blue" : ""}`} // Apply active class
                        smooth
                        onClick={() => setActiveLink(`#${section}`)} // Set active link on click
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl text-white">
                Kier <span className="text-light-blue">Dev</span>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-2">
                {menu.map(section => (
                  <li key={section}>
                    <Link
                      to={`#${section}`}
                      className={`hover:bg-light-blue hover:text-white transition duration-200 ${activeLink === `#${section}` ? "text-white bg-light-blue" : ""}`} // Apply active class
                      smooth
                      onClick={() => setActiveLink(`#${section}`)} // Set active link on click
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end ">
              {/* <a
                className="btn btn-outline btn-light-blue text-light-blue hover:bg-light-blue text-xl"
                // download="Resume"
                // href={resume}
                onClick={handleThemeToggle}
              >
                {isClicked ? <FaSun />: <FaMoon />}
              </a> */}
              <a href={resume} download="Resume" className="btn btn-outline btn-light-blue text-light-blue hover:bg-light-blue text-xl"><FaFilePdf /></a>
            </div>
          </div>
          <Home />
          <About />
          {/* <Projects /> */}
          <NewTechSkills />
          <ContactMe />

        </div>
      </BrowserRouter>
    );
  }
