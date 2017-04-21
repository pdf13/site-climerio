import React, { Component } from 'react';
import { Link } from 'react-router';

import './FolderList.css';

class FolderList extends Component {
	render() {
		return (
			<ul className="row list-unstyled folder-list">
				{
					Object.values(this.props.items).map(({name, url}) => {
						return (
							<li className="col-md-3 text-center folder-list__item" key={ name }>
								<Link to={url} className="folder-list__link">
									<img src="/img/folder-gray.png" className="folder-list__icon" alt={ 'Pasta de fotos da' + name } />
									<p className="folder-list__label"> { name } </p>
								</Link>
							</li>
							)
					})
				}
			</ul>
		);
	}
}

export default FolderList;
