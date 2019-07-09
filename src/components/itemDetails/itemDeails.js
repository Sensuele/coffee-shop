import React, {Component} from 'react';
import './itemDetails.css';
import Header from '../header';




export default class ItemDetails extends Component {

 

  render() {

    const arr = this.props.location.state;
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
                <div className="col-lg-5 offset-1">
                    <img className="shop__girl" src={arr.url} alt="coffee_item"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About it</div>
                    <img className="beanslogo" src= {process.env.PUBLIC_URL + `/img/logo/Beans_logo_dark.svg`} alt="Beans logo"/>
                    <div className="shop__point">
                        <span>Country:</span>
                        {arr.country}
                    </div>
                    <div className="shop__point">
                        <span>Description:</span>
                        {arr.description}
                    </div>
                    <div className="shop__point">
                        <span>Price:</span>
                        <span className="shop__point-price">{arr.price}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </>
    )
  }
}