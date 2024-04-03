import styled, { keyframes } from 'styled-components';

const circleGuideAnimation = (diameter) => keyframes`
  /* start bottom left */
  0% {
    top: calc(100% - ${diameter}rem);
    left: 0;
  }
  /* top left */
  25% {
    top: 0;
    left: 0;
  }
  /* top right */
  50% {
    top: 0;
    left: calc(100% - ${diameter}rem);
  }
  /* bottom right */
  75% {
    top: calc(100% - ${diameter}rem);
    left: calc(100% - ${diameter}rem);
  }
  /* back to start */
  100% {
    top: calc(100% - ${diameter}rem);
    left: 0;
  }
`;

const Box = styled.div`
  position: relative;
  width: 40vw;
  height: 40vw;
  border: 1.5rem solid lightblue;
  border-radius: 5%;
  align-items: center;
  justify-content: center;
  display: flex;
  /* fixed width & height for large screens */
  @media only screen and (min-width: 992px) {
    width: 25rem;
    height: 25rem;
  }
  /* thinner border for small screens */
  @media only screen and (max-width: 576px) {
    border-width: 1rem;
  }
`;

const CircleGuide = styled.div`
  background: lightblue;
  position: absolute;
  height: ${(props) => props.diameter}rem;
  width: ${(props) => props.diameter}rem;
  border-radius: 50%;
  animation: ${(props) => circleGuideAnimation(props.diameter)} 16s linear
    infinite;
  /* reduce the diameter for smaller screens*/
  @media only screen and (max-width: 576px) {
    height: ${(props) => props.diameter / 1.5}rem;
    width: ${(props) => props.diameter / 1.5}rem;
    animation-name: ${(props) => circleGuideAnimation(props.diameter / 1.5)};
  }
`;

const BoxBreathingGuide = ({ onRestart, children }) => {
  return (
    <Box>
      <CircleGuide
        onAnimationStart={(e) => onRestart(e.timeStamp)}
        diameter="2"
      />
      {children}
    </Box>
  );
};

export default BoxBreathingGuide;
