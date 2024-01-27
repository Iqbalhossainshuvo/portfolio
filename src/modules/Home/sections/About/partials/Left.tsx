import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
//
import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        <p>
          Greetings, <br />Hello! I am Iqbal Hossain, As a professional with expertise in full-stack development, MERN Stack development, software development, SEO, digital marketing, UI/UX design, graphic design, and IT specialization, I bring a holistic approach to every project. My goal is to deliver comprehensive and effective solutions that positively impact the digital landscape.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className="__skills md:pr-60">
          <ul className="grid grid-cols-1 space-y-2">
            {skills.map((e: string, i: number) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
