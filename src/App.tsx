// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Home from "./pages/Home";
// import { Services } from "./pages/Services";
// import { Gallery } from "./pages/Gallery";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";

const App: React.FC = () => (

  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
);

export default App;
