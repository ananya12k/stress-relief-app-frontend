import styled from "styled-components";
import BoxBreathingGuide from "../components/BoxBreathingGuide";

import { SiGithub } from "react-icons/si";
import Instructions from "../components/Instructions";
import { useState } from "react";
import { Switch } from "@mantine/core";
import { GiMeditation } from "react-icons/gi";

const AppContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // use small viewport height if browser supported
  min-height: 100svh;
`;

const RepoLink = styled.a`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
`;

const Title = styled.h1`
  margin-bottom: 1em;
  font-size: 3em;
  @media (max-width: 576px) {
    font-size: 2em;
  }
`;

const ZenModeToggle = styled(Switch)`
  margin-top: 3em;
`;

function BreathingExercise() {
  const [animationId, setAnimationId] = useState(null);
  const [zenMode, setZenMode] = useState();

  return (
    <AppContainer>
      <RepoLink
        href="https://github.com/ananya12k/stress-relief-app-frontend"
        target="_blank"
      >
        <SiGithub color="black" size="1.5em" title="Repo link" />
      </RepoLink>
      {!zenMode && <Title>Box Breathing</Title>}
      <BoxBreathingGuide onRestart={setAnimationId}>
        <Instructions animationId={animationId} hidden={zenMode} />
      </BoxBreathingGuide>
      <ZenModeToggle
        aria-label="Zen mode toggle"
        size="xl"
        onChange={(event) => setZenMode(event.currentTarget.checked)}
        offLabel={<GiMeditation size={"2em"} />}
      />
    </AppContainer>
  );
}

export default BreathingExercise;
