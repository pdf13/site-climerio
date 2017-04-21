import React, { Component } from 'react';

import './Home.css';
import factories from './factories';
import FolderList from './FolderList';
import Slider from './Slider';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="home__title">Vilaça representações</h1>
        {/* <Slider /> */}
        <FolderList items={factories} />
      </div>
    );
  }
}

export default Home;
