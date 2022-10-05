import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlFor(skill.image).url()}
        className="w-16 h-16 rounded-full object-contain border border-slate-300
         lg:w-18 lg:h-18 transition duration-[300ms] ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
        ease-in-out group-hover:bg-slate-500 h-16 w-16 lg:w-18
        rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
