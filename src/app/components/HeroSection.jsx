"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white  h-24 sm:h-32  lg:h-auto  text-3xl md:text-5xl lg:text-5xl xl:text-8xl lg:leading-normal font-extrabold lg:mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Diego Espinoza",
                1000,
                "Web Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a Full Stack Web Developer with a passion for teamwork. I easily adapt to different environments and enjoy designing interactive and responsive applications that provide engaging experiences to users.
          </p>
          <div className="mb-6">
            <Link
              href="/#projects"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-indigo-300 to-violet-600 hover:bg-slate-200 text-white"
            >
              My Projects
            </Link>
            <a
              href="/document/Diego Espinoza_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Diego Espinoza_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-indigo-300 to-violet-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center  lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[150px] h-[150px] sm:w-[180px] sm:h-[180px]  md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/perfil.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
