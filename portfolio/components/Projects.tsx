import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col 
    text-leftmd:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-slate-500
         text-2xl"
      >
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
         snap-x snap-mandatory z-20"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
             initial={{ 
                y: -300,
                opacity: 0,
             }}
             transition={{ duration: 1 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
              src="https://cdn.discordapp.com/attachments/947981440530911263/1026100894628069427/PngItem_1404966.png"
              className="w-[60%] xl:w-[45%]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#2471A3]/80">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                Pistachogram
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                aliquam facere perferendis eveniet dolorum sapiente nam aperiam
                tempore corrupti ratione magnam, molestias itaque laudantium qui
                exercitationem, ipsam ea Fuga.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#2b7eb6]/10
         left-0 h-[500px] -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
