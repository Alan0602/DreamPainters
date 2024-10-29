// src/components/HeroSection.tsx
import { Parallax } from "react-parallax";
import styled from "styled-components";
import image from "../assets/image.jpg"

const HeroContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.orangeToBlue};
`;

const HeroText = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const HeroSection: React.FC = () => {
  return (
    <Parallax bgImage={image} strength={300}>
      <HeroContainer>
        <HeroText>Welcome to Dream Painters</HeroText>
      </HeroContainer>
    </Parallax>
  );
};
