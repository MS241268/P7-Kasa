import {useState} from 'react'
import './index.css'
import downArrow from '../../assets/down_arrow_collapse.svg'

function Collapse (props) {
	const [open, setOpen]=useState(false)
	function toggle() {
		setOpen(!open)
	}
	return (
		<article className='articleCollapse'>
			<button onClick={toggle} className='btnCollapse'>
				<span>{props.label}</span>
				<img src= {downArrow} alt="Ouverture ou fermeture de l'élément" className={open ? 'arrowCollapseRotate' : 'arrowCollapse'}/>
			</button>
			{open && (
				Array.isArray(props.content) ? //Le contenu est il un tableau ?
				<ul className='collapseContent'> {//Le contenu est un tableau
					props.content.map((equipments, index) =>
					(<li key={index}>
						{equipments}
					</li>))}
				</ul> 
				: <p className='collapseContent'>{props.content}</p>//Le contenu n'est pas un tableau
			)}
		</article>
	)
}
export default Collapse