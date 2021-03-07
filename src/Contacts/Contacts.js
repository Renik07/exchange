import React from 'react';
import './Contacts.css';

class Contacts extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="contacts">
				<h2 className="contacts-title">Контакты</h2>
				<p className="contacts-adress">г. Москва, Тверская 7</p>
				<a className="contacts-link" href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a>
				<a className="contacts-link" href="mailto:info@site.com">info@site.com</a>
				<iframe className="contacts-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.005193812067!2d37.608311315930735!3d55.75841198055482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a456ffd9027%3A0xaccb2fe99839b629!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgNywg0JzQvtGB0LrQstCwLCAxMjUwMDk!5e0!3m2!1sru!2sru!4v1615144698129!5m2!1sru!2sru" loading="lazy"></iframe>
			</div>
		);
	}
}

export default Contacts;