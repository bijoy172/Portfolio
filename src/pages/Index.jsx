import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Course from "./Course";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSlider from "./LeftSlider";
import CopyRight from "../components/CopyRight";
import Loader from "../components/Loader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      <Header />
      {!isLoading ? (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experience />
          <Project />
          <Course />
          <Contact />
          <Footer />
          <LeftSlider />
          <CopyRight />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Index;
