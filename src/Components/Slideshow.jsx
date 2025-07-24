import { useState } from "react";

const projects = [
  {
    title: "Foxford Rescue Ranch",
    description:
      "In this project, I utilized PHP and MySQL for implementing the login/register functionality, as well as seamlessly adapting to list them from the database.",
    image: "/photos/projects/foxfordrescueranch.png",
  },

    {
    title: "Hospital Database",
    description:
      "In this hospital database project, I employed PHP and MySQL to create a secure and efficient system for user registration and login functionalities. Additionally, I seamlessly integrated features to retrieve and display pertinent information from the database.",
    image: "/photos/projects/hospitaldatabase.png",
  },

  {
    title: "ShellDefender",
    description:
      "One of my school projects was an adblock extension called ShellDefender, marking the beginning of my journey in web development.",
    image: "/photos/projects/shelldefender.png",
  },
]

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mb-10 mt-20 w-full flex flex-col items-center text-center">
      <h1 className="text-6xl mb-10 font-bold font-pixel">Projects</h1>

      <div className="relative w-[100%] max-w overflow-hidden rounded-lg border-4 border-[#4C5844]">

        <img
          src={projects[currentIndex].image}
          alt={projects[currentIndex].title}
          className="w-full h-[28rem] md:h-auto object-fill transition-transform duration-500 transform hover:scale-102"
        />
        <div className="absolute bottom-0 left-0 w-full bg-[#4C5844]/80 text-white p-6 text-left text-xl md:text-3xl">
          <p>
            <strong>{projects[currentIndex].title}</strong>
            <br />
            {projects[currentIndex].description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 p-3 rounded-full text-3xl cursor-pointer"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 p-3 rounded-full text-3xl cursor-pointer"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition cursor-pointer ${
              index === currentIndex ? "bg-[#4C5844]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}