import '../css/about.css'
import aboutBanner from '../assets/banner_background_about.jpg'
import Collapse from "../components/collapse"
import aboutData from '../datas/abouttext'

function About() {
	return (
	<main>
		<section className = "aboutBanner">
			<img src = { aboutBanner } alt = "un paysage montagneux"/>
			<div className = "aboutBannerBackGround"></div>
		</section>
		<section className = 'collapse_section-about'>
			<Collapse label = "Fiabilité" content = { <li>{ aboutData.fiability }</li> }></Collapse>
			<Collapse label = "Respect" content = { <li>{ aboutData.respect }</li> }></Collapse>
			<Collapse label = "Service" content = { <li>{ aboutData.service }</li> }></Collapse>
			<Collapse label = "Responsabilité" content = { <li>{ aboutData.security }</li> }></Collapse>
		</section>
	</main>
	)
}
export default About