import React from "react";
import img from "./images/my-pic.jpg";
import PageTitles from "./PageTitles";

const About = () => {
  const myPic = {
    width: "50%",
    height: "50vh",
    backgroundImage: `url(./images/my-pic.jpg)`,
  };
  return (
    <section id="about" className="min-h-screen">
      <div className="bg-slate-900">
        <PageTitles name="About" />
        <div className="container flex flex-col-reverse lg:flex-row h-screen mx-auto">
          <div
            className="details flex justify-center items-center lg:w-3/6 my-8 lg:mt-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-xl lg:text-3xl text-center text-white">
              {/* I am a recent graduate from the City College of Calamba, 
                holding a Bachelor of Science degree in Information Technology. 
                I'm currently a front-end developer with a strong commitment 
                to expanding my skills and growing into a full-stack developer 
                through consistent learning and hands-on experience. */}
              Hello! I’m Kier Joshua Du, a Bachelor of Science in Information
              Technology student at City College of Calamba, currently in my
              final year. I’m passionate about web development and actively
              seeking an internship to gain hands-on experience and contribute
              my growing skill set. With a solid foundation in front-end
              development, I’m eager to apply and expand my skills in a dynamic
              and collaborative environment.
            </h1>
          </div>

          <div
            className="my-pic flex justify-center lg:w-3/6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={img}
              alt=""
              className="h-[50vh] md:h-[80vh] w-auto rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
