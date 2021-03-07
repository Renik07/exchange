import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import Contacts from './Contacts/Contacts';
import Exchange from './Exchange/Exchange';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<Header />

				<div className="container">
					<main>

							<Switch>
								<Route exact path="/" component={Rate}/>
								<Route exact path="/contacts" component={Contacts}/>
								<Route exact path="/exchange" component={Exchange}/>
							</Switch>

						
						
    			</main>
				</div>

				<div className="container" id="cookie_info">
					<div className="site-content">
						<div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
							частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
							местоположения.&nbsp;
						</div>
					</div>
				</div>
				<Footer />
				
			</div>
		);
	}
  
}

export default App;
