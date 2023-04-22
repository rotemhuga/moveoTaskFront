import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from "../../store/store";
import { ObjectId } from 'mongoose';
import { Editor } from '@monaco-editor/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export interface ICodeCard {
	id?: string;
    title?: string;
	code?: string;
    roomNumber?: string;
    OnClick?: React.MouseEventHandler<HTMLButtonElement> 
}

const CardCode: React.FC<ICodeCard> = (props:ICodeCard)=> {
    const navigate = useNavigate(); 
    const [code, setCode] = useState("");

    const handleOpenPage = async (event:any) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.id)
        const codeFromEvent = event.target.id
        navigate(`/oneCodePage/${codeFromEvent}`)
    }
    
    const allCodes = useSelector(
        (state:IRootState) => state.codes.value
    );

    const detailscode = useParams()
    console.log(detailscode)

    return (
        <button className={`card-code`} id={props.id} onClick={handleOpenPage} >
            <div className="card-code-div">
                <div className="title-card-code">{props.title} </div>
                <div className="content-card-code">
                    {props.code}
                </div>
            </div>
        </button>
    ) 
}

export default CardCode




