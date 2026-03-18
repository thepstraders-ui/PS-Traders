import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header-home";
import FooterHome from './components/footer-home.jsx'

import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/services.jsx";
// import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
        <FooterHome/>
    </BrowserRouter>
  );
}

export default App;