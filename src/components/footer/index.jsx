import './index.css';
import logo from '../../images/logo_footer.svg'

function Footer() {
	const instantYear = new Date().getFullYear();
	return (
		<footer>
			<img src = {logo} alt = "Logo Kasa"/>
			<p>© {instantYear} Kasa. All rights reserved</p>
		</footer>
	)
}
export default Footer