import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { data } from "../lib/constants";
import GraditudeCardForm from "../components/GratitudeCardForm";
import GratitudeList from "../components/GratitudeList";

const GratitudeJournal = () => {
  const [cardCount, setCardCound] = useState(0);

  const [gratitudes, setGratitudes] = useState(data.reverse());

  const [showInput, changeShowInput] = useState(true);

  const [isEmpty, changeIsEmpty] = useState(false);

  function flipShowInput() {
    changeShowInput(!showInput);
  }

  function clearGratitudes() {
    setGratitudes([]);
    changeShowInput(true);
    changeIsEmpty(true);
  }

  function addGratitude(singleGratitude) {
    setCardCound(cardCount + 1);

    const newGratitudes = [singleGratitude, ...gratitudes];
    setGratitudes(newGratitudes);
    changeIsEmpty(false);
  }

  return (
    <AppWrapper className="App">
      <Header
        clearFunc={clearGratitudes}
        showFormFunc={flipShowInput}
        isEmptyGratitudes={isEmpty}
        flipButton={showInput}
      />
      {showInput && (
        <GraditudeCardForm handleSubmit={addGratitude} num={cardCount} />
      )}

      <GratitudeList data={gratitudes} changeData={setGratitudes} />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  /* padding: 15px; */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: rgb(224, 187, 228);
  height: 100%;

  text-align: center;
  margin: 0;
  padding: 0;

  body #root,
  #root {
    height: 100%;
  }
`;

export default GratitudeJournal;
