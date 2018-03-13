import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { connect } from 'react-redux';
// import { getProducts } from './actions/getProducts';
import Header from './containers/Header/Header';
import Routes from './containers/Routes/Routes';
import Footer from './containers/Footer/Footer';

import './css/bootstrap.min.css';
import './css/ionicons.min.css';
import './css/magnific-popup.css';
import './css/pe-icon-7-stroke.css';
import './css/royal_preloader.css';
import './css/style.css';
import jQuery from '.'

export default class App extends Component {
    componentWillMount(){
        document.body.classList.add("body-static-navbar")
    }
  render() {
    return (
        <div id = "body-static-navbar" className="body-static-navbar royal_preloader">
            <Header />
            <Routes />
            <Footer />
        </div>
    );
  }
}
//
// const mapStateToProps = (state) => {
//
//     return {
//
//     }
// };
//
// const mapStateToDispatch = {
//     getProducts
// };
//
// export default connect(mapStateToProps, mapStateToDispatch)(App);
// export default App
