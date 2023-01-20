import '../css/about.css'
import aboutBanner from '../images/banner_background_about.jpg'
import Collapse from "../components/collapse"
import aboutData from '../data_files/abouttext'

function About() {
	return (
	<main>
		<section className = "aboutBanner">
			<img src = { aboutBanner } alt = "un paysage montagneux"/>
			<div className = "aboutBannerBackGround"></div>
		</section>
		<section className = 'collapse_section-about'>
			<Collapse label = "Fiabilité" content = { aboutData.fiability }></Collapse>
			<Collapse label = "Respect" content = { aboutData.respect }></Collapse>
			<Collapse label = "Service" content = { aboutData.service }></Collapse>
			<Collapse label = "Responsabilité" content = { aboutData.security }></Collapse>
		</section>
	</main>
	)
}
export default About