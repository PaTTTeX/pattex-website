import Slideshow from "./../Components/Slideshow.jsx";

export default function Home() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white">
      <header
        id="home"
        className="pt-16 bg-cover bg-center flex flex-col md:flex-row items-start justify-center"
        style={{ backgroundImage: "url('/photos/background.jpg')" }}
      >
        <div
          className="md:w-1/2 w-full bg-black/80 my-auto flex md:rounded-r-full flex-col justify-center items-center text-white text-center px-6 py-5"
        >
          <div className="animate-pulse max-w-full md:max-w-[90%] px-2 sm:px-4 md:px-6 lg:px-8">
            <h1 className="font-['Pixelify_Sans'] text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed sm:leading-snug">
              Tomas "PaTTeX" Necesany
              <br />
              <br />
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
                Specializing in building clean, scalable, and user-friendly frontends with a focus on design systems, performance, and seamless user experiences.
              </span>
            </h1>
          </div>

          <button
            onClick={() => scrollToSection('#main-body')}
            className="mt-6 px-6 py-3 border border-white rounded hover:bg-white hover:text-black font-['Pixelify_Sans'] text-xl transition cursor-pointer"
          >
            SEE MORE
          </button>
        </div>

        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src="/photos/guts.png"
            alt="guts berserk"
            draggable="false"
            className="w-full h-auto object-contain"
          />
        </div>
      </header>


      <main id="main-body" className="relative z-10 shadow-[0_-20px_20px_rgba(0,0,0,1)] sm:px-[1%] md:px-[20%] 2xl:x-100" style={{ backgroundImage: "url('/photos/main-content.png')" }}>
        <h1 className="text-6xl mb-10 font-bold font-pixel text-center">My Expertise</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch">

          {[
            {
              icon: 'computer.png',
              title: 'Frontend Development',
              desc: `Experienced in building responsive web interfaces using React, Next.js, Vite, and JavaScript, with a solid grasp of component-based architecture and performance optimization.`,
            },
            {
              icon: 'uiux.png',
              title: 'UX/UI & Styling',
              desc: `Skilled in crafting clean, accessible UIs with Tailwind CSS, Sass, and modern design systems, focusing on pixel-perfect layouts and smooth user experiences.`,
            },
            {
              icon: 'phone.png',
              title: 'Web App Engineering',
              desc: `Proficient in developing full-stack-ready frontend applications with React and TypeScript. Familiar with REST APIs, client-side routing, state management, and SSR/SSG with Next.js.`,
            },
          ]
            .map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex-1 flex flex-col justify-between border-5 border-[#4C5844] bg-black/20 rounded shadow-inner pt-6 text-center text-3xl"

              >
                <img src={`/photos/icons/${icon}`} alt={title} className="mx-auto mb-4 size-20" />
                <h3 className="font-bold mb-2 text-4xl md:h-20">{title}</h3>
                <p className="mt-4 bg-[#4C5844]  p-4 grow">{desc}</p>
              </div>
            ))}
        </div>
        <Slideshow />
      </main>
    </div>
  );
}