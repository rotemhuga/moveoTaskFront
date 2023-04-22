import { Editor, OnChange } from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "../OneCodePage/OneCodePage.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const socket = io("http://localhost:8000");

const OneCodePage: React.FC = () => {
  
  // const [room, setRoom] = useState ("")
  const [code, setCode] = useState("");
  const navigate = useNavigate()

  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //     // socket.emit("code", {code: value, room: room});
  //   }
  // };

  useEffect(() => {
    socket.on("code", (data) => {
      setCode(data);
    });
  }, []);

  // useEffect(() => {
  //   socket.on("code", (data) => {
  //     setCode(data);
  //   });
  // });

  const handleEditorChange: OnChange = (value) => {
    setCode(value!);
    socket.emit("code", value);
  };

  return (
    <div className="APP">
      	<button
					onClick={() => navigate('/')}
						className="go-back-button">
					&larr; Go Back
				</button>
        {/* <input
          placeholder="Room Number..."
          onChange={(event) => {
            console.log(event.target.value)
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}> Join Room</button> */}
      <h1 className="title-one-page">Share your Code Here</h1>
      <div className="subject-title">Subject: redux</div>
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
