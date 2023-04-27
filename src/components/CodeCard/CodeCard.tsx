import { useNavigate } from 'react-router';

export interface ICodeCard {
	id?: string;
    title?: string;
	code?: string;
    roomNumber?: string;
    OnClick?: React.MouseEventHandler<HTMLButtonElement> 
}

const CardCode: React.FC<ICodeCard> = (props:ICodeCard)=> {
    const navigate = useNavigate(); 

    const handleOpenPage = async (event:any) => {
        event.preventDefault()
        navigate(`/oneCodePage/${props.id}`)
    }

    return (
        <button className={`card-code`} id={props.id} onClick={handleOpenPage}>
            <div className="card-code-div">
                <div className="title-card-code">{props.title}</div>
                <div className="content-card-code">
                    {props.code}
                </div>
            </div>
        </button>
    ) 
}

export default CardCode




