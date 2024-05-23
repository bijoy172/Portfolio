import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import project from "../resources/project.json";

const Project = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-2/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {project.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] rounded bg-[#1a7f5a31] py-3 h-[50px] w-[240px]"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10  sm:flex-col">
          <img
            src={project[selectedItemIndex].image}
            alt="img"
            className="h-[160px] w-[280px] rounded sm:h-[180px] sm:w-[300px]"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {project[selectedItemIndex].title}
            </h1>

            <p className="text-white">Technologies: </p>
            <p className="text-tertiary">
              {project[selectedItemIndex].technologies}
            </p>
            {/* <p className="text-white flex flex-row gap-8 sm:grid sm:grid-cols-3">
              {projects[selectedItemIndex].technologies.map((tech, index) => (
                <p key={index} className="bg-tertiary rounded p-2 text-[12px] ">
                  {tech}
                </p>
              ))}
            </p> */}

            <p className="text-white">
              {project[selectedItemIndex].description}
            </p>

            <a
              href={project[selectedItemIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-blue-500 "> 🎬 Live Demo 🍿</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
