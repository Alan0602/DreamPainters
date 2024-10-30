// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";


const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
