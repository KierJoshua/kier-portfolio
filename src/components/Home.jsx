import React, { useEffect } from "react";
import SideBarIcons from "./SideBarIcons";
import Aos from 'aos'
import 'aos/dist/aos.css'
import resume from './File/RESUME.pdf'

const Home = () => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <section id="home">
    <div className="flex h-screen max-w-screen-2xl mx-auto justify-between" >
      <div className="flex flex-col justify-center text-light-blue" data-aos="fade-up" data-aos-duration = '1000'>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white">
          Hi! I'm A{" "}
          <span className="text-light-blue font-bold">Front-End Developer</span>{" "}
          , <br />
          That Aims To Be A <br />
          Fullstack Developer!
        </h1>
        <a className="btn btn-info text-white self-start mt-5"    download="Resume"
              href={resume}>Download CV</a>
      </div>
      <SideBarIcons />
    </div>
    </section>
  );
};

export default Home;
