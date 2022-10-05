import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex relative flex-col text-center 
      md:text-left xl:flex-row max-w-[2000px] xl:px-10
       min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3
        className="absolute top-20 uppercase
       tracking-[20px] text-slate-500 text-2xl"
      >
        skills
      </h3>
      <h3 className="absolute top-28 tracking-[3px] uppercase text-slate-400 text-sm">
        hover over the skills to display{" "}
        <span className="italic lowercase underline">expertise.</span>
      </h3>
      <div className="grid grid-cols-4 gap-5 xl:mt-80">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
