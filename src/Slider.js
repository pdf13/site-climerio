import React, { Component } from 'react';
import Flickity from 'flickity-bg-lazyload';
import '../node_modules/flickity/dist/flickity.css';
import './Slider.css';

class Slider extends Component {
	render() {
		return (
			<div className="carousel" data-flickity='{
				"cellAlign": "center",
				"wrapAround": true,
				"autoPlay": true,
				"bgLazyLoad": true
			}'>
				<div className="carousel-cell" data-flickity-bg-lazyload="/img/boca-da-mata/[boca-da-mata]-AdegaMoser.jpg"></div>
				<div className="carousel-cell" data-flickity-bg-lazyload="/img/boca-da-mata/[boca-da-mata]-AparadorCaixadeEspelho.jpg"></div>
			</div>
		)
	}
}

export default Slider;
