import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 hover:opacity-100 flex-shrink-0
    w-[500px] h-[375px] md:-scroll-mt-10 md:w-[600px] md:h-[385px] lg:h-[400px] 
    lg:mt-10 snap-center bg-[#292929] p-10 
    opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full shrink-0 object-cover
        object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-20 md:px-10 scrollbar scrollbar-thumb-rounded-md scrollbar-track-gray-400/20
      scrollbar-thumb-[#8696bc]/80">
        <h4 className="text-3xl font-light">Freelance Web Developers</h4>
        <p className="font-bold text-2xl mt-1">ASDP devs</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full object-cover"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>

        <p className="uppercase py-5">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 max-h-60 text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
