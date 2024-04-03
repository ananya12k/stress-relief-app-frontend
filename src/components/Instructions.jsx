import { useEffect } from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const textGuideAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const TextGuide = styled.p`
  font-size: 4rem;
  font-family: Calibri, sans-serif;
  animation: ${textGuideAnimation} 4s ease infinite;
  /* scale font proportionally for sm & md screens */
  @media only screen and (max-width: 992px) {
    font-size: 7vmin;
  }
`;

const instructionList = ["Inhale", "Hold", "Exhale", "Hold"];

const Instructions = ({ animationId, hidden }) => {
  const [instruction, setInstruction] = useState(instructionList[0]);
  const [iteration, setIteration] = useState(0);
  const incrementIteration = () => setIteration(iteration + 1);

  useEffect(() => {
    setInstruction(instructionList[iteration % 4]);
  }, [iteration]);

  useEffect(() => {
    setIteration(0);
  }, [animationId]);

  return (
    <TextGuide key={animationId} onAnimationIteration={incrementIteration}>
      {!hidden && instruction}
    </TextGuide>
  );
};

export default Instructions;
