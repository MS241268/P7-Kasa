import { NavLink } from 'react-router-dom';

import './index.css';
import logo from '../../images/logo_kasa.svg'

function Header(){
	return (
		<header>
			<NavLink to="/" className= "logo_link_container">
				<img src={logo} alt = "Logo Kasa"   />
			</NavLink>
			<nav>
				<ul>
					<li><NavLink to="/">Accueil</NavLink></li>
					<li><NavLink to="/about">A propos</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}
export default Header;