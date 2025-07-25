import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSass, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BsDatabaseFillGear } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";

const SkillBadge = ({ Icon, label }) => (
    <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
        <Icon className="w-6 h-4" />
        <p className="text-xs font-bold font-sans ml-2">{label}</p>
    </div>
);

const techStackMarion = [
    { Icon: FaReact, label: "React" },
    { Icon: RiNextjsFill, label: "Next.js" },
    { Icon: SiTypescript, label: "Typescript" },
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaJs, label: "JavaScript" },
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

export default function Projects() {
    // Object to track multiple open cards
    const [openCards, setOpenCards] = useState({});

    const toggleCard = (id) => {
        setOpenCards((prev) => ({
            ...prev,
            [id]: !prev[id], // toggle only that one
        }));
    };

    return (
        <div className="text-white min-h-screen">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[80%] mx-auto mt-10">

                    {/* Card 1 - Guitar with Marion */}
                    <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-3xl w-full min-h-[750px]">
                        <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
                            Guitar with Marion<br />2025
                        </h2>

                        <img
                            src="/photos/projects/marionguitar.png"
                            alt="Guitar with Marion"
                            className="mx-auto w-full max-h-[339px] min-h-[339px] object-cover"
                        />

                        <button
                            onClick={() => toggleCard("marion")}
                            className="font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
                        >
                            Guitar Lesson Website
                            <span
                                className={`transition-transform duration-300 ${openCards["marion"] ? "rotate-180" : ""}`}
                            >
                                <IoIosArrowDropdown />
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["marion"] ? "max-h-[300px] p-4" : "max-h-0 p-0"}`}
                        >
                            <p className="text-white text-xl">
                                A responsive website for a local guitar teacher in Galway. I handled the full development process from layout to deployment — focusing on clean UI, accessibility, and informative content to attract new students.
                            </p>
                        </div>

                        <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>

                        <div className="flex flex-wrap">
                            {techStackMarion.map((tech) => (
                                <SkillBadge key={tech.label} {...tech} />
                            ))}
                        </div>

                        <div className="relative mt-auto w-full h-10">
                            <a target="_blank" href="https://marionguitar.com">
                                <ImNewTab className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
                            </a>
                        </div>
                    </div>

                    {/* Card 2 - Enigma Vault */}
                    <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-1xl w-full min-h-[750px]">
                        <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
                            Enigma Vault<br />2025
                        </h2>

                        <img
                            src="/photos/projects/enigmavault.png"
                            alt="Enigma Vault"
                            className="mx-auto w-full max-h-[339px] min-h-[339px] object-cover"
                        />

                        <button
                            onClick={() => toggleCard("enigma")}
                            className="font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
                        >
                            Game Website
                            <span
                                className={`transition-transform duration-300 ${openCards["enigma"] ? "rotate-180" : ""}`}
                            >
                                <IoIosArrowDropdown />
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["enigma"] ? "max-h-[300px] p-4" : "max-h-0 p-0"}`}
                        >
                            <p className="text-white text-xl">
                                Enigma Vault was my final group project, where I was responsible for building the entire website.
                                I chose to use plain CSS instead of a framework to deepen my understanding of styling fundamentals before moving on to more advanced tools.
                            </p>
                        </div>

                        <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>

                        <div className="flex flex-wrap">
                            {techStackEnigma.map((tech) => (
                                <SkillBadge key={tech.label} {...tech} />
                            ))}
                        </div>

                        <div className="relative mt-auto w-full h-10">
                            <a target="_blank" href="https://enigmavault.org">
                                <ImNewTab className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
                            </a>
                        </div>
                    </div>

                    {/* Card 3 - Animal List */}
                    <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-1xl w-full min-h-[750px]">
                        <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">
                            Animal List<br />2024
                        </h2>

                        <img
                            src="/photos/projects/animallist.png"
                            alt="Animal List"
                            className="mx-auto w-full max-h-[339px] min-h-[339px] object-cover"
                        />

                        <button
                            onClick={() => toggleCard("animal")}
                            className="font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
                        >
                            Game Website
                            <span
                                className={`transition-transform duration-300 ${openCards["animal"] ? "rotate-180" : ""}`}
                            >
                                <IoIosArrowDropdown />
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCards["animal"] ? "max-h-[300px] p-4" : "max-h-0 p-0"}`}
                        >
                            <p className="text-white text-xl">
                                A full-stack animal management application built with Express.js, MongoDB, Mongoose, and React Bootstrap.
                                This project allows users to add, view, update, and delete animal records through a clean, responsive UI.
                                The backend uses a RESTful API to interact with MongoDB, while the frontend provides real-time form validation and navigation using React Router.
                                The project emphasizes CRUD operations, state management, and modular backend architecture.
                            </p>
                        </div>

                        <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>

                        <div className="flex flex-wrap">
                            {techStackAnimalList.map((tech) => (
                                <SkillBadge key={tech.label} {...tech} />
                            ))}
                        </div>

                        <div className="relative mt-auto w-full h-10">
                            <a target="_blank" href="https://github.com/PaTTTeX/Animal-App/tree/master/my-app">
                                <FaGithub className="absolute bottom-2 right-2 size-8 text-white hover:text-[#56a848] transition" />
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
