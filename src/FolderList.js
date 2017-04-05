import React, { Component } from 'react';
import folder from './img/folder-photo.png';
import './FolderList.css';

class FolderList extends Component {
	render() {
		return (
			<ul className="row list-unstyled">
				{
					this.props.items.map((i) => {
						return (
							<li className="col-md-3 text-center" key={ i }>
								<a href="">
									<img src={folder} className="folder__icon" alt={ 'Pasta de fotos da' + i } />
									<p> { i } </p>
								</a>
							</li>
							)
					})
				}
			</ul>
		);
	}
}

export default FolderList;
