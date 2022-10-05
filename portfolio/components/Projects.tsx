import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col 
    text-leftmd:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-[#8696bc]
         text-2xl"
      >
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
         snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-rounded-md scrollbar-track-gray-400/20
         scrollbar-thumb-[#adccf3]/80"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
          items-center justify-center p-16 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className="w-[40%] mt-[10px] xl:w-[25%] "
            />
            <div className="space-y-6 px-0 md:px-10 max-w-4xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#82a0ff]/80">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {" "}
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10 object-cover"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>

              <p className="mb-[70px] text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#adccf3]/30
         left-0 h-[500px] -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
