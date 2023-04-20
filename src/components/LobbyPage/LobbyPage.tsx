import "../LobbyPage/LobbyPage.css"
// import { AllCodesValue, ICode } from "../../store/slices/codesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IRootState } from "../../store/store";
// import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import codeSlice from "../../store/slices/codeSlice";
// import codesSlice from "../../store/slices/codesSlice";
import CardCode from "../CodeCard/CodeCard";
import { ICodeCard } from "../CodeCard/CodeCard";

// const socket = io("http://localhost:8000")

const LobbyPage: React.FC = () => {
    // const codesData = useSelector((state:IRootState) => state.codes.value)
    // const [message, setMessage] = useState("");
    // const [messageReceived, setMessageReceived] = useState("");

    // useEffect(() => {
    //     socket.on("recieve_message", (data:any) => {
    //     setMessageReceived(data.message)
    //     });
    // }, [socket]);

    //     const handleInputChange = (event:any) => {
    //     setMessage(event.target.value);
    //     socket.emit("send_message", { message: event.target.value });
    // };

//  
// const codes = allCodes.map((code:any) => {
//             return <CardCode 
//             _id = {code._id}
//             title = {code.title}
//             code = {code.code}
//             key = {code._id}
//         />  
// })
    const dispatch = useDispatch()
    const codesData = useSelector((state: IRootState) => state.codes.value);
    console.log(codesData)
    const codes = codesData.map((code:any) => {
            return <CardCode 
            _id = {code._id}
            title = {code.title}
            // code = {code.code}
            key = {code._id}
        />  
})
    return (
        <div className="lobby-page-content">
            <h1 className="lobby-title">Lobby Page</h1>
            <h2>Choose code block</h2>
            <div className="all-buttons">
                <div>
                {codes}
                </div>
            </div>
        </div>
    )
}
export default LobbyPage


// working 
// import "../LobbyPage/LobbyPage.css"
// import { AllCodesValue, ICode } from "../../store/slices/codesSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { IRootState } from "../../store/store";
// import { ICodeState } from "../../store/store";

// // const Codes:any = async () => {
// //     const [data, setData] = useState<any>(null);
// // 	try {
// // 		const response = await fetch("http://localhost:8000/moveoTask/codes", {
// // 			method: "GET",
// // 		});
// // 		const codesData = await response.json();
// //         setData(codesData);
// // 		return codesData;
// // 	} catch (err) {
// // 		console.log();
// // 	}



// const LobbyPage: React.FC = () => {
    
//     // const dispatch = useDispatch();
//     // const allCodes:any = useSelector(
//     //     (state:IRootState) => state.codes.value
//     // );
//     // const filteredCodes = allCodes.filter((restObj:any) => restObj.title === "try")
//     // return filteredCodes
//     return (
//         <div>
//             <h1 className="lobby-title">Lobby Page</h1>
//             <button>
//                 Async code
//             </button>
//             <button>
//                 Redux
//             </button>
//             <button>
//                 style component
//             </button>
//             <button>
//                 style component
//             </button>
//             {/* <div>{allCodes}</div> */}
//         </div>
//     )
// }
// export default LobbyPage

