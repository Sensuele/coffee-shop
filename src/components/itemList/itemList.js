import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ItemList extends Component {

  state = {
    itemList: null,
    error: false
  }

  componentDidMount() {
      const {getData, name} = this.props;
      
      getData()
          .then( (itemList) => {
              this.setState({
                  itemList,
                  name            
              })
          })
  }

  renderCoffee(arr) {
    const {name} = this.state;     
    return arr.map((item,id) => {
      return (
        <div key = {id} className="shop__item"
          onClick={() => this.onRenderCoffee(item, name)}>													
          <img src={item.url} alt={item.name}/>
          <div className="shop__item-title">
            {item.name}
          </div>
          <div className="shop__item-country">
            {item.country}
          </div>
          <div className="shop__item-price">
            {item.price}
          </div>        
        </div>
      )
    })
  }

  onRenderCoffee = (item, name) => {
    if(name !== 'pleasurepage') {
      this.props.history.push(`/coffeePage/${item.name}`, item);
    }
  }

  render() {

    const {itemList} = this.state;

    
    if (!itemList) {
        return null
    }


    const item = this.renderCoffee(itemList);       
    
    return (
      <>
        {item}
      </>
    );
}


}

export default withRouter(ItemList);