import { addCard } from '../Wrapper/wrapperSlice';
import { useState } from "preact/hooks";
import "./style.css";
import { useDispatch } from "react-redux";

interface INewCardProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NewCard = (props: INewCardProps) => {
    const { isOpen, onClose } = props;
    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCard({ headerText: header, bodyText: body }));
        setHeader('');
        setBody('');
        onClose();
    };

    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOutsideClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Добавить карточку</h2>
                <input
                    type="text"
                    placeholder="Header"
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                />
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div className="modal-buttons">
                    <button onClick={handleAdd}>Добавить</button>
                    <button onClick={onClose}>Отменить</button>
                </div>
            </div>
        </div>
    );
};