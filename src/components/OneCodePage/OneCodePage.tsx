// import { Editor, OnChange } from "@monaco-editor/react";
// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";
// import "../OneCodePage/OneCodePage.css";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const socket = io("http://localhost:8000");

// const OneCodePage: React.FC = () => {
//   const { roomId } = useParams<{ roomId: string }>();
//   const [code, setCode] = useState("");
//   const [isReadOnly, setIsReadOnly] = useState<boolean>(false);
//   const [counter, setCounter] = useState<number>(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     socket.emit("join_room", roomId);

//     socket.on("mentor_joined", () => {
//       setIsReadOnly(true);
//     });

//     socket.on("code", (data) => {
//       setCode(data);
//     });

//     socket.on("user_joined", (count) => {
//       setCounter(count);
//     });

//     // Check the counter value and set the isReadOnly state accordingly
//     if (counter > 0) {
//       setIsReadOnly(true);
//     }

//     return () => {
//       socket.disconnect();
//     };
//   }, [counter, roomId]);

//   const handleEditorChange: OnChange = (value) => {
//     setCode(value!);
//     socket.emit("code", value);
//   };

//   return (
//     <div className="APP">
//       <button onClick={() => navigate("/")} className="go-back-button">
//         &larr; Go Back
//       </button>
//       <h1 className="title-one-page">Share your Code Here</h1>
//       <div className="subject-title">Subject: redux</div>
//       <div className="language-name">javascript</div>
//       <div className="code-content">
//         <Editor
//           height="70vh"
//           width="60vw"
//           defaultLanguage="javascript"
//           value={code}
//           onChange={isReadOnly ? undefined : handleEditorChange}
//           readOnly={isReadOnly}
//           theme="vs-dark"
//           options={{
//             wordWrap: "on",
//             minimap: {
//               enabled: true,
//             },
//           }}
//         />
//       </div>
//       <div className="user-counter">Users in the room: {counter}</div>
//     </div>
//   );
// };

// export default OneCodePage;


// everyone can edit
import { Editor, OnChange } from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "../OneCodePage/OneCodePage.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import CardCode from "../CodeCard/CodeCard";

const socket = io("https://moveotasksback.onrender.com");

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

//   const titleValue = useSelector((state: IRootState) => state.codes.value);
//   const codeTitle = titleValue.map((code:any) => {
//     return <CardCode 
//     id = {code._id}
//     title = {code.title}
//     // code = {code.code}
//     key = {code._id}
//     />  
// })

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
      <div>{}</div>
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
            readOnly: false,
          }}
        />
      </div>
    </div>
  );
};

export default OneCodePage;
