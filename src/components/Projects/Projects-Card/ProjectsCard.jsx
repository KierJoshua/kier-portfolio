import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ProjectsCard = (props) => {
  return (
    <div className="card card-compact w-96 shadow-xl z-0 h-[60vh] bg-slate-950 text-white">
      <figure>
        <img src={props.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.info}</p>
        <div className="card-actions justify-end">
        
          <button className="btn btn-ghost" title="Watch on youtube">
            <a href={props.githubLink} target="_blank"><h1 className="text-3xl"><FaGithub/></h1></a>
          </button>

          <button className="btn btn-ghost" title="Watch on youtube">
            <a href={props.link} target="_blank"><h1 className="text-3xl"><MdNavigateNext /></h1></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
