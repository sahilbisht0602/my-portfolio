"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CarInfo",
    description:
      "You can Discover everything under one roof for RTO vehicle information including buying and selling cars, challan search, and insurance. Get insights about your car and much more",
    image: "/images/projects/1.png",
    previewUrl: "https://carinfo.app",
  },
  {
    id: 3,
    title: "Usability hub clone",
    description: "Clone of a usability hub made using tailwind and next js",
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
    description:
      "A nike clone which i have made using tailwind css with same functionality using states",
    image: "/images/projects/5.png",
    previewUrl: "https://nikebysahil.netlify.app",
  },
  {
    id: 2,
    title: "Devflow",
    description:
      "I have made this devflow where devlopers can connect comment on each other post, I have added many feature like auth, upvote, downvote, user profile, clerk. and I have used mongodb for storing user info and other models",
    image: "/images/projects/2.png",
    previewUrl: "https://devflow-rose.vercel.app/",
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
