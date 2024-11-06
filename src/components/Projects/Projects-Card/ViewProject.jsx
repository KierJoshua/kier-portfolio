import React from "react";
import PageTitles from "../../PageTitles";
import sampleImage from "../../images/sample.png";

const ViewProject = (props) => {
  return (
    <div className="bg-slate-900 pt-5">
      <PageTitles name="Project 1" />

      <div className="flex flex-col mx-auto w-full container h-full bg-gray-900 text-white p-8 space-y-8">
        {/* First Project Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <img
              src={sampleImage}
              alt="Project Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              mollitia minima quo ipsam voluptatibus voluptatum tempore neque at
              porro corrupti.
            </p>
          </div>
        </div>

        {/* Second Project Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 w-full mt-4 md:mt-0">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              explicabo voluptatibus porro laudantium illum cupiditate quam!
              Inventore incidunt officiis ad explicabo.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src={sampleImage}
              alt="Project Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <img
              src={sampleImage}
              alt="Project Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              mollitia minima quo ipsam voluptatibus voluptatum tempore neque at
              porro corrupti.
            </p>
          </div>
        </div>

        {/* Second Project Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 w-full mt-4 md:mt-0">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              explicabo voluptatibus porro laudantium illum cupiditate quam!
              Inventore incidunt officiis ad explicabo.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src={sampleImage}
              alt="Project Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
