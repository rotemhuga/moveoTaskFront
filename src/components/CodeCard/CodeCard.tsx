import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from "../../store/store";
import { ObjectId } from 'mongoose';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

export interface ICodeCard {
	_id?: ObjectId;
    title?: string;
	code?: string;
    roomNumber?: string;
}

const CardCode: React.FC<ICodeCard> = (props:ICodeCard)=> {
    const [code, setCode] = useState("");
    const handleEditorChange = (value: string) => {
        setCode(value);
      };
    return (
        <button className={`card-code ${props._id}`} >
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


// const SubjectCard: React.FC<ICodeCard> = (props: ICodeCard) => {
// 	const codeData = useSelector((state: IRootState) => state.codes.value);
// 	const navigator = useNavigate();

// 	const getSpecificCodeID = (subject: string) => {
// 		return codeData.filter((sub) => sub.title === subject);
// 	};
// 	const handelCardClick = (subject: string) => {
// 		const currentSubjectDate: ICodes[] = getSpecificCodeID(subject);
// 		navigator(`/ShareSpace/${currentSubjectDate[0]._id}`);
// 	};
// 	return (
// 		<div
// 			className="subject-card"
// 			onClick={() => handelCardClick(props.title)}>
// 			<span>{props.title}</span>
// 		</div>
// 	);
// };

// export default SubjectCard;