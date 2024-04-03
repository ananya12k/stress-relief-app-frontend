import styled from "styled-components";
import { useState } from "react";
import Navbar from "./NavBar";

export default function Journal({ handleSubmit }) {
  const [values, setValues] = useState([]);

  function update(newValue, key) {
    let newState = {
      ...values,
      [key]: newValue,
    };

    setValues(newState);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    handleSubmit(values.entry);
  }

  return (
    <Wrapper onSubmit={handleSubmitForm}>
      <Navbar />
      <Field style={{ marginTop: 50 }}>
        <label htmlFor="entry">Journal Entry</label>
        <input
          type="text"
          name="entry"
          style={{ height: "80px" }}
          onChange={(e) => update(e.target.value, "entry")}
        />
      </Field>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: 300px;
  background-color: var(--gray-100);
  border-radius: 10px;
  padding: 20px;
`;

const Field = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;
