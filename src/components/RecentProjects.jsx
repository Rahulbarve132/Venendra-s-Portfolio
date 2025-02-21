"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Dummy data for projects
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Explore the dynamics of interactive UI design",
    imageUrl: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80"
  },
  {
    id: 3,
    title: "Project 3",
    description: "A deep dive into modern web technologies",
    imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80"
  },
  {
    id: 4,
    title: "Project 4",
    description: "Innovative solutions to everyday problems",
    imageUrl: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80"
  },
  // Add more projects as needed
];

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-col pt-20 justify-center items-center">
      <div className="text-white md:text-6xl text-3xl font-bold pb-14">My Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2  w-full max-w-7xl mx-auto gap-4">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var my-4 ">
            <CardBody
              className="bg-[#04071d] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {project.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover:card:shadow-xl"
                  alt="thumbnail" />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {project.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
