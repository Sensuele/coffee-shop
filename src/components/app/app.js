import React, {Component} from 'react';
import MainPage from '../mainPage';
import CoffeePage from '../coffeePage';
import PleasurePage from '../pleasurePage';
import ItemDetails from '../itemDetails';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GetService from '../../services/getService';
import Footer from '../footer';


export default class App extends Component {

  gotService = new GetService();
  

  render() {
    
    return (
      <Router>
        <div className="app">
          <Route path='/' exact component={MainPage} />
          <Route path='/coffeepage' exact component={CoffeePage} />
          <Route path='/pleasurepage' component={PleasurePage} />
          <Route path="/coffeepage/:id" component = {ItemDetails}/>
          <Footer />
        </div>
      </Router>
    );
  }
}