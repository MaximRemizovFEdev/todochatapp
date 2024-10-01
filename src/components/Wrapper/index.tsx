import { Card, ICardProps } from "../Card";
import { useSelector } from 'react-redux'
import "./style.css";

interface IWrapper {
    cards: ICardProps[]
}
interface ISelector {
    wrapper: IWrapper
}

export const Wrapper = () => {
    const cards = useSelector<ISelector, ICardProps[]>((state) => state.wrapper.cards);
    return (
        <div className={"wrapper"}>
            {cards.map((v) => (
                <Card key={v.id} {...v} />
            ))}
        </div>
    )
}