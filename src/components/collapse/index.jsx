import { useState } from 'react'
import './index.css'
import downArrow from '../../assets/down_arrow_collapse.svg'
import upArrow from '../../assets/up_arrow_collapse.svg'

function Collapse (props) {
	const [open, setOpen] = useState(false)
	function toggle () {
		setOpen(!open)
	}
	return (
		<article className={open ? 'articleOpenedCollapse':'articleClosedCollapse'}>
			<button onClick = { toggle } className = 'btnCollapse'>
				<span>{ props.label }</span>
				<img src= { open ? upArrow : downArrow } alt = "" className='arrowCollapse'/>
			</button>
			{ open && (
				<ul className='ulCollapse'>
					{ props.content }
				</ul> 
			)}
		</article>
	)
}
export default Collapse