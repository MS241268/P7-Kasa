import { NavLink } from "react-router-dom"
import '../css/home.css'
import housingsDataBase from '../data_files/logements.json'
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
			{ housingsDataBase.map ((housingData) => {
				return (
					<NavLink to = { `/products/${housingData.id}` }>
					<Cards key={ housingData.id } cover = { housingData.cover } title = { housingData.title }>
					</Cards>
					</NavLink>
				)
			})}
		</section>
	</main>
	)
}
export default Home