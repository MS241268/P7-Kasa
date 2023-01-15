import { useParams } from "react-router-dom"
import Collapse from "../components/collapse"
import lgtsDataBase from '../data_files/logements.json'
import '../css/housing.css'


function Housing() {
	const {productId} = useParams()
	const lgt =
	lgtsDataBase.find ((lgtData) =>
	lgtData.id === productId)
	
	const { title, location, rating, host, equipments, description, pictures} = lgt
	console.log(lgt)
	return (
		<main>
			<section className="slider">

			</section>

			<section className="information">
				<article>
					<h1>{ title }</h1>
					<p>{ location }</p>
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