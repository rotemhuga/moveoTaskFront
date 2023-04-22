import { Editor, OnChange } from "@monaco-editor/react";
import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import "@monaco-editor/react";
import "../OneCodePage/OneCodePage.css";
import { useNavigate } from "react-router-dom";
import CardCode from "../CodeCard/CodeCard";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { useParams } from "react-router-dom";
// const { roomId } = useParams<{ roomId: string }>();
import { ICodeCard } from "../CodeCard/CodeCard";


interface IRoomId {
  roomId?: ICodeCard;
}

interface IncomingCodeEvent {
  code: string;
  senderId: string;
  roomSize: number;
}

// console.log(code._id)
// const roomId = useParams()
// console.log(roomId)

const OneCodePage: React.FC<any> = (roomId) => {
  // console.log(ICodeCard)
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [editorValue, setEditorValue] = useState("");
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const editorRef = useRef<any>();
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const updateSocket = io("https://moveotasksback.onrender.com", {
      query: { roomId },
    });
    setSocket(updateSocket);
    console.log(roomId)

    return () => {
      updateSocket.disconnect();
    };
  }, [roomId]);

  useEffect(() => {
    if (socket) {
      socket.on("code", (event: IncomingCodeEvent) => {
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
      <div className="subject-title">Subject: redux</div>
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
          options={{ readOnly: canEdit }}
          // options={{
          //   wordWrap: "on",
          //   minimap: {
          //     enabled: true,
          //   },
          //   readOnly: !canEdit 
          // }}
        />
      </div>
    </div>
  );
};

export default OneCodePage;


//working - everyone can edit
// import { Editor, OnChange } from "@monaco-editor/react";
// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";
// import "../OneCodePage/OneCodePage.css";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { IRootState } from "../../store/store";
// import CardCode from "../CodeCard/CodeCard";

// const socket = io("https://moveotasksback.onrender.com");

// const OneCodePage: React.FC = () => {
  
//   // const [room, setRoom] = useState ("")
//   const [code, setCode] = useState("");
//   const navigate = useNavigate()
  
//   // const joinRoom = () => {
//   //   if (room !== "") {
//   //     socket.emit("join_room", room);
//   //     // socket.emit("code", {code: value, room: room});
//   //   }
//   // };

//   useEffect(() => {
//     socket.on("code", (data) => {
//       setCode(data);
//     });
//   }, []);

//   // useEffect(() => {
//   //   socket.on("code", (data) => {
//   //     setCode(data);
//   //   });
//   // });

//   const handleEditorChange: OnChange = (value) => {
//     setCode(value!);
//     socket.emit("code", value);
//   };

// //   const titleValue = useSelector((state: IRootState) => state.codes.value);
// //   const codeTitle = titleValue.map((code:any) => {
// //     return <CardCode 
// //     id = {code._id}
// //     title = {code.title}
// //     // code = {code.code}
// //     key = {code._id}
// //     />  
// // })

//   return (
//     <div className="APP">
//       	<button
// 					onClick={() => navigate('/')}
// 						className="go-back-button">
// 					&larr; Go Back
// 				</button>
//         {/* <input
//           placeholder="Room Number..."
//           onChange={(event) => {
//             console.log(event.target.value)
//             setRoom(event.target.value);
//           }}
//         />
//         <button onClick={joinRoom}> Join Room</button> */}
//       <h1 className="title-one-page">Share your Code Here</h1>
//       <div className="subject-title">Subject: redux</div>
//       <div>{}</div>
//       <div className="language-name">javascript</div>
//       <div className="code-content">
//         <Editor
//           height="70vh"
//           width="60vw"
//           defaultLanguage="javascript"
//           value={code}
//           onChange={handleEditorChange}
//           theme="vs-dark"
//           options={{
//             wordWrap: "on",
//             minimap: {
//               enabled: true,
//             },
//             readOnly: false,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default OneCodePage;
