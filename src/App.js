import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import HomeSection from "./HomeSection/HomeSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LandingPage from "./components/MainEvent/Landingpage/LandingPage";
import ReadMorewed from "./components/MainEvent/Readwedding/ReadMorewed";
// import Footer from "./components/footer/Footer";
import Particles from "react-tsparticles";
import particles from "./utils.js/particles";
import { loadFull } from "tsparticles";
import ReadMoreFashion from "./components/MainEvent/Readmorefashion/ReadMoreFashion";
import SignIn from "./components/MainEvent/SignIn/SignIn";
import SignUp from "./components/MainEvent/SignUp/Signup";
import Create from "./components/MainEvent/Create/Create";
import Payment from "./components/MainEvent/Payment/Payment";
import DotPop from "./components/MainEvent/Dotpop/DotPop";
import EventOwnerpage from "./components/MainEvent/Ownerpage/EventOwnerpage";
import Sizechart from "./components/MainEvent/Ownerpage/Sizechart";

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
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/readmorewed" element={<ReadMorewed />} />
        <Route path="/readmorefashion" element={<ReadMoreFashion />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dotpop" element={<DotPop />} />
        <Route path="/eventownerpage" element={<EventOwnerpage />} />
        <Route path="/sizechart" element={<Sizechart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
      <ScrollToTop />
    </div>
  );
}

export default App;
