import React, { useState } from "react";
import experience from "../resources/experience.json";
import SectionTitle from "../components/SectionTitle";

const Experience = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-2/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experience.map((exp, index) => (
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
                {exp.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experience[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experience[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experience[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
