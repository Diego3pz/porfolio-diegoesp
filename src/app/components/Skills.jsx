"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";

const technologies = [
  { src: '/images/html5.svg', width: 30, height: 30, name: 'HTML5' },
  { src: '/images/css.svg', width: 30, height: 30, name: 'CSS3' },
  { src: '/images/typescript.svg', width: 30, height: 30, name: 'TypeScript' },
  { src: '/images/tailwindcss.svg', width: 30, height: 30, name: 'Tailwind CSS' },
  { src: '/images/react.svg', width: 30, height: 30, name: 'React' },
  { src: '/images/nextjs_icon_dark.svg', width: 30, height: 30, name: 'Next.js' },
  { src: '/images/node-js.svg', width: 30, height: 30, name: 'Node.js' },
  { src: '/images/auth0.svg', width: 30, height: 30, name: 'Auth0' },
  { src: '/images/expressjs.svg', width: 30, height: 30, name: 'Express.js' },
  { src: '/images/figma.svg', width: 30, height: 30, name: 'Figma' },
  { src: '/images/git.svg', width: 30, height: 30, name: 'Git' },
  { src: '/images/jwt.svg', width: 30, height: 30, name: 'JWT' },
  { src: '/images/mongodb.svg', width: 30, height: 30, name: 'MongoDB' },
  { src: '/images/mysql.svg', width: 30, height: 30, name: 'MySQL' },
  { src: '/images/postgresql.svg', width: 30, height: 30, name: 'PostgreSQL' },
  { src: '/images/redis.svg', width: 30, height: 30, name: 'Redis' },
  { src: '/images/supabase.svg', width: 30, height: 30, name: 'Supabase' },
  { src: '/images/postman.svg', width: 30, height: 30, name: 'Postman' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="flex justify-center text-white pt-20 w-full" id="skills">
      <div className="w-full max-w-screen-lg text-center py-8 px-4">
        <h2 className="text-4xl font-bold text-white mb-8 uppercase">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="relative flex flex-col items-center justify-center bg-zinc-800 rounded-lg p-4 min-w-[120px] max-w-[120px] h-[150px] shadow-lg group"
            >
              <Image src={tech.src} width={tech.width} height={tech.height} alt={tech.name} />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-violet-800 bg-opacity-80 text-white text-sm py-1 text-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;