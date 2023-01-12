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
          Greetings, <br />I am Md. Iqbal Hossain. currently focused on Full
          stack web development. Learning and practicing React and other
          frontend tools and technology like Redux, Material UI, Typescript etc.
          I always ensure my skills are kept up to date within this rapidly
          changing industry. Besides I am familiar with backend web technology
          like Node, Express MongoDB and MySQL.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2">
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
