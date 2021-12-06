import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import ServiceUn from "./components/pages/ServiceUn";
import ServiceDeux from "./components/pages/ServiceDeux";
import ServiceTrois from "./components/pages/ServiceTrois";
import ServiceQuatre from "./components/pages/ServiceQuatre";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/nous-contacter" exact element={<ContactUs />} />
        <Route path="/a-propos" exact element={<AboutUs />} />
        <Route path="/inscription" exact element={<SignUp />} />
        <Route path="/service-1" exact element={<ServiceUn />} />
        <Route path="/service-2" exact element={<ServiceDeux />} />
        <Route path="/service-3" exact element={<ServiceTrois />} />
        <Route path="/service-4" exact element={<ServiceQuatre />} />
      </Routes>
    </Router>
  );
}

export default App;
