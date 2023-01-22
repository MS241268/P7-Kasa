import { useState } from 'react'
import rightArrow from '../../images/right_arrow.svg'
import leftArrow from '../../images/left_arrow.svg'
import './index.css'

function Slider ({ slides }) {
	const [currentPicture, setCurrentPicture] = useState(0)
	console.log (currentPicture, 'longueur'+slides.length)
	const previousPicture = () => {
		setCurrentPicture (currentPicture !== 0 ? currentPicture - 1 : (slides.length-1))}//Condition si clic sur la flèche 'prévious' et 1ère image courante => Retour sur la dernière image
		console.log (currentPicture)
	const nextPicture = () => {
		setCurrentPicture (currentPicture !== (slides.length - 1) ? currentPicture + 1 : 0)//Condition si clic sur la flèche 'next' et dernière image courante => Retour sur la 1ère image
		console.log (currentPicture)
	}
	//console.log('slider:')
	return(
		<section className = "slider">
			<div className='backgroundSlider'></div>
			<div className = "picturesContainer">
				{slides.map ((picture, index) => (
					index === currentPicture && <img src =  { picture } alt = "Images du logement" key = { index } className = "picturesHousing" />
				))}
			</div>

			{ slides.length > 1 ? (
			<div className = 'arrow_navigate'>
				<img src= { leftArrow } onClick = {previousPicture} alt = 'Flèche gauche'/>
				<img src= { rightArrow } onClick = {nextPicture} alt = 'Flèche droite'/>
			</div>) : null}
			<div className='numberPicture'>{currentPicture}/{slides.length-1}</div>
		</section>
	)
}
export default Slider