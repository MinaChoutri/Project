import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import ServiceUn from "./components/pages/ServiceUn";
import ServiceDeux from "./components/pages/ServiceDeux";
import Home from "./components/HomeCom/Home";
import Blog from "./components/pages/Blog";

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
        <Route
          path="/les-meilleurs-sites-pour-vos-backlinks"
          exact
          element={<ServiceUn />}
        />
        <Route
          path="/service-creation-article-et-contenu"
          exact
          element={<ServiceDeux />}
        />
        <Route path="/blog" exact element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
