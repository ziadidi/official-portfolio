import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
<motion.div
    initial={{opacity:0}}
    whileInView={{ opacity: 1,}}
    transition={{duration:2}}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className=" absolute top-24 uppercase tracking-[20px] text-slate-500
      text-2xl"
      >
        About
      </h3>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        src="https://cdn.discordapp.com/attachments/947981440530911263/1020674440113164420/post3.jpeg"
        className="mt-40 mr-[12px] mb-18 md:my-0 flex-shrink-0 w-56 h-56 rounded-full
      object-cover md:rounded-lg md:w-60 md:h-[260px] xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-teal-500">little</span>{" "}
          background: ;
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nihil voluptates, quos eum consectetur earum aspernatur exercitationem
          aperiam at, ea nesciunt optio. Cumque quidem, repellat placeat dolorem
          quam labore laudantium?
        </p>
      </div>
    </motion.div>
  );
}

export default About;
