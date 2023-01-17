import { useParams } from "react-router-dom"
import Collapse from "../components/collapse"
import lgtsDataBase from '../data_files/logements.json'
import Tags from '../components/tag'
import Slider from '../components/slider'
import fullStar from '../images/full_star.svg'
import emptyStar from '../images/empty_star.svg'
import '../css/housing.css'

const stars = [1,2,3,4,5]

function Housing() {
	const {productId} = useParams()
	const lgt =
	lgtsDataBase.find ((lgtData) =>
	lgtData.id === productId)
	
	const { title, location, equipments, description} = lgt

	return (
		<main>
			<Slider></Slider>

			<section className="information_section">
				<article className="left_article">
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

				<article className = "right_article">
					
					<div className = "host_div">
						
						<div className = "host_name">{ lgt.host.name }</div>
						<img src = { lgt.host.picture } alt = "Profil annonceur" className = "picture"/>
					</div>

					<div className= "rating_div">
						{ stars.map ((level) =>
						lgt.rating >= level ? (
							<img key = { level.toString() }
							className = "star"
							src = { fullStar } alt = "Etoile orange"/>
						) :
						(<img key = { level.toString() }
							className = "star"
							src = { emptyStar} alt = "Etoile grise"/>
						))}
					</div>
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