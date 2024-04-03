import styled from "styled-components";

export default function Header({
  clearFunc,
  showFormFunc,
  isEmptyGratitudes,
  flipButton,
}) {
  return (
    <HeaderWrapper>
      <h1>My Gratitudes</h1>
      <Spacer size={10} />
      <p>One Word</p>
      <Spacer size={5} />
      <p>Favorite Moment</p>
      <Spacer size={5} />
      <p>An Affirmation</p>
      <Spacer size={5} />
      <p>To Improve</p>
      <Spacer size={20} />

      <button onClick={clearFunc}>Clear Gratitudes</button>
      <Spacer size={10} />
      <button onClick={showFormFunc} disabled={isEmptyGratitudes}>
        {flipButton ? "Hide" : "Show"} Input
      </button>

      <Spacer size={10} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 20px;
  background-color: rgb(209, 153, 190);
  border-bottom: 1px solid black;

  h1 {
    font-size: 30px;
    font-weight: 600;
    font-family: "Lucida Handwriting";
  }

  button {
    cursor: pointer;
    border: none;
    color: black;
    font-size: 12px;
    width: 30%;
    padding: 8px;
    border-radius: 8px;
    box-shadow: gray;
    border: 1px solid black;
    background-color: lightblue;
    transition: background-color 0.5s ease;
  }
  button:hover,
  button.clicked {
    background-color: rgb(96, 172, 48);
  }
  button:disabled {
    background-color: rgb(252, 153, 132);
    cursor: not-allowed;
  }
`;

const Spacer = styled.div`
  height: ${(p) => p.size}px;
`;
