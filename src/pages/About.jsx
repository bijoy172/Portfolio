import React from "react";
import about from "../resources/about.json";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  const { lottieURL, description1, description2, skills } = about;
  // "skills": ["JavaScript", "React", "Node", "Express", "MongoDB", "Firebase"]
  return (
    <div>
      <SectionTitle title="About Me" />

      <div className="flex sm:flex-col w-full items-center">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            loop
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 text-white w-1/2 sm:w-full">
          <p>{description1 || ""}</p>
          <p>{description2 || ""}</p>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-tertiary text-xl ">
          Technologies that I've been working with recently:
        </h1>
        {/* <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-tertiary px-10  py-3 rounded-lg"
            >
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div> */}
        {/* //////////// */}
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-tertiary px-10  py-3 rounded-lg gap-10 mt-5 h-[15vh] w-[20vh]"
            >
              <dotlottie-player
                src={skill}
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
