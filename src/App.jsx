import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
