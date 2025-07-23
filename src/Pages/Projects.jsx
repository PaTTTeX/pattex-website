import { useState } from "react";

export default function Projects() {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (id) => {
        setOpenCard(openCard === id ? null : id);
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <header
                id="main-body"
                className="relative z-10 shadow-[0_-20px_20px_rgba(0,0,0,1)] md:px-250 py-30 bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: "url('/photos/background.jpg')" }}

            >
                <h1 className="text-6xl font-bold font-pixel text-center p-10 bg-black rounded-full">Projects</h1>
            </header>

            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1400px] mx-auto mt-10">


                    {/* Card 1 */}
                    <div className="flex flex-col border-5 border-[#4C5844] bg-[#4C5844] rounded shadow-inner text-center text-3xl w-full min-h-[700px]">
                        <h2 className="font-bold p-4 text-4xl bg-[#4C5844]">Enigma Vault - 2025</h2>

                        <img
                            src="/photos/projects/enigmavault.png"
                            alt="Enigma Vault"
                            className="mx-auto w-full max-h-[400px] object-cover"
                        />

                        <button
                            onClick={() => toggleCard(1)}
                            className="font-bold flex items-center justify-center gap-2 p-2 text-4xl bg-[#4C5844] hover:bg-[#5b6b4f] transition cursor-pointer"
                        >
                            Game Website
                            <span
                                className={`transition-transform duration-300 ${openCard === 1 ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden bg-[#4C5844] ${openCard === 1 ? "max-h-[300px] p-4" : "max-h-0 p-0"}`}
                        >
                            <p className="text-white text-xl">
                                Enigma Vault is a secure password and data manager built with React,
                                Next.js, and Firebase. It features end-to-end encryption, real-time syncing,
                                and modern UI/UX principles.
                            </p>
                        </div>
                        
                        <div className="w-full h-[2px] bg-[#ffffff] mt-1 opacity-50"></div>


                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col border-5 border-[#4C5844] bg-black/20 rounded shadow-inner text-center text-3xl w-full min-h-[700px]">
                        <h2 className="font-bold p-2 text-4xl bg-[#4C5844]">Portfolio Website</h2>

                        <img
                            src="/photos/projects/portfolio.png"
                            alt="Portfolio Website"
                            className="mx-auto w-full max-h-[400px] object-cover"
                        />

                        <button
                            onClick={() => toggleCard(2)}
                            className="font-bold flex items-center justify-center gap-2 p-2 text-4xl bg-[#4C5844] hover:bg-[#5b6b4f] transition cursor-pointer"
                        >
                            Details
                            <span
                                className={`transition-transform duration-300 ${openCard === 2 ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden bg-[#4C5844] ${openCard === 2 ? "max-h-[300px] p-4" : "max-h-0 p-0"
                                }`}
                        >
                            <p className="text-base text-white">
                                A fully responsive personal portfolio website built with React and Tailwind CSS.
                                Features include project showcases, smooth scrolling, SEO optimizations,
                                and dark mode support.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
