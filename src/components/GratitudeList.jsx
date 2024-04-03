import styled from "styled-components";

import GratitudeCard from "../components/GratitudeCard";

export default function GratitudeList({ data, changeData }) {
  function deleteButtonFunc(id) {
    // console.log(data);
    // console.log("in here");
    // console.log(`ID: ${id}`);
    let newData = [...data];
    newData = data.filter((el) => el.id !== id);
    // console.log(newData);
    changeData(newData);
    console.log(id);
  }

  return (
    <ListWrapper>
      {data.map((d, i) => (
        <GratitudeCard
          key={d.oneWord + i}
          id={d.id}
          cardData={d}
          deleteButtonFunc={deleteButtonFunc}
        />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(224, 187, 228);

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
