import { Editor, OnChange } from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "../OneCodePage/OneCodePage.css";

const socket = io("http://localhost:8000");

const OneCodePage: React.FC = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    socket.on("code", (data) => {
      setCode(data);
    });
  }, []);

  const handleEditorChange: OnChange = (value) => {
    setCode(value!);
    socket.emit("code", value);
  };

  return (
    <div className="APP">
      <h1 className="title-one-page">Share your Code Here</h1>
      <div className="language-name">javascript</div>
      <div className="code-content">
        <Editor
          height="70vh"
          width="60vw"
          defaultLanguage="javascript"
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            wordWrap: "on",
            minimap: {
              enabled: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default OneCodePage;
