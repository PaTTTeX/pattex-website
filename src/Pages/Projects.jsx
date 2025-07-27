import React, { useState, useRef } from "react";

import FullscreenImage from '../Components/FullscreenImage';

// Importing icons
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSass, FaHtml5, FaJs, FaReact, FaPhp, FaCss3 } from "react-icons/fa6";
import { FaNodeJs, FaBootstrap, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiApache, SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BsDatabaseFillGear } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";

// Simple tech-badge component
const SkillBadge = ({ Icon, label }) => (
  <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
    <Icon className="w-6 h-4" />
    <p className="text-xs font-bold font-sans ml-2">{label}</p>
  </div>
);

// Data arrays for each card’s tech stack
const techStackMarion = [
  { Icon: FaReact, label: "React" },
  { Icon: RiNextjsFill, label: "Next.js" },
  { Icon: SiTypescript, label: "Typescript" },
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaJs, label: "JavaScript" },
  { Icon: SiTailwindcss, label: "Tailwind" },
];

const techStackEnigma = [
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaJs, label: "Javascript" },
  { Icon: FaSass, label: "Sass" },
];

const techStackAnimalList = [
  { Icon: FaReact, label: "React" },
  { Icon: FaNodeJs, label: "Node.js" },
  { Icon: BsDatabaseFillGear, label: "CRUD" },
  { Icon: SiExpress, label: "Express" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: FaBootstrap, label: "Bootstrap" },
];

const techStackRescueRanch = [
  { Icon: SiApache, label: "Apache" },
  { Icon: FaPhp, label: "PHP" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaJs, label: "Javascript" },
  { Icon: FaCss3Alt, label: "CSS" },
];

