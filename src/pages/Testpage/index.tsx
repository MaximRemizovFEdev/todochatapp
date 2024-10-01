import { useState } from "preact/hooks";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header/Header";
import { Label } from "../../components/Label";
import { NewCard } from "../../components/NewCard";
import { Wrapper } from "../../components/Wrapper";

export function Testpage() {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<div class="home">
			<Header setModalOpen={setModalOpen}/>
			<div className={"wrapper"}>
				<h2>Список задач</h2>
			</div>
			<Wrapper />

			<h2>Hello world!!!<Label text={"Подарок"} color={"blue"} /><Label text={"Игрушка"} color={"pink"} /></h2>

			<NewCard isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
			<Footer />
		</div>
	);
}
