import { Editor, OnChange } from "@monaco-editor/react";
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import "../OneCodePage/OneCodePage.css"

const socket = io('http://localhost:8000');

const OneCodePage: React.FC = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    socket.on('code', (data) => {
      setCode(data);
    });
  }, [socket]);

  const handleEditorChange: OnChange = (value) => {
    setCode(value!);
    socket.emit('code', value);
  };

  return (
    <div className="APP">
      <h1 className="title-one-page">Share your Code Here</h1>
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



// import "../OneCodePage/OneCodePage.css"
// import {ICode } from "../../store/slices/codeSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { IRootState } from "../../store/store";
// // import { ICodeState } from "../../store/store";
// import { io } from 'socket.io-client';

// const socket = io("http://localhost:8000")

// const OneCodePage: React.FC = () => {
//     const [message, setMessage] = useState("");
//     const [messageReceived, setMessageReceived] = useState("");

//     useEffect(() => {
//         socket.on("recieve_message", (data:any) => {
//         setMessageReceived(data.message)
//         });
//     }, [socket]);

//         const handleInputChange = (event:any) => {
//         setMessage(event.target.value);
//         socket.emit("send_message", { message: event.target.value });
//     };

//     return (
//         <div className="APP">
//             <h1 className="title-one-page">Share your Code Here</h1>
//             <input  
//             placeholder='write your code here' 
//             value={messageReceived}
//             onChange={handleInputChange}
//             className="input-content"
//             type="text"
//             />
//         </div>
//     )
// }
// export default OneCodePage
