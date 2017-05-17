import React, { Component } from 'react';
import FilterInput from '../components/FilterInput';
import NewPlaylist from '../components/NewPlaylist';


export default class NewPlaylistContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      disabled: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({inputValue: e.target.value})
    const length = this.state.inputValue.length;
    if(length < 16 && length > -1) {
      this.state.disabled = false;
    } else {
      this.state.disabled = true;
    }
    }

  handleSubmit(e) {
    console.log(this.state.inputValue);
    e.preventDefault();
    this.setState({inputValue: ''});
  }

  render () {
    return (
      <div>
        <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputValue={this.state.inputValue} disabled={this.state.disabled}/>
      </div>
    )
  }
}
