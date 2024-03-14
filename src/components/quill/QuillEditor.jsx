import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme

const QuillEditor = () => {
  const { quill, quillRef } = useQuill();

  // Track changes in the editor content
  quill?.on("text-change", () => {
    // Code to handle text changes, e.g., updating state
  });

  // Extract text from the editor for storage in PostgreSQL DB
  const extractText = () => {
    const text = quill?.getText();
    // Code to store text in PostgreSQL DB
    console.log("Text extracted:", text);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div ref={quillRef} />
      <button onClick={extractText}>Extract Text</button>
    </div>
  );
};

export default QuillEditor;
