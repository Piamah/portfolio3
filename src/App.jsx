import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Professional from "./pages/Professional";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(135deg,var(--bg-start),var(--bg-end))]">
      <div className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App;
