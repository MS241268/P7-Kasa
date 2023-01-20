import rightArrow from '../../images/right_arrow.svg'
import leftArrow from '../../images/left_arrow.svg'
import './index.css'

function Slider ({ slides }) {
	//console.log('slider:')
	return(
		<section className = "slider">
			{ slides.length > 1 ? (
			<div className = 'arrow_navigate'>
				<img src= { leftArrow } alt = 'Flèche gauche'/>
				<img src= { rightArrow } alt = 'Flèche droite'/>
			</div>) : null}
		</section>
	)
}
export default Slider