// src/components/ScrollSection.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Define a type for the props of the styled component
interface SectionContainerProps {
  bg?: string; // Optional prop for background color
}

const SectionContainer = styled(motion.div)<SectionContainerProps>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({ bg }) => bg || "white"};
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface ScrollSectionProps {
  title: string;
  bg?: string; // Make bg optional here as well
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ title, bg }) => (
  <SectionContainer bg={bg} variants={sectionVariants} initial="hidden" whileInView="visible">
    <h2>{title}</h2>
  </SectionContainer>
);