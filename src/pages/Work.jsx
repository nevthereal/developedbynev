import React from "react";
import ProjectPanel from "../components/ProjectPanel";

const Work = () => {
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

  return (
    <div className='m-6'>
      <h1 className='text-4xl font-bold font-[Montserrat] bt-4'>My Work:</h1>
      {projectList.map((project) => {
        return <ProjectPanel project={project} />;
      })}
    </div>
  );
};

export default Work;
