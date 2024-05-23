import React from "react";
import intro from "../resources/intro.json";

const Intro = () => {
  const { welcomeText, name, caption, description } = intro;
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        {name || ""}
      </h1>
      <h1 className="text-6xl sm:text-3xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3">{description || ""}</p>

      <a
        href="../src/assets/Resume.pdf"
        download="Resume.pdf"
        className="btn border-2 border-tertiary text-tertiary px-8 py-3 rounded"
      >
        Resume ⤵
      </a>
    </div>
  );
};

export default Intro;
