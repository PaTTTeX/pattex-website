import Slideshow from "./../components/Slideshow.jsx";

function Home() {
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
        className="pt-16 bg-cover bg-center flex flex-col md:flex-row items-center justify-center" 
        style={{ backgroundImage: "url('/photos/background.jpg')" }}
      >
        <div
          className="bg-no-repeat bg-center bg-contain p-[7%] md:w-1/2"
          style={{ backgroundImage: "url('/photos/menu.png')" }}
        >
          <div className="animate-pulse text-center">
            <h1 className="font-['Pixelify_Sans'] text-xl md:text-4xl px-1">
              Tomas "PaTTeX" Necesany
              <br />
              <br />
              Specializing in building clean, scalable, and user-friendly frontends with a focus on design systems, performance, and seamless user experiences.
            </h1>
          </div>
          <button
            onClick={() => scrollToSection('#main-body')}
            className="block mx-auto mt-8 px-6 py-2 border border-white rounded hover:bg-white hover:text-black font-['Pixelify_Sans'] text-xl cursor-pointer transition"
          >
            SEE MORE
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="/photos/guts.png" alt="guts berserk" draggable="false" className="w-full" />
        </div>
      </header>

      <main id="main-body" className="relative z-10 shadow-[0_-20px_20px_rgba(0,0,0,1)] md:px-100 "style={{ backgroundImage: "url('/photos/main-content.png')" }}>
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
                <h3 className="font-bold mb-2 text-4xl">{title}</h3>
                <p className="mt-4 bg-[#4C5844]  p-4 grow">{desc}</p>
              </div>
            ))}
        </div>
        <Slideshow />
      </main>
    </div>
  );
}

export default Home;