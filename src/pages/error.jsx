import { NavLink } from "react-router-dom"
import '../css/error.css'

function Error() {
	return (
	<main className="errorPage">
		<h1>404</h1>
		<h2>Oups! La page que vous demandez n'existe pas.</h2>
		<p><NavLink to="/">Retourner sur la page d’accueil</NavLink></p>
	</main>
	)
}
export default Error