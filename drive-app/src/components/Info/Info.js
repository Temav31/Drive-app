import React from "react";

// импорт базовых
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Description from "../Description/Description";

const Info = (props) => {
	const { isLogin } = props;
	return (
		<>
			<Header
				isLogin={isLogin}
			/>
			{/* Основной бллок */}
			<main>
				<Description />
			</main>
			{/* Конец основного блока */}
			<Footer />
		</>
	);
};
export default Info;
