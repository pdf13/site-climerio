import React, { Component } from 'react';
import Flickity from 'flickity';
import '../node_modules/flickity/dist/flickity.css';
import './Slider.css';

class Slider extends Component {
	render() {
		return (
			<div className="carousel" data-flickity='{"cellAlign": "center"}'>
			  <div className="carousel-cell"></div>
			  <div className="carousel-cell"></div>
			  <div className="carousel-cell"></div>
			</div>
		)
	}
}

export default Slider;
