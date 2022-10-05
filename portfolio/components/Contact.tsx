import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  PhoneIcon,
  GlobeEuropeAfricaIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (furm) => {
    window.location.href = `mailto:antonio.spada.01@gmail.com?subject=${furm.subject}&body=Hi,
     my name is ${furm.name}. ${furm.message}  (${furm.email})`;
  };

  return (
    <div
      className="h-screen flex relative 
    flex-col text-center md:text-left md:flex-row
     px-10 justify-evenly mx-auto items-center "
    >
      <h3
        className="absolute top-24 uppercase
       tracking-[20px] text-slate-500 text-2xl"
      >
        Contact
      </h3>

      <div className=" mt-[170px] flex flex-col justify-center space-y-4">
        <h3 className="text-3xl font-semibold text-center">
          Like what you see?
        </h3>
        <h4
          className="text-2xl text-center font-thin lowercase underline
           decoration-[#154360]"
        >
          let's have a chat.
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#2471A3] h-7 w-7 animate-pulse" />
            <p className="text-1xl">+34 624 687 472 | +39 327 025 9364</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <InboxIcon className="text-[#2471A3] h-7 w-7 animate-pulse" />
            <p className="text-1xl ">dianepucci19@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <GlobeEuropeAfricaIcon className="text-[#2471A3] h-7 w-7 animate-pulse" />
            <p className="text-1xl">Adeje, Santa Cruz, Tenerife</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-6 max-w-[380px] md:max-w-[500px] lg:max-w-[700px]"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="max-w-[49%] contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="max-w-[49%] contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Don't be shy...👉👈 Send a message!"
            className="contactInput"
          />
          <button className="bg-[#154360] text-black py-5 px-10 rounded-md font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
