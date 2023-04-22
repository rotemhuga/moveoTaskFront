import { Editor } from "@monaco-editor/react";
import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import "@monaco-editor/react";
import "../OneCodePage/OneCodePage.css";
import { useNavigate, useParams } from "react-router-dom";
import { ICodeCard } from "../CodeCard/CodeCard";

interface IRoomId {
  roomCodeId?: ICodeCard;
}

interface ICodeEvent {
  code: string;
  senderId: string;
  roomSize: number;
}

const OneCodePage: React.FC<any> = (roomCodeId) => {
  console.log(roomCodeId)
  const navigate = useNavigate();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [editorValue, setEditorValue] = useState("");
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const editorRef = useRef<any>();

  useEffect(() => {
    const updateSocket = io("https://moveotasksback.onrender.com", {
      query: { roomCodeId },
    });
    setSocket(updateSocket);
    console.log(roomCodeId)

    return () => {
      updateSocket.disconnect();
    };
  }, [roomCodeId]);

  useEffect(() => {
    if (socket) {
      socket.on("code", (event: ICodeEvent) => {
        if (event.senderId !== socket.id) {
          setEditorValue(event.code);
        }
      });

      socket.on("roomSize", (event: any) => {
        console.log("eventRoomSize", event.roomSize);
        if (event.roomSize > 1) {
          setCanEdit(true);
        } 
      });
    }
  }, [socket]);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setEditorValue(value);

      if (socket) {
        socket.emit("code", { code: value });
      }
    }
  };

  return (
    <div className="APP">
      <button onClick={() => navigate("/")} className="go-back-button">
        &larr; Go Back
      </button>
      <h1 className="title-one-page">Share your Code Here</h1>
      <div>{}</div>
      <div className="language-name">javascript</div>
      <div className="code-content">
        <Editor
          height="70vh"
          width="60vw"
          defaultLanguage="javascript"
          value={editorValue}
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            wordWrap: "on",
            minimap: {
              enabled: true,
            },
            readOnly: !canEdit 
          }}
        />
      </div>
    </div>
  );
};

export default OneCodePage;

