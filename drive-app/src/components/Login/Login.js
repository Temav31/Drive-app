// импорт стилей
// import "./Login.css";
import AuthorForm from "../AuthorForm/AuthorForm";
// валидация 
// import ValidationForm from "../../hooks/useValidationForm";

import React, { useEffect, useState } from "react";
// // валимдация 
// import {
// 	standartEmail,
// 	messageEmail
// } from "../../utils/constant";
// иконки
import emailLogo from "../../images/email.svg"
import passwordLogo from "../../images/password.svg"

const Login = ({ isLogin }) => {
	// валидация и ошибки
	// const standartName = /^[a-zA-Z0-9-а-яА-Я\s]+$/;
	const standartEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const messageEmail = "Адрес почты некорректен";
	// данные
	const [passw, setPassw] = useState("");
	const [email, setEmail] = useState("");
	// ошибки
	const [errPassw, setErrPassw] = useState("");
	const [errEmail, setErrEmail] = useState("");
	// валидация
	const [passwValidation, setPasswValidation] = useState(false);
	const [emailValidation, setEmailValidation] = useState(false);
	// правильность формы
	const [formValue, setFormValue] = useState(false);
	// изменение пароля
	function handleChangePassword(event) {
		setErrPassw("");
		const target = event.target;
		const passwValue = target.value;
		setPassw(passwValue);
		if (target.validity.valid) {
			setErrPassw(target.validationMessage);
			setPasswValidation(true);
		}
	};
	// изменения почты
	function handleChangeEmail(event) {
		setErrEmail("");
		const target = event.target;
		const emailValue = target.value;
		setEmail(emailValue);
		setEmailValidation(true);
		if (target.validity.valid) {
			if (!standartEmail.test(emailValue)) {
				setEmailValidation(false);
				setErrEmail(messageEmail);
			}
		} else {
			setErrEmail(target.validationMessage);
			setEmailValidation(false);
		}
	};
	// отправка формы 
	function handleSubmit(event) {
		event.preventDefault();
		isLogin({
			email: email,
			password: passw,
		});
	}
	useEffect(() => {
		if (email && passw &&
			emailValidation && passwValidation) {
			setFormValue(true);
		} else {
			setFormValue(false);
		}
		// console.log(formValue);
	}, [email, passw, emailValidation, passwValidation]);
	return (
		<AuthorForm
			className="author-form"
			title="Рады видеть!"
			formName="login"
			text="Ещё не зарегистрированы?"
			textLink="Регистрация"
			textButton="Войти"
			link="/signup"
			isValid={formValue}
			onSubmit={handleSubmit}
		// block={block}
		>
			<label className="author-form__label">
				<div className="author-form__block">
					<div className="author-form__image-logo">
						{/* <img alt="Почта" src="https://static.igis-transport.ru/images/css/email.svg" /> */}
						<img className="author-form__image-email" alt="Почта" src={emailLogo} />
					</div>
					<div className="author-form__text">
						{/* <span className="author-form__span">
							E-mail
						</span> */}
						<input
							className="author-form__input"
							type="email"
							name="email"
							required
							id='login-email'
							value={email}
							onChange={handleChangeEmail}
							placeholder="Почта"
						// disabled={block}
						/>
						<span className="author-form__error-text">
							{errEmail}
						</span>
					</div>
				</div>
			</label>
			<label className="author-form__label">
				<div className="author-form__block">
					<div className="author-form__image-logo">
						<img className="author-form__image-email" alt="Почта" src={passwordLogo} />
					</div>
					<div className="author-form__text">
						{/* <span className="author-form__span">
							Пароль
						</span> */}
						<input
							className="author-form__input"
							type="password"
							id='login-password'
							name="password"
							required
							value={passw}
							onChange={handleChangePassword}
							placeholder="Пароль"
						// disabled={block}
						/>
						<span className="author-form__error-text">
							{errPassw}
						</span>
					</div>
				</div>
			</label>
		</AuthorForm>
	);
};
export default Login;
