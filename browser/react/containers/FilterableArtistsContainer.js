import React, { Component } from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';


export default class FilterableArtistsContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
      this.setState({inputValue: e.target.value})
    }

  render () {
    const inputValue = this.state.inputValue;
    const returnedArtists = this.props.artists.filter(artist =>
    artist.name.toLowerCase().match(inputValue));

    return (
      <div>
        <FilterInput handleChange={this.handleChange}/>
        <Artists artists={returnedArtists}/>
      </div>
    )
  }
}
