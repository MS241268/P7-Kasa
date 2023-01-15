import { useParams } from "react-router-dom"
import Collapse from "../components/collapse"
import lgtsDataBase from '../data_files/logements.json'
import Tags from '../components/tag'
import '../css/housing.css'


function Housing() {
	const {productId} = useParams()
	const lgt =
	lgtsDataBase.find ((lgtData) =>
	lgtData.id === productId)
	
	const { title, location, rating, host, equipments, description, pictures} = lgt
	return (
		<main>
			<section className="slider">

			</section>

			<section className="information_section">
				<article>
					<h1>{ title }</h1>
					<p>{ location }</p>
					<ul className="tags_ul">
					{ lgt.tags.map ((tag, index) =>
					(
						<Tags key = { index } tags = { tag }></Tags>

					)
					)}
					</ul>
				</article>

				<article>
				<h1>{ title }</h1>
					<p>{ location }</p>					{/* <div>{ host }</div>
					<div> { rating }</div> */}
				</article>
			</section>

			<section className = "lgtDetails">
				<Collapse label = "Description" content = { description }></Collapse>
				<Collapse label = "Equipements" content = { equipments.map((equipments, index) =>
					(<li key = { index }>
						{ equipments }
					</li>))}>
				</Collapse>
			</section>
		</main>
	)
}
export default Housing