import React from "react";

//
import Button from "@components/Button";



const GetInTouch = () => {


  return (
    <section id="contact" className="text-center my-4">
      <h1 className="flex items-center gap-2 text-3xl font-medium text-slate-300 mb-12">
        <span className=" font-mono"> </span>
        What next?
      </h1>

      <h1 className='font-medium text-slate-300 text-4xl text-center mt-5' > Get In Touch </h1>

        <p className='text-slate-400 max-w-[500px] mx-auto my-3 mb-10' >
            I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

      <div className="flex justify-center items-center my-4  mx-auto  rounded-lg">
        <div className=" my-10 px-4">
          

          <Button href="mailto:mdiqbalhossain203050@gmail.com" outlined>
                {" "}
                Say Hello{" "}
              </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
