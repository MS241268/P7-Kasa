import '../tag/index.css'

function Tags ({tags}) {
	console.log(tags)
	return (
		// <ul className = 'tags_ul'>
			<li className='tags_li'>{ tags }</li>
		// </ul>
	)
}
export default Tags