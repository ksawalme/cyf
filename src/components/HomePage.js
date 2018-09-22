import React from "react";


//import firebase from './firebase.js'
//import { Route, Switch } from 'react-router-dom';
//import SearchPage from './components/SearchPage';

import ImageGallery from './gallery/ImageGallery';
import logo from './images/logo.jpg';

const classNames = require('./App.css');

class HomePage extends React.Component {
  constructor() {
    super();
    //In React, components have state!
    //React state: If change, the component will be reloaded! (Interesting)
    this.state = {
      user: null,
      images: []
    };
  }


  render() {
   
    return (
      <div>
        <header className={classNames.appHeader}>
          <img src={logo} className={classNames.appLogo} alt="logo" />
          <h1 className={classNames.appTitle}>Khaled & Onneil & Justine</h1>
        </header>

        {/* <Link to="/search">
          <Button className="btn btn-lg btn-secondary">Go to Search</Button>
        </Link> */}


        <div className={classNames.appIntro}>
          <ImageGallery user={this.state.user} />
        </div>
      </div>

    );
  }
}



export default HomePage