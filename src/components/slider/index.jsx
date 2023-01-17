import rightArrow from '../../images/right_arrow.svg'
import leftArrow from '../../images/left_arrow.svg'
import './index.css'

function Slider () {
	return(
		<section className = "slider">
			<div className = 'arrow_navigate'>
				<img src= { leftArrow } alt = 'Flèche gauche'/>
				<img src= { rightArrow } alt = 'Flèche droite'/>
			</div>

		</section>
	)
}
export default Slider