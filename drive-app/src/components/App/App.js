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
import Main from "../Main/Main"
import Navigator from "../Navigator/Navigator"
import Profile from "../Profile/Profile"
import Info from "../Info/Info"


// авторизация
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
	const [isLogin, setLogin] = useState(false);
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
					element={
						<Login
							isLogin={handleLogin}
						/>
					}
				/>
				<Route
					path="/signup"
					// element={authoriz ? <Navigate to="/" /> : <Register isRegister={handleRegister} block={formBlock} />}
					element={
						<Register
							isRegister={handleRegister}
						/>
					}
				/>
				<Route
					path="/"
					element={<Main
						isLogin={true}
					/>}
				/>
				<Route
					path="/navigatore"
					// element={authoriz ? <Navigate to="/" /> : <Register isRegister={handleRegister} block={formBlock} />}
					element={
						<Navigator
							isRegister={handleRegister}
							isLogin={true}
						/>
					}
				/>
				<Route
					path="/info"
					// element={authoriz ? <Navigate to="/" /> : <Register isRegister={handleRegister} block={formBlock} />}
					element={
						<Info
							isRegister={handleRegister}
							isLogin={true}
						/>
					}
				/>
				<Route
					path="/profile"
					element={
						<Profile />
						// <ProtectedRoute
						// isLogin = { true}
						// isLogin={authoriz}
						// element={Profile}
						// isExite={handleExit}
						// onUpdateUser={handleUpdateUser}
						// block={formBlock}
						// />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
