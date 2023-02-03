import {NavLink} from "react-router-dom"
import '../css/home.css'
import housingsDataBase from '../datas/logements.json'
import homeBanner from '../assets/banner_background_home.jpg'
import Cards from "../components/card/index"

function Home() {
	return (
	<main>
		<section className="homeBanner">
			<img src={homeBanner} alt="Forêt et rochers en bord de mer"/>
			<h1 className="titleBannerEffect">Chez vous, partout et ailleurs</h1>
			<div className="homeBannerBackGround"></div>
		</section>

		<section className="cards_section">
			{ housingsDataBase.map((housingData, index) => {
				return (
					<NavLink key={index} to={`/products/${housingData.id}`}>
					<Cards key={index} cover={housingData.cover} title={housingData.title}>
					</Cards>
					</NavLink>
				)
			})}
		</section>
	</main>
	)
}
export default Home