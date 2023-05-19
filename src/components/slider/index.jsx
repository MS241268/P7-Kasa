import {useCallback, useState, useEffect} from 'react'
import rightArrow from '../../assets/right_arrow.svg'
import leftArrow from '../../assets/left_arrow.svg'
import './index.css'

function Slider({slides}) {
	const [currentPicture, setCurrentPicture]= useState(0)

	const previousPicture=() => {
		setCurrentPicture (currentPicture !== 0 ? currentPicture - 1 : (slides.length-1))}/*Condition si clic sur la flèche 'previous' et 1ère image courante => Retour sur la dernière image*/

	const nextPicture = useCallback(() => {
		setCurrentPicture (currentPicture !== (slides.length - 1) ? currentPicture + 1 : 0)},/*Condition si clic sur la flèche 'next' et dernière image courante => Retour sur la 1ère image*/
		[currentPicture,slides.length])//Déclaration des dépendances : servent à observer les arguments pour lesquels la fonction doit s'exécuter
	
	//Timer slider automatique
	useEffect(() => {
		if (slides.length > 1){
			const interval = setInterval(() => {
				nextPicture(currentPicture,slides.length)
			},5000)
			return () => {
				clearInterval(interval)
			}
		}
	},[currentPicture, nextPicture, slides.length])//Facultatif car les dépendences "[...]" sont déjà dans la fonction "nextPicture"

	return (
		<section className="slider">
			<div className='backgroundSlider'></div>
			<div className="picturesContainer" style={{transform:`translateX(-${currentPicture * 100}%)`}}>
				{slides.map((picture, index) => (
					<img src={picture} alt={`Présentation  ${index+1} sur ${slides.length} du logement`} key={index} className="picturesHousing"/>
				))}
			</div>

			{slides.length > 1 ? (
			<div className='arrow_navigate'>
				<img src= {leftArrow} onClick={previousPicture} alt='Flèche gauche'/>
				<img src= {rightArrow} onClick={nextPicture} alt='Flèche droite'/>
			</div>) : null}
			<div className='numberPicture'>{currentPicture + 1 }/{slides.length}</div>
		</section>
	)
}
export default Slider