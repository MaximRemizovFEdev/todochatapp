import { Card, ICardProps } from "../Card";
import { useSelector } from 'react-redux'
import "./style.css";
import { useEffect } from "preact/hooks";
import { setDataMock } from "../../api/api";

interface IWrapper {
    cards: ICardProps[]
}
interface ISelector {
    wrapper: IWrapper
}

export const Wrapper = () => {
    const cards = useSelector<ISelector, ICardProps[]>((state) => state.wrapper.cards);

    useEffect(() => {
        setDataMock().then((response) => {
            console.log(response.data)
        })
    }, []);

    return (
        <div className={"wrapper"}>
            {cards.length ? cards.map((v) => (
                <Card key={v.id} {...v} />
            )) : "Список пуст"}
        </div>
    )
}