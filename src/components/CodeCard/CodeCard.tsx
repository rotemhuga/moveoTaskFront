import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from "../../store/store";
import { ObjectId } from 'mongoose';
import { Editor } from '@monaco-editor/react';
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
        console.log(event.target.id)
    }
    
    // const handleEditorChange = (value: string) => {
    //     setCode(value);
    //   };
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


