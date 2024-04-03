import { useState } from "react";
import styled from "styled-components";
import Journal from "../components/Journal";
import moment from "moment";

const GratitudeJournal = () => {
    const [entries, setEntries] = useState([]);
    const [dates, setDates] = useState([]);
  
    function addEntry(entry) {
      const newEntries = [...entries, entry];
      setEntries(newEntries);
      addDate(Date());
    }
  
    function addDate(timestamp) {
      const date = moment(timestamp).format("'MMMM Do YYYY, h:mm:ss a'");
      const newDates = [...dates, date];
      setDates(newDates);
    }
  
    const onClick = (e) => {
      clearState();
    };
  
    const clearState = () => {
      setEntries([]);
      setDates([]);
    };
  
    return (
      <Wrapper>
        <Journal handleSubmit={addEntry} />
        {dates.map((f) => (
          <label
            className="label"
            htmlFor="entry"
            key={f}
            selected={f === dates}
            onSubmit={() => setDates(f)}
          >
            {f}
          </label>
        ))}
        <div className="spacer"> </div>
        <div> Journal Entries</div>
        {entries.map((f) => (
          <div
            className="history"
            name="entry"
            key={f}
            selected={f === entries}
            onSubmit={() => setEntries(f)}
          >
            {f}
          </div>
        ))}
        <div className="spacer"> </div>
        <button className="clear" onClick={onClick}>
          {" "}
          Clear Entries
        </button>
      </Wrapper>
    );
  }
export default GratitudeJournal;
  const Wrapper = styled.div`
    height: 100%;
    background-color: var(--gray-300);
    display: flex;
    flex-direction: column;
    place-items: center;
  `;
  