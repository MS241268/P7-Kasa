import {useParams, Navigate} from "react-router-dom"
import Collapse from "../components/collapse"
import housingsDataBase from '../datas/logements.json'
import Tags from '../components/tag'
import Slider from '../components/slider'
import fullStar from '../assets/full_star.svg'
import emptyStar from '../assets/empty_star.svg'
import '../css/housing.css'

const stars= [1,2,3,4,5]

function Housing() {
	const {productId}= useParams()
	const housing=
	housingsDataBase.find ((housingData) =>
	housingData.id === productId)
	if (housing){//Test si le logement existe
		return (//Le logement existe
			<main>
				<Slider slides={housing.pictures}>
				</Slider>

				<section className="information_section">
					<article className="left_article">
						<h1>{housing.title}</h1>
						<p>{housing.location}</p>
						<ul className="tags_ul">
						{housing.tags.map((tag, index) =>
						(
							<Tags key={index} tags={tag}></Tags>
						)
						)}
						</ul>
					</article>

					<article className="right_article">
						<div className="host_div">
							<p className="host_name">{housing.host.name}</p>
							<img src={housing.host.picture} alt="Profil annonceur" className="picture"/>
						</div>

						<div className="rating_div">
							{ stars.map((level) =>
							housing.rating >= level ? (
								<img key={level.toString()}
								className="star"
								src={fullStar} alt="Etoile orange"/>
							) :
							(<img key={level.toString()}
								className="star"
								src={emptyStar} alt="Etoile grise"/>
							))}
						</div>
					</article>
				</section>

				<section className="housingDetails">
					<Collapse label="Description" content={<li>{housing.description}</li>}></Collapse>
					<Collapse label="Equipements" content={housing.equipments.map((equipments, index) =>
						(<li key={index}>
							{equipments}
						</li>))}>
					</Collapse>
				</section>
			</main>
		)}
			//Le logement n'existe pas
			return(
				<Navigate to="/404"></Navigate>)
	}
export default Housing