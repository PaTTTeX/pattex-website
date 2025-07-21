import './index.css';
import Slideshow from "./components/Slideshow.jsx";
import Navbar from './components/Navbar.jsx';


function App() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white">
      <Navbar />

      <header
        id="home"
        className="pt-16 bg-cover bg-center flex flex-col md:flex-row items-center justify-center"
        style={{ backgroundImage: "url('/photos/background.jpg')" }}
      >
        <div
          className="bg-no-repeat bg-center bg-contain p-[8%] md:w-1/2"
          style={{ backgroundImage: "url('/photos/menu.png')" }}
        >
          <div className="animate-pulse text-center">
            <h1 className="font-['Pixelify_Sans'] text-xl md:text-2xl px-4">
              Tomas "PaTTeX" Necesany
              <br />
              <br />
              Dedicated to the Craft of Software Development and the Dynamic World of IT.
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

      <main id="main-body" className="relative z-10 shadow-[inset_0_-3px_25px_30px_black] md:px-100">
        <h1 className="text-5xl text-center py-6">My Expertise</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              icon: 'computer.png',
              title: 'Frontend Development',
              desc: `Experienced in building interactive and responsive web interfaces with React, Next.js, Vite, and JavaScript. Strong understanding of component-based architecture and frontend performance optimization.`,
            },
            {
              icon: 'uiux.png',
              title: 'UX/UI & Styling',
              desc: `Skilled in creating clean and accessible UIs using Tailwind CSS, Sass, and modern design systems. Focused on delivering pixel-perfect layouts and intuitive user experiences.`,
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
                className="flex-1 border-5 border-[#4C5844] bg-black/60 rounded shadow-inner p-6 text-center text-3xl"
              >
                <img src={`/photos/icons/${icon}`} alt={title} className="mx-auto mb-4 size-20" />
                <h3 className="font-bold mb-2 text-4xl">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
        </div>
        <Slideshow />
      </main>


      <footer className="flex justify-center items-center gap-3 pb-5">
        {[
          {
            href: 'https://www.linkedin.com/in/tomas-necesany/',
            icon: 'linkedin.png',
          },
          {
            href: 'https://github.com/PaTTTeX',
            icon: 'github.png',
          },
          {
            href: 'https://twitter.com/PattexHomeless',
            icon: 'twitter.png',
          },
        ].map(({ href, icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <img src={`/photos/icons/${icon}`} alt={icon} className="w-15 rounded-full hover:bg-white transition" />
          </a>
        ))}
      </footer>
    </div>
  );
}

export default App;
