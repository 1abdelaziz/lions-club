import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '/src/assets/styles/index.css';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Events from "./pages/Events.jsx";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/events' element={<Events />} />
    </Routes>
  )
}