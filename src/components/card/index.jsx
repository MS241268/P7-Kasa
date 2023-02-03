import './index.css'

function Cards({title, cover}) {
	return (
		<article className="cards_article">
			<img src={cover} alt ={title} className="cover_cards"/>
			<h2 className="title_cards">{title}</h2>
			<div className='backgroundCards'></div>
		</article>
)}
export default Cards