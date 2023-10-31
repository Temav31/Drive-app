import { useEffect, useState } from 'react';
import {
	Route,
	Routes,
	useNavigate,
	Navigate,
	useLocation,
	Router
} from 'react-router-dom';
import './App.css';
// импорт страниц
import Login from "../Login/Login"
import Register from "../Register/Register"

function App() {
	// регистрация
	function handleRegister(data) {
		console.log(data);
	}
	// авторизация
	function handleLogin(dataLog) {
		console.log(dataLog);
	}
	return (
		<div className="page">
			<Routes>
				<Route
					path="/signin"
					// element={authoriz ? <Navigate to="/" /> : <Login isLogin={handleLogin} block={formBlock} />}
					element={<Login isLogin={handleLogin} />}
				/>
				<Route
					path="/signup"
					// element={authoriz ? <Navigate to="/" /> : <Register isRegister={handleRegister} block={formBlock} />}
					element={<Register isRegister={handleRegister} />}
				/>

				<Route
					path="/"
					element={
						<dev>Начальная страница</dev>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
