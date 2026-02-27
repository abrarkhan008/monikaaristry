import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BridalMakeup from "./pages/Bridalmakeup.jsx";
import GlamourLooks from "./pages/Glamourlooks.jsx";
import PhotoshootMakeup from "./pages/Photoshootmakeup.jsx";
import Contact from "./pages/Contact.jsx";
import BridalHairstyles from "./pages/BridalHairstyles";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bridal-makeup" element={<BridalMakeup />} />
        <Route path="/bridal/hairstyles" element={<BridalHairstyles />} />
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
