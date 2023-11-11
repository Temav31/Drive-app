import React from "react";
// импорт стилей
import "./Time.css";
// импорт блоков

const Time = (props) => {
	return (
		<>
			<div className="time">
				<div className="time__container-last">
					<p className="time__container-last_text">Предыдущий транспорт</p>
					<div className="time__number">
						<p className="time__container-last_number">49</p>
						<p className="time__container-last_number">10:13</p>
					</div>
				</div>
				<div className="time__container-slow">
						<p className="time__container-slow_text">Замедлитесь</p>
						<p className="time__container-slow_number">+9:19</p>
				</div>
				<div className="time__container-last">
					<p className="time__container-last_text">Следующий транспорт</p>
					<div className="time__number">
						<p className="time__container-last_number">31</p>
						<p className="time__container-last_number">0:17</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Time;
