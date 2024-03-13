import { useRef, useState } from "react";
import Editor from "./Editor";
import TextField from "@mui/material/TextField";
import Quill from "quill";
const Delta = Quill.import("delta");

const TextEditor = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  // Use a ref to access the quill instance directly
  const quillRef = useRef();
  const titleRef = useRef(null);

  return (
    <div style={{ margin: "20px", width: "100%" }}>
      <TextField
        ref={titleRef}
        label="Title"
        variant="outlined"
        style={{ marginBottom: "20px", width: "100%" }}
      />
      {/* Adjust the margin and width as needed */}
      <div style={{ width: "100%" }}>
        <Editor
          ref={quillRef}
          readOnly={readOnly}
          defaultValue={new Delta()
            .insert("Hello")
            .insert("\n", { header: 1 })
            .insert("Some ")
            .insert("initial", { bold: true })
            .insert(" ")
            .insert("content", { underline: true })
            .insert("\n")}
          onSelectionChange={setRange}
          onTextChange={setLastChange}
          style={{ width: "100%" }} // Set width to 100%
        />
      </div>
      <div className="controls" style={{ marginTop: "20px" }}>
        <label>
          Read Only:{" "}
          <input
            type="checkbox"
            value={readOnly}
            onChange={(e) => setReadOnly(e.target.checked)}
          />
        </label>
        <button
          className="controls-right"
          type="button"
          onClick={() => {
            alert(quillRef.current?.getLength());
          }}
        >
          Get Content Length
        </button>
      </div>
      <div className="state">
        <div className="state-title">Current Range:</div>
        {range ? JSON.stringify(range) : "Empty"}
      </div>
      <div className="state">
        <div className="state-title">Last Change:</div>
        {lastChange ? JSON.stringify(lastChange.ops) : "Empty"}
      </div>
    </div>
  );
};

export default TextEditor;
