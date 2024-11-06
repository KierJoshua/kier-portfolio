import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import PageTitles from "../../PageTitles";
import samplePic from "../../images/sample.png";

const Projects = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="min-h-screen bg-slate-900 pb-5" id="projects">
      <PageTitles name="Projects" />
      <div className="container mx-auto w-full flex justify-center gap-40 flex-wrap" data-aos="fade-up" data-aos-duration = '1000'>
        <ProjectsCard
          image={samplePic}
          title="Project 1"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          githubLink=""
        />
        <ProjectsCard
          image={samplePic}
          title="Project 2"
          info="Another project description here."
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            githubLink=""
        />
        <ProjectsCard
          image={samplePic}
          title="Project 3"
          info="Yet another project description."
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            githubLink=""
        />

        {isClicked && (
          <>
            <ProjectsCard
              image={samplePic}
              title="Project 4"
              info="Another project description here."
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                githubLink=""
            />
            <ProjectsCard
              image={samplePic}
              title="Project 5"
              info="Yet another project description."
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                githubLink=""
            />
          </>
        )}
      </div>
      <div className="flex justify-center">
        <a
           className={`btn btn-info text-white mt-5 transition-transform duration-300 transform ${
            isClicked ? "rotate-180" : ""
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          {isClicked ? "See Less" : "View More"}
        </a>
      </div>
    </div>
  );
};

export default Projects;
