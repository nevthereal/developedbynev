import React from "react";

const ProjectPanel = ({ project }) => {
  return (
    <div
      className='bg-white text-black p-4 border-2 rounded-2xl border-nevBlue my-4'
      key={project.name}
    >
      <h1 className='font-bold text-2xl font-[Montserrat]'>{project.name}</h1>
      <p className='text-gray-800 mt-2'>{project.description}</p>
      <div className='mt-2'>
        <h3 className='text-sm font-semibold'>Technologies (Front-End):</h3>
        <ul className='text-sm list-disc list-inside'>
          {project.technologies.map((technology, index) => {
            return <li key={index}>{technology}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-6 justify-center mt-2'>
        <button className='bg-nevBlue border-2 shadow-lg px-4 py-2 text-xl font-bold rounded-2xl'>
          <a href={project.webLink}>Website</a>
        </button>
        <button className='bg-nevBlue border-2 shadow-lg px-4 py-2 text-xl font-bold rounded-2xl'>
          <a href={project.githubLink}>GitHub</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectPanel;
