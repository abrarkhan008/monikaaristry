import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BridalMakeup from "./pages/BridalMakeup.jsx";
import GlamourLooks from "./pages/GlamourLooks.jsx";
import PhotoshootMakeup from "./pages/PhotoshootMakeup.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bridal-makeup" element={<BridalMakeup />} />
        <Route path="/glamour-looks" element={<GlamourLooks />} />
        <Route path="/photoshoot-makeup" element={<PhotoshootMakeup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
