import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="header-nav">
				<div className="container">
					<nav>
						<ul>
							<li><Link to="/">Главная</Link></li>
							<li><Link to="/exchange">Пункты обмена</Link></li>
							<li><Link to="/contacts">Контакты</Link></li>
						</ul>
					</nav>
				</div>
			</div>
				
		);
	}
}

export default Nav;