import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import HomeSection from "./HomeSection/HomeSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import Footer from "./components/footer/Footer";
import Particles from "react-tsparticles";
import particles from "./utils.js/particles";
import { loadFull } from "tsparticles";

function App() {
  const location = useLocation();
  console.log(location);
  const renderParticleJSInHomePage = location.pathname === "/";
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      {/* Particles js */}
      {renderParticleJSInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
      {/* NavBar */}
      <Navbar />
      {/* Main Page Content */}
      <Routes>
        <Route index path="/" element={<HomeSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
      <ScrollToTop />
    </div>
  );
}

export default App;
