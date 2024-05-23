import React, { useState } from "react";
import course from "../resources/course.json";
import SectionTitle from "../components/SectionTitle";

const Course = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Courses" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-2/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {course.map((course, index) => (
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
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10  sm:flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {course[selectedItemIndex].title1}
            </h1>

            <p className="text-white">
              {course[selectedItemIndex].description}
            </p>
          </div>
          <img
            src={course[selectedItemIndex].image}
            alt="img"
            className="h-[160px] w-[280px] rounded sm:h-[180px] sm:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
