import React from "react";
import Project1 from "./project-1/Project1";
import Project2 from "./project-2/Project2";
const Project = () => {
  return (
    <div id="project" className=" h-auto lg:my-28 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-[#0D5469]">{"My work's"}</h2>
        <p className="text-xs mt-2">
          {
            "Explore some of the projects I've built, showcasing my skills and creativity in web development."
          }
        </p>
      </div>

      

      <Project1/>
      <Project2/>
    </div>
  );
};

export default React.memo(Project);
