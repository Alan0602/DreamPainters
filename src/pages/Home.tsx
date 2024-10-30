// src/pages/Home.tsx
import React from "react";
import { HeroSection } from "../components/herosection";
import { ScrollSection } from "../components/scrollSection";

export const Home: React.FC = () => (
  <>
    <HeroSection />
    <ScrollSection title="Our Services" bg="white" />
    <ScrollSection title="Our Projects" bg="lightblue" />
    <ScrollSection title="Get Started with Us" bg="orange" />
  </>
);
