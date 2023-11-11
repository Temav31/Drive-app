// импорт стилей
import "./Footer.css";
import React from "react";

const Footer = () => {
	return (
		<section className="footer">
			<h2 className="footer__head">
				Учебный проект студентов кафедры ВТ.
			</h2>
			<div className="footer__box">
				<ul className="footer__container">
					<li>
						<a className="footer__link" href='https://igis-transport.ru/izh?' target="_blank" rel="noopener noreferrer">
							Игис
						</a>
					</li>
					<li>
						<a className="footer__link" href='https://istu.ru/?lg=ru&&&' target="_blank" rel="noopener noreferrer">
							ИжГТУ
						</a>
					</li>
				</ul>
				<p className="footer__text">
					©2023
				</p>
			</div>
		</section>
	);
};
export default Footer;
