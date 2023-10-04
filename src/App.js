import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

function Header() {
	return (
		<>
			<h1>React Project Menu</h1>
		</>
	);
}

function Main() {
	return <Pizza />;
}

function Footer() {
	return (
		<footer>
			{new Date().toLocaleTimeString()} .We'are open at this moment{" "}
		</footer>
	);
}

function Pizza() {
	return (
		<>
			<h3>Pizza Name</h3>
			<p>loreem loreemloreemloreemloreemloreemloreemloreem loreem loreem </p>
			<img src='pizzas/focaccia.jpg' alt='pizza' />
		</>
	);
}
export default App;
