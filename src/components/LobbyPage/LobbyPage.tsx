import "../LobbyPage/LobbyPage.css"
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import CardCode from "../CodeCard/CodeCard";

const LobbyPage: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const codesData = useSelector((state: IRootState) => state.codes.value);
    const codes = codesData.map((code:any) => {
            return <CardCode 
            id = {code._id}
            title = {code.title}
            key = {code._id}
            OnClick={() => navigate('/oneCodePage')}/>  
})
    return (
        <div className="lobby-page-content">
            <h1 className="lobby-title">Lobby Page</h1>
            <h2>Choose Your Room</h2>
            <div className="all-buttons">
                {codes}
            </div>
        </div>
    )
}
export default LobbyPage