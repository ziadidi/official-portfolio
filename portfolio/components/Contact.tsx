import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dianepucci19@gmail.com?subject=${formData.subject}&body=Hello, my name is
     ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div
      className="h-screen flex relative flex-col text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-slate-500
         text-2xl"
      >
        Contact
      </h3>
      <div className="mt-[80px] flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need.
          <span className="underline decoration-[#2471A3]/80">
            Let's have a chat!
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#2471A3] animate-pulse" />
            <p className="text-2xl">+65436543654</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#2471A3] animate-pulse" />
            <p className="text-2xl">dianepucci19@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#2471A3] animate-pulse" />
            <p className="text-2xl">Adeje, Santa Cruz de Tenerife</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
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
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#2471A3] py-5 px-10 rounded-md text-black
          font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
