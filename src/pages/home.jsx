import { NavLink } from "react-router-dom"
import '../css/home.css'
import homeBanner from '../images/banner_background_home.jpg'

function Home() {
	return (
	<main>
		<section className = "homeBanner">
			<img src = { homeBanner } alt = ""/>
			<h1>Chez vous, partout et ailleurs</h1>
			<div className = "homeBackGround"></div>
		</section>
			<h3><NavLink to="products/:productId">Le 1er produit</NavLink></h3>
	</main>
	)
}
export default Home