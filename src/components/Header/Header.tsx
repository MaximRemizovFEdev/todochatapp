import './style.css';
import add from "../../assets/add32.png";
import seacrh from "../../assets/search_icon.png";
import profile from "../../assets/image_17.png";
import { clearDataMock, setDataMock } from '../../api/api';

interface IHeaderProps {
	setModalOpen: (v: boolean) => void;
}
export function Header(props: IHeaderProps) {
	const handlerClick = (e) => {
		e.preventDefault();
		props.setModalOpen(true);
	}
	const setLS = (e) => {
		e.preventDefault();
		setDataMock();
	}
	const clearLS = (e) => {
		e.preventDefault();
		clearDataMock();
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
			<div className="location">
				<a href={"#"} onClick={(e) => setLS(e)}>
					<img src={add} alt="location" />
					<span>установить LS</span>
				</a>
			</div>
			<div className="location">
				<a href={"#"} onClick={(e) => clearLS(e)}>
					<img src={add} alt="location" />
					<span>очистить LS</span>
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
