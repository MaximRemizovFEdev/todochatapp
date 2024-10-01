import "./style.css";

interface ILableProps {
    text: string;
    color: "blue" | "green" | "orange" | "pink";
}

export function Label(props: ILableProps) {
    return (
        <div className={`label ${props.color}`}>
            <span>{props.text}</span>
        </div>
    );
}