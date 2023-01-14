import Collapse from "../components/collapse"
import Datas from '../data_files/logements.json'
import '../css/housing.css'


function Housing() {
	return(
		<main>
			<section className="lgtDetails">
				<Collapse label = "Description"></Collapse>
				<Collapse label = "Equipements"></Collapse>
			</section>
		</main>
	)
}
export default Housing