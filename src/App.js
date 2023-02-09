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
import Ownerhomeone from "./components/MainEvent/Ownerhome/Ownerhomeone";
import Ownerhometwo from "./components/MainEvent/Ownerhome/Ownerhometwo";
import Ownerhomethree from "./components/MainEvent/Ownerhome/Ownerhomethree";
import Orderpayment from "./components/MainEvent/Payment/Orderpayment";
import Finalpayment from "./components/MainEvent/Payment/Finalpayment";
import Dashboard from "./components/MainEvent/Dotpop/Dashboard";
import Sharelink from "./components/MainEvent/Dotpop/Sharelink";
import Accdetails from "./components/MainEvent/Dotpop/Accdetails";

function App() {
  const location = useLocation();
  console.log(location);
  // const renderParticleJSInHomePage = location.pathname === "/";
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      {/* Particles js */}
      {/* {renderParticleJSInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )} */}
      {/* NavBar */}
      <Navbar />
      {/* Main Page Content */}
      <Routes>
        <Route index path="/" element={<LandingPage />} />
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
        <Route path="/ownerhomeone" element={<Ownerhomeone />} />
        <Route path="/ownerhometwo" element={<Ownerhometwo />} />
        <Route path="/ownerhomethree" element={<Ownerhomethree />} />
        <Route path="/orderpayment" element={<Orderpayment />} />
        <Route path="/finalpayment" element={<Finalpayment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sharelink" element={<Sharelink />} />
        <Route path="/accdetails" element={<Accdetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
      <ScrollToTop />
    </div>
  );
}

export default App;
