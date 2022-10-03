import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-cover
        object-center"
        src="https://i.postimg.cc/28CyHfmQ/logo.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Freelance Web Developers</h4>
        <p className="font-bold text-2xxl mt-1">ASDP devs</p>
        <div className="flex space-x-2 my-2">
          <img
            src="http://s3.amazonaws.com/gt7sp-prod/decal/20/89/27/5125114039554278920_1.png"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <img
            src="http://s3.amazonaws.com/gt7sp-prod/decal/20/89/27/5125114039554278920_1.png"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />

          <img
            src="http://s3.amazonaws.com/gt7sp-prod/decal/20/89/27/5125114039554278920_1.png"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
