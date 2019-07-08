import React, {Component} from 'react';
import Header from '../header';
import './coffeePage.css';
import ItemList from '../itemList';
import GetService from '../../services/getService';
import SearchPanel from '../searchPanel';


export default class CoffeePage extends Component {

    constructor(props) {
        super(props);
            this.state = {
                term:'',
                filter: '',
                loading: true
            }
            this.onUpdateSearch = this.onUpdateSearch.bind(this);
            this.onUpdateFilter = this.onUpdateFilter.bind(this);
    };

    onUpdateSearch(term) {
        this.setState({term})
    }

    onUpdateFilter(country) {
        this.setState(
            {filter: country}
            )
    }

	service = new GetService();

	render() {

    return(
      <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <Header />
            </div>
          </div>
          <h1 className="title-big">Our Coffee</h1>
        </div>
      </div>

    	<section className="shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src="img/logo/Beans_logo_dark.svg" alt="Beans logo"/>
                    <div className="shop__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                        so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <SearchPanel
                            onUpdateSearch={this.onUpdateSearch}
                        />
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                        <button className="shop__filter-btn"
                                onClick = {() => this.onUpdateFilter('Brazil')}
                            >Brazil</button>
                            <button className="shop__filter-btn"
                                onClick = {() => this.onUpdateFilter('Kenya')}
                            >Kenya</button>
                            <button className="shop__filter-btn"
                                onClick = {() => this.onUpdateFilter('Columbia')}
                            >Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        <ItemList 
                        getData = {this.service.getShop}
                        term = {this.state.term}
                        filter = {this.state.filter}
                        />                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
  }
} 
