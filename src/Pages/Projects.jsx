import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSass, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Projects() {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (id) => {
        setOpenCard(openCard === id ? null : id);
    };

    return (
        <div className="text-white min-h-screen">
            <header
                id="main-body"
                className="relative z-10 shadow-[0_-20px_20px_rgba(0,0,0,1)]  py-30 bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: "url('/photos/background.jpg')" }}

            >
                <h1 className="text-6xl font-bold font-pixel text-center p-10 bg-black/80 ">Projects</h1>
            </header>

            <main>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[80%] mx-auto mt-10">


                    {/* Card 1 */}
                    <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-3xl w-full min-h-[700px]">
                        <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">Guitar with Marion<br />2025</h2>

                        <img
                            src="/photos/projects/marionguitar.png"
                            alt="Guitar with Marion"
                            className="mx-auto w-full max-h-[339px] min-h-[339px] object-cover"
                        />

                        <button
                            onClick={() => toggleCard(3)}
                            className="font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
                        >
                            Guitar Lesson Website
                            <span
                                className={`transition-transform duration-300 ${openCard === 3 ? "rotate-180" : ""}`}
                            >
                                <IoIosArrowDropdown />
                            </span>
                        </button>

                        <div
                        className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCard === 3 ? "max-h-[300px] p-4" : "max-h-0 p-0"}`}
                        >
                            <p className="text-white text-xl">
                                A responsive website for a local guitar teacher in Galway. I handled the full development process—from layout to deployment—focusing on clean UI, accessibility, and informative content to attract new students.
                            </p>
                        </div>

                        <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>

                        <div className="flex flex-wrap">
                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <FaReact className="w-6 h-4 " />
                                <p className="text-xs font-bold font-sans">React</p>
                            </div>

                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <RiNextjsFill className="w-6 h-4 " />
                                <p className="text-xs font-bold font-sans">Next.js</p>
                            </div>

                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <SiTypescript className="w-6 h-4" />
                                <p className="text-xs font-bold font-sans">Typescript</p>
                            </div>

                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <FaHtml5 className="w-6 h-4" />
                                <p className="text-xs font-bold font-sans">HTML5</p>
                            </div>

                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <FaJs className="w-6 h-4" />
                                <p className="text-xs font-bold font-sans">JavaScript</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col border-5 border-[#4C5844] bg-[#4c584462] rounded-2xl shadow-inner text-center text-1xl w-full min-h-[700px]">
                        <h2 className="font-bold p-4 text-3xl bg-[#4C5844]">Enigma Vault<br />2025</h2>

                        <img
                            src="/photos/projects/enigmavault.png"
                            alt="Enigma Vault"
                            className="mx-auto w-full max-h-[339px] min-h-[339px] object-cover"
                        />

                        <button
                            onClick={() => toggleCard(2)}
                            className="font-bold flex items-center justify-center gap-2 p-2 text-2xl bg-[#0000002e] hover:bg-[#5b6b4f] transition cursor-pointer"
                        >
                            Game Website
                            <span
                                className={`transition-transform duration-300 ${openCard === 2 ? "rotate-180" : ""
                                    }`}
                            >
                                <IoIosArrowDropdown />
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden mx-auto rounded-b-lg bg-[#0000002e] ${openCard === 2 ? "max-h-[300px] p-4" : "max-h-0 p-0"}`}
                        >
                            <p className="text-white text-xl">
                                Enigma Vault was my final group project, where I was responsible for building the entire website.
                                I chose to use plain CSS instead of a framework to deepen my understanding of styling fundamentals before moving on to more advanced tools.
                            </p>
                        </div>

                        <div className="w-full h-[2px] bg-[#ffffff] opacity-50"></div>

                        <div className="flex pointer-none:">
                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <FaHtml5 className="w-6 h-4" />
                                <p className="text-xs font-bold font-sans">HTML5</p>
                            </div>

                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <FaJs className="w-6 h-4" />
                                <p className="text-xs font-bold font-sans">Javascript</p>
                            </div>

                            <div className="flex items-center p-2 m-1 border-2 border-[#ffffff88] bg-black/20 rounded-xl hover:bg-white/20 transition">
                                <FaSass className="w-6 h-4" />
                                <p className="text-xs font-bold font-sans">Sass</p>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    );
}
