import React from "react";
import { projectList } from "../projectList";

const Work = () => {
  return (
    <div className='m-6'>
      <h1 className='text-4xl font-bold font-[Montserrat] bt-4'>My Work:</h1>
      {projectList.map((project) => {
        return (
          <div
            className='bg-white p-3 border rounded-2xl border-gray-400 my-4'
            key={project.name}
          >
            <h1 className='font-bold text-2xl text-black'>{project.name}</h1>
            <p className='text-gray-800 mt-2'>{project.description}</p>
            <div className='flex gap-6 justify-center text-black mt-2'>
              <button className='bg-nevBlue shadow-lg shadow-nevBlue/75 px-4 py-2 text-xl font-bold rounded-2xl'>
                <a href={project.webLink}>Website</a>
              </button>
              <button className='bg-nevBlue shadow-lg shadow-nevBlue/75 px-4 py-2 text-xl font-bold rounded-2xl'>
                <a href={project.githubLink}>GitHub</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
