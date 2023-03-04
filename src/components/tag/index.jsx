import '../tag/index.css'

function Tags({tags}) {
	return (
		<ul className="tags_ul">
			{tags.map((tag, index) =>
			<li className='tags_li' key={index}>{tag}</li>)}
		</ul>
	)
}
export default Tags