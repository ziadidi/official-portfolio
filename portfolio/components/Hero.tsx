import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<h1> Hi, I'm Diane Pucci </h1>",
      "<h1> Hola, Soy Diane Pucci </h1>",
      "<h1> Ciao, Sono Diane Pucci </h1>",
      "<p> Junior Software Engineer | Graphic Designer </p>",
    ],
    loop: true,
    typeSpeed: 40,
    delaySpeed: 1000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        src="https://i.postimg.cc/0NRyRYvR/port.jpg"
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-slate-500 pb-2 tracking-[12px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl text-[#7FB3D5] lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#16C762" />
        </h1>

        <div className="pt-5">
            <Link href="#about">
            <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