const techStackShellDefender = [
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaJs, label: "Javascript" },
  { Icon: FaCss3Alt, label: "CSS" },
];
export default function Projects() {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) =>
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="text-white min-h-screen bg-black">
      <header
        id="main-body"
        className="relative z-10 shadow-[0_-20px_20px_rgba(0,0,0,1)] py-30 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/photos/background.jpg')" }}
      >
        <h1 className="text-6xl font-bold font-pixel text-center p-10 bg-black/80">
          Projects
        </h1>
      </header>

      <main>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[80%] mx-auto mt-10">

          {/* Card 1 - Guitar with Marion */}
          <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-3xl w-full min-h-[750px]">
            <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
              Guitar with Marion<br />2025
            </h2>

            <FullscreenImage
              src="/photos/projects/marionguitar.png"
              alt="Guitar with Marion"
            />

            <button
              onClick={() => toggleCard("marion")}
              className="h-18 font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
            >
              Guitar Lesson Website
              <span
                className={`transition-transform duration-300 ${openCards["marion"] ? "rotate-180" : ""
                  }`}
              >
                <IoIosArrowDropdown />
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["marion"] ? "max-h-[300px] p-4" : "max-h-0 p-0"
                }`}
            >
              <p className="text-white text-xl">
                A responsive website for a local guitar teacher in Galway. I
                handled the full development process from layout to deployment —
                focusing on clean UI, accessibility, and informative content to
                attract new students.
              </p>
            </div>

            <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>
            <div className="flex flex-wrap justify-center">
              {techStackMarion.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
            <div className="relative mt-auto w-full h-10">
              <a
                target="_blank"
                href="https://marionguitar.com"
                rel="noreferrer"
              >
                <ImNewTab className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
              </a>
            </div>
          </div>

          {/* Card 2 - Enigma Vault */}
          <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-1xl w-full min-h-[750px]">
            <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
              Enigma Vault<br />2025
            </h2>

            <FullscreenImage
              src="/photos/projects/enigmavault.png"
              alt="Enigma Vault"
            />

            <button
              onClick={() => toggleCard("enigma")}
              className="h-18 font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
            >
              Game Website
              <span
                className={`transition-transform duration-300 ${openCards["enigma"] ? "rotate-180" : ""
                  }`}
              >
                <IoIosArrowDropdown />
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["enigma"] ? "max-h-[300px] p-4" : "max-h-0 p-0"
                }`}
            >
              <p className="text-white text-xl">
                Enigma Vault was my final group project, where I was responsible
                for building the entire website. I chose plain CSS to deepen my
                styling fundamentals before moving on to frameworks.
              </p>
            </div>

            <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>
            <div className="flex flex-wrap justify-center">
              {techStackEnigma.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
            <div className="relative mt-auto w-full h-10">
              <a target="_blank" href="https://enigmavault.org" rel="noreferrer">
                <ImNewTab className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
              </a>
            </div>
          </div>

          {/* Card 3 - Animal List */}
          <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-1xl w-full min-h-[750px]">
            <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
              Animal List<br />2024
            </h2>

            <FullscreenImage
              src="/photos/projects/animallist.png"
              alt="Animal List"
            />

            <button
              onClick={() => toggleCard("animal")}
              className="h-18 font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
            >
              Animal Management (Full-Stack MERN)
              <span
                className={`transition-transform duration-300 ${openCards["animal"] ? "rotate-180" : ""
                  }`}
              >
                <IoIosArrowDropdown />
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["animal"] ? "max-h-[300px] p-4" : "max-h-0 p-0"
                }`}
            >
              <p className="text-white text-xl">
                A full-stack animal management app using Express, MongoDB,
                Mongoose, and React Bootstrap. CRUD operations, image URLs, and
                responsive design for easy animal data management.
              </p>
            </div>

            <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>
            <div className="flex flex-wrap justify-center">
              {techStackAnimalList.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
            <div className="relative mt-auto w-full h-10">
              <a
                target="_blank"
                href="https://github.com/PaTTTeX/Animal-App/tree/master/my-app"
                rel="noreferrer"
              >
                <FaGithub className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
              </a>
            </div>
          </div>


          {/* Card 4 - Foxford Rescue Ranch */}
          <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-1xl w-full min-h-[750px]">
            <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
              Foxford Rescue Ranch<br />2024
            </h2>

            <FullscreenImage
              src="/photos/projects/foxfordrescueranch.png"
              alt="rescueRanch"
            />

            <button
              onClick={() => toggleCard("rescueRanch")}
              className="h-18 font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
            >
              Full-Stack Shelter Site (PHP/MySQL)
              <span
                className={`transition-transform duration-300 ${openCards["rescueRanch"] ? "rotate-180" : ""
                  }`}
              >
                <IoIosArrowDropdown />
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["rescueRanch"] ? "max-h-[300px] p-4" : "max-h-0 p-0"
                }`}
            >
              <p className="text-white text-xl">
                fictional animal rescue web platform built with PHP and MySQL.
                It simulates a real-world online presence for an animal rescue organization,
                including features like user authentication, an online store, animal photo galleries,
                and database interaction. The project is designed to function within a LAMP (Linux, Apache, MySQL, PHP) environment.
              </p>
            </div>

            <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>
            <div className="flex flex-wrap justify-center">
              {techStackRescueRanch.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
            <div className="relative mt-auto w-full h-10">
              <a
                target="_blank"
                href="https://github.com/PaTTTeX/lamp-website-PaTTTeX-main/tree/main/html"
                rel="noreferrer"
              >
                <FaGithub className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
              </a>
            </div>
          </div>



          {/* Card 5 - ShellDefender */}
          <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-1xl w-full min-h-[750px]">
            <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
              ShellDefender<br />2023
            </h2>

            <FullscreenImage
              src="/photos/projects/shelldefender.png"
              alt="Enigma Vault"
            />

            <button
              onClick={() => toggleCard("shelldefender")}
              className="h-18 font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
            >
              Open Source Privacy Extension Website
              <span
                className={`transition-transform duration-300 ${openCards["shelldefender"] ? "rotate-180" : ""
                  }`}
              >
                <IoIosArrowDropdown />
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["shelldefender"] ? "max-h-[300px] p-4" : "max-h-0 p-0"
                }`}
            >
              <p className="text-white text-xl">
                ShellDefender is a fictional, fully responsive front-end website for a browser extension concept.
                It presents ShellDefender as a free, open-source browser tool designed to enhance privacy, block ads,
                and improve user experience with features like Image Swap and custom themes.
              </p>
            </div>

            <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>
            <div className="flex flex-wrap justify-center">
              {techStackShellDefender.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
            <div className="relative mt-auto w-full h-10">
              <a target="_blank" href="https://github.com/G00361784/Antivirus" rel="noreferrer">
                <FaGithub className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
              </a>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
}
