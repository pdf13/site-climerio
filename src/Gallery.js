import React, { Component } from 'react';

import 'lightcase/src/js/lightcase.js';
import 'lightcase/src/css/lightcase.css';

import './Galery.css';
import factories from './factories';

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.factory = factories[props.factory];
	}

	componentDidMount() {
		window.$('[data-rel=lightcase]').lightcase({
			swipe: true
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="gallery__title"> {this.factory.name} </h1>
				</div>
				<div className="row">
					{
						this.factory.photos.map((photo) => {
							const url = `/img/${this.factory.slug}/${photo}`;
							return (
								<div className="col-md-3" key={photo}>
									<a href={url} data-rel="lightcase" className="gallery__link">
										<img src={url} className="img-responsive gallery__img" alt=""/>
									</a>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Gallery;
