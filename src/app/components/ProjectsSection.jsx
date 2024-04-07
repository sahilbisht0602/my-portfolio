"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CarInfo",
    description: "A complete solution for car owners",
    image: "/images/projects/1.png",
    previewUrl: "https://carinfo.app",
  },
  {
    id: 2,
    title: "Devflow",
    description: "Stackoverflow flow in my way",
    image: "/images/projects/2.png",
    previewUrl: "https://devflow-rose.vercel.app/",
  },
  {
    id: 3,
    title: "Usability hub clone",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    previewUrl: "https://usabilitybysahil.netlify.app",
  },
  {
    id: 4,
    title: "Omni food",
    description: "More of a design oriented website",
    image: "/images/projects/4.png",
    previewUrl: "https://omnibysahil.netlify.app",
  },
  {
    id: 5,
    title: "Nike",
    description: "A nike clone",
    image: "/images/projects/5.png",
    previewUrl: "https://nikebysahil.netlify.app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
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
