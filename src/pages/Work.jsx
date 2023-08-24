import React from "react";

const projectList = [
  {
    name: "Portfolio",
    description:
      "My newest Porfolio stacked with a modern and responsive design.",
    githubLink: "https://github.com/nevthereal/portfolio",
    webLink: "https://nevillebrem.com",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Framer Motion",
      "typed.js",
      "React-Intersection-Observer",
      "Font Awesome",
    ],
  },
  {
    name: "Wolffe Bricks",
    description:
      "Wolffe Bricks is an online shop, where I sell LEGO designs made by a friend on.",
    githubLink: "https://github.com/nevthereal/wolffebricks",
    webLink: "https://wolffebricks.store",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Font Awesome",
      "React-Router-DOM",
    ],
  },
  {
    name: "Blog",
    description:
      "I made this blog to learn Firebase and create all the functionalities for a Blog.",
    githubLink: "https://github.com/nevthereal/blog",
    webLink: "https://blog.nevillebrem.com",
    technologies: ["React JS", "Tailwind CSS", "React-Router-DOM"],
  },
  {
    name: "Henrik Olsson",
    description:
      "I kindof tried to make a creative and somewhat vintage-looking website here",
    githubLink: "https://github.com/nevthereal/henrik-olsson",
    webLink: "https://henrik-olsson-nevillebrem.netlify.app",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Framer-Motion",
      "React-Intersection-Observer",
    ],
  },
  {
    name: "Old Portfolio",
    description:
      "I made this portfolio in an old vintage style. Back then I only used vanilla CSS without any frameworks.",
    githubLink: "https://github.com/nevthereal/wolffebricks",
    webLink: "https://old.nevillebrem.com",
    technologies: ["Font Awesome"],
  },
];

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

const Work = () => {
  return (
    <div className='m-6'>
      <h1 className='text-4xl font-bold font-[Montserrat] bt-4'>My Work:</h1>
      {projectList.map((project) => {
        return <ProjectPanel key={project.name} project={project} />;
      })}
    </div>
  );
};

export default Work;
