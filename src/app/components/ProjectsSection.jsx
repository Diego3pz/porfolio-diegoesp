"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Music Application",
    description: "Play, create playlists, like songs and discover music trends.",
    technologies:[
      { src: '/images/nextjs_icon_dark.svg', width: 30, height: 30, name: 'Next.js' },
      { src: '/images/react.svg', width: 30, height: 30, name: 'React' },
      { src: '/images/typescript.svg', width: 30, height: 30, name: 'TypeScript' },
      { src: '/images/tailwindcss.svg', width: 30, height: 30, name: 'Tailwind CSS' },
      { src: '/images/redis.svg', width: 30, height: 30, name: 'Redis' },
      
    ],
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Diego3pz/ZetaApp",
    previewUrl: "https://zeta-app.vercel.app/",
  },
  {
    id: 2,
    title: "Contact List Application",
    description: "Create your own custom contacts, edit them as you wish and find them quickly.",
    technologies:[
      { src: '/images/nextjs_icon_dark.svg', width: 30, height: 30, name: 'Next.js' },
      { src: '/images/react.svg', width: 30, height: 30, name: 'React' },
      { src: '/images/typescript.svg', width: 30, height: 30, name: 'TypeScript' },
      { src: '/images/tailwindcss.svg', width: 30, height: 30, name: 'Tailwind CSS' },
      { src: '/images/postman.svg', width: 30, height: 30, name: 'Postman' },
    ],
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Diego3pz/agenda-contactos",
    previewUrl: "https://agenda-contactos-rho.vercel.app/",
  },
  {
    id: 3,
    title: "Quiosco Application",
    description: "Ordering system for the kitchen area. Ordered by Carma restaurant.",
    technologies:[
      { src: '/images/nextjs_icon_dark.svg', width: 30, height: 30, name: 'Next.js' },
      { src: '/images/react.svg', width: 30, height: 30, name: 'React' },
      { src: '/images/typescript.svg', width: 30, height: 30, name: 'TypeScript' },
      { src: '/images/tailwindcss.svg', width: 30, height: 30, name: 'Tailwind CSS' },
      { src: '/images/supabase.svg', width: 30, height: 30, name: 'Supabase' },
    ],
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Diego3pz/quioscoapp_deployment",
    previewUrl: "https://quioscoapp-deployment-amber.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="pt-20" id="projects">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-10 uppercase">
        My Projects
      </motion.div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tec={project.technologies}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
