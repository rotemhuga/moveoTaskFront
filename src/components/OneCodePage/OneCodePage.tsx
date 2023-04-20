import "../OneCodePage/OneCodePage.css"
// import { AllCodesValue, ICode } from "../../store/slices/codesSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { IRootState } from "../../store/store";
// import { ICodeState } from "../../store/store";
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
//             value={message}
//             onChange={handleInputChange}
//             className="input-content"
//             type="text"
//             />
//             <p>{messageReceived}</p>
//         </div>
//     )
// }
// export default OneCodePage
