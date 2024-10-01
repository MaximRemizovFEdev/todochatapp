import './style.css';
import add from "../../assets/add32.png";
import seacrh from "../../assets/search_icon.png";
import profile from "../../assets/image_17.png";

interface IHeaderProps {
	setModalOpen: (v: boolean) => void;
}
export function Header(props: IHeaderProps) {
	const handlerClick = (e) => {
		e.preventDefault();
		props.setModalOpen(true);
	}
	return (
		<header className="header">
			<div className="logo">
				<span>react</span>
			</div>
			<div className="location">
				<a href={"#"} onClick={(e) => handlerClick(e)}>
					<img src={add} alt="location" />
					<span>Создать задачу</span>
				</a>
			</div>
			<div className="search">
				<input type={"text"} placeholder={"Поиск бренда, товара, категории..."} />
				<button>
					<img src={seacrh} alt="seacrh" />
				</button>
			</div>
			<div className="profile">
				<a href={"#"}>
					<img src={profile} alt="profile" />
				</a>
			</div>
		</header>
	);
}
