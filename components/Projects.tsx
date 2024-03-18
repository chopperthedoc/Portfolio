"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaGlobe,
} from "react-icons/fa";
import { ProjectData } from "@/lib/data";

type ProjectName = string;
interface ProjectProps {
  id?: string;
}

const Projects: React.FC<ProjectProps> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectName>(
    ProjectData[0].title
  );
  const [showDetails, setShowDetails] = useState({
    about: false,
    challenge: false,
    learnings: false,
  });
  const controls = useAnimation();

  const handleClick = (projectName: ProjectName) => {
    setSelectedProject(projectName);
    controls.start({ x: [5, 0], transition: { duration: 0.5 } });
    // Beim Wechsel des Projekts die Anzeige der Details zurücksetzen
    setShowDetails({ about: false, challenge: false, learnings: false });
  };

  const toggleDetails = (key: keyof typeof showDetails) => {
    setShowDetails({ ...showDetails, [key]: !showDetails[key] });
  };

  const getProjectDetails = (projectName: ProjectName) => {
    return ProjectData.find((project) => project.title === projectName);
  };

  const renderDetails = (details: string[]) => {
    return details.map((detail, index) => (
      <p key={index} className="font-mono Menlo pb-3 text-sm text-justify ">
        {detail}
      </p>
    ));
  };

  const selectedProjectDetails = ProjectData.find(
    (project) => project.title === selectedProject
  );

  return (
    <div id={id} className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold my-4 font-mono Menlo pb-3 text-center">
        Projekte
      </h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-1/4 p-4 flex flex-col items-center lg:w-1/4 lg:items-start">
            {ProjectData.map((project) => (
              <button
                key={project.title}
                className={`block mb-2 ${
                  selectedProject === project.title
                    ? "border-r-2 border-b-2 border-white rounded-md shadow-lg px-2 font-mono Menlo"
                    : ""
                }`}
                onClick={() => handleClick(project.title)}
              >
                {project.title}
              </button>
            ))}
          </div>
          <motion.div
            className="lg:w-3/4 p-4 bg-white bg-opacity-10 border border-black/[0.1] rounded-xl"
            animate={controls}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center pl-5">
                <FaGlobe className="mr-2" />
                {/* Verwende selectedProjectDetails.link für den href */}
                <a
                  href={selectedProjectDetails?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono Menlo hover:underline"
                >
                  Website
                </a>
              </div>
              <h2 className="font-bold text-center pb-2 text-xl font-mono Menlo flex-1 pl-2 ">
                {selectedProjectDetails?.title}
              </h2>
              <div className="w-[60px]">
                {" "}
                {/* Stelle sicher, dass diese Breite der Breite des Globe-Icons + Abstand entspricht */}
              </div>
            </div>

            <div className="shadow-lg m-4 border-r-2 border-b-2 border-white rounded-md p-4">
              <button
                className="font-medium font-mono Menlo flex justify-between w-full"
                onClick={() => toggleDetails("about")}
              >
                Über das Projekt{" "}
                {showDetails.about ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {showDetails.about && (
                <>
                  <hr className="my-2 border-t border-white" />
                  {renderDetails(selectedProjectDetails?.about || [])}
                </>
              )}
            </div>
            <div className=" m-4  p-4  border-r-2 border-b-2 border-white rounded-md shadow-lg">
              <button
                className="font-medium font-mono Menlo flex justify-between w-full"
                onClick={() => toggleDetails("challenge")}
              >
                Herausforderungen{" "}
                {showDetails.challenge ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {showDetails.challenge && (
                <>
                  <hr className="my-2 border-t border-white" />
                  {renderDetails(selectedProjectDetails?.challenge || [])}
                </>
              )}
            </div>
            <div className="m-4  p-4 border-r-2 border-b-2 border-white rounded-md shadow-lg">
              <button
                className="font-medium font-mono Menlo flex justify-between w-full"
                onClick={() => toggleDetails("learnings")}
              >
                Erkenntnisse{" "}
                {showDetails.learnings ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {showDetails.learnings && (
                <>
                  <hr className="my-2 border-t border-white" />
                  {renderDetails(selectedProjectDetails?.learnings || [])}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
