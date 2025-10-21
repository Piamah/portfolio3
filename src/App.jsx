import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills"; // <--- import exact
import Professional from "./pages/Professional";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="flex-1 w-full max-w-4xl p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
