import React from "react";
// импорт стилей
// import "./Main.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Time from "../Time/Time";

const Navigator = (props) => {
	const { isLogin } = props;
	return (
		<>
			<Header
				isLogin={isLogin}
			/>
			{/* Основной бллок */}
			<main>
				<Time />
			</main>
			{/* Конец основного блока */}
			<Footer />
		</>
	);
};
export default Navigator;
