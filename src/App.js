import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import HomeSection from "./HomeSection/HomeSection";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
