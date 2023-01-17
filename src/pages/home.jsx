import { NavLink } from "react-router-dom"
import '../css/home.css'
import lgtsDataBase from '../data_files/logements.json'
import homeBanner from '../images/banner_background_home.jpg'
import Cards from "../components/card/index"

function Home() {
	return (
	<main>
		<section className = "homeBanner">
			<img src = { homeBanner } alt = "Forêt et rochers en bord de mer"/>
			<h1>Chez vous, partout et ailleurs</h1>
			<div className = "homeBannerBackGround"></div>

		</section>

		<section className="cards_section">
			{ lgtsDataBase.map ((lgtData) => {
				return (
					<NavLink to = { `/products/${lgtData.id}` }>
					<Cards key={ lgtData.id } cover = { lgtData.cover } title = { lgtData.title }>
					</Cards>
					</NavLink>
				)
			})}
		</section>
	</main>
	)
}
export default Home