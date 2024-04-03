import styled from "styled-components";

export default function GratitudeCard({ cardData, deleteButtonFunc, id }) {
  return (
    <CardWrapper fillType={cardData.fillType}>
      <p></p>

      <h3>{cardData.oneWord}</h3>
      <Spacer size={8} />
      <h3>{cardData.favMoment}</h3>
      <Spacer size={8} />
      <h3>{cardData.toImprove}</h3>
      <Spacer size={8} />
      <h3>{cardData.affirmation}</h3>
      <button id="delete-button" onClick={() => deleteButtonFunc(id)}>
        {/* by default the event is passed into the delete button function and in the () */}
        <svg
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  width: 80%;
  max-height: 300px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
  margin: 5px;

  position: relative;

  background-color: ${(p) =>
    p.fillType ? "lightblue" : "rgba(209, 209, 209, 0.6)"};
  /* dollar sign for string */

  display: flex;
  flex-direction: column;
  h3 {
    font-size: 18px;
    font-weight: 600;
  }

  button {
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: rgb(252, 153, 132);
    border-radius: 8px;
    padding: 6px;
    box-shadow: gray;
    border: 1px solid black;
    cursor: pointer;
    &:focus {
      outline: 3px solid green;
    }
  }

  /* @media (max-width: 700px) {} */
`;

const Spacer = styled.div`
  height: ${(p) => p.size}px;
`;
