import styled from "styled-components";
import { useState } from "react";

export default function LoginForm({ handleSubmit, num }) {
  const [values, setValues] = useState({
    oneWord: "",
    favMoment: "",
    toImprove: "",
    affirmation: "",
    fillType: true,
    id: { num }
  });
  // this state covers the on screen current typed password and username

  let isInputValid =
    values.oneWord.length > 0 &&
    values.favMoment.length > 0 &&
    values.toImprove.length > 0 &&
    values.affirmation.length > 0;

  // use one update function to replace certain element in state dictionary
  function update(newValue, key) {
    // helps us tell if we are updating username or password
    let newState = {
      ...values,
      [key]: newValue
    }; // spread operator to parse out values state
    setValues(newState);
  }

  function handleSubmitForm(event) {
    event.preventDefault(); // to prevent the page from reloading when text is put in
    // this prevents reloading of page when they hit submit
    // will manually route to another page if you want to show another page
    handleSubmit(values);
    setValues({
      oneWord: "",
      favMoment: "",
      toImprove: "",
      affirmation: "",
      fillType: true,
      id: { num }
    });
    // throwing the username up to the App.js
    // alert(values.username + " has registered.");
  }

  return (
    <Wrapper onSubmit={handleSubmitForm}>
      {/* dont need to do inline because it accepts event as parameter */}
      {/* automatically passing event to function */}
      {/* this for it so be a state */}
      <h4>Enter some gratitudes</h4>
      <Field>
        {/* the htmlFor on the <label> element must match the id on the <input>*/}
        <input
          placeholder="One Word to Describe Today"
          type="text"
          name="oneWord"
          id="oneWord"
          value={values.oneWord}
          // below is an inline function
          onChange={(e) => update(e.target.value, "oneWord")} //every time there is a key press
          //function so it doesn't keep doing too many re-renders
          // e stands for event
          // e.target is context in what happens for that 'target'
          // target is that text box. whatever element that event handler has
        />
      </Field>
      <Field>
        {/* if whole thing in parens is true then display error */}
        {/* valid password and length is greater than 0 */}
        <input
          placeholder="A Favorite Moment"
          type="text"
          name="favMoment"
          id="favMoment"
          value={values.favMoment}
          // this is currently what is on screen and entered
          onChange={(e) => update(e.target.value, "favMoment")}
        />
      </Field>
      <Field>
        {/* if whole thing in parens is true then display error */}
        {/* valid password and length is greater than 0 */}
        <input
          placeholder="Something that I Improved Today"
          type="text"
          name="toImprove"
          id="toImprove"
          value={values.toImprove}
          // this is currently what is on screen and entered
          onChange={(e) => update(e.target.value, "toImprove")}
        />
      </Field>
      <Field>
        {/* if whole thing in parens is true then display error */}
        {/* valid password and length is greater than 0 */}
        <input
          placeholder="An Affirmation for Today"
          type="text"
          name="affirmation"
          id="affirmation"
          value={values.affirmation}
          // this is currently what is on screen and entered
          onChange={(e) => update(e.target.value, "affirmation")}
        />
      </Field>
      <Spacer size={10} />
      {/* disable button if password is invalid or either of the fields are empty */}
      <button
        type="submit"
        disabled={
          values.oneWord.length === 0 ||
          values.favMoment.length === 0 ||
          values.toImprove.length === 0 ||
          values.affirmation.length === 0 ||
          !isInputValid
        } //if any of these are true then the password is disabled
      >
        Enter Gratitude
      </button>

      {/* this button will be the one to submit the form */}
    </Wrapper>
  );
}

const Spacer = styled.div`
  height: ${(p) => p.size}px;
`;

const Wrapper = styled.form`
  /* max-width: 350px;
  min-width: 150px; */
  width: 100%;
  height: 300px;
  background-color: rgba(209, 209, 209, 0.6);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;

  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;

  @media only screen and (max-width: 600px) {
    width: 83%;
  }

  h2 {
    margin: 0;
    font-size: 1.8rem;
    color: var(--gray-400);
  }

  button {
    width: 30%;
    border: none;
    color: black;
    font-size: 14px;
    /* width: 100%; */
    padding: 12px;
    border-radius: 8px;
    box-shadow: gray;
    border: 1px solid black;
    background-color: lightblue;
    transition: background-color 0.25s ease;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
      width: 60%;
    }
  }
  button:disabled {
    background-color: rgb(252, 153, 132);
    cursor: not-allowed;
  }

  /* --shadow-color: 231deg 21% 9%; */
  /* box-shadow: 0.3px 0.5px 0.8px hsl(var(--shadow-color) / 0.11),
    2px 3.9px 6px -0.1px hsl(var(--shadow-color) / 0.15),
    3.5px 7px 10.7px -0.3px hsl(var(--shadow-color) / 0.2),
    5.3px 10.6px 16.2px -0.4px hsl(var(--shadow-color) / 0.25),
    7.7px 15.3px 23.4px -0.5px hsl(var(--shadow-color) / 0.3),
    11px 22.1px 33.7px -0.6px hsl(var(--shadow-color) / 0.34),
    15.8px 31.5px 48.1px -0.8px hsl(var(--shadow-color) / 0.39),
    22.3px 44.5px 67.9px -0.9px hsl(var(--shadow-color) / 0.44); */
`;

const Field = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;

  input {
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    padding: 8px;
    border: none;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: var(--shadow-elevation-medium);
    font-size: 16px;
    text-align: center;

    @media only screen and (max-width: 600px) {
      width: 80%;
    }
  }

  label {
    padding-bottom: 5px;
    text-transform: uppercase;
    font-size: 0.6rem;
    color: var(--gray-300);
  }
`;
