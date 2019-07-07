import React, {Component} from 'react';

import './searchPanel.css'

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }
  onUpdateSearch(e){
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }
  render (){
    return (
      <input
        id="filter"
        className="shop__search-input"
        type="text"
        placeholder="start typing here..."
        onChange={this.onUpdateSearch}
      />
    )
  }
} 