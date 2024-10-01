import { useDispatch } from 'react-redux';
import { changeCardStatus, deleteCard } from '../Wrapper/wrapperSlice';
import "./style.css";
import done from "../../assets/done26.png";
import del from "../../assets/add32.png";

export type StatusCard = "todo" | "done";

export interface ICardProps {
    status: StatusCard;
    bodyText: string;
    headerText: string;
    btns?: any;
    id: string;
}

export const Card = (props: ICardProps) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteCard({ id: props.id }))
    }
    const statusHandler = () => {
        const newStatus = props.status === "todo" ? "done" : "todo";
        dispatch(changeCardStatus({ id: props.id, status: newStatus }));
    }
    return (
        <div className={"card"}>
            <div className={"card__header"}>
                <div className={"card__header-text"}>{props.headerText}</div>
                <div className={"card__header-btns"}>
                    <button onClick={statusHandler} className={"card__header-btns_done"}><img src={done} /></button>
                    <button onClick={deleteHandler} className={"card__header-btns_delete"}><img src={del} /></button>
                </div>
            </div>
            <div className={"card__body"}>
                <p className={"card__body-text"}>{props.bodyText}</p>
            </div>
            <div className={"card__footer"}>
                <div className={"card__footer-labels"}>Статус: {props.status}</div>
            </div>
        </div>
    )
}