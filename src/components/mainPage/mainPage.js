import React, {Component} from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';
import './mainPage.css';
import ItemList from '../itemList';
import GetService from '../../services/getService';


export default class MainPage extends Component {


	service = new GetService();


  render() {

    return(
    <>
    	<div className="preview">
        <div className="container">
					<div className="row">
						<div className="col-lg-6">
							<Header />
						</div>
					</div>
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<h1 className="title-big">Everything You Love About Coffee</h1>
							<img className="beanslogo" src="img/logo/Beans_logo.svg" alt="Beans logo"/>
							<div className="preview__subtitle">We makes every day full of energy and taste</div>
							<div className="preview__subtitle">Want to try our beans?</div>
							<Link to='/coffeepage' className="preview__btn">More</Link>
						</div>
					</div>
        </div>
        </div>
        <section className="about">
        <div className="container">
        	<div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="title">About Us</div>
                <img className="beanslogo" src="img/logo/Beans_logo_dark.svg" alt="Beans logo"/>
								<div className="about__text">
									Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
									Afraid at highly months do things on at. Situation recommend objection do intention
									so questions. As greatly removed calling pleased improve an. Last ask him cold feel
									met spot shy want. Children me laughing we prospect answered followed. At it went
									is song that held help face.<br/><br/>

									Now residence dashwoods she excellent you. Shade being under his bed her, Much
									read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
									horrible but confined day end marriage. Eagerness furniture set preserved far
									recommend. Did even but nor are most gave hope. Secure active living depend son
									repair day ladies now.
								</div>
							</div>
						</div>
					</div>
      </section>
      <section className="best">
        <div className="container">
            <div className="title">Our best</div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="best__wrapper">
						<ItemList getData = {this.service.getBestItems} />
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
	</>
    )
  }
} 